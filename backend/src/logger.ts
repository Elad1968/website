import { createLogger, format, transports } from "winston";

export const logger = createLogger({
    level: "http",
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] - ${level.toUpperCase()} - ${message}`;
        })
    ),
    transports: new transports.File({ filename: "logs/contact.log" }),
});
