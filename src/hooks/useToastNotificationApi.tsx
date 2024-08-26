import { ApiResponse } from "@/api/types";
import { ToastType } from "@/components/ToastNotification/types";
import { useEffect, useState } from "react";

export function useToastNotificationApi(state: ApiResponse) {
  const [sendToastNotification, setSendToastNotification] = useState(false);

  // const handleSendToastNotification = () => {
  //   setSendToastNotification(false);
  //   setTimeout(() => {
  //     setSendToastNotification(true);
  //   }, 200);
  // };

  const getType = () => {
    const type = state.success ? "success" : "error";
    return type as ToastType;
  };

  useEffect(() => {
    if (state.message) {
      setSendToastNotification(true);
    }
  }, [state]);

  useEffect(() => {
    console.log("sendToastNotification", sendToastNotification);
    if (sendToastNotification) {
      setSendToastNotification(false);
    }
  }, [sendToastNotification]);

  return {
    sendToastNotification,
    message: state.message ? state.message : "",
    type: getType(),
  };
}
