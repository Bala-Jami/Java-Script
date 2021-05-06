/*

// Passing one function to another function as an argument is called callback 


function fun1(ar1){
    console.log(ar1())
}
fun1(function fun2(){
    return "hlo"
})              // hlo





function mern(ar1,ar2,ar3){
    console.log(ar1(),ar2(),ar3())
}
mern(function front(){
    return "react"
},function back(){
    return "node"
},function base(){
    return "mongodb"
})              // react node mongodb







let my=(successcalback,errorcalback)=>{
    console.log(successcalback(),errorcalback())
}
my(()=>{
    return "success"
},()=>{
    return "error"
})                      //success error





let fun2=(ar1)=>{
    return ar1("hlo")
}
fun2((parameter1)=>{
    console.log(parameter1)
})          //hlo







let fun3=(ar1,art2,ar3)=>{
    return ar1("Mongo")+art2("DB")+ar3("Database")
}
fun3((par1)=>{
    console.log(par1)
},(par2)=>{
    console.log(par2)
},(par3)=>{
    console.log(par3)
})






let add=(num,callback)=>{
    return callback(num+5,false)
}
add(5,(addresponse,error)=>{
    if(!error){
        console.log(addresponse)
    }
})                      //10





let add1=(num,call)=>{
    return call(num+5,false)
}
let sub=(num,call)=>{
    return call(num-3,false)
}
add1(5,(addresp,error)=>{
    if(!error){
        sub(addresp,(subresp,error)=>{
            if(!error){
                    console.log(subresp)
          }
        })
    }
})                          // 7







let add2=(num,callback)=>{
    return callback(num+5,false)
}
let sub1=(num,callback)=>{
    return callback(num-5,false)
}
let mul=(num,callback)=>{
    return callback(num*2,false)
}
add2(7,(addres,error)=>{
    if(!error){
        sub1(addres,(subres,error)=>{
            if(!error){
                mul(subres,(mulres,error)=>{
                    if(!error){
                        console.log(mulres)
                    }
                })
            }
        })
    }
})                          // 14







--> In the above case 3rd callback is depends on second callback where as second callback is depends on first callback ,
    this type of applications is called as callback hell
    * This callback hell is not suggestable in real time this can overcome bye Promises






function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5)
    })
}
function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-2)
    })
}
function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*4)
    })
}
(async()=>{
    let addRes=await add(5)
    let subRes=await sub(5)
    let MulRes=await mul(5)
    console.log(addRes,subRes,MulRes)
})()                              // 10 3 20





var a ={}
var b=a
a.v=1;
b.v=2
console.log(a.v)        // 2



var Myclass= function (n){
    this.n=n
}
Myclass.square=function(){
    return (this.n * this.n)
}
var object = new Myclass(4)
alert(object.square())              // error

*/

myclass=function(){
    this.a="hlo"
    this.b="hi"
}
myclass.prototype.a='john'
myclass.prototype.c=12
obj=new myclass()