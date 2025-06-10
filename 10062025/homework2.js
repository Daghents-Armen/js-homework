// Array methods 
// 1


//let arr = [1,2,3];
//function foreach(arr, callback) {
 //  for(let i = 0; i < arr.length; ++i) {
  //      callback(arr[i], i, arr)
   // }
//}

//function foo(item, index) {
 //       console.log(`index: ${index} --- item: ${item}`);
//}

//foreach(arr, item);


// 2 

//let arr = [1,2,3];

//function map(arr, callback) {
  //  let res = [];
  //  for (let i = 0; i < arr.length; ++i) {
   //     res.push = callback(arr[i], i, arr);
    //}

    //return res;
//}

//let result = map(arr, function(num){ return num * 2 });
//console.log(result);

 // 3

 //let arr = [1,2,3,4,5,6];

//function filterf(arr, callback) {
  //  let res = [];
   // for (let i = 0; i < arr.length; ++i) {
    //    res.push = callback(arr[i], i, arr);
 // }
  //  return res;
//}


//let result = filterf(arr, function(num){ return res; });
//console.log(result);


// 4

//let arr = [4,3,3,7];

//function somef(arr, callback) {
  //   for (let i = 0; i < arr.length; ++i) {
   //     if(callback(arr[i], i, arr)) {
    //      return true;
     //   }
   // }
    //return false;
//}

//let result = somef(arr, function(num){ return num == 4 });
//console.log(result);


// 5

//let arr = ['hello',2,3];

//function everyf(arr, callback) {
 // for (let i = 0; i < arr.length; ++i) {
  //  if (callback(arr[i], i, arr)) {
   //   return true;
    //} else {
     // return false;
    //}
  //}
//}

//let result = everyf(arr, function(num){ return typeof(num) === 'number'});
//console.log(result);

// 6

//let nums = [1,2,3];
//let search_element = 3;
//let fromindex = 0;

//function foo(search_element, fromindex) {
  //  for(let i = 0; i < nums.length; ++i) {
    //  if (nums[fromindex] != search_element) {
      //  ++fromindex;
       //  continue;
      //}
      //if (nums[fromindex] == search_element) {
      //  return search_element;
       // }
   // }
//}

//let result = foo(search_element, fromindex);
//console.log(result);