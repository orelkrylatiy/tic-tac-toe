//Есть массив чисел
//Нужно вывести в результате в массиве только те числа, которые не имеют дубликата

const deleteWithDuplicates = (input) => {
  return input.find((item) => input.lastIndexOf(item) === input.indexOf(item));
};

export const Algoritms = () => {
  const input = [1, 0, 2, 1, 2, 4, 4, 3]; //[0]
  return deleteWithDuplicates(input);
};
