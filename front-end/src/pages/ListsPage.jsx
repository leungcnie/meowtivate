import React from "react";
import ListsContainer from "../components/ListsContainer";
import NavBar from "../components/NavBar";

export default function ListsPage(props) {
  const { state, actionFunctions } = props;
  return (
    <div className="List">
      <NavBar />
      <ListsContainer
        // actions={state.actions}
        // todos={state.todos}
        // habits={state.habits}
        // streaks={state.streaks}
        // logDatas={state.logDatas}
        state={state}
        actionFunctions={actionFunctions}
      />
    </div>
  );
}
