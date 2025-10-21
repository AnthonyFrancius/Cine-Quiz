import { createHashRouter } from "react-router-dom";
import App from "./App.tsx";

export const router = createHashRouter([{ path: "/", element: <App /> }]);
