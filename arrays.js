/*  # collection of indexed  and heterogeneous elements called as "Array" 
     # index value starts from "zero"
     # we will access array elements by using "indexes"
     Here we have some properties i.e. 1)Length    2)delete      3)map() function     4)filter() function    5)reduce function
    -> length: It is used to know the length of the array which is a predefined property
    -> delete: It is used to delete particular element which is also predefined property
        # Here we have one disadvantage i.e. This property deleted the element but not its memory so deleted element replaced with empty element
    -> Map() function: It is used to "manipulate" the each and every element
        # Hence it returns the new array  
    -> Filter() function: This is used to create the new array based on condition
    -> Reduce() function: This is used to find the sum of array element
*/






/*
let var1=[10,20,30,40]
console.log(var1[-1],var1[6])
//console.log(var1.length)
//var1.length=6
//console.log(var1)
delete var1[0]
console.log(var1)
console.log(var1.length) 







console.log(
    [1.2,1.3,1.4,1.5].map((element,index)=>{
        return `${index*5},${element*10}`;
        
    })
) 





console.log(
    [1,2,3,4].filter((element,index)=>{
        return element / 2 == 1
    })
) 








console.log(
    [1,1.5,1.6,1.7,2].map((element,index)=>{
        return element*50
    }).filter((element,index)=>{
        return element % 10 == 0 
    })
)







console.log(
    [1,2,3].reduce((firstvalue,nextvalue)=>{
        return nextvalue - firstvalue
    })
)      
 










console.log(
    [1,3,5,7,1.8,1.9].map((element,index)=>{
        return `${index+1},${element*20}`
    }).filter((element,index)=>{
        return index >3
    })
)










console.log(
        [1,3,5,7,1.8,1.9].map((element,index)=>{
            return `${index+1},${element*5}`
        }).filter((element,index)=>{
            return element>15
        })
)






/*

* reduceRight() function is used to print the array from right to left

    console.log(
        ["welcome",200,100,"apple"].reduceRight((ar1,ar2)=>{
            return ar1+" "+ar2
        })
    )




//push() function is used to add to elements at end of array
//Pop() function is used to remove elements at end of an Array
//unsift() function is used to add element at begining of Array
//shift() function is used to remove element at begining of array


    let arr1=[10,20,30]
    arr1.push(50)
    arr1.unshift(10)
    arr1.pop()
    arr1.shift()
    console.log(arr1)





//splice() function is used to remove any element in array

    let arr1=[10,20,30,40]
    arr1.splice(1,1)
    arr1.splice(2,0,50,60,70)
    console.log(arr1)






//findIndex() function is used to index of particular element

    let arr1=[10,20,15,56,60]
    console.log(
        arr1.findIndex((element,index)=>{
            return element==60
        })
    )



    arr1=[10,30,15,60]
    arr1.splice(
        arr1.findIndex((element,index)=>{
            return element ===60
        }),1)
        console.log(arr1)




    let ar1=[{"pid":111,"pname":"p1","pcost":100},
    {"pid":112,"pname":"p2","pcost":105},
    {"pid":113,"pname":"p3","pcost":150}]
    ar1.splice(
        ar1.findIndex((element,index)=>{
            return element.pname === "p1"
        }),1)
        console.log(ar1)
 




    slice(): This function is used to print from certain element to required element in array

    let ar1=[10,20,30,40]
    console.log(ar1.slice(0,2))
    console.log(ar1.slice(0,3))





concatation of arrays: This is introduced in es6 and its symbol is "..."


    let ar1=[10,20,30]
    let ar2=[50,60,70]
    console.log([...ar1,...ar2])





    let arr=[10,20,30,40,50,60,70]
    console.log([...arr.slice(3),...arr.slice(0,3)])
   console.log(
       [arr.slice(3).reduce((fstvalue,nxtvalue)=>{
           return fstvalue+nxtvalue
       }),arr.slice(0,3).reduce((fstvalue,nxtvalue)=>{
           return fstvalue+nxtvalue
       })
    ]
   )






/*

    Immutability: Providing exact duplicate copy for verification
    * By using this code comparison is easy
    *Here ...(spread) operator is used
    *It takes more memory

    Mutability: Modifying the original file is called Mutability
    *Here "=" we use
    *Here code execute Fast
    *It takes less memory







    let ar1=[10,20,30,40]
    let ar2=ar1;
    console.log(ar1)
    console.log(ar2)
    ar1.push(60)
    console.log(ar1)





    let ar1=[10,20,30,40]
    let ar2=[...ar1];
    ar1.push(52)
    console.log(ar2)
    console.log(ar1)






    let obj1={
        key1:"pair",
        key2:100
    }
    let obj2=obj1
    obj1.key3="hello"
    console.log(obj2)






    let obj1={
        key1:"pair",
        key2:"hi"
    }
    let obj2={...obj1}
    obj1.key3=100
    console.log(obj2)
    console.log(obj1)







//find() : This function is used to find particular element is exist or Not 

    console.log(
        [1,2,3,4].find((element,index)=>{
            return element===3;
        })
    )





    let ar=[10,20,3,4,5,60]
    if(ar.find((element,index)=>{
        return element===5;
    })){
        ar.splice(ar.findIndex((element,index)=>{
            return element===5
        }),1)   
    }
    console.log(ar)








-> includes()= This function is used to search the element which gives output in boolean format


    console.log(
        [1,2,3,4].includes(4)
    )





-> copyWithin()=This functiomn is used to shift the indexes

    let ar1=[1,3,4,5]
    ar1.copyWithin(2)
    console.log(ar1)       //[ 1, 3, 1, 3 ]


    ar1=[1,2,3,4,5,6]
    ar1.copyWithin(0,6)
    console.log(ar1)        //[ 1, 2, 3, 4, 5, 6 ]


    let ar2=[1,2,3,4,5,6,7,8]                  
        ar2.copyWithin(3,7)
        console.log(ar2)                                                      
                                                        
    //[
        1, 2, 3, 8,
        5, 6, 7, 8
    ]                             
       

    let ar1=[1,2,3,4,5,6,6,7]
    ar1.copyWithin(5,2)
    console.log(ar1)
  //[
    1, 2, 3, 4,
    5, 3, 4, 5
  ]


    let ar1=[1,2,3,4,5,6,7,8,9,10]
    ar1.copyWithin(2,3,7)
    console.log(ar1)

    //[
        1, 2, 4, 5,  6,
        7, 7, 8, 9, 10
    ]







*indexOf()= This function won't created indexes to repeated elements in array

    let ar1=[1,2,3,3,3,4,4]
    ar1.forEach((element,index)=>{
        console.log(ar1.indexOf(element))
    })                                        //[0,1,2,2,2,5,5]

*/

let ar1=[10,20,30,20,30,10]
console.log(
    ar1.filter((element,index)=>{
        return ar1.indexOf(element) === index;
    })
)                                            //[ 10, 20, 30 ]