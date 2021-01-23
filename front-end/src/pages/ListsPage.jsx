import React from "react";
import ListsContainer from "../components/ListsContainer";
import NavBar from "../components/NavBar";

export default function ListsPage(props) {
  const { state, actionFunctions, catFunctions } = props;
  return (
    <div className="List">
      <NavBar />
<<<<<<< HEAD
      <ListsContainer state={state} actionFunctions={actionFunctions} />
=======
      <ListsContainer
        state={state}
        actionFunctions={actionFunctions}
        catFunctions={catFunctions}
      />
>>>>>>> 8568ff84e489f24a7e631085810fc02999f4d62e
    </div>
  );
}
