export default function selectors(globalState) {
  const state = globalState.tasks;
  const getTasksStatus = () => state.getTasksFetchStatus.status;
  const getTasks = () => state.entities;

  return {
    getTasksStatus,
    getTasks
  };
}
