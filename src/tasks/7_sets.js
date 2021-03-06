/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let set = new Set();
  numbers.forEach(el => {
    set.add(el);
  });
  return Array.from(set);
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let set = new Set();
  setA.forEach(el => set.add(el));
  setB.forEach(elem => {
    if (set.has(elem)) {
      set.delete(elem);
    } else {
      set.add(elem);
    }
  });
  return set;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
