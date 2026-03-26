import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Chat from "./chat";
import Voice from "./voice";
import { chatLoader } from "../loaders/chatLoader";
import { chatAction } from "../actions/chatAction";

/**
 * Central router configuration using the Data Router pattern.
 * Defines the application's route structure, loaders, and actions.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Welcome! Click Chat or Voice to begin.</div>,
      },
      {
        path: "chat",
        element: <Chat />,
        loader: chatLoader,
        action: chatAction,
      },
      {
        path: "voice",
        element: <Voice />,
      },
    ],
  },
]);