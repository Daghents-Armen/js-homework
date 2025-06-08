// 1


//let str = "hello"

//console.log(str.length)

//function strcount(str) {
  //  let count = 0;
   // for (let i = 0; i < str.length; ++i) {
     //   ++count
   // }
   // return count;
//}

//let res = strcount(str);
//console.log(res);


// 2


//let str = "anaconda";

//str = str.toUpperCase();
//console.log(str);

//function converttoupper(str) {
  //  let res = '';

   // for (let i = 0; i < str.length; ++i) {
     //   if (str[i] >= 'a' && str[i] <= 'z') {
      //      res += str[i].toUpperCase();
       // } else {
         //   res += str[i]
       // }
   // }

   // return res;
//}

//let result = converttoupper(str);
//console.log(result);


// 3


//let x = 5;
//let y = 5;

//function sumofnum(x, y) {
  //  return x + y;
//}

//let res = sumofnum(x,y);
//console.log(res);


// 4

//let str = "hello";
//let res = '';

//for (let i = str.length - 1; i >= 0; --i) {
  // res += str[i];
//}

//console.log(res);

//let str = 'hello';
//let arr = str.split('');

//for (let i = 0; i < arr.length / 2; ++i) {
 // let tmp = arr[i];
 // arr[i] = arr[arr.length - i - 1];
 // arr[arr.length - i - 1] = tmp;
//}

//str = arr.join('');
//console.log(str);


// 5


//let arr1 = [1,2];
//let arr2 = [3,4];
//let arr3 = [];
//let k = 0;

   // for (let i = 0; i < arr1.length; ++i) {
     //   arr3[k++] = arr1[i];
   // }

   // for (let i = 0; i < arr2.length; ++i) {
     //   arr3[k++] = arr2[i];
   // }

    //console.log(arr3);


    // 6


//let str1 = "Learning JavaScript";
//let str2 = "Java";
//let k = 0;
//let res = '';
//let i = 0;

//let res = str.includes('Java');
//console.log(res);

//while (i < str1.length) {
  //  if (str1[i] == str2[k]) {
   // res += str2[k++]
    //++i;
   // } else {
    //    ++i;
   // }
//}

//console.log(res);

// 7


//let arr1 = [3,6,9,12];
//let size = arr1.length;

//let res = arr1.indexOf(9);
//console.log(res);

//for (let i = 0; i < size; ++i) {
  //  if (arr1[i] == 9) {
    //    console.log(i);
    //    return;
   // }
//}


// 8

//let expenses = [50,75,100];
//let sum = expenses.reduce((accumulator, currentValue) => {
 //       return accumulator + currentValue;
//},0);

//console.log(sum);


// 9

//let arr = [1,2,3,4,5,6];
//let size = arr.length;
//let sum = 0;

//function sumofnums(arr, size) {
//for (let i = 0; i < size; ++i) {
  //  sum += arr[i];
//}

  //  return sum;
//}

//let res = sumofnums(arr,size);
//console.log(res);


// 10

//let str2 = 'Hello js';
//let match = 'js';


//function strstr(str2, match) {
 //   for (let i = 0; i <= str2.length - match.length; ++i) {
 //     let k = 0;
  //      if (str2[i] == match[k]) {
   //       let index = i;
    //      while (match[k] && str2[index + k] == match[k]) {
     //       ++k;
      //    }
       //   if (k == match.length) {
        //    return true;
         // }
       // }
   // }
   // return false;
// }

// 11 

//let x = 6;

//function isEven(x) {
//  return x % 2;
//}

//if((isEven(x)) == 1) {
// console.log("false")
//} else {
//  console.log("true");
//}
