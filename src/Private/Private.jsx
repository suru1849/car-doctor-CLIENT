import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="max-w-screen-2xl flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
};

export default Private;
