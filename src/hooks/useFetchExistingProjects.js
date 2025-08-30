const useFetchExistingProjects = () => {
  const fetchExistingProjects = async () => {
    try {
      const result = await window.api.fetchExistingProjects();
      console.log(result);
      return result;
    } catch (error) {
      console.error("[Rendering hook] error: " + error);
    }
  };
  return { fetchExistingProjects };
};

export default useFetchExistingProjects;
