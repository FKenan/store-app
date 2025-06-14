import React from "react";
import { Outlet } from "react-router";

export default function MainLayot() {
  return (
    <div className="container">
      <div>MainLayot</div>
      <Outlet />
    </div>
  );
}
