export const createProject = (project) => {
  return (dispatch, getState) => {
    // Make async call to database

    // Caryy on with the dispatch
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
