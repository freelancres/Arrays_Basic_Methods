
let array = new Array("a", "b");


let arr = ['a', 'b', 1, {'name':'safwan', age: 5}, null, true, ];
//console.log(typeof arr);
//console.table(arr);
let result;



//access element
//console.log(arr[3]);


// Array methods
// add / remove items
// result = array.unshift('k'); // add to the beginning 
// result = array.push('u'); // add to the end
// result = array.shift(); // extracts an item from the beginning
// result = array.pop(); // extracts an item from the end

array = [
    'orange',
    'apple',
    'mango',
    'watermelon',
    'banana'
];

// splice array method : 
// result = array.splice(1, 0, 'Berry');
 // index : 1 ,add 'Berry' , 'no item deleted'
//result = array.splice(0, 2, "Berry"); 
// starting from  index: 0 ,add 'Berry' , 'Two items deleted and array of deleted items is returnd'
//result = array.splice(0, 2); 
// starting from index: 0 , 'Two items deleted and array of deleted items is returnd'
//result = array.splice(-2, 1);
 // starting from index: -2 , 'One item deleted and array of deleted items is returnd'
//result = array.splice(2); 
// starting from index: 2 , 'all rest items deleted and array of deleted items is returnd'

// slice
result = array.slice();
 // copy with new reference
result.pop();
 // only result changed
result = array.slice(1, 3);
 // copy range : start at '1' 
 //              end before '3'

result = array.slice(-1)[0];
 // returns last element
result = array.slice(2); 
// copy all elements starting 
// from index: 2

// concat
let arr1 = ['A', 'B', 'C'];
let arr2 = [1, 2, 3];
result = arr1.concat(arr2);
result = arr2.concat(arr1);

result = arr1 + arr2; // covert to string and concat

let arrayLike = {
    0: "Talal",
    lenght: 1
};

result = arr1.concat(arrayLike);






//print results to console
console.log(array);
console.log(arr1, arr2)
console.log(result);




