import { toast } from "react-toastify";

const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addAddToStoreWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    toast("Already Exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast("Book added to Wish List");
  }
};

export { addAddToStoreWishList };
