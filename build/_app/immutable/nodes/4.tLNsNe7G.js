import{i as X,k as Y,U as B,c as tt,m as et,b as nt,l as rt,d as L,o as it,e as ot}from"../chunks/disclose-version.BW5RF7my.js";import{p as at,a as st,s as ct,g as S}from"../chunks/runtime.DoKzdPu0.js";import{o as ut}from"../chunks/main-client.CkCemnIN.js";import{o as lt}from"../chunks/transform.s-_yf9sf.js";import{c as ft}from"../chunks/colors.Cc3OSVma.js";import{c as P}from"../chunks/dsv.XhNTmijJ.js";import{s as w}from"../chunks/select.vMFQoPFd.js";function ht(t){var n=0,e=t.children,r=e&&e.length;if(!r)n=1;else for(;--r>=0;)n+=e[r].value;t.value=n}function dt(){return this.eachAfter(ht)}function pt(t,n){let e=-1;for(const r of this)t.call(n,r,++e,this);return this}function xt(t,n){for(var e=this,r=[e],i,o,a=-1;e=r.pop();)if(t.call(n,e,++a,this),i=e.children)for(o=i.length-1;o>=0;--o)r.push(i[o]);return this}function mt(t,n){for(var e=this,r=[e],i=[],o,a,s,c=-1;e=r.pop();)if(i.push(e),o=e.children)for(a=0,s=o.length;a<s;++a)r.push(o[a]);for(;e=i.pop();)t.call(n,e,++c,this);return this}function vt(t,n){let e=-1;for(const r of this)if(t.call(n,r,++e,this))return r}function yt(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})}function gt(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})}function _t(t){for(var n=this,e=wt(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r}function wt(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function At(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n}function kt(){return Array.from(this)}function bt(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t}function Mt(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n}function*Ct(){var t=this,n,e=[t],r,i,o;do for(n=e.reverse(),e=[];t=n.pop();)if(yield t,r=t.children)for(i=0,o=r.length;i<o;++i)e.push(r[i]);while(e.length)}function j(t,n){t instanceof Map?(t=[void 0,t],n===void 0&&(n=qt)):n===void 0&&(n=zt);for(var e=new N(t),r,i=[e],o,a,s,c;r=i.pop();)if((a=n(r.data))&&(c=(a=Array.from(a)).length))for(r.children=a,s=c-1;s>=0;--s)i.push(o=a[s]=new N(a[s])),o.parent=r,o.depth=r.depth+1;return e.eachBefore(jt)}function Dt(){return j(this).eachBefore(Et)}function zt(t){return t.children}function qt(t){return Array.isArray(t)?t[1]:null}function Et(t){t.data.value!==void 0&&(t.value=t.data.value),t.data=t.data.data}function jt(t){var n=0;do t.height=n;while((t=t.parent)&&t.height<++n)}function N(t){this.data=t,this.depth=this.height=0,this.parent=null}N.prototype=j.prototype={constructor:N,count:dt,each:pt,eachAfter:mt,eachBefore:xt,find:vt,sum:yt,sort:gt,path:_t,ancestors:At,descendants:kt,leaves:bt,links:Mt,copy:Dt,[Symbol.iterator]:Ct};function Nt(t){return t==null?null:Rt(t)}function Rt(t){if(typeof t!="function")throw new Error;return t}function $(){return 0}function Zt(t){return function(){return t}}const St=1664525,Ut=1013904223,F=4294967296;function Wt(){let t=1;return()=>(t=(St*t+Ut)%F)/F}function Ht(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Lt(t,n){let e=t.length,r,i;for(;e;)i=n()*e--|0,r=t[e],t[e]=t[i],t[i]=r;return t}function Pt(t,n){for(var e=0,r=(t=Lt(Array.from(t),n)).length,i=[],o,a;e<r;)o=t[e],a&&T(a,o)?++e:(a=Ft(i=$t(i,o)),e=0);return a}function $t(t,n){var e,r;if(U(n,t))return[n];for(e=0;e<t.length;++e)if(q(n,t[e])&&U(b(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(q(b(t[e],t[r]),n)&&q(b(t[e],n),t[r])&&q(b(t[r],n),t[e])&&U(V(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function q(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function T(t,n){var e=t.r-n.r+Math.max(t.r,n.r,1)*1e-9,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function U(t,n){for(var e=0;e<n.length;++e)if(!T(t,n[e]))return!1;return!0}function Ft(t){switch(t.length){case 1:return Gt(t[0]);case 2:return b(t[0],t[1]);case 3:return V(t[0],t[1],t[2])}}function Gt(t){return{x:t.x,y:t.y,r:t.r}}function b(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,s=n.r,c=o-e,l=a-r,h=s-i,d=Math.sqrt(c*c+l*l);return{x:(e+o+c/d*h)/2,y:(r+a+l/d*h)/2,r:(d+i+s)/2}}function V(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,s=n.y,c=n.r,l=e.x,h=e.y,d=e.r,x=r-a,p=r-l,m=i-s,y=i-h,g=c-o,v=d-o,u=r*r+i*i-o*o,A=u-a*a-s*s+c*c,k=u-l*l-h*h+d*d,f=p*m-x*y,_=(m*k-y*A)/(f*2)-r,M=(y*g-m*v)/f,C=(p*A-x*k)/(f*2)-i,D=(x*v-p*g)/f,R=M*M+D*D-1,z=2*(o+_*M+C*D),H=_*_+C*C-o*o,Z=-(Math.abs(R)>1e-6?(z+Math.sqrt(z*z-4*R*H))/(2*R):H/z);return{x:r+_+M*Z,y:i+C+D*Z,r:Z}}function G(t,n,e){var r=t.x-n.x,i,o,a=t.y-n.y,s,c,l=r*r+a*a;l?(o=n.r+e.r,o*=o,c=t.r+e.r,c*=c,o>c?(i=(l+c-o)/(2*l),s=Math.sqrt(Math.max(0,c/l-i*i)),e.x=t.x-i*r-s*a,e.y=t.y-i*a+s*r):(i=(l+o-c)/(2*l),s=Math.sqrt(Math.max(0,o/l-i*i)),e.x=n.x+i*r-s*a,e.y=n.y+i*a+s*r)):(e.x=n.x+e.r,e.y=n.y)}function I(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function J(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function E(t){this._=t,this.next=null,this.previous=null}function It(t,n){if(!(o=(t=Ht(t)).length))return 0;var e,r,i,o,a,s,c,l,h,d,x;if(e=t[0],e.x=0,e.y=0,!(o>1))return e.r;if(r=t[1],e.x=-r.r,r.x=e.r,r.y=0,!(o>2))return e.r+r.r;G(r,e,i=t[2]),e=new E(e),r=new E(r),i=new E(i),e.next=i.previous=r,r.next=e.previous=i,i.next=r.previous=e;t:for(c=3;c<o;++c){G(e._,r._,i=t[c]),i=new E(i),l=r.next,h=e.previous,d=r._.r,x=e._.r;do if(d<=x){if(I(l._,i._)){r=l,e.next=r,r.previous=e,--c;continue t}d+=l._.r,l=l.next}else{if(I(h._,i._)){e=h,e.next=r,r.previous=e,--c;continue t}x+=h._.r,h=h.previous}while(l!==h.next);for(i.previous=e,i.next=r,e.next=r.previous=r=i,a=J(e);(i=i.next)!==r;)(s=J(i))<a&&(e=i,a=s);r=e.next}for(e=[r._],i=r;(i=i.next)!==r;)e.push(i._);for(i=Pt(e,n),c=0;c<o;++c)e=t[c],e.x-=i.x,e.y-=i.y;return i.r}function Jt(t){return Math.sqrt(t.value)}function K(){var t=null,n=1,e=1,r=$;function i(o){const a=Wt();return o.x=n/2,o.y=e/2,t?o.eachBefore(O(t)).eachAfter(W(r,.5,a)).eachBefore(Q(1)):o.eachBefore(O(Jt)).eachAfter(W($,1,a)).eachAfter(W(r,o.r/Math.min(n,e),a)).eachBefore(Q(Math.min(n,e)/(2*o.r))),o}return i.radius=function(o){return arguments.length?(t=Nt(o),i):t},i.size=function(o){return arguments.length?(n=+o[0],e=+o[1],i):[n,e]},i.padding=function(o){return arguments.length?(r=typeof o=="function"?o:Zt(+o),i):r},i}function O(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function W(t,n,e){return function(r){if(i=r.children){var i,o,a=i.length,s=t(r)*n||0,c;if(s)for(o=0;o<a;++o)i[o].r+=s;if(c=It(i,e),s)for(o=0;o<a;++o)i[o].r-=s;r.r=c+s}}}function Q(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}const Kt=ft("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");var Ot=ot('<input type="text" placeholder="Enter Zipcode"> <button>Update Chart</button> <svg></svg> <div class="legend"></div>',!0);function ee(t,n){st(n,!1);let e=et(""),r,i=960,o=500;const a={top:20,right:20,bottom:30,left:40},s=lt(Kt);async function c(p){const m=await P("complaints_count_zipcode.csv");m.columns=m.columns.map(f=>f.trim().replace(/[^\x20-\x7E]+/g,""));const y=m.filter(f=>f["Zip Code"]===p),g=K().size([i-a.left-a.right,o-a.top-a.bottom]).padding(10),v=j({children:y}).sum(f=>+f["Count of Description"]),u=g(v).descendants();r=w("svg").attr("width",i).attr("height",o).append("g").attr("transform",`translate(${a.left}, ${a.top})`),r.selectAll("circle").data(u.slice(1)).enter().append("circle").attr("cx",f=>f.x).attr("cy",f=>f.y).attr("r",f=>f.r).attr("fill",f=>s(f.data["Description (group)"])).attr("opacity",.7).on("mouseover",function(f,_){w(this).append("title").text(_.data["Description (group)"])}).on("mouseout",function(){w(this).select("title").remove()}),console.log(s.domain());const k=w(".legend").selectAll(".legend-item").data(s.domain()).enter().append("div").classed("legend-item",!0);k.append("div").classed("legend-color",!0).style("background-color",f=>s(f)),k.append("div").classed("legend-label",!0).text(f=>f)}function l(){S(e)?P("complaints_count_zipcode.csv").then(p=>{p.columns=p.columns.map(u=>u.trim().replace(/[^\x20-\x7E]+/g,""));const m=p.filter(u=>u["Zip Code"]===S(e)),y=j({children:m}).sum(u=>+u["Count of Description"]),g=K().size([i-a.left-a.right,o-a.top-a.bottom]).padding(10)(y).descendants(),v=r.selectAll("circle").data(g.slice(1));v.transition().duration(750).attr("cx",u=>u.x).attr("cy",u=>u.y).attr("r",u=>u.r),v.enter().append("circle").attr("cx",u=>u.x).attr("cy",u=>u.y).attr("r",u=>u.r).attr("fill",u=>s(u.data["Description (group)"])).attr("opacity",.7).transition().duration(750).attr("r",u=>u.r),v.exit().remove(),v.on("mouseover",function(u,A){w(this).append("title").text(A.data["Description (group)"])}).on("mouseout",function(){w(this).select("title").remove()})}):alert("Please enter a zipcode.")}ut(()=>{c("02108")}),X();var h=it(t,!0,Ot),d=nt(h);rt(d);var x=L(L(d,!0));Y(d,()=>S(e),p=>ct(e,p)),B("click",x,l,!1),tt(t,h),at()}export{ee as component};
