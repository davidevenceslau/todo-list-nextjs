import { useEffect } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import { ToastType } from "./types";
import "react-toastify/dist/ReactToastify.css";

type ToastNotificationProps = {
  message: string;
  mode?: "light" | "dark";
  type: ToastType;
  send: boolean;
  timeMs?: number;
};

export function ToastNotification({
  message,
  mode = "light",
  type,
  send,
  timeMs = 3000,
}: ToastNotificationProps) {
  const showToast = () => {
    const toastOptions: ToastOptions = {
      position: "top-right",
      autoClose: timeMs,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: mode,
    };

    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      case "warning":
        toast.warning(message, toastOptions);
        break;
      case "info":
        toast.info(message, toastOptions);
        break;
      default:
        toast(message, toastOptions);
        break;
    }
  };

  useEffect(() => {
    if (send) {
      showToast();
    }
  }, [send]);

  return <ToastContainer />;
}
