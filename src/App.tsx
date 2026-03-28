import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import ProjectsShowcase from "./pages/ProjectsShowcase";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/projects" element={<ProjectsShowcase />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/home" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
