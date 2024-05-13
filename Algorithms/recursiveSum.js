function sum(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sum(list.slice(1));
}

