/**
 * @param {Array} arr
 * @return {Array}
 * */
 const collectOddValues = (arr: number[]): number[] => {
  let newArr = [];
  if (arr.length === 0){
      return newArr;
  }
  if (arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};
