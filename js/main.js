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
/*
const myPromise = new Promise((resolve, reject) => {
  const error = false; //true;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the the promise.");
  }
});

// console.log(myPromise);

/* console.log(myPromise);
myPromise.then((value) => {
  console.log(value);
});
*/

/* myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  }); */
/*const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("My Next promise is RESOLVED !");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});*/

/*
//FETCH API 
// const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
// console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  /*.then((data) => {
    console.log(data);
  })*/
/*  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });
console.log(users); */

//Async /Await

const myUsers = {
  userList: [],
};

//async function myCoolFunction() {
// or
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

// myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  // console.log(data);
  myUsers.userList = data;
};

anotherFunc();
