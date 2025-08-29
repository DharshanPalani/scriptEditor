const useInitApplication = () => {
  const initApplication = () => {
    const result = window.api.initApplication();
    return result;
  };
  return { initApplication };
};

export default useInitApplication;
