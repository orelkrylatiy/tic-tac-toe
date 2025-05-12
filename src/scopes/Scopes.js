export const Scopes = () => {
  const foo = () => {
    return a;
  };
  function bar() {
    const a = 3;
    return foo();
  }

  const a = 2;

  // return <>Что выведет вызов bar?</>;
  // return <>{bar()}</>;
};
