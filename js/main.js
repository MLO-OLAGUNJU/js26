//Fetch API requires a discussion of .........
// Callbacks, Promises, Thenables, and Async/Await

/* function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// AKA "CALLBACK HELL"
firstFunction(para, function () {
  //do stuff
  secondFunction(para, function () {
    thirdFunction(para, function () {});
  });
}); */

// Promises
//3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the the promise.");
  }
});

console.log(myPromise);
