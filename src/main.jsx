import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/system";
import Login from "./pages/auth/Login.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Mountain from "./pages/mountain/Mountain.jsx";
import TourGuide from "./pages/tour-guide/TourGuide.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/mountain", element: <Mountain /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/tour-guide", element: <TourGuide /> },
  { path: "*", element: <div>Not Found</div> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </NextUIProvider>
  </StrictMode>
);
