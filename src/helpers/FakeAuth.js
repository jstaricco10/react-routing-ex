import ls from "local-storage";

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    ls.set("isAuthenticated", true);
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    ls.set("isAuthenticated", false);
    setTimeout(cb, 100); // fake async
  },
};
