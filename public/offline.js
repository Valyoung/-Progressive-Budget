let budgetData;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
   const budgetData = event.target.result;
   db.createObjectStore("pending", { autoIncrement: true });
 };
 