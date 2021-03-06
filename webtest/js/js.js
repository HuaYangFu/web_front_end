window.onload = function(){
    var oDiv = document.getElementById('top');
    var timer = null;
    var iSpeed = 0;
    oDiv.onmouseover = function(){
       startMove(300);
    };
    oDiv.onmouseout = function(){
       startMove(30);
    };
    function startMove(iTarget){
        clearInterval(timer);
        timer = setInterval(function(){
           iSpeed += (iTarget - oDiv.offsetHeight)/6;
           iSpeed *= 0.75;
           if(Math.abs(iSpeed)<=1 && Math.abs(iTarget - oDiv.offsetHeight)<=1){
              clearInterval(timer);
              iSpeed = 0;
              oDiv.style.height = iTarget + 'px';
           }else{
              var H = oDiv.offsetHeight + iSpeed;
              if(H < 0){
                   H = 0;
              }
              oDiv.style.height = H + 'px';
           }
        },30)
    }
}