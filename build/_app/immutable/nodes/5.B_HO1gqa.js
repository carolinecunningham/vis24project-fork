import{i as A,k as z,U as F,c as N,m as P,b as Y,l as L,d as D,o as M,e as S}from"../chunks/disclose-version.BW5RF7my.js";import{p as T,a as W,s as U,g as k}from"../chunks/runtime.DoKzdPu0.js";import{o as Z}from"../chunks/main-client.CkCemnIN.js";import"../chunks/transform.s-_yf9sf.js";import{b as j,l as O,a as R,m as q,c as G}from"../chunks/linear.kWhcqL3j.js";import{s as H}from"../chunks/select.vMFQoPFd.js";import{c as I}from"../chunks/dsv.XhNTmijJ.js";import{w as J,a as K,c as _}from"../chunks/array.DIqrq8cy.js";function B(e){this._context=e}B.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,i){switch(e=+e,i=+i,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,i):this._context.moveTo(e,i);break;case 1:this._point=2;default:this._context.lineTo(e,i);break}}};function Q(e){return new B(e)}function V(e){return e[0]}function X(e){return e[1]}function E(e,i){var f=_(!0),a=null,s=Q,o=null,C=J(l);e=typeof e=="function"?e:e===void 0?V:_(e),i=typeof i=="function"?i:i===void 0?X:_(i);function l(n){var u,g=(n=K(n)).length,v,p=!1,r;for(a==null&&(o=s(r=C())),u=0;u<=g;++u)!(u<g&&f(v=n[u],u,n))===p&&((p=!p)?o.lineStart():o.lineEnd()),p&&o.point(+e(v,u,n),+i(v,u,n));if(r)return o=null,r+""||null}return l.x=function(n){return arguments.length?(e=typeof n=="function"?n:_(+n),l):e},l.y=function(n){return arguments.length?(i=typeof n=="function"?n:_(+n),l):i},l.defined=function(n){return arguments.length?(f=typeof n=="function"?n:_(!!n),l):f},l.curve=function(n){return arguments.length?(s=n,a!=null&&(o=s(a)),l):s},l.context=function(n){return arguments.length?(n==null?a=o=null:o=s(a=n),l):a},l}var $=S('<input type="text" placeholder="Enter Zipcode"> <button>Update Chart</button> <svg width="960" height="500"></svg>',!0);function st(e,i){W(i,!1);let f=P(""),a,s,o;function C(){const r={top:50,right:250,bottom:80,left:70},x=960-r.left-r.right,c=500-r.top-r.bottom;a=H("svg").attr("viewBox",`0 0 1000 ${c+r.top+r.bottom}`).append("g").attr("transform",`translate(${r.left},${r.top})`),s=j().range([0,x]).padding(.2),a.append("g").attr("class","x-axis").attr("transform",`translate(0,${c})`),a.append("text").attr("class","x label").attr("text-anchor","middle").attr("x",x/2).attr("y",c+40).text("Year"),o=O().range([c,0]),a.append("g").attr("class","y-axis"),a.append("text").attr("class","y label").attr("text-anchor","middle").attr("transform","rotate(-90)").attr("y",-50).attr("x",-c/2).text("Number of Distinct Buildings or Complaints in a Year"),a.append("text").attr("class","chart title").attr("x",x/2).attr("y",-20).attr("text-anchor","middle").style("font-size","16px").style("font-weight","bold").text("Complaints Filed about Condominium Buildings in the Boston and Cambridge Area");const d=a.append("g").attr("class","legend").attr("transform",`translate(${x+50}, 20)`),b=[{color:"steelblue",label:"# of Complaints Filed Per Year"},{color:"red",label:"# of Distinct Buildings the Complaints are Filed About"}];let h=0;b.forEach(m=>{const y=m.label.length*8;h=Math.max(h,y)}),h+=40,d.append("rect").attr("class","legend-box").attr("x",0).attr("y",0).attr("width",h).attr("height",b.length*20+10).attr("fill","none").attr("stroke","black"),b.forEach((m,y)=>{const t=d.append("g").attr("transform",`translate(0, ${y*20+10})`);t.append("rect").attr("x",0).attr("y",0).attr("width",10).attr("height",10).attr("fill",m.color),t.append("text").attr("x",20).attr("y",9).attr("font-size","10px").text(m.label)})}async function l(p){const r=await I("complaints_year_zipcode.csv");r.columns=r.columns.map(t=>t.trim().replace(/[^\x20-\x7E]+/g,""));const x=r.filter(t=>t["Zip Code"]===p);let c={};x.forEach(t=>{const w=t["Date (Years)"];c[w]||(c[w]={count:0,discounted:0}),c[w].count+=+t["Number of Complaints Filed Per Year"],c[w].discounted+=+t["Number of Distinct Condominum Buildings the Complaints are Filed About"]});let d=Object.keys(c).map(t=>({year:t,count:c[t].count,discounted:c[t].discounted}));const b=E().x(t=>s(t.year)+s.bandwidth()/2).y(t=>o(t.count)),h=E().x(t=>s(t.year)+s.bandwidth()/2).y(t=>o(t.discounted));s.domain(d.map(t=>t.year)),a.select(".x-axis").transition().duration(750).call(R(s)).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end"),o.domain([0,q(d,t=>Math.max(t.count,t.discounted))]),a.select(".y-axis").transition().duration(750).call(G(o));let m=a.selectAll(".line-count").data([d],t=>t.year),y=a.selectAll(".line-discounted").data([d],t=>t.year);m.transition().duration(750).attr("d",b(d)),y.transition().duration(750).attr("d",h(d)),m.empty()&&a.append("path").data([d]).attr("class","line-count").attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",b),y.empty()&&a.append("path").data([d]).attr("class","line-discounted").attr("fill","none").attr("stroke","red").attr("stroke-width",1.5).attr("d",h)}function n(){k(f)?l(k(f)):alert("Please enter a zipcode.")}Z(()=>{C()}),A();var u=M(e,!0,$),g=Y(u);L(g);var v=D(D(g,!0));z(g,()=>k(f),p=>U(f,p)),F("click",v,n,!1),N(e,u),T()}export{st as component};
