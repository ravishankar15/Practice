// async function mySecondFunction(x: number) {
//   setTimeout(() => {}, 1000);
//   console.log(x);
//   return 2 + x;
// }

// async function myThirdNestedFunction(x: number) {
//   setTimeout(() => {}, 1000);
//   console.log(x);
//   return 3 + x;
// }

// async function myAwesomeFunction() {
//   let startingValue = 1;
//   // we can await the call to mySecondFunction() as this
//   // returns a promise that will eventually return
//   // our firstResult
//   let firstResult = await mySecondFunction(startingValue);
//   // once mySecondFunction has resolve, our function will
//   // carry on execution of myThirdNestedFunction
//   let finalResult = await myThirdNestedFunction(firstResult);
//   // once this resolves, we get back our finalResult
//   // which we can subsequently return
//   return finalResult;
// }

// let promise = myAwesomeFunction();
// promise.then(result => console.log(result));


// const start = callback => {
//   setTimeout(() => {
//     callback('Hello');
//     setTimeout(() => {
//       callback('And Welcome');
//       setTimeout(() => {
//         callback('To Async Await Using TypeScript');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// start(text => console.log(text));


