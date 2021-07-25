let str1 = "This is a long string.";
let arr1 = [
    {
        "firstItem": 10,
        name : "Lihua",
        age: 10,
        "hello" : "yes bye"
    },
    {
        "secondItem": 120,
        name : "Hanmeimei",
        age: 20,
        "hello" :"no never"
    },
    {
        "thirdItem": 120,
        name : "Danies",
        age: 30,
        "hello" :"no never"
    }
]

let arr2 = [1,2,3,4,5,6,7,8,9,10];

let arr3 = arr1.filter(ele => ele.age > 10);
console.log(arr3);