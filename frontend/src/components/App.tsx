import Site from "./site/Site";
import BusinessCard from "./businness-card/BusinnessCard";
import "../index.css";
import { ThemeProvider } from "./theme";

export default function App() {
    const content = (
        <>
            <Site />
            <BusinessCard />
        </>
    );
    if (typeof window !== "undefined") {
        return (
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {content}
            </ThemeProvider>
        );
    } else {
        return content;
    }
}
