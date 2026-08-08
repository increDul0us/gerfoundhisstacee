import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lavender-50 px-6">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-lavender-400">404</h1>
        <p className="mt-4 text-lg text-gray-600">This page doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-400 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-lavender-500"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
