import { nanoid } from "nanoid";
import { KEY_STORAGE } from "@/constants";
import { store } from "@/utils";

export const hasUserIdStored = (): boolean => {
  const storeValue = store.getStoredValue(KEY_STORAGE.USER_ID);
  if (storeValue) {
    return true;
  }
  return false;
};

export const generateUserIdAndStore = (): void => {
  const userId: UserId = nanoid();
  store.setStoredValue(KEY_STORAGE.USER_ID, userId);
};

export const getStoredUserId = () => {
  return store.getStoredValue(KEY_STORAGE.USER_ID);
};
