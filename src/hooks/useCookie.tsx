export type CookieData = {
  name: string;
  value: string;
};

export const useCookie = () => {
  const cookies = document.cookie;

  function getAllCookie(): CookieData[] {
    const structuredCookies = cookies
      .split(";")
      .map((cookieInText) => cookieInText.trim())
      .map((cookieInText) => {
        const [name, value] = cookieInText.split("=");
        const structuredCookie: CookieData = { name, value };
        return structuredCookie;
      });
    return structuredCookies;
  }

  function getByName(name: string): CookieData | undefined {
    const allCookies = getAllCookie();
    return allCookies.find((cookie) => cookie.name === name);
  }

  return {
    getByName,
  };
};
