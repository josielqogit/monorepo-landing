const func = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    action({ dispatch, getState });
    return;
  }
  next(action);
}

export default func;