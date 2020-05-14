import jsCookie from 'js-cookie';

class CookieService {
  public static setCookie(name: string, value: any): void {
    jsCookie.set(name, value);
  }

  public static getCookie(name: string): string {
    return jsCookie.get(name);
  }

  public static getAllCookies(): any {
    return jsCookie.get();
  }

  public static removeCookie(name: string) {
    return jsCookie.remove(name);
  }
}

export default CookieService;
