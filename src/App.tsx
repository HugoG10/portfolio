import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Resume } from "./pages/Resume";
import { NotFound } from "./pages/NotFound";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <ScrollManager />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
