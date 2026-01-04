import { PageHome, PageAbout, PageDestination, PageContact } from "@/components/pages";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/templates/layout/main-layout";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/destination" element={<PageDestination />} />
                <Route path="/contact" element={<PageContact />} />
            </Route>
        </Routes>
    );
}

export default App;
