const useLocalStorage = (uniqueId: string) => {
  const setItem = (value: unknown) => {
    window.localStorage.setItem(uniqueId, JSON.stringify(value));
  };

  const getItem = () => {
    const item = window.localStorage.getItem(uniqueId);
    return item ? JSON.parse(item) : null;
  };

  const removeItem = () => {
    window.localStorage.removeItem(uniqueId);
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
