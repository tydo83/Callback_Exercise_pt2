const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  var result = -1;

  each(array, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const filter = function (collection, test) {
  let result = [];
  each(collection, (num) => {
    if(test(num)) {
      result.push(num)
    }
  })
  return result;
};

const reject = function (collection, test) {
//   let result = [];
//   each(collection, (num) => {
//     if(!test(num)) {
//       result.push(num)
//     }
//   })
// return result;
  return filter(collection, (val) => {
    return !test(val);
  })
};

// filter(collection, (val) => {
//   return !test(val)
// })
// newArray = []
// each(collection, iterator)
// iterator = function(collection[i]) {
//   return !test(collection[i])
// }
// !test(collection[i]) = isEven(collection[i]) or isOdd(collection[i])

const map = function (collection, iterator) {
  let result = [];
  each(collection, (num) => {
    result.push(iterator(num))
  })
  return result;
};

// const uniq = function (array) {
//   let result = [];
//   each(array, (num) => {
//     if(!result.includes(num)) {
//       result.push((num))
//     }
//   })
// return result;
// };

const uniq = function(array) {
  let result = [];
  each(array, (num) => {
    if(indexOf(result, num) === -1) {
      result.push(num);
    }
  })
  return result;
}

// uniq([1,2,2,3]) 
// let result = [];
// each([1,2,2,3], (2) => 
//   if(![1, 2].includes(2)) 

const reduce = function (collection, iterator, accumulator) {
  let total = 0;
  each(collection, (num) => {
    num;  
  })
  

  
  return total;
};

let collection = [1, 2, 3]
var add = function (tally, item) {
  return tally + item;
};

a = reduce(collection, add)
a;

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
