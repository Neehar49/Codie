import { useState } from "react";

// Function to toggle a class on an element
export const toggleClass = (el, className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

// Function to remove a class from an element
export const removeClass = (el, className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};

// Set api_base_url based on environment variable
export const api_base_url = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000"; // Default to localhost if not set
