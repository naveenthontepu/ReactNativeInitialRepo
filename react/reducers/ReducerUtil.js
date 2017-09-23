export const createNewState = (state, stateChanges) => {
  return {
    ...state,
    ...stateChanges
  };
};
