let aggs = [1, 3, 4, 6, 3, 2, 1, 5];

function findBiggestAgg(arr) {
  let biggestAgg = aggs[0];
  for (let i = 1; i < aggs.length; i++) {
    if (aggs[i] > biggestAgg) {
      biggestAgg = aggs[i];
    }
  }
  return biggestAgg;
}

findBiggestAgg(aggs);
