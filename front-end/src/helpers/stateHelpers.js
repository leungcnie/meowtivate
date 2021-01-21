// HELPER FUNCTIONS

// Remove action to state.actions using its id
export function removeFromActions(actionID, state) {
  // Find index of action obj in state.actions with id === actionID and remove
  const targetIndex = state.actions.findIndex(obj => obj.id === actionID);
  const updatedActions = [...state.actions];
  updatedActions.splice(targetIndex, 1);
  return updatedActions;
}

// Add action to state.actions with a name and category_id
export function addToActions(action, state) {
  const updatedActions = [...state.actions];
  updatedActions.push(action);
  return updatedActions;
}
