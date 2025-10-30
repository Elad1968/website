import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

export default function Site() {
    return (
        <div
            className="flex flex-col p-0 m-0 w-screen min-h-screen bg-orange-800 max-[256px]:hidden"
            onDragStart={(event) => {
                event.preventDefault();
            }}
        >
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
