import { useState } from "react";

export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};


export const api_base_url = process.env.REACT_APP_API_BASE_URL ;