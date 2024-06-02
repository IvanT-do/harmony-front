import {lazy} from "react";
import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/index.jsx";

import {mainLoader} from "./Main/loader.js";
import {aboutLoader} from "./About/loader.js";
import {expertLoader} from "./Employee/loader.js";

const router = createBrowserRouter([
    {
        path: "/",
        Component: PageTemplate,
        children: [
            {
                path: "",
                Component: lazy(() => import("./Main")),
                loader: mainLoader
            },
            {
                path: "about",
                Component: lazy(() => import("./About")),
                loader: aboutLoader
            },
            {
                path: "employee",
                Component: lazy(() => import("./Employee")),
                loader: expertLoader
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