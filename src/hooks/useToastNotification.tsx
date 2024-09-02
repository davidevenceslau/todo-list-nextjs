import { useEffect, useState } from "react";
import { toast, ToastOptions } from "react-toastify";

export const enum TypeToSenderToastNotification {
  SUCCESS = "success",
  ERROR = "error",
  ALL = "all", // "success" and "error"
}

export const autoCloseTimeMs = 3000;

export function useToastNotification(
  response: TodoListActionResponse | undefined,
  typeToSender?:
    | TypeToSenderToastNotification.SUCCESS
    | TypeToSenderToastNotification.ERROR
    | TypeToSenderToastNotification.ALL,
) {
  const [sendedToastNotification, setSendedToastNotification] = useState(false);

  const getType = () => {
    const type = response?.success ? "success" : "error";
    return type as ToastType;
  };

  const sendToastNotificationToast = () => {
    const message = response?.message;
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
      response?.success &&
      (!typeToSender ||
        typeToSender === TypeToSenderToastNotification.SUCCESS ||
        typeToSender === TypeToSenderToastNotification.ALL)
    ) {
      toast.success(message, toastOptions);
      setSendedToastNotification(true);
    } else if (
      !response?.success &&
      (!typeToSender ||
        typeToSender === TypeToSenderToastNotification.ERROR ||
        typeToSender === TypeToSenderToastNotification.ALL)
    ) {
      toast.error(message, toastOptions);
      setSendedToastNotification(true);
    }
  };

  useEffect(() => {
    if (response?.message) {
      sendToastNotificationToast();
    }
  }, [response]);

  useEffect(() => {
    if (sendedToastNotification) {
      setSendedToastNotification(false);
    }
  }, [sendedToastNotification]);

  return {
    sendedToastNotification,
    message: response?.message,
    type: getType(),
  };
}
