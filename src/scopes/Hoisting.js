export const Hoisting = () => {
  return <>Что выведет вызов foo?</>;
  return <>{foo()}</>;

  function foo() {
    console.log(a);
    var a = 2;
  }
};
