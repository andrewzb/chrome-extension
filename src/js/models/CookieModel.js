export default class CookieModel {
  constructor(cookie = undefined) {
    this.cookie = cookie;
  }

  getCookie = () => this.cookie;

  setCookie = cookie => {
    this.cookie = cookie;
  };
}
