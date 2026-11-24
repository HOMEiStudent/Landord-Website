/*
 * HOMEi PM release behaviour.
 *
 * Both blocks are ported as they are from the approved design
 * HOMEi-PM-release-handover/designs/Release Home.dc.html, as the pack's
 * README instructs. Do not rewrite them.
 *
 *  1. Offer countdown. Counts to 1 Feb 2027 00:00 UK time in weeks, days
 *     and hh:mm:ss, and hides itself once the date passes. It is also
 *     governed by the OFFER_ACTIVE switch in js/config.js, which hides
 *     every piece of offer content at once.
 *  2. Swipe-row dots. Phone only. Adds position dots under .hx-scroll,
 *     .hx-rows and .hx-fan rows and follows the active card.
 */

/* 1. Offer countdown */
(function(){var end=Date.UTC(2027,1,1,0,0,0);function p(n){return (n<10?'0':'')+n}
function tick(){var ms=end-Date.now();var w=document.querySelectorAll('.hx-cd-wrap');if(ms<=0){for(var i=0;i<w.length;i++)w[i].style.display='none';return}
var D=Math.floor(ms/86400000),wk=Math.floor(D/7),d=D%7,h=Math.floor(ms%86400000/3600000),m=Math.floor(ms%3600000/60000),s=Math.floor(ms%60000/1000);
var t=(wk?wk+(wk==1?' week ':' weeks '):'')+d+(d==1?' day ':' days ')+p(h)+':'+p(m)+':'+p(s);var c=document.querySelectorAll('.hx-cd');for(var j=0;j<c.length;j++)c[j].textContent=t;for(var k=0;k<w.length;k++)w[k].style.display='inline-block'}
tick();setInterval(tick,1000)})();

/* 2. Swipe-row dots */
(function(){function mk(el){if(el.getAttribute('data-dots'))return;var k=[].filter.call(el.children,function(c){return !/hx-npho/.test(c.className)});if(k.length<2)return;el.setAttribute('data-dots','1');
var d=document.createElement('div');d.className='hx-dots';d.setAttribute('aria-hidden','true');d.style.display='none';d.style.order=getComputedStyle(el).order;
for(var i=0;i<k.length;i++)d.appendChild(document.createElement('i'));el.parentNode.insertBefore(d,el.nextSibling);
function up(){var m=el.scrollWidth-el.clientWidth,n=k.length,ix=m>0?Math.round(el.scrollLeft/m*(n-1)):0;for(var j=0;j<n;j++)d.children[j].className=j==ix?'on':''}
el.addEventListener('scroll',up,{passive:true});up()}
function init(){var s=document.querySelectorAll('.hx-scroll,.hx-rows,.hx-fan');for(var i=0;i<s.length;i++)mk(s[i])}
init();document.addEventListener('DOMContentLoaded',init);setTimeout(init,600);setInterval(init,2000)})();
