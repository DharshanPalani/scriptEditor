const useCreateProject = () => {
  const createProject = async (name) => {
    try {
      const result = await window.api.createProject(name);
      return result;
    } catch (err) {
      console.error("[Renderer Hook] Error calling backend:", err);
    }
  };
  return { createProject };
};

export default useCreateProject;
