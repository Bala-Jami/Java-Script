/*
    There are 3 extra functions are there for interview purpose they are :-
        1) call() 2) apply() 3) bind()
    
        -- The difference between call() and apply() is that In call() we have to supply values or parameters independently
        where as in apply() we can supply values or parameters in an array

    bind() :- this function is used to merge the two different memory locations
*/

    let obj1={"num1":10}
    function fun1(ar1,ar2){
        console.log(this.num1+ar1+ar2)
    }
    fun1.call(obj1,30,40)       // 80

    let ar=[30,40]
    fun1.apply(obj1,ar)         // 80

    let me=fun1.bind(obj1)
    me(20,4)
