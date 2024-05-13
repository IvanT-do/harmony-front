import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../components/PageTemplate/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: PageTemplate,
        children: [
            {
                path: "",
                element: <div>fjhgdskjifs</div>,
            },
        ]
    }
]);

export default router;