import { Route, Routes } from "react-router-dom";
import { Layout } from "../pages/layout/layout";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Technologies } from "../pages/technologies";
import { Projects } from "../pages/projects";
import { NotFound } from "../pages/notFound";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tech" element={<Technologies />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
