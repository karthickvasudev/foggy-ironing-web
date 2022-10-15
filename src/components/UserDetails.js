export const getUserDetails = () => {
  return JSON.parse(sessionStorage.getItem("profile"));
};
