const useCreateChapter = () => {
  const createChapter = async (projectID) => {
    try {
      const result = await window.api.createChapter(projectID);
      return result;
    } catch (error) {
      console.error("[Renderer Hook] Error calling backend:", error);
    }
  };
  return { createChapter };
};

export default useCreateChapter;
