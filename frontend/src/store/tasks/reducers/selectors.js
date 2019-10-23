export default function selectors(globalState) {
  const state = globalState.tasks;
  const getTasksStatus = () => state.getTasksFetchStatus.status;
  const addTaskStatus = () => state.addTaskFetchStatus.status;
  const getTasks = () => state.entities;

  return {
    getTasksStatus,
    getTasks,
    addTaskStatus
  };
}
