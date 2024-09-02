const storageIdentifier = "@TDL:";

const isJsonString = (value: string) => {
  if (typeof value !== "string") {
    return false;
  }
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null;
  } catch {
    return false;
  }
};

const getStoredValue = (key: string) => {
  const storedValue = localStorage.getItem(`${storageIdentifier + key}`);
  if (storedValue) {
    if (isJsonString(storedValue)) {
      return JSON.parse(storedValue);
    }
    return storedValue;
  }
  return null;
};

const setStoredValue = (key: string, value: object | string) => {
  if (value !== undefined) {
    const storeValue =
      typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(`${storageIdentifier + key}`, storeValue);
  }
};

const removeStoredValue = (key: string) => {
  localStorage.removeItem(`${storageIdentifier + key}`);
};

export const store = {
  getStoredValue,
  setStoredValue,
  removeStoredValue,
};
