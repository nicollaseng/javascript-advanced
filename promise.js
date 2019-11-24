function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
}

function logA() {
  console.log("A");
}

function logB() {
  console.log("B");
}

function logC() {
  console.log("C");
}

function logError() {
  throw new Error();
}

getPromise()
  .then(logA)
  .then(logB)
  .then(logC)
  .catch(logError);
