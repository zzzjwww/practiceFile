let str1 = "haha can you revert?";

// function revert(str) {
//     for (let i = 0; i < str.length; i++) {
//         let midLet;
//         midLet = str[i];
//         str[i] = str[str.length - i - 1];
//         str[str.length - i -1] = midLet;
//     }
// }

function reverseString(str) {
    if (str == "") {
        return "";
    }
    return reverseString(str.substring(1)) + str.charAt(0);
}


function isPalindrome(str) {
    if (str.length == 0 || str.length == 1) {
        return true;
    }

    if (str[0] == str[str.length - 1]) {
        return isPalindrome(str.substring(1, (str.length - 1)));
    }
    return false;
}

// function decimalToBinary(dec, result) {
//     if (dec == 0) {
//         return result;
//     }

//     result = dec % 2 + result;
//     return decimalToBinary(dec / 2, result);
// }

// console.log(decimalToBinary(12,""));


// function sumNum(num) {
//     if (num <= 1)
//         return num;
//     debugger
//     return num + sumNum(num - 1);
// }

// sumNum(10);

function binarySearch(arr, left, right, x) {
    if (left > right)
        return -1;
    let mid = Math.floor((left + right) / 2);
    debugger;
    if (x == arr[mid])
        return mid;
    if (x < arr[mid])
        return binarySearch(arr, left, mid - 1, x);
    return binarySearch(arr, mid + 1, right, x);
}

console.log(binarySearch([-1,0,1,2,3,4,5,10],0,7,0));
