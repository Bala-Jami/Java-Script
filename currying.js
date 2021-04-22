/*
// -- currying :- This is used to convert the complex business logic into simple busines logic

let fun1=(ar1)=>{
    return (ar2)=>{
        return (ar3)=>{
            console.log(ar1-ar2*ar3)
        }
    }
}
fun1(10)(2)(3)              // 4
*/

// above business logic in currying is

    let fun1=(ar1,ar2)=>{
        console.log(ar1+ar2)
        return fun2
    }
    let fun2=(ar1,ar2)=>{
        console.log(ar1*ar2)
        
    }
    fun1(10,2)(17,17)               // 12, 289
