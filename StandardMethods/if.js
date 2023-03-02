const result = Math.pow(2, 10);
console.log(result);

console.log(Math.sqrt(245));

let arr = [4, 2, 5, 19, 13, 0, 10];
 let sum = 0;
 for (i=0; i < arr.length; i++){
     sum += Math.pow(arr[i], 3)
 }
console.log(Math.sqrt(sum));

Math.ceil(Math.sqrt(379));
console.log(Math.sqrt(379).toPrecision(2));
console.log(Math.sqrt(379).toPrecision(3));
console.log(Math.sqrt(379).toPrecision(4));

// let num = Math.sqrt(587);
// let rmax  = Math.ceil(num);
// let rmin = Math.floor(num);
// let obj = {
//     'ceil':rmax,
//     'floor':rmix,
// }
// console.log(obj)

let arr1 = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max.apply(null, arr1));
console.log(Math.min.apply(null, arr1));

function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandom(1, 100));

function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
    let arr2 = [];
    for (i = 0; i < 10; i++){
        arr2[i] = getRandom(10,100);
    }
    console.log(arr2);

let a = 11;
let b = 45;
console.log(Math.abs(a-b));

let str = 'js';
console.log(str.toUpperCase());

let str1 = 'JS';
console.log(str1.toLowerCase());

let str2 = 'я учу javascript!';
console.log(str2.substr(2,4));
console.log(str2.substr(6,10));
console.log(str2.substring(2,5));
console.log(str2.substring(6,16));
console.log(str2.slice(2,5));
console.log(str2.slice(6,16));

let str3 = 'abcde';
console.log(str3.indexOf('c'));

console.log(str3.includes('a'));  // есть ли символ в строке

let str4 = "abcdt";
console.log(str4.indexOf('a') === 0);

console.log(str4.lastIndexOf('a') === str4.length - 1);

let str5 = 'http// abcdef.html';
console.log(str5.indexOf('http//') === 0);
console.log(str5.lastIndexOf('.html') === str5.length - 5);

let str6 = '1-2-3-4-5';
let arrStr = str6.split('-')
console.log(arrStr);

let str7 = '12345';
let arrStr1 = str7.split('');
console.log(arrStr1);

let arr3 = [1, 2, 3, 4, 5];
let str8 = arr3.join('-');
console.log(str8);