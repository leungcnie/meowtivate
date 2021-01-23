import React from "react";
import ListsContainer from "../components/ListsContainer";
import NavBar from "../components/NavBar";

export default function ListsPage(props) {
  const { state, actionFunctions } = props;
  return (
    <div className="List">
      <NavBar />
      <ListsContainer state={state} actionFunctions={actionFunctions} />
    </div>
  );
}
