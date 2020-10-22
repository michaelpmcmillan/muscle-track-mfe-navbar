import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();
netlifyIdentity.on("login", (user) => (window.location.href = "/"));
netlifyIdentity.on("logout", (user) => (window.location.href = "/"));

export const login = async () => {
  await netlifyIdentity.open();
};

export const logout = async () => {
  await netlifyIdentity.logout();
};

export const isLoggedIn = () => {
  return netlifyIdentity && netlifyIdentity.currentUser();
};
