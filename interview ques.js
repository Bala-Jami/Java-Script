 /*
    console.log(3>2>1)  //false




    var a=1
    function outer(){
        var a=2;
        function inner(){
            a++
            var a=4
            console.log(a)
        }
        inner()
    }
    outer()                 //4





let b=["file/dir1/hi",
     "file/dir2/hello",
     "file/dir2/hi",
     "file/dir1/hello"]
console.log(
         b.filter((element,index)=>{
             return element.includes("dir2")
     })
)                               //[ 'file/dir2/hello', 'file/dir2/hi' ]



let data=b=["file/dir1/hi",
            "file/dir2/hello",
            "file/dir2/hi",
            "file/dir1/hello"]
console.log(
    data.filter((element,index)=>{
        return element.match(/dir2/g)
    })
)                           //[ 'file/dir2/hello', 'file/dir2/hi' ]








// --> To convert string to array then we use Array.from()

// challenge :- print hello as olleh

    console.log(
        Array.from("Hello")                 
    )                                            //[ 'H', 'e', 'l', 'l', 'o' ]

    console.log(
        Array.from("Hello").reverse()
    )                                           //[ 'o', 'l', 'l', 'e', 'H' ]

    console.log(
        Array.from("Hello").reverse().toString()        
    )                                                //o,l,l,e,H

    console.log(
        Array.from("Hello").reverse().toString().replace(/,/g," ")       
    )                                                                    //o l l e H
                        




                              
    console.log(
        "wlcm to Es11".split("")
    )                               //      [  'w', 'l', 'c', 'm',
                                               ' ', 't', 'o', ' ',
                                        //     'E', 's', '1', '1']
                                        

    console.log(
        "wlcm to Es11".split("").map((element,index)=>{
            return[element]
        })
    )                                           //[ [ 'wlcm' ], [ 'to' ], [ 'Es11' ] ] 

*/








