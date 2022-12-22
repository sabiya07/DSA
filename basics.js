//1.natural numbers
function numbers(n){
    let sum = 0;
  
      for (let i = 1; i <= n; i++) {
          sum =sum + i;
      }  
      return sum;
  }
  
  console.log(numbers(100))

//-----------------------------------------------------//
//2. program that takes a number as input and prints its multiplication table upto 10.
// function Table(i){
//     for (i=1;i<=10;i++){
//         let mul = i*j
//         console.log(`${i} * ${j}= ${mul}`)
//     }
// }
// Table(3);

//---------------------------------------------------//
//4. Average sum of elements of an array.
// function average(array){
//     let sum=0
//     for(i=0;i< array.length;i++){
//     sum =+ array[i];
// }
// return sum/array.length
// }

// function largest(a,b,c){
//     if(a>b,a>c){
//     console.log("a greater than b and c")}
//     elseif ()
// }
//------------------------------------------------------------//

//5. Elements greater than avg sum of an array
// let array=[1,5,9,10,3]

// let getaverage=(array)=>{
//     for(let i=0;i<array.length;i++){
//         sum=+i
//     }
//     console.log(sum)
//     average=sum/array.length
//     console.log(average)
//     for (let j=0;j<=array.length;j++){
//     if(array[j]>average){
//         console.log(array[j])
//     }
// }
// }
// getaverage(array)
//-----------------------------------------------------------------//
//------------------------------------------------//
//6. Find the largest element in an array
// function largest(array){
//     let largest=array[0];
//     for(i=0;i<array.length;i++){
//         if(array[i]>largest){
//             largest=array[i]
//         }
//     }
// }
// console.log(largest([1,2,3,4,5]))
//=----------------------------------------------------//
//7.Find the largest second element in an array
// let a=[9,17,15,6,20];
// let seclarg=(a)=>{
//     let largest=0;
//     let seclarg=0
//     for(let i=0;i<=a.length;i++)
//     if(a[i]>largest){
// largest=a[i]
//     }
//     console.log
// }
//------------------------------------------------------------//
//8. Program to find the smallest number among three numbers.
// function smallest(a,b,c){
//      if(a<b && a<c){
//         console.log(a)
//      }else if(b<A && b<c){
//         console.log(b)
//      }else{
//         console.log(c)
//      }
// }
// smallest(7,90,2)
//-----------------------------------------------------//
//9. Find the given element in an array and return it's index if present else -1
// let A= [2,6,9,4,10]; 
// let findgivenele=(givenelement,a)=>{
//     for (let i=0;i <=a.length;i++){
//         if(givenelement==a[i]){
//             return i;
//         }
//     }
//     console.log("-1")
// }
// console.log(findgivenele(3,a))
//---------------------------------------------------------//


