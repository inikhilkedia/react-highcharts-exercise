import React from "react";
import "./App.css";

export default function NotFound() {
  document.title = window.location.pathname.slice(1);
  return <></>;
}
