import React from "react";
import notfound from "../img/notfound.jpg";

export default function NotFoundPage(props) {
  return (
    <main className="">
      <img src={notfound} alt="" />
      404 Not Found
    </main>
  );
}
