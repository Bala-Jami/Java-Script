/*  While calling function we can make some or few parameters 'optional'
    # It is represented by "?"
    # These are work only in "Type script" environment
    # Type script is the programming language which is follows 'OOPs' and it is published by 'microsoft'
    # 'conversion'of type script code to equivalent java script code technically called as "Transpilation"
    # "tsc(typescript compiler)" is the tool which is used for 'transpilation' */

  





  
  /*  function fun1(ar1?:string,ar2?:boolean):void{
        console.log(ar1,ar2)
    }
    fun1("Hello",true) */



    




    function fun1(ar2:string,ar1?:string,ar3:string="helo",...ar4):void{
        console.log(ar2,ar1,ar3,ar4)
    }
    fun1("hm","100","hi",12,12,"balu",143,"null",true)