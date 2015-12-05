/* 
* @Author: anchen
* @Date:   2015-11-24 19:10:25
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-03 15:15:36
*/

window.onload=function ()
{

    function addEvent(obj,sEv,fnName)
    {
        if(obj.addEventListener)
        {
            return obj.addEventListener(sEv,fnName,false);
        }
        else
        {
            return obj.attachEvent('on'+sEv,fnName);
        }
    }
    // function removeEvent(obj,sEv,fnName)
    // {
    //     if(obj.removeEventListener)
    //     {
    //         return obj.removeEventListener(sEv,fnName,false);
    //     }
    //     else
    //     {
    //         return obj.detachEvent('on'+sEv,fnName);
    //     }
    // }
    

    //导航
    ;(function (){
        var oNav=document.getElementById('nav');
        var aLi=oNav.children;
        var oBox=aLi[aLi.length-1];
        //var oBody=document.getElementsByTagName('body')[0];
        var oWarp=document.getElementById('warp');
        var aTab=getClass(oWarp,'tab');
        var iNow=0;
        for(var i=0; i<aLi.length-1;i++)
        {
            aLi[i].index=i;

            addEvent(aLi[i],'mouseover',function (){
                startMove(aLi[i],(this.offsetTop));
            });
            addEvent(aLi[i],'mouseout',function (){
               startMove(oBox,(iNow*aLi[0].offsetHeight));
            });

            addEvent(aLi[i],'click',function(){
                var j=this.index;
                var oTab_h=aTab[j].offsetHeight;
                //alert(oTab_h);
                move(oWarp,{top:-j*oTab_h});
                iNow=this.index;
            });
            
        };
    })();
	//下一个
    ;(function (){
        var oBig=document.getElementById('big_ul');
        var aLi=oBig.children;
        var aLiH=aLi[0].offsetHeight;
        var oLittle=document.getElementById('little_ol');
        var aBtn=oLittle.children;
        var oNext=aBtn[aBtn.length-1];
        var now=0;
        var timer=null;
        clearInterval(timer);
        timer=setInterval(function (){

            oNext.style.top=now*60+'px';
            oBig.style.top=-now*aLiH+'px';
            now++;
            if(now > 4)
            {
                now=0;
            }
            
        },2000)
       
    })();
    //Typing
    ;(function (){
        var oTyp=document.getElementById('typing');
        var str='懂得尊重别人，也尊重自己的心声，学会调整，遇见困难了，多想想，没什么大不了；遇见喜事了，也别太放在心上，因为那只是一瞬间。懂得，一生中，名利只是过眼云烟，拥有再多，不如有份好心情     ————努力';   
    
        for(var i=0; i<str.length; i++){
            var oSpan=document.createElement('span');
            oSpan.innerHTML=str.charAt(i);
            oTyp.appendChild(oSpan);
        }
        
        var i=0;
        var timer=null;
        var aSpan=oTyp.children;
        timer=setInterval(function(){
            aSpan[i].className='on';
            
            i++;
            if(i==aSpan.length){
                clearInterval(timer);   
            }
        },100);


    })();
	
	

    //进度条
    ;(function (){
        var oBar_html=document.getElementById('bar_html');
        var oBar_css=document.getElementById('bar_css');
        var oBar_js=document.getElementById('bar_js');
        var oBar_css3=document.getElementById('bar_css3');
        var oBar_html5=document.getElementById('bar_html5');

        move(oBar_html,{width:700},{easing:Tween.Elastic.easeInOut,duration:4000});
        move(oBar_css,{width:700},{easing:Tween.Elastic.easeInOut,duration:4000});
        move(oBar_js,{width:550},{easing:Tween.Elastic.easeInOut,duration:4000});
        move(oBar_css3,{width:400},{easing:Tween.Elastic.easeInOut,duration:4000});
        move(oBar_html5,{width:400},{easing:Tween.Elastic.easeInOut,duration:4000});
    })();

	
	// 个人作品页切换
	;(function (){
		var oThird=document.getElementById('third');
		var aUl=oThird.getElementsByTagName('ul');
		var aBtn=oThird.getElementsByTagName('div');
		for(var i=0; i<aBtn.length; i++)
		{
			(function (index){
				aBtn[i].onclick=function ()
				{
					for(var i=0; i<aBtn.length; i++)
					{
						aBtn[i].style.background='#ccc';
						aUl[i].className='clearfix put_wall';	
					}
					this.style.background='#6cf';	
					aUl[index].className='clearfix put_wall active';
				};	
			})(i);
		} 
		
	})();
    //拉勾 穿墙效果

    ;(function (){
        var oPut_wall=document.getElementById('wall');
        var aLi_c=oPut_wall.children;
       
        for(var i=0; i<aLi_c.length; i++)
        {
            enter(aLi_c[i]);
            leave(aLi_c[i]);
        }
    })();
	
	
    // 留言板  账号注册登录时执行
    // 注册
   ;(function(){
			var oUser=document.getElementById('add_user');	
			var oPass=document.getElementById('add_pass');
			var oBtn=document.getElementById('add_btn');
			
			oBtn.onclick=function(){
				
				ajax({
					url:'user.php',
					data:{
						act:'add',
						user:encodeURIComponent(oUser.value),
						pass:encodeURIComponent(oPass.value)	
					},
					success:function(str){
						var json=eval('('+str+')');
						if(json.error){
							alert('注册失败了:'+json.desc);
						}else{
							alert('注册成功了');
						}
					}	
				});	
			};
		})();	
		
		//用户登陆
		;(function(){
			var oUser=document.getElementById('login_user');	
			var oPass=document.getElementById('login_pass');
			var oBtn=document.getElementById('login_btn');
			var oA=document.getElementById('a1');
			oBtn.onclick=function(){
				
				ajax({
					url:'user.php',
					data:{
						act:'login',
						user:encodeURIComponent(oUser.value),
						pass:encodeURIComponent(oPass.value)	
					},
					
					success:function(str){
						var json=eval('('+str+')');
						if(json.error){
							alert('登陆失败了:'+json.desc);
						}else{
							//alert('登陆成功了');
							//alert(oA);
							oA.href='http://localhost/myshow/message.html';
						}
					}	
				});	
				
			};
		})();
	
		function getPos(obj)
		{
			var left=0;
			var top=0;
			// oDiv3 -> oDiv1 -> body -> null	
			while (obj)
			{
				left+=obj.offsetLeft;
				top+=obj.offsetTop;
				
				obj=obj.offsetParent;
			}
			
			return {left:left, top:top};
		}



    function getClass(oParent,sClass)
    {
        if(oParent.getElementsByClassName)
        {
            return oParent.getElementsByClassName(sClass);
        }
        else
        {
            var arr=[];
            var aEl=oParent.getElementsByTagName('*');
            var reg=new RegExp('\\d'+sClass+'\\d');
            for(var i=0; i<aEl.length;i++)
            {
                if(reg.test(aEl[i]))
                {
                    arr.push(aEl[i]);
                }
            }
            return arr;
        }
    }
};
