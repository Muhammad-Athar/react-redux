import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Products from "./features/products/Products";
import Main from "./pages/Main";

export default function App() {
    return (
        <div className="bg-slate-200 h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/product-details" element={<Products />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
