import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default Private;
