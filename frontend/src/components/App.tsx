import Site from "./site/Site";
import BusinessCard from "./businness-card/BusinnessCard";
import "../index.css";
import { ThemeProvider } from "./theme";

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Site />
            <BusinessCard />
        </ThemeProvider>
    );
}
