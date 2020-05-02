// taken from egghead.io Redux: Persisting the State to the Local Storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('react-redux-todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('react-redux-todos', serializedState);
  } catch (err) {}
};
