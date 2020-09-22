console.log("hello");
const handleAccountClick = (e) => {
  e.preventDefault();
  console.log("hello2");
};

document
  .querySelector(".site-header__account")
  .addEventListener("click", handleAccountClick);
