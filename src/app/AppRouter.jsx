import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import Destinations from "../pages/Destinations.jsx";
import Booking from "../pages/Booking.jsx";
import NotFound from "../pages/NotFound.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Layout() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    return (
        <>
            {!isHome && <Header />}
            <main style={{ minHeight: "70vh" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/booking/:id" element={<Booking />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            {!isHome && <Footer />}
        </>
    );
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}
