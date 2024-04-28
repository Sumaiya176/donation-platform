import { ReactNode } from "react";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRoute } from "../redux/features/auth/redirectRouteSlice";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const prevLocation = useLocation();
  console.log(prevLocation);

  const dispatch = useDispatch();
  dispatch(getRoute({ route: prevLocation.pathname }));

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoutes;
