/* 
* @Author: anchen
* @Date:   2015-11-25 22:00:21
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-26 13:34:48
*/

function enter(obj)
{
    var oSpan=obj.getElementsByTagName('span')[0];

    obj.onmouseenter=function (ev)
    {
        var oEvent=ev || Event;
        //var n=getN(obj,oEvent);
        var n=getN(obj, oEvent);
        //console.log(n);
       
        switch(n)
        {
            case 0:
                oSpan.style.left='365px';
                oSpan.style.top=0;
                break;
            case 1:
                oSpan.style.left=0;
                oSpan.style.top='280px';
                break;
            case 2:
                oSpan.style.left='-365px';
                oSpan.style.top=0;
                break;
            case 3:
                oSpan.style.left=0;
                oSpan.style.top='-280px';
                break;
        }
        move(oSpan,{top:0,left:0},{duration:400});
    };
}
function leave(obj){
    var oSpan=obj.getElementsByTagName('span')[0];
    obj.onmouseleave=function (ev){
        var oEvent=ev || event;
        var n=getN(obj, oEvent);
        switch (n)
        {
            case 0:
                var left=365;
                var top=0;
                break;
                
            case 1:
                var left=0;
                var top=280;
                break;
            
            case 2:
                var left=-365;
                var top=0;
                break;
                
            case 3:
                var left=0;
                var top=-280;
                break;
        }
        
        move(oSpan, {top:top, left:left},{duration:400});
    };
};
function getN(obj, ev)
{
    var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;

    var y=obj.offsetTop+obj.offsetHeight/2-ev.clientY;
   
    console.log('x'+x+';'+'y'+y+';')
    return Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
    
}

function d2a(d)
{
    return d*180/Math.PI;
}