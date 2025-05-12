export const Closures = () => {
  function f() {
    let value = 123;
    return function () {
      return value + 1;
    };
  }
  const test1 = f();
  const test2 = f();
  const test3 = test1(); //?
};
