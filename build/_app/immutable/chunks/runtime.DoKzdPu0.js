const Ue=()=>{};function ce(e){for(var t=0;t<e.length;t++)e[t]()}function Be(e){return e()}var ue=Array.isArray,Ke=Array.from,Ye=Object.isFrozen,He=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,ke=Object.getOwnPropertyDescriptors,ze=Object.prototype,ge=Array.prototype,Ge=Object.getPrototypeOf;const Te=1,X=2,le=4,L=8,ee=16,B=64,R=128,h=256,O=512,A=1024,Z=2048,V=4096,We=0,Se=1,Ae=2,Ze=3,$e=6,Je=7,Ce=Symbol(),fe=Symbol("$state");let K=!1,$=[];function ie(){K=!1;const e=$.slice();$=[],ce(e)}function Qe(e){K||(K=!0,setTimeout(ie,0)),$.push(e)}function xe(){K&&ie()}const z=le|L|ee,_e=0,De=1;let P=_e,Y=!1,S=!1,l=[],x=[],D=0,v=null,p=null,_=null,u=0,k=null,T=!1,J=!1;function Xe(e){J=e}let j=!1,q=!1,C=new Set,U=null,b=null,W=!1;function H(e){const t=e||b;return t!==null&&t.r}function te(e){const t=e.f;if(t&O||e.v===Ce)return!0;if(t&A){const n=e.d;if(n!==null){const r=n.length;let o;for(o=0;o<r;o++){const s=n[o];if(s.f&A&&!te(s)){y(s,h);continue}if(s.f&O)if(s.f&X){if(Ee(s,!0),e.f&O)return!0}else return!0;const i=(t&R)!==0,f=e.w,c=s.w;if(i&&c>f)return e.w=c,!0}}}return!1}function pe(e){const t=e.i,n=e.f,r=_,o=u,s=k,i=v,f=U,c=b,E=j,m=(n&ee)!==0,we=T;_=null,u=0,k=null,v=e,U=e.b,b=e.x,j=!S&&(n&R)!==0,T=!1;try{let g;m?g=t(e.b,e):g=t();let a=e.d;if(_!==null){let d;if(a!==null){const I=a.length,w=u===0?_:a.slice(0,u).concat(_),se=w.length>16&&I-u>1?new Set(w):null;for(d=u;d<I;d++){const G=a[d];(se!==null?!se.has(G):!w.includes(G))&&ae(e,G)}}if(a!==null&&u>0)for(a.length=u+_.length,d=0;d<_.length;d++)a[u+d]=_[d];else e.d=a=_;if(!j)for(d=u;d<a.length;d++){const I=a[d],w=I.c;w===null?I.c=[e]:w[w.length-1]!==e&&w.push(e)}}else a!==null&&u<a.length&&(ne(e,u),a.length=u);return g}finally{_=r,u=o,k=s,v=i,U=f,b=c,j=E,T=we}}function ae(e,t){const n=t.c;let r=0;if(n!==null){r=n.length-1;const o=n.indexOf(e);o!==-1&&(r===0?t.c=null:(n[o]=n[r],n.pop()))}r===0&&t.f&R&&(y(t,O),ne(t,0))}function ne(e,t){const n=e.d;if(n!==null){const r=t===0?null:n.slice(0,t);let o;for(o=t;o<n.length;o++){const s=n[o];(r===null||!r.includes(s))&&ae(e,s)}}}function re(e){const t=e.r;if(e.r=null,t!==null){let n;for(n=0;n<t.length;n++)Fe(t[n])}}function Ne(e,t){if(e!==null)throw t}function de(e){if(e.f&V)return;const t=e.v,n=p;p=e;try{re(e),t!==null&&t();const o=pe(e);typeof o=="function"&&(e.v=o)}catch(o){const s=e.b;if(s!==null)Ne(s,o);else throw o}finally{p=n}const r=e.x;H(r)&&e.f&L&&l.length>0&&Ie(r)}function he(){if(D>100)throw D=0,new Error("ERR_SVELTE_TOO_MANY_UPDATES");D++}function N(e){const t=e.length;if(t>0){he();const n=S;S=!0;try{let r;for(r=0;r<t;r++){const o=e[r],s=o.f;s&(V|Z)||(te(o)?(y(o,h),de(o)):s&A&&y(o,h))}}finally{S=n}e.length=0}}function Re(){if(Y=!1,D>101)return;const e=l,t=x;l=[],x=[],N(e),N(t),Y||(D=0)}function M(e,t){const n=e.f;if(t){const r=S;try{S=!0,de(e),y(e,h)}finally{S=r}}else if(P===_e&&(Y||(Y=!0,queueMicrotask(Re))),n&le)x.push(e),n&B||ve(e,!0);else{const r=l.length;let o=r===0;if(!o){const s=e.l,i=e.b,f=(n&L)!==0;let c,E,m=r;for(;;){if(c=l[--m],c.l<=s){m+1===r?o=!0:(E=(c.f&L)!==0,(c.b!==i||E&&!f)&&m++,l.splice(m,0,e));break}if(m===0){l.unshift(e);break}}}o&&l.push(e)}}function et(){const e=[];for(let t=0;t<l.length;t++){const n=l[t];n.f&ee&&n.x===b&&(e.push(n),l.splice(t,1),t--)}N(e)}function Ie(e){const t=[];for(let n=0;n<l.length;n++){const r=l[n];r.f&L&&r.x===e&&(t.push(r),l.splice(n,1),n--)}N(t)}function ye(e){je(e)}function je(e,t=!0){const n=P,r=l,o=x;let s;try{he();const i=[],f=[];P=De,l=i,x=f,t&&(N(r),N(o)),e!==void 0&&(s=e()),(l.length>0||f.length>0)&&ye(),xe(),D=0}finally{P=n,l=r,x=o}return s}async function tt(){await Promise.resolve(),ye()}function Ee(e,t){const n=W;W=!0,re(e);const r=pe(e);W=n;const o=(j||e.f&R)&&e.d!==null?A:h;y(e,o);const s=e.e;s(r,e.v)||(e.v=r,oe(e,O,t))}function me(e){const t=e.f;if(t&V)return e.v;if(q&&C.add(e),v!==null&&!(v.f&B)&&!T){const n=(v.f&R)!==0,r=v.d;_===null&&r!==null&&r[u]===e&&!(n&&p!==null)?u++:(r===null||u===0||r[u-1]!==e)&&(_===null?_=[e]:_.push(e)),k!==null&&p!==null&&p.f&h&&!(p.f&B)&&k.includes(e)&&(y(p,O),M(p,!1))}return t&X&&te(e)&&Ee(e,!1),e.v}function nt(e,t){return Oe(e,t),t}function rt(e){var t=q,n=C;q=!0,C=new Set;var r=C,o;try{be(e)}finally{if(q=t,q)for(o of C)n.add(o);C=n}for(o of r)qe(o,null)}function qe(e,t){return Oe(e,be(()=>me(e))),t}function ve(e,t,n){const r=e.r;if(r!==null){let o;for(o=0;o<r.length;o++){const s=r[o];s.f&z&&F(s,t,n)}}}function F(e,t,n=new Set){const r=e.f;if((r&Z)!==0!==t){e.f^=Z,!t&&r&z&&!(r&h)&&M(e,!1);const s=e.b;if(s!==null&&!n.has(s)){n.add(s);const i=s.t;if(i===Se){const f=s.e;f!==null&&s!==U&&F(f,t,n);const c=s.ce;c!==null&&s.v&&F(c,t,n);const E=s.ae;E!==null&&!s.v&&F(E,t,n)}else if(i===Ae){const f=s.v;for(let{e:c}of f)c!==null&&F(c,t,n)}}}ve(e,t,n)}function oe(e,t,n){const r=H(null),o=e.c;if(o!==null){const s=o.length;let i;for(i=0;i<s;i++){const f=o[i],c=f.f,E=(c&R)!==0;if((!n||!r)&&f===p)continue;y(f,t);const m=(c&A)!==0;(c&h||m&&E)&&(f.f&z?M(f,!1):oe(f,A,n))}}}function Oe(e,t){if(!T&&!J&&v!==null&&H(null)&&v.f&X)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");e.f&Te&&!e.e(t,e.v)&&(e.v=t,e.w++,H(null)&&!J&&p!==null&&p.c===null&&p.f&h&&!(p.f&B)&&(_!==null&&_.includes(e)?(y(p,O),M(p,!1)):k===null?k=[e]:k.push(e)),oe(e,O,!0))}function Fe(e){const t=e.v,n=e.y,r=e.f;re(e),ne(e,0),e.i=e.r=e.y=e.x=e.b=e.d=e.c=null,y(e,V),n!==null&&(ue(n)?ce(n):n()),t!==null&&r&z&&t()}function be(e){const t=T;try{return T=!0,e()}finally{T=t}}function ot(e,t){let n=e.y;n===null?e.y=t:ue(n)?n.push(t):e.y=[n,t]}const Le=~(O|A|h);function y(e,t){e.f=e.f&Le|t}function Me(e){return typeof e=="object"&&e!==null&&typeof e.f=="number"}function st(e,t=!1,n){b={x:null,c:null,e:null,m:!1,p:b,d:null,s:e,r:t,u:null}}function ft(e){const t=b;if(t!==null){e!==void 0&&(t.x=e);const n=t.e;if(n!==null){t.e=null;for(let r=0;r<n.length;r++)M(n[r],!1)}b=t.p,t.m=!0}return e||{}}function ct(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(fe in e)Q(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&fe in n&&Q(n)}}}function Q(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e);for(let r in e)try{Q(e[r],t)}catch{}const n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=ke(n);for(let o in r){const s=r[o].get;if(s)try{s.call(e)}catch{}}}}}function ut(e){return Me(e)?me(e):e}export{Be as $,ct as A,M as B,le as C,p as D,Ae as E,et as F,v as G,O as H,Se as I,h as J,X as K,R as L,B as M,Te as N,Qe as O,L as P,F as Q,ee as R,fe as S,ce as T,Ce as U,We as V,$e as W,Je as X,je as Y,Ke as Z,q as _,st as a,be as b,b as c,Fe as d,ot as e,Oe as f,me as g,de as h,ue as i,U as j,Ze as k,rt as l,qe as m,Ue as n,Xe as o,ft as p,Ye as q,ze as r,nt as s,ge as t,ut as u,He as v,W as w,Ve as x,Ge as y,tt as z};
