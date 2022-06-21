const getInfoDB = (name, db) => {
  const transaction = db.transaction(name, "readonly");
  const store = transaction.objectStore(name);
  const data = store.getAll();
  data.onsuccess = () => {
    // console.log(data.result);
    return data.result;
  };
  return data;
};

export default getInfoDB;
