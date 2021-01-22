// HELPER FUNCTIONS
// NOTE: must make copies of state inside functions to avoid staleness

// Remove action to state.actions using its id
export function removeFromActions(actionID, state) {
  // Find and remove action obj with id
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

// Modify action in state.actions with new property
export function modifyActionWith(val, key, id, state) {
  // Make a copy of the state.actions
  const updatedActions = [...state.actions];

  // Find specific action obj and its index, and make copy of target
  const target = updatedActions.filter(obj => obj.id === id)[0];
  const targetIndex = updatedActions.indexOf(target);
  const newAction = {...target};

  // Update new action with new property val
  newAction[key] = val;

  updatedActions.splice(targetIndex, 1); // Remove target obj
  updatedActions.splice(targetIndex, 0, newAction); // Insert new action at right index with updated property
  
  return updatedActions;
}

// Return a property of a specific action in current state
//    e.g. return action's current is_completed or action_name 
export function getActionProperty(id, key, state) {
  const target = state.actions.filter(obj => obj.id === id)[0];
  const property = target[key];

  return property;
}