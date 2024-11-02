const getStoreReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addAddToStoreReadList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
    alert("Already Exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { addAddToStoreReadList };
