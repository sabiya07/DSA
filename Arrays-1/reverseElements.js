let arr=[1,2,3,4,5]
let reverse=(arr)=>{
 let arr2=[];
 let length=arr.length-1
 let ind=0
 for(let i=length;i>=0;i--){
    arr2[ind++]=arr[i]
 }
return arr2


}
console.log(reverse(arr))