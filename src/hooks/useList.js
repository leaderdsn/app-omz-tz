const useList = () => {
  const randomItems = (min) => {
    let res = null;
    res = Math.ceil(Math.random() * min) + min;
    return res;
  };

  return { randomItems };
};

export default useList;
