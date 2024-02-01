import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <main className="px-10 py-2 overflow-y-none">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default AppLayout;
