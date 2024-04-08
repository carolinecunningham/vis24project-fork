import{p as ge,j as pe,i as ke,f as le,Q as de,r as me,R as ye,a2 as W,S as Pe,U as ve,t as he,m as xe,g as ue,a as ie,d as Y,T as ze,e as we}from"./disclose-version.BW5RF7my.js";import{p as Ie,a as je,u as q,g as C,A as qe,b as Ae,s as Re}from"./runtime.DoKzdPu0.js";import{e as Me}from"./each.dg0NjRBX.js";import{o as De}from"./transform.s-_yf9sf.js";import{w as Ee,c as T,a as Ge}from"./array.DIqrq8cy.js";import{c as Ne}from"./colors.Cc3OSVma.js";const Se=Ne("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),be=Math.abs,b=Math.atan2,B=Math.cos,Ve=Math.max,oe=Math.min,D=Math.sin,U=Math.sqrt,P=1e-12,F=Math.PI,_=F/2,$=2*F;function Be(a){return a>1?0:a<-1?F:Math.acos(a)}function Te(a){return a>=1?_:a<=-1?-_:Math.asin(a)}function Oe(a){return a.innerRadius}function Qe(a){return a.outerRadius}function Ue(a){return a.startAngle}function We(a){return a.endAngle}function Ce(a){return a&&a.padAngle}function Fe(a,f,x,R,M,h,p,e){var d=x-a,l=R-f,n=p-M,A=e-h,s=A*d-n*l;if(!(s*s<P))return s=(n*(f-h)-A*(a-M))/s,[a+s*d,f+s*l]}function Z(a,f,x,R,M,h,p){var e=a-x,d=f-R,l=(p?h:-h)/U(e*e+d*d),n=l*d,A=-l*e,s=a+n,t=f+A,i=x+n,c=R+A,m=(s+i)/2,u=(t+c)/2,v=i-s,g=c-t,y=v*v+g*g,w=M-h,k=s*c-i*t,G=(g<0?-1:1)*U(Ve(0,w*w*y-k*k)),N=(k*g-v*G)/y,S=(-k*v-g*G)/y,j=(k*g+v*G)/y,z=(-k*v+g*G)/y,I=N-m,r=S-u,o=j-m,V=z-u;return I*I+r*r>o*o+V*V&&(N=j,S=z),{cx:N,cy:S,x01:-n,y01:-A,x11:N*(M/w-1),y11:S*(M/w-1)}}function He(){var a=Oe,f=Qe,x=T(0),R=null,M=Ue,h=We,p=Ce,e=null,d=Ee(l);function l(){var n,A,s=+a.apply(this,arguments),t=+f.apply(this,arguments),i=M.apply(this,arguments)-_,c=h.apply(this,arguments)-_,m=be(c-i),u=c>i;if(e||(e=n=d()),t<s&&(A=t,t=s,s=A),!(t>P))e.moveTo(0,0);else if(m>$-P)e.moveTo(t*B(i),t*D(i)),e.arc(0,0,t,i,c,!u),s>P&&(e.moveTo(s*B(c),s*D(c)),e.arc(0,0,s,c,i,u));else{var v=i,g=c,y=i,w=c,k=m,G=m,N=p.apply(this,arguments)/2,S=N>P&&(R?+R.apply(this,arguments):U(s*s+t*t)),j=oe(be(t-s)/2,+x.apply(this,arguments)),z=j,I=j,r,o;if(S>P){var V=Te(S/s*D(N)),H=Te(S/t*D(N));(k-=V*2)>P?(V*=u?1:-1,y+=V,w-=V):(k=0,y=w=(i+c)/2),(G-=H*2)>P?(H*=u?1:-1,v+=H,g-=H):(G=0,v=g=(i+c)/2)}var O=t*B(v),Q=t*D(v),J=s*B(w),K=s*D(w);if(j>P){var L=t*B(g),X=t*D(g),ee=s*B(y),ne=s*D(y),E;if(m<F)if(E=Fe(O,Q,ee,ne,L,X,J,K)){var ae=O-E[0],te=Q-E[1],re=L-E[0],se=X-E[1],ce=1/D(Be((ae*re+te*se)/(U(ae*ae+te*te)*U(re*re+se*se)))/2),fe=U(E[0]*E[0]+E[1]*E[1]);z=oe(j,(s-fe)/(ce-1)),I=oe(j,(t-fe)/(ce+1))}else z=I=0}G>P?I>P?(r=Z(ee,ne,O,Q,t,I,u),o=Z(L,X,J,K,t,I,u),e.moveTo(r.cx+r.x01,r.cy+r.y01),I<j?e.arc(r.cx,r.cy,I,b(r.y01,r.x01),b(o.y01,o.x01),!u):(e.arc(r.cx,r.cy,I,b(r.y01,r.x01),b(r.y11,r.x11),!u),e.arc(0,0,t,b(r.cy+r.y11,r.cx+r.x11),b(o.cy+o.y11,o.cx+o.x11),!u),e.arc(o.cx,o.cy,I,b(o.y11,o.x11),b(o.y01,o.x01),!u))):(e.moveTo(O,Q),e.arc(0,0,t,v,g,!u)):e.moveTo(O,Q),!(s>P)||!(k>P)?e.lineTo(J,K):z>P?(r=Z(J,K,L,X,s,-z,u),o=Z(O,Q,ee,ne,s,-z,u),e.lineTo(r.cx+r.x01,r.cy+r.y01),z<j?e.arc(r.cx,r.cy,z,b(r.y01,r.x01),b(o.y01,o.x01),!u):(e.arc(r.cx,r.cy,z,b(r.y01,r.x01),b(r.y11,r.x11),!u),e.arc(0,0,s,b(r.cy+r.y11,r.cx+r.x11),b(o.cy+o.y11,o.cx+o.x11),u),e.arc(o.cx,o.cy,z,b(o.y11,o.x11),b(o.y01,o.x01),!u))):e.arc(0,0,s,w,y,u)}if(e.closePath(),n)return e=null,n+""||null}return l.centroid=function(){var n=(+a.apply(this,arguments)+ +f.apply(this,arguments))/2,A=(+M.apply(this,arguments)+ +h.apply(this,arguments))/2-F/2;return[B(A)*n,D(A)*n]},l.innerRadius=function(n){return arguments.length?(a=typeof n=="function"?n:T(+n),l):a},l.outerRadius=function(n){return arguments.length?(f=typeof n=="function"?n:T(+n),l):f},l.cornerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:T(+n),l):x},l.padRadius=function(n){return arguments.length?(R=n==null?null:typeof n=="function"?n:T(+n),l):R},l.startAngle=function(n){return arguments.length?(M=typeof n=="function"?n:T(+n),l):M},l.endAngle=function(n){return arguments.length?(h=typeof n=="function"?n:T(+n),l):h},l.padAngle=function(n){return arguments.length?(p=typeof n=="function"?n:T(+n),l):p},l.context=function(n){return arguments.length?(e=n??null,l):e},l}function Je(a,f){return f<a?-1:f>a?1:f>=a?0:NaN}function Ke(a){return a}function Le(){var a=Ke,f=Je,x=null,R=T(0),M=T($),h=T(0);function p(e){var d,l=(e=Ge(e)).length,n,A,s=0,t=new Array(l),i=new Array(l),c=+R.apply(this,arguments),m=Math.min($,Math.max(-$,M.apply(this,arguments)-c)),u,v=Math.min(Math.abs(m)/l,h.apply(this,arguments)),g=v*(m<0?-1:1),y;for(d=0;d<l;++d)(y=i[t[d]=d]=+a(e[d],d,e))>0&&(s+=y);for(f!=null?t.sort(function(w,k){return f(i[w],i[k])}):x!=null&&t.sort(function(w,k){return x(e[w],e[k])}),d=0,A=s?(m-l*g)/s:0;d<l;++d,c=u)n=t[d],y=i[n],u=c+(y>0?y*A:0)+g,i[n]={data:e[n],index:d,value:y,startAngle:c,endAngle:u,padAngle:v};return i}return p.value=function(e){return arguments.length?(a=typeof e=="function"?e:T(+e),p):a},p.sortValues=function(e){return arguments.length?(f=e,x=null,p):f},p.sort=function(e){return arguments.length?(x=e,f=null,p):x},p.startAngle=function(e){return arguments.length?(R=typeof e=="function"?e:T(+e),p):R},p.endAngle=function(e){return arguments.length?(M=typeof e=="function"?e:T(+e),p):M},p.padAngle=function(e){return arguments.length?(h=typeof e=="function"?e:T(+e),p):h},p}var Xe=ze('<path tabindex="0" role="button" aria-label="pie wedge" class="svelte-1cnv3tz"></path>'),Ye=we('<li class="legend-item"><span class="swatch svelte-1cnv3tz"></span> <em> </em></li>'),Ze=we('<div class="container svelte-1cnv3tz"><svg viewBox="-50 -50 100 100" class="svelte-1cnv3tz"></svg> <ul class="legend svelte-1cnv3tz"></ul></div>');function rn(a,f){je(f,!1);let x=ge(f,"selectedIndex",12,()=>-1),R=ge(f,"data",8,()=>[]),M=He().innerRadius(0).outerRadius(50),h=xe(),p=xe(),e=Le().value(t=>t.value),d=De(Se);function l(t,i){(!i.key||i.key==="Enter")&&x(x()===t?-1:t)}pe(()=>{qe(R()),Ae(()=>{Re(h,e(R()))})}),pe(()=>{C(h),Ae(()=>{Re(p,C(h).map(t=>M(t)))})}),ke();var n=ue(a,!0,Ze),A=ie(n),s=Y(Y(A,!0));Me(A,()=>C(p),9,(t,i,c)=>{var m=ue(t,!0,Xe);de(m,"fill",()=>d(q(c)));var u,v;me(()=>{var g,y;u!==(u=q(i))&&ye(m,"d",u),v!==(v=`--start-angle: ${W((g=C(h)[q(c)])==null?void 0:g.startAngle)}rad;
	                    --end-angle: ${W((y=C(h)[q(c)])==null?void 0:y.endAngle)}rad;`)&&ye(m,"style",v),Pe(m,"selected",x()===q(c))}),ve("click",m,g=>l(q(c),g),!1),ve("keyup",m,g=>l(q(c),g),!1),le(t,m)},null),Me(s,R,9,(t,i,c)=>{var m=ue(t,!0,Ye),u=ie(m),v=Y(u,!0),g=Y(v),y=ie(g);de(m,"style",()=>`--color: ${W(d(q(c)))}`),me(()=>{he(v,` ${W(q(i).label)} `),he(y,`(${W(q(i).value)})`)}),le(t,m)},null),le(a,n),Ie()}export{rn as P};
