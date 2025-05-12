export const StrictEquality = () => {
  const a = "123";
  const b = 123;
  const result1 = a == b;
  const result2 = a === b;
  return <>a==b? a===b?</>; // type "a" this row?
  // return (
  //   <>
  //     a==b? {result1.toString()}
  //     a===b? {result2.toString()}
  //   </>
  // );
};
