const createDB = () => {
  let db;

  const openRequest = indexedDB.open("store");

  openRequest.onupgradeneeded = () => {
    db = openRequest.result;

    if (!db.objectStoreNames.contains("pizzas")) {
      db.createObjectStore("pizzas", { autoIncrement: true });
    }

    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { autoIncrement: true }, { keyPath: "id" });
    }

    if (!db.objectStoreNames.contains("promo codes")) {
      db.createObjectStore("promo codes", { autoIncrement: true }, { keyPath: "id" });
    }

    if (!db.objectStoreNames.contains("basket")) {
      db.createObjectStore("basket", { autoIncrement: true }, { keyPath: "id" });
    }
  };
};

export default createDB;
