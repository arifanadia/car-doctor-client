import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div>
            <progress className="progress progress-error w-56" value={0} max="100"></progress>
            <progress className="progress progress-error w-56" value="10" max="100"></progress>
            <progress className="progress progress-error w-56" value="40" max="100"></progress>
            <progress className="progress progress-error w-56" value="70" max="100"></progress>
            <progress className="progress progress-error w-56" value="100" max="100"></progress>
        </div>

    }
    if (user?.email) {
        return children
    }



    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;