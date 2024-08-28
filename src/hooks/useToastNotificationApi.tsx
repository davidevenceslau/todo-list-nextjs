import { ApiResponse } from "@/api/types";
import { useEffect, useState } from "react";
import { toast, ToastOptions } from "react-toastify";

export const enum TypeToSenderToastNotificationApi {
  SUCCESS = "success",
  ERROR = "error",
  ALL = "all", // "success" and "error"
}

export const autoCloseTimeMs = 5000;

export function useToastNotificationApi(
  state: ApiResponse,
  typeToSender?:
    | TypeToSenderToastNotificationApi.SUCCESS
    | TypeToSenderToastNotificationApi.ERROR
    | TypeToSenderToastNotificationApi.ALL,
) {
  const [sendedToastNotification, setSendedToastNotification] = useState(false);

  const getType = () => {
    const type = state.success ? "success" : "error";
    return type as ToastType;
  };

  const sendToastNotificationToast = () => {
    const message = state.message;
    const mode = "light";
    const toastOptions: ToastOptions = {
      position: "top-right",
      autoClose: autoCloseTimeMs,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: mode,
    };

    if (
      state.success &&
      (!typeToSender ||
        typeToSender === TypeToSenderToastNotificationApi.SUCCESS ||
        typeToSender === TypeToSenderToastNotificationApi.ALL)
    ) {
      toast.success(message, toastOptions);
      setSendedToastNotification(true);
    } else if (
      !state.success &&
      (!typeToSender ||
        typeToSender === TypeToSenderToastNotificationApi.ERROR ||
        typeToSender === TypeToSenderToastNotificationApi.ALL)
    ) {
      toast.error(message, toastOptions);
      setSendedToastNotification(true);
    }
  };

  useEffect(() => {
    if (state.message) {
      sendToastNotificationToast();
    }
  }, [state]);

  useEffect(() => {
    if (sendedToastNotification) {
      setSendedToastNotification(false);
    }
  }, [sendedToastNotification]);

  return {
    sendedToastNotification,
    message: state.message,
    type: getType(),
  };
}
