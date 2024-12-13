import React from "react";
const FontFaceObserver = require("fontfaceobserver")

const Fonts = () => {
  try {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
    link.rel = "stylesheet"

    document.head.appendChild(link)

    const nunitoFont = new FontFaceObserver("Nunito Sans")

    nunitoFont.load().then(() => {
      document.documentElement.classList.add("nunito-sans")
    })
  } catch (error) {}
}

export default Fonts
