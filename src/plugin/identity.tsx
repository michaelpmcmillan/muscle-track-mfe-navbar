import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://muscle-track.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

export const logout = () => {
  auth
    .currentUser()
    .logout()
    .then((response) => (window.location.href = "/"));
};

export const isLoggedIn = () => {
  return auth && auth.currentUser();
};
