const addInfoInDB = (name, date, db) => {
  const transaction = db.transaction(name, "readwrite");
  const store = transaction.objectStore(name);
  store.add(date);
};

export default addInfoInDB;
