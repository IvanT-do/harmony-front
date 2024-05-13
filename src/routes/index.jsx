import {lazy} from "react";
import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: PageTemplate,
        children: [
            {
                path: "",
                Component: lazy(() => import("./Main")),
            },
            {
                path: "about",
                Component: lazy(() => import("./About")),
            },
            {
                path: "employee",
                Component: lazy(() => import("./Employee")),
            },
            {
                path: "services",
                Component: lazy(() => import("./Services")),
            },
            {
                path: "contacts",
                Component: lazy(() => import("./Contacts")),
            },
        ]
    }
]);

export default router;