const partition = (arr, start, end) => {
  const pivot = arr[end]; // Определяем опорный элемент
  let i = start; // Определяем индекс, по которому делим массив на две части

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем значения переменных
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]]; // Меняем значения переменных
  return i;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    // Условия запуска рекурсии
    const pi = partition(arr, start, end); // Получаем индекс

    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
};
