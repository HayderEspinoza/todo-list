export default function selectors(globalState) {
  const state = globalState.cities;
  const getCitiesStatus = () => state.getCitiesFetchStatus.status;
  const getCities = () => state.entities;
  const getCity = () => state.city;

  return {
    getCitiesStatus,
    getCities,
    getCity
  };
}
