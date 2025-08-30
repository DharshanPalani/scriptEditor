const useFetchProjectData = () => {
  const fetchProjectData = async (id) => {
    try {
      const result = await window.api.fetchProjectData(id);
      // console.log("From rendering hook, " + result);
      return result;
    } catch (error) {
      console.error("[Renderer Hook] Error calling backend: " + error);
    }
  };
  return { fetchProjectData };
};

export default useFetchProjectData;
