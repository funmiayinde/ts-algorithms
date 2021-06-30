// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (arr: any[], size: number): any[] => {
  let chunked = [];
  for (let val of arr) {
    const lastElem = chunked[chunked.length - 1];
    if (!lastElem || lastElem.length === size) {
      chunked.push([val]);
    } else {
      lastElem.push(val);
    }
  }
  return chunked;
};

const chunk2 = (arr: any[], size: number): any[] => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
};

console.log(chunk2([1, 2, 3, 4, 5], 4));
