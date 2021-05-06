let url="http://localhost:3000/products"
fetch(url).then(function (ar1){
    return ar1.json()
}).then(function (ar2){
    let a=0
    let search=document.getElementById("searchbtn")
    search.addEventListener("click",function (){
        let num=document.getElementById("count")
        let input=document.getElementById("inputsearch")
        a=input.Value
        num.Value=input.Value
        displaythought(a,ar2)
    })
    let nextthought=document.getElementById("next")
    nextthought.addEventListener("click",function(){
    let num=document.getElementById("count")
    num.Value=++a
    displaythought(num.Value,ar2)
    })
    let previousthought=document.getElementById("previous")
    previousthought.addEventListener("click",function(){
        let num=document.getElementById("count")
        if(num.Value<0){
            let thought1=document.getElementById("thought")
            thought1.innerHTML=`<b><i>You are at First quote </i></b>`
        }else{
            a=--num.Value
            displaythought(a,ar2)
        }
    })
    displaythought(0,ar2)
})
function displaythought(index,ar2){
    let thought2=document.getElementById("thought")
    if(ar2[index].author==null){
        data[index].author="unknown"
    }
    let htmlthought=`<div class="alert alert-outline-primary">
                        ${ar2[index].text}<br><span style="color:#00ffc5">${ar2[index.author]}
                        </span></div>`
    thought.innerHTML=htmlthought
}