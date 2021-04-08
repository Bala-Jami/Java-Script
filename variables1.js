 /* var sub="java Script";
    var wish=`welcome to ${sub}`;
    console.log(wish);
*/
 let input1=5
 let input2=[5,3,1,7,8]
 input2.splice(0,2)
 input2.splice(1,1)
 console.log(input2)
 console.log(input2.reduce((fstva,nxtva)=>{
   return nxtva-fstva
 }))



 let ar1=["apple","balu"]
 let ar2=["danimma","balu"]
 let ar3=[...ar1,...ar2]
 console.log(ar3.filter((element,index)=>{
   return ar3.indexOf(element)===index;
 })
  
)           //[ 'apple', 'balu', 'danimma' ]


