import { isLoggedIn } from "../../data/users";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await isLoggedIn();
        setUser(userData);
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Show loading while checking authentication
  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  // Check authentication and admin status
  if (!user) {
    return <Navigate to="/form/login" replace />;
  }

  if (!user?.isshopadmin) {
    return <Navigate to="/" replace />;
  }

  // User is authenticated and is admin
  return children;
}
