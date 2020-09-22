import React from "react";

const bgModal = {
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.7)",
  position: "absolute",
  top: "0",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
};

const contentModal = {
  width: "500px",
  height: "300px",
  backgroundColor: "white",
  borderRadius: "4px",
  position: "relative",
};

const close = {
  position: "absolute",
  top: "0",
  right: "14px",
  fontSize: "40px",
  transform: "rotate(45deg)",
  cursor: "pointer",
};

const handleAccountClick = (e) => {
  e.preventDefault();
  document.querySelector(".bg-modal").style.display = "flex";
};

export default class Modal extends React.Component {
  componentDidMount = () => {
    document
      .querySelector(".site-header__account")
      .addEventListener("click", handleAccountClick);
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".bg-modal").style.display = "none";
    });
  };

  render = () => (
    <div className="bg-modal" style={bgModal}>
      <div className="content-modal" style={contentModal}>
        <div className="close" style={close}>
          +
        </div>
      </div>
    </div>
  );
}
