(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4402:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(59),r(2155),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),l=r(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,59)),"C:\\Users\\sanji\\Desktop\\archive\\blumerx\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2155)),"C:\\Users\\sanji\\Desktop\\archive\\blumerx\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\sanji\\Desktop\\archive\\blumerx\\src\\app\\page.tsx"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3910:(e,t,r)=>{Promise.resolve().then(r.bind(r,8568)),Promise.resolve().then(r.bind(r,7141))},8568:(e,t,r)=>{"use strict";r.d(t,{DemoContainer:()=>n});var a=r(326),s=r(1223);function n({className:e,...t}){return a.jsx("div",{className:(0,s.cn)("flex w-full items-center justify-center",e),...t})}},7141:(e,t,r)=>{"use strict";r.d(t,{LoginForm:()=>x});var a=r(326),s=r(1664),n=r(9752),i=r(4794),l=r(7577),o=r(1223);let d=l.forwardRef(({className:e,...t},r)=>a.jsx("textarea",{className:(0,o.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));d.displayName="Textarea";let c=(0,r(2881).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var u=r(363),p=r(4097),m=r(9826),f=r(5047);function x(){let e=(0,f.useRouter)(),[t,r]=(0,l.useState)(""),[x,h]=(0,l.useState)(null),[g,v]=(0,l.useState)(""),[b,j]=(0,l.useState)(!1),w=async()=>{j(!0);let r=(0,u.vf)(t);if(r.length){let e=(0,u.HO)(r[0]),t=(0,u.gR)(e);"string"!=typeof t&&t?.id&&(v(e),h(t),j(!1))}if(g&&x){let t=await fetch("./api/auth",{method:"POST",headers:{"init-data":g}});if(t.ok){let r=await t.json();if(r?.token?.access&&r?.token?.refresh){let e={accessToken:r?.token?.access,refreshToken:r?.token?.refresh};m.Ju.setItem(x.id.toString(),e).then(()=>{(0,p.Am)({title:"\uD83D\uDE32 Yes!",description:`👍 Welcome, ${x.first_name}!`})}).catch(()=>{(0,p.Am)({title:"\uD83D\uDE32 Yes!",description:`👍 Welcome, ${x.first_name}!`})})}m.eH.setItem(x.id.toString(),g),e.push(`./playground?id=${x.id}`)}else(0,p.Am)({title:"\uD83D\uDE42‍↔️ Nope!",description:"⛔ Invalid telegram data."})}else(0,p.Am)({title:"\uD83D\uDE42‍↔️ Nope!",description:"\uD83D\uDE42‍ Please enter a valid data.",variant:"destructive"});await (0,o._v)(1),j(!1)};return(0,a.jsxs)(n.Zb,{className:"w-full max-w-sm",children:[(0,a.jsxs)(n.Ol,{children:[a.jsx(n.ll,{className:"text-2xl",children:"Account"}),a.jsx(n.SZ,{children:"Paste your telegram webapp data from bot."})]}),a.jsx(n.aY,{className:"grid gap-4",children:(0,a.jsxs)("div",{className:"grid gap-2",children:[a.jsx(i._,{htmlFor:"webappdata",children:"Webapp Data"}),a.jsx(d,{rows:9,defaultValue:t,onChange:e=>r(e.target.value),className:"resize-none",readOnly:b,id:"webappdata",maxLength:2e3,minLength:500,placeholder:"Paste webapp data here"})]})}),a.jsx(n.eW,{children:a.jsx(s.z,{disabled:b||!t||t.length<500||t.length>2e3,onClick:w,type:"button",className:(0,o.cn)("w-full py-4 font-bold",b&&"cursor-wait"),children:b?(0,a.jsxs)(a.Fragment,{children:[a.jsx(c,{className:"mr-2 h-5 w-5 animate-spin"})," Loading"]}):"Load Account"})})]})}},9752:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>l,SZ:()=>d,Zb:()=>i,aY:()=>c,eW:()=>u,ll:()=>o});var a=r(326),s=r(7577),n=r(1223);let i=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));i.displayName="Card";let l=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=s.forwardRef(({className:e,...t},r)=>a.jsx("h3",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=s.forwardRef(({className:e,...t},r)=>a.jsx("p",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,n.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent";let u=s.forwardRef(({className:e,...t},r)=>a.jsx("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",e),...t}));u.displayName="CardFooter"},363:(e,t,r)=>{"use strict";function a(e){return e.match(/(https?:\/\/[^\s]+)/g)||[]}function s(e){let t=a(e);if(0===t.length)return"";for(let e of t){let t=Object.keys(function(e){let t=new URLSearchParams(new URL(e.replace("#tgWebAppData=","?")).search),r={};return t.forEach((e,t)=>{r[t]=e}),r}(e)).find(e=>e.includes("%26user%3D")||e.includes("&user=")||e.includes("user="));if(t)return t.split("&tgWebAppVersion=")[0];break}return""}function n(e){let t=decodeURIComponent(decodeURIComponent(e));return t.includes("&user=")&&t.includes("user=")?JSON.parse((t.includes("&user=")?t.split("&user=")[1].split("}&")[0]:t.split("user=")[1].split("}&")[0])+"}"):"Invalid auth string"}r.d(t,{HO:()=>s,gR:()=>n,vf:()=>a})},59:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>l});var a=r(9510),s=r(8570);let n=(0,s.createProxy)(String.raw`C:\Users\sanji\Desktop\archive\blumerx\src\components\Login.tsx#LoginForm`),i=(0,s.createProxy)(String.raw`C:\Users\sanji\Desktop\archive\blumerx\src\components\Container.tsx#DemoContainer`),l={title:"Login",description:"Login Blum"};function o(){return a.jsx("div",{className:"flex min-h-svh items-center justify-center gap-6 rounded-lg p-8 align-middle md:grid",children:a.jsx(i,{children:a.jsx(n,{})})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,487,621,652],()=>r(4402));module.exports=a})();