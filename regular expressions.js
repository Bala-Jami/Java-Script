/* 
    -- Regular Expressions :- These are also called as "Validations"
    * This is used to check the condition or string is present in given regular expression by using "match()"

    - If it satisfies then output is "array"
    - If not satisfies then output is "null"
*/
    console.log("baluIt".match(/^[A-Za-z]+$/))      // [ 'baluIt', index: 0, input: 'baluIt', groups: undefined ]

    console.log("baluIt98".match(/^[A-Za-z]+$/))    // null

    console.log("1234568970".match(/^\d{10}$/))     // [ '1234568970', index: 0, input: '1234568970', groups: undefined ]

    console.log("123456897A".match(/^\d{10}$/))     // null

    console.log("111-111-111-2211".match(/(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/))
                                    //['111/111/1111','/',index: 4,input: '111/111/111/1111', groups: undefined]
                                        
                                        
                                        
                                        
                                       
                                    