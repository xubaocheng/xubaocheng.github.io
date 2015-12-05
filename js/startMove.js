/* 
* @Author: anchen
* @Date:   2015-11-20 16:54:40
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 14:36:38
*/

(function (global){
    var top=0;
    var ispeed=0;
    var timer=null;
    global.startMove=function (obj,iTarget)
    {
        clearInterval(timer);
        timer=setInterval(function (){
            ispeed+=(iTarget-top)/5;
            ispeed*=0.7;
            top+=ispeed;
            obj.style.top=Math.round(top)+'px';

            if(Math.round(ispeed)==0 && Math.round(top)==iTarget)
            {
                clearInterval(timer);
            }
        },30);
    };
})(window);