// let arr=[1,0,1,1,0];
// sort(arr);
// console.log(sort(arr))
// function sort(arr){
//       let count=0;
//       for(let i=0;i<arr.length;i++){
//         if(arr[i]==0)count++;

//       }
//       for(let i=0;i<count;i++){
//         arr[i]=0;
//       }
//       for(let i=count;i<arr.length;i++){
//         arr[i]=1;
//       }
//       return arr;
// }


//  var n=13
// for(i=2;i<n;i++){
// if((n%i) ==0 ){
//     console.log("div by:",i);
//     console.log("then it is not  prime number")
//     break;
// }
// else {
//     console.log("div by:",i);
//     console.log("it is  a prime number")
//     break;

// }}

// //-----------------------------------
// function prime(n) {
//     if (n == 1) return false;
//     for (let i=2; i*i<=n; i++) {
//         if (n%i==0) 
//         return ( `${n} is Not a prime number`);
//         return (`${n} is a prime number`);
//     }
// }
// console.log(prime(7));

// //--------------------------------------------

// function isPrime(n){
//     if(n==1) return false;
//     if(n==2|| n==3)return true;
//     if(n%2==0 || n%3==0)return false;
//     for (let i=5; i+1<=n;i+=6){
//         if(n%i==0|| n%(i+2)==0) return false
//     }
//     return true;
// }

// //-------------------------------------------
// 4^4
// 3^3

9^5

// function fun(arr) {
//     let obj = {};
  
//     for (let i of arr) {
//       obj[i] = obj[i] + 1 || 1;
//     }
//     for (let i in obj) {
//       if (obj[i] === 1) {
//         console.log("result", i);
//       }
//     }
//   }


// arr=[1,2,3,3,2,7,1]
// for()

arr=[1,2,3,4]
sum=0
for(i=0;i<=Arr.length;i++){
    sum= sum+arr[i]
}
console.log(sum)
//----------------------------------
arr=[1,2,3,4]
sum=0
for(i=0;i<=Arr.length;i++){
    sum= sum^arr[i]
}
console.log(sum)
//---------------------------------------//

function findFirstOccu(arr, target) {
  let start = 0;
  let last = arr.length - 1;
  let ans = 0;

  while (start <= last) {
    let mid = Math.floor((last + start) / 2);
    if (arr[mid] === target) {
      ans = mid;
      last = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(ans);
}


function findFirstOccu(arr, target) {
    let start = 0;
    let last = arr.length - 1;
    let ans = 0;
while (start <= last) {
    let mid = Math.floor((last + start) / 2);
    if (arr[mid] === target) {
      ans = mid;
      last = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(ans);
}


function changeBit(num, n) {
    let a = 1 << n;
    console.log(a);
    let res = num | a;
    console.log(res);
  }


  arr=[5,4,3,2,1,19]
  let n=arr.length

  function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let swap = arr[i];
          arr[i] = arr[j];
          arr[j] = swap;
        }
      }
    }
    return arr;
  }



  function sort(arr){
    for (let i=0;i<arr.length;i++){
      for (let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
          let swap=arr[i];
          arr[i]=arr[j];
          arr[j]=swap;
        }
      }
    }
    return([1,2,3,4,5,6])
  }

  let arr4 = [
    3,
    3,
    2,
    2,
    2,
    0,
    0
];

function Sorting(arr4) {
    for (let i = 0; i < arr4.length; i++) {
        for (let j = i + 1; j < arr4.length; j++) {
            if (arr4[i] >= arr4[j]) {
                let temp = arr4[i];
                arr4[i] = arr4[j];
                arr4[j] = temp;
            }
        }
    }
return arr4
}
console.log(Sorting(arr4))

  