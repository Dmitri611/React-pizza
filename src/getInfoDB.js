async function getInfoDB() {
  return new Promise((resolve) => {
    const openRequest = indexedDB.open("store", 1);
    openRequest.onsuccess = () => {
      const db = openRequest.result;
      const transaction = db.transaction("pizzas", "readonly");
      const store = transaction.objectStore("pizzas");
      const data = store.getAll();
      data.onsuccess = () => {
        resolve(data.result);
      };
    };
  });
}

export default getInfoDB;
