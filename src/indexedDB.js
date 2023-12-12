const dbName = "MyAppDB";
const storeName = "MyStore";
const dbVersion = 1; // Use a higher number for each version

let db;

// Open a database
const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onupgradeneeded = event => {
      db = event.target.result;
      db.createObjectStore(storeName, { keyPath: 'id' });
    };

    request.onsuccess = event => {
      db = event.target.result;
      resolve(db);
    };

    request.onerror = event => {
      reject('Error opening database:', event.target.errorCode);
    };
  });
};

// Add data to the store
const addData = (data) => {
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.add(data);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject('Error adding data');
  });
};

// Export functions for use in other parts of your application
export { openDB, addData };
