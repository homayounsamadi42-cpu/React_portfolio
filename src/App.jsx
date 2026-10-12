
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));

      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function NotFound() {
  const { isDark } = useTheme();

  return (
    <main
      className={`min-h-screen px-4 pt-40 text-center transition-colors duration-300 ${
        isDark
          ? "bg-neutral-950 text-white"
          : "bg-neutral-50 text-neutral-950"
      }`}
    >
      <h1 className="text-6xl font-semibold">404</h1>

      <p
        className={`mt-4 ${
          isDark ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        This page doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block text-blue-500 transition-colors hover:text-blue-400"
      >
        Back to home
      </Link>
    </main>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}