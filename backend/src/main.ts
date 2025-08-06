import express from "express";
import { Request, Response, NextFunction, json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { messageSchema } from "./message.js";
import { send } from "./mailer.js";
import { ZodError } from "zod";
import { Answer } from "./answer.js";
import { logger } from "./logger.js";
import { StatusCodes } from "http-status-codes";

function serverHttpLog(request: Request, _response: Response, next: NextFunction): void {
    logger.http(`${request.ip} - ${request.method} - ${request.originalUrl}`);
    next();
}

function serverErrorLog(error: unknown, _request: Request, _response: Response, _next: NextFunction): void {
    logger.error(error instanceof Error && error.stack ? error.stack : String(error));
}

async function sendMail(request: Request, response: Response<Answer>, next: NextFunction): Promise<void> {
    try {
        const message = messageSchema.parse(request.body);
        await send(message);
        response.status(StatusCodes.OK).send({ message: "Message sent successfully.", error: false });
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            response.status(StatusCodes.BAD_REQUEST).send({
                error: true,
                message: error.issues.map((error) => error.message).join(" "),
            });
        } else {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: true, message: "Unknown error." });
        }
        next(error);
    }
}

function main() {
    process.title = "contact-backend";
    const app = express();
    const port = 4000;
    app.use(json());
    app.use(cors());
    app.use(cookieParser());
    app.use(serverHttpLog);
    app.route("/message").post(sendMail);
    app.use(serverErrorLog);
    const server = app.listen(port);
    server.on("error", (error) => {
        logger.error(error);
    });
    logger.info(`Server "${process.title}" started successfully on port ${port} on PID ${process.pid}.`);
}

main();
