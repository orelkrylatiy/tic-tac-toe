export const Async = () => {
  console.log(1);
  setTimeout(() => console.log(2), 0);

  function someFunc(callback) {
    console.log(3);
    callback();
    console.log(5);
  }
  someFunc(() => console.log(4));
};
