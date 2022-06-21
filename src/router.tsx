import Home from "pages/Home/home"
import { Route, Routes } from "react-router-dom"
import { RoutesPath } from "types/routes"

const Router = () => {
    return (
        <Routes>
            <Route path={RoutesPath.HOME} element={<Home />} />
        </Routes>
    )
}

export default Router