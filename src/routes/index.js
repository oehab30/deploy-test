import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/layout/Layout";
import { Loader2 } from "lucide-react";
// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const Favourite = lazy(() => import("../pages/Favourite"));
const ErrorPage = lazy(() => import("../pages/Error"));
// Added missing imports below:
// Global Loading Component
const PageLoader = () => (_jsx("div", { className: "h-screen w-full flex items-center justify-center bg-white dark:bg-[#0a0a0a]", children: _jsx(Loader2, { className: "w-10 h-10 text-orange-500 animate-spin" }) }));
export const router = createBrowserRouter([
    {
        element: (
        // Best Practice: Wrap the Layout in Suspense so all children use it
        _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(Layout, {}) })),
        children: [
            {
                path: "/",
                element: _jsx(Home, {})
            },
            {
                path: "/Favourite", // Added this as you had the import but no route
                element: _jsx(Favourite, {})
            },
        ],
    },
    {
        path: "*",
        element: (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(ErrorPage, {}) }))
    },
]);
function Routes() {
    return _jsx(RouterProvider, { router: router });
}
export default Routes;
