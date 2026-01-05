import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Toaster } from "react-hot-toast";
export default function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Toaster, { position: "bottom-right", reverseOrder: false }), _jsx(RouterProvider, { router: router })] }));
}
