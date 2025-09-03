import Site from "./site/Site";
import BusinessCard from "./businness-card/BusinnessCard";
import "../index.css";
import { ThemeProvider } from "./Theme";

export default function App() {
    const content = (
        <>
            <Site />
            <BusinessCard />
        </>
    );
    if (typeof window !== "undefined") {
        return (
            <ThemeProvider defaultTheme="system" storageKey="site-ui-theme">
                {content}
            </ThemeProvider>
        );
    } else {
        return content;
    }
}
