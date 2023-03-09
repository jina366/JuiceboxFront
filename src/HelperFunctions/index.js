export const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("You've logged out");
  };