import React from "react";
import ListsContainer from "../components/ListsContainer";
import NavBar from "../components/NavBar";

export default function ListsPage(props) {
  const { state } = props;
  return (
    <div className="List">
      <NavBar />
      <ListsContainer
        lists={state.lists}
        todos={state.todos}
        habits={state.habits}
      />
    </div>
  );
}
