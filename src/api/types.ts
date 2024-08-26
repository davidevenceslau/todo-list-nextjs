export type ErrorApi = Error | string;

export type ApiResponse = {
  data: null | unknown;
  success: boolean;
  message?: string;
};
