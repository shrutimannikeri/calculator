document.addEventListener("DOMContentLoaded", function(event) {
    let result=document.querySelector("#resultt")
    //input filed just for test
    let resultt=document.querySelector("#result")
    let history = document.querySelector('#history');

    let clear=document.querySelector("#clear")
    let deletesinglenum=document.querySelector(".delete_single_value")
    let operator_btn = document.querySelectorAll('.operator_btn');
    let equalto=document.querySelector("#equal")
    let initialvalue = "";
    //it iterate all  operator_btn one by one it will 
    operator_btn.forEach((operator_btn,ind)=>{
        operator_btn.addEventListener("click",function(){
            let text=this.innerHTML
            initialvalue =initialvalue+text;
            result.innerHTML = initialvalue;
            //console.log( result.innerHTML = initialvalue)
        })
    })

    equalto.addEventListener('click',function(){
        if(result.innerHTML!=""){
        history.innerHTML=result.innerHTML
        result.innerHTML=eval(result.innerHTML);
        initialvalue=eval(result.innerHTML)
        resultt.value=eval(result.innerHTML)
        }else{
            alert('please enter any Number');
            }
    })

/*clear all number*/
clear.addEventListener('click',function(){
    history.innerHTML=""
    result.innerHTML=""
    initialvalue=""
})
/*delete single number*/
deletesinglenum.addEventListener('click',function(){
    result.innerHTML= result.innerHTML.substring(0, result.innerHTML.length-1)
    initialvalue=result.innerHTML
})
})


