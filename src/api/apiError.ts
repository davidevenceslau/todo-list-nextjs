import { ApiResponse, ErrorApi } from "./types";

export const apiError = (error: ErrorApi): ApiResponse => {
  const message = error instanceof Error ? error.message : error;
  return {
    success: false,
    data: null,
    message,
  };
};
