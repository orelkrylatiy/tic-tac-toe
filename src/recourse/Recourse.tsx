// есть массив коробок
// в каждой коробке есть еще коробки
// Необходимо найти id коробки(самую верхнюю), в которой ключ(только в одной коробке есть ключ)
const findBoxIndexWithKey = (boxes) => {};

const boxes = [
  {
    id: 1,
    type: "box",
    children: [
      {
        id: 1,
        type: "box",
        children: [],
      },
    ],
  },
  {
    id: 4,
    type: "box",
    children: [
      {
        id: 1,
        type: "box",
        children: [
          {
            id: 1,
            type: "box",
            children: [],
          },
          {
            id: 1,
            type: "key",
          },
        ],
      },
    ],
  },
];

export const Recourse = () => {
  return findBoxIndexWithKey(boxes);
};
