document.addEventListener('DOMContentLoaded', function() {
    let count =0
    function nextimage(){
        count++;
        if(count>= 5){
            count=0

        }
    var margem = -(count)*100
    document.getElementById("img1").style.marginLeft = margem + '%'
    console.log(count)
    console.log(margem)
    }
    setInterval(function(){
        nextimage();
    
        },3000)
   
});