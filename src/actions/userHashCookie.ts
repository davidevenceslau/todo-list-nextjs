"use server";

import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { KEY_COOKIE } from "@/constants";

export const generateUserHashCookie = async () => {
  const userHash: UserHash = uuidv4();
  cookies().set(KEY_COOKIE.USER_HASH, userHash, { httpOnly: true });
};

export const hasUserHashCookie = async (): Promise<boolean> => {
  return cookies().has(KEY_COOKIE.USER_HASH);
};

export const getUserHashCookie = async (): Promise<string | undefined> => {
  return cookies().get(KEY_COOKIE.USER_HASH)?.value;
};
