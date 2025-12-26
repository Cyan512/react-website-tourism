import { Outlet } from 'react-router-dom'
import Header from "@/components/organisms/header/header";
import Footer from "@/components/organisms/footer/footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
