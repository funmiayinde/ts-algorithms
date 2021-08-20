/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the
 * values which are numbers and converts them to strings
 *
 * Example:
 *  let obj = {
 *      num: 1,
 *      test: [],
 *      data: {
 *          val: 4,
 *          info: {
 *              isRight: true,
 *              random: 66
 *          }
 *       }
 *    };
 *    stringifyNumbers(obj)
 *    {
 *    num: "1",
 *    test: [],
 *    data: {
 *      val: "4",
 *      info: {
 *          isRight: true,
 *          random: "66"
 *       }
 *    }
 *   }
 * */

/**
 *
 * */
const stringNumbers = (obj: any): any => {
    let newObj = {};
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        }else if (typeof obj[key] === "object" && !Array.isArray(obj[key])){
            newObj[key] = stringNumbers(obj[key]);
        }else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
};
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};
console.log(stringNumbers(obj));
