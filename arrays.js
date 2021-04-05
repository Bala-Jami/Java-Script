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



    let ar1=[10,20,30,20,30,10]
    console.log(
        ar1.filter((element,index)=>{
            return ar1.indexOf(element) === index;
        })
    )                               //[ 10, 20, 30 ]





sort()= This function is used to arrange the elements of array in ascending or descending order
--> "ar1-ar2" represents ascending order
--> "ar2-ar1" represents descending order 


    console.log(
        [1,,5,4,3,8,8,10,7].sort((ar1,ar2)=>{
            return ar2-ar1
        })[2]
    )                       //8




    console.log(
        [1,,5,4,3,8,8,10,7].sort((ar1,ar2)=>{
            return ar1-ar2
        })[2]
    )                       //4




    console.log(
        [1,,5,4,3,8,8,10,7].sort((ar1,ar2)=>{
            return ar1-ar2
        })
    )                     //[ 1, 3, 4, 5, 7, 8, 8, 10, <1 empty item> ]
    






--> forEach()=This function is used to iterate the array elements


[1,2,3,4].forEach(
    (element,index)=>{
        console.log(element,index)
    }
)



[{"pid":"brand1","pname":"shirt","pqty":14},
{"pid":"brand2","pname":"pant","pqty":17},
{"pid":"brand3","pname":"short","pqty":18}].forEach((element,index)=>{
    console.log(index,element.pid,element.pname,element.pqty)
})






--> for...in loop= This loop is used to iterate the json objects


for(let var1 in {
    "pid":"brand1","pname":"shirt","pqty":14
}){
    console.log(var1,typeof var1)
}
                    //  pid string
                    //  pname string
                    //  pqty string



let var1={"pid":"brand1","pname":"shirt","pqty":14}
for(let obj1 in var1){
    console.log(obj1,typeof obj1,var1[obj1])
}

          //  pid  string  brand1
        //    pname  string  shirt
         //   pqty  string   14








--> for...of loop= this loop is used to iterate the data structures


    for(let value of [1,2,3,4,5]){
        console.log(value)
    }







-->some() = If atleast one element satisfies the condition then it returns true

    console.log(
        [1,2,3,4].some((element,index)=>{
            return element >= 4
        })
    )                       //true






-->every() = Here all elements should satisfies the condition then only it returns true

    console.log(
        [1,2,3,4].every((element,index)=>{
        return element >= 3
        })
    )                   //false  





--> Fill() = This function is used to replace the existed elements with new elements

    let ar1=[10,20,30,4]
    ar1.fill(50)
    console.log(ar1)            //[ 50, 50, 50, 50 ]


    let ar1=[10,30,20]
    console.log(ar1.fill(50))   //[ 50, 50, 50 ]



    let ar1=[10,30,20,4,5]
    console.log(ar1.fill(100,1,3))      //[ 10, 100, 100, 4, 5 ]




-->flat() = This function is used to create single dimensional array or it can change multi dimensional array to single dimensional array

console.log(
    [1,[2,3,4],[3,4],[5,6]].flat(1)
)                               //[ 1 ,2 ,3 ,4 ,3 ,4 ,5 , 6 ]


let ar1=[1,[2,3,4],[3,4],[5,6]]
let ar2=ar1.flat(1)
console.log(
    ar2.filter((element,index)=>{
    return ar2.indexOf(element) === index
  })
)                           //[ 1, 2, 3, 4, 5, 6 ]



console.log(
    [1,[[[3,4]]],[[[[5]]]],[[[6,7]]]].flat(Infinity)
)                       //[ 1, 3, 4, 5, 6, 7 ]



console.log(
    [1,[[[3,4]]],[[[[5]]]],[[[6,7]]]].flat(Infinity).reduce((fstva,nxtval)=>{
        return fstva+nxtval
    })
)                       //26








--> flatMap() = The Combination of flat and map function is called flatMap


let ar1=[1,2,3]
let ar2=["one","two","three"]
console.log(
    ar1.map((element,index)=>{
        return[element,ar2[index]]
    }).flat(Infinity)
)                               //[ 1, 'one', 2, 'two', 3, 'three' ]


    let ar1=[1,2,3]
    let ar2=["one","two","three"]
    console.log(
        ar1.flatMap((element,index)=>{
            return [element,ar2[index]]
        })
    )                           //[ 1, 'one', 2, 'two', 3, 'three' ]





--> reverse() = This function is used to reverse the array elements


    console.log(
        [1,2,3,45].reverse()
    )






--> Join():- This function is used to join the characters

    console.log(
        Array.from("Hello").reverse().join(" ")
    )                                       //o l l e H





--> padStart:- This function is used to add special characters at begining or increase the characters 

console.log(
    "hello".padStart(10,"@")
)                                       //@@@@@hello





--> padEnd:- This function is used to add or increase the characters at end or length of the string


    console.log(
        "hello".padEnd(10,"@")
    )                                       //hello@@@@@





--> substr():- This is used to print the string which is presented in main string

console.log(
    "Wlcome to my palace".substr(7,2)      //here 7 = index, 2 = length of required character
)                                       //to 


--> substring():- same to above function but method of execution is different
    console.log("Wlcome to my palace".substring(7,9)        //here 7 = include index and 9 = exclude index
)                                             //to





--> repeat():- This function is used to repeat the elements 

console.log("hi".repeat(3))             //hihihi




--> lastIndexOf():- This function is used to know the index of repeated Element

    let ar1=[10,10,3,5,5,3,10,4,5]
    console.log(
        ar1.lastIndexOf(5)
    )                                       //8




    *Here trim() function is used to remove spaces at begining and ending
    *trimStart() function is used to remove spaces at begining
    *trimEnd() function is used to remove spaces at ending
*/

        let str="  wlcme to palace  "
        console.log(str.length)             //19
        console.log(str.trim().length)      //15
        console.log(str.trimStart().length) //17
        console.log(str.trimEnd().length)   //17



        console.log(
            "wlcm to Es11".split("").map((element,index)=>{
                return[element]
            })
        )                               // [
                                                [ 'w' ], [ 'l' ],
                                                [ 'c' ], [ 'm' ],
                                                [ ' ' ], [ 't' ],
                                                [ 'o' ], [ ' ' ],
                                                [ 'E' ], [ 's' ],
                                                [ '1' ], [ '1' ]
                                         //   ]


   console.log(
            "wlcm to Es11".split(" ").map((element,index)=>{
          return[element]
      })
 )                                      //[ [ 'wlcm' ], [ 'to' ], [ 'Es11' ] ]
