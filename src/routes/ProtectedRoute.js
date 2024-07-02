import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // const user = useSelector((state) => state.user);
    let location = useLocation();
    const data =false

    if(!data) {
        return <Navigate to="/admin/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;