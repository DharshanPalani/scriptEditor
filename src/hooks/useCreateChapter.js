const useCreateChapter = () => {
  const createChapter = async (projectID, projectDir, chapterIndex) => {
    try {
      const result = await window.api.createChapter(
        projectID,
        projectDir,
        chapterIndex
      );
      return result;
    } catch (error) {
      console.error("[Renderer Hook] Error calling backend:", error);
    }
  };
  return { createChapter };
};

export default useCreateChapter;
