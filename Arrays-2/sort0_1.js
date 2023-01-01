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


 var n=13
for(i=2;i<n;i++){
if((n%i) ==0 ){
    console.log("div by:",i);
    console.log("then it is not  prime number")
    break;
}
else {
    console.log("div by:",i);
    console.log("it is  a prime number")
    break;

}}

//-----------------------------------
function prime(n) {
    if (n == 1) return false;
    for (let i=2; i*i<=n; i++) {
        if (n%i==0) 
        return ( `${n} is Not a prime number`);
        return (`${n} is a prime number`);
    }
}
console.log(prime(7));

//--------------------------------------------

function isPrime(n){
    if(n==1) return false;
    if(n==2|| n==3)return true;
    if(n%2==0 || n%3==0)return false;
    for (let i=5; i+1<=n;i+=6){
        if(n%i==0|| n%(i+2)==0) return false
    }
    return true;
}

//-------------------------------------------
