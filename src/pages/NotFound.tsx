import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4" style={{ color: 'var(--text-1)' }}>404</h1>
        <p className="text-xl mb-4" style={{ color: 'var(--text-2)' }}>Oops! Page not found</p>
        <a href="/" className="underline" style={{ color: 'var(--accent-2)' }}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
