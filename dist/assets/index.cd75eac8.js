import{s as o,r as p,u as v,a as x,j as l,b as e,d as w,c as b,e as J,F as j,f as B,g as F,h as I,I as L,i as S,k as R,p as _,S as $,R as C,l as h,m as N,n as W,B as A}from"./vendor.820ab00f.js";const M=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};M();const O=async()=>await(await fetch("https://api.chucknorris.io/jokes/random")).json(),P=o.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: end;
  padding: 6px 5%;
`,H=o.img`
  height: 50px;
  width: 80px;
`,D=o.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 0;
  margin: 0;
`,E=o.div`
  width: 100%;
  max-width: 640px;
  height: 50px;
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
`,g=o.button`
  color: yellow;
  width: 30%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: brown;
`,q=o.div`
  height: 100%;
  width: 100%;
  background-color: black;
  color: yellow;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 6px 2%;
`,z=o.div`
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`,G=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,k=o.button`
  height: 50px;
  color: brown;
  width: 50px;
  background-color: transparent;
  border: none;
`,K=o.div`
  height: 50vh;
  width: 100%;
  max-width: 640px;
  border-radius: 12px;
  padding: 15px;
  background: orange;
`,T=o.img`
  width: 200px;
  height: 200px;
`;var Q="/assets/pngwing.com (1).58c5c206.png";const U=()=>{const[n,i]=p.exports.useState(null),[s,a]=p.exports.useState(0);let t=v();const r=async()=>{i(await O())},c=()=>{a(setInterval(r,3e3))},m=()=>{clearInterval(s),a(void 0)},{favJokes:u,dispatch:f}=x("favJokes"),d=p.exports.useMemo(()=>n?u.find(y=>y.id===n.id):null,[n,u]);return l(D,{children:[e(T,{src:Q}),e(K,{children:l(q,{children:[l(G,{children:[e(k,{onClick:()=>{t("/FavJokes")},children:e(w,{sx:{width:"100%",height:"100%"}})}),e(k,{onClick:()=>{if(d){f("favJokes/delete",d);return}n&&f("favJokes/add",n)},children:e(b,{sx:{width:"100%",height:"100%",color:d?"brown":"lightgray"}})})]}),e(z,{children:n?n.value:"Hello, my fellow friend"})]})}),l(E,{children:[e(g,{onClick:r,children:"Get Joke"}),e(g,{onClick:s?m:c,children:s?e(J,{sx:{height:"100%"}}):l(j,{children:[e(B,{sx:{height:"100%"}}),e(F,{sx:{height:"100%"}})]})})]})]})},V=o.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  background-color: #f4f4f4;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`,X=o.div`
  height: 500px;
  width: 100%;
  background-color: black;
  color: orange;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow-y: auto; 
  
`,Y=o.ul`
  list-style-type: none;
`,Z=o.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`,ee=o.button`
  background-color: brown;
  color: yellow;
  align-self: start;
`;o.button`
  background: inherit;
  border: none;
`;const te=()=>{const{favJokes:n,dispatch:i}=x("favJokes");let s=v();const a=t=>{i("favJokes/delete",t)};return l(V,{children:[e(ee,{onClick:()=>s("/"),children:e(I,{})}),e(X,{children:e(Y,{children:n.map(t=>l(Z,{children:[t.value,e(L,{color:"secondary",onClick:()=>a(t),children:e(S,{})})]}))})})]})},oe=n=>{n.on("@init",()=>({favJokes:[]})),n.on("favJokes/add",(i,s)=>({favJokes:[...i.favJokes,s]})),n.on("favJokes/delete",(i,s)=>({favJokes:i.favJokes.filter(a=>a.id!==s.id)}))},ne=R([oe,_(["favJokes"])]);var re="/assets/chucknorris_logo.fce86bc1.png";function ie(){return e("div",{className:"App",children:l($.Provider,{value:ne,children:[e(P,{children:e("a",{href:"https://api.chucknorris.io/",children:e(H,{src:re})})}),l(C,{children:[e(h,{path:"/",element:e(U,{})}),e(h,{path:"/FavJokes",element:e(te,{})})]})]})})}N.render(e(W.StrictMode,{children:e(A,{children:e(ie,{})})}),document.getElementById("root"));
