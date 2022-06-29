import Home from "pages/Home/home"
import Login from "pages/Login/login"
import { Route, Routes } from "react-router-dom"
import { RoutesPath } from "types/routes"

const Router = () => {
    return (
        <Routes>
            <Route path={RoutesPath.HOME} element={<Home />} />
            <Route path={RoutesPath.LOGIN} element={<Login />} />
        </Routes>
    )
}

export default Router