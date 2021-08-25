import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
import { useSelector } from "react-redux"
import { selectemail } from "./features/user/userSlice"
export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth()
// This is for private rout means when user is not login take user to private rout
const u=useSelector(selectemail);
console.log(u);
  return (
    <Route
      {...rest}
      render={props => {
        return u ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
