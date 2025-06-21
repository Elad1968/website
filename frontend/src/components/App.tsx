import { useEffect, useState } from "react";
import Site from "./site/Site";
import BusinessCard from "./businness-card/BusinnessCard";
import { general } from "@/lib/data";

const small = 256;

export default function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        document.title = `${general.name}'s website`;
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
    }, []);
    return (screenWidth < small && <BusinessCard />) || <Site />;
}
