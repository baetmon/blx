(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7253:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(9344),r(6464),r(5984);var s=r(3792),a=r(6997),n=r(1825),i=r.n(n),l=r(7246),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9344)),"C:\\Users\\sanji\\Desktop\\blumerx\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3643))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6464)),"C:\\Users\\sanji\\Desktop\\blumerx\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5984,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3643))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\sanji\\Desktop\\blumerx\\src\\app\\page.tsx"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1876:(e,t,r)=>{Promise.resolve().then(r.bind(r,8626)),Promise.resolve().then(r.bind(r,925))},8626:(e,t,r)=>{"use strict";r.d(t,{DemoContainer:()=>n});var s=r(7057),a=r(9159);function n({className:e,...t}){return s.jsx("div",{className:(0,a.cn)("flex w-full items-center justify-center",e),...t})}},925:(e,t,r)=>{"use strict";r.d(t,{LoginForm:()=>x});var s=r(7057),a=r(5029),n=r(6144),i=r(4198),l=r(9411),o=r(9159);let d=l.forwardRef(({className:e,...t},r)=>s.jsx("textarea",{className:(0,o.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));d.displayName="Textarea";let c=(0,r(4376).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var u=r(7042),p=r(3694),m=r(8072),f=r(2591);function x(){let e=(0,f.useRouter)(),[t,r]=(0,l.useState)(""),[x,g]=(0,l.useState)(null),[h,b]=(0,l.useState)(""),[v,j]=(0,l.useState)(!1),w=async()=>{if(j(!0),/https?:\/\/[^\s/$.?#].[^\s]*\b/.test(t)){let e=(0,u.vf)(t);if(e.length){let t=(0,u.HO)(e[0]),r=(0,u.gR)(t);"string"!=typeof r&&r?.id&&(b(t),g(r),j(!1))}}else{let e=(0,u.gR)(t);"string"!=typeof e&&e?.id&&(b(t),g(e))}if(h&&x){let t=await fetch("./api/auth",{method:"POST",headers:{"init-data":h}});if(t.ok){let r=await t.json();if(r?.token?.access&&r?.token?.refresh){let e={accessToken:r?.token?.access,refreshToken:r?.token?.refresh};m.Ju.setItem(x.id.toString(),e).then(()=>{(0,p.Am)({title:"\uD83D\uDE32 Yes!",description:`👍 Welcome, ${x.first_name}!`})}).catch(()=>{(0,p.Am)({title:"\uD83D\uDE32 Yes!",description:`👍 Welcome, ${x.first_name}!`})})}m.eH.setItem(x.id.toString(),h),e.push(`./playground?id=${x.id}`)}else(0,p.Am)({title:"\uD83D\uDE42‍↔️ Nope!",description:"⛔ Invalid telegram data."})}else(0,p.Am)({title:"\uD83D\uDE42‍↔️ Nope!",description:"\uD83D\uDE42‍ Please enter a valid data.",variant:"destructive"});await (0,o._v)(1),j(!1)};return(0,s.jsxs)(n.Zb,{className:"w-full max-w-sm",children:[(0,s.jsxs)(n.Ol,{children:[s.jsx(n.ll,{className:"text-2xl",children:"Account"}),s.jsx(n.SZ,{children:"Paste your telegram webapp data from bot."})]}),s.jsx(n.aY,{className:"grid gap-4",children:(0,s.jsxs)("div",{className:"grid gap-2",children:[s.jsx(i._,{htmlFor:"webappdata",children:"Webapp Data"}),s.jsx(d,{rows:9,defaultValue:t,onChange:e=>r(e.target.value),className:"resize-none",readOnly:v,id:"webappdata",maxLength:2e3,minLength:500,placeholder:"Paste webapp data here"})]})}),s.jsx(n.eW,{children:s.jsx(a.z,{disabled:v||!t||t.length<500||t.length>2e3,onClick:w,type:"button",className:(0,o.cn)("w-full py-4 font-bold",v&&"cursor-wait"),children:v?(0,s.jsxs)(s.Fragment,{children:[s.jsx(c,{className:"mr-2 h-5 w-5 animate-spin"})," Loading"]}):"Load Account"})})]})}},6144:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>l,SZ:()=>d,Zb:()=>i,aY:()=>c,eW:()=>u,ll:()=>o});var s=r(7057),a=r(9411),n=r(9159);let i=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));i.displayName="Card";let l=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let o=a.forwardRef(({className:e,...t},r)=>s.jsx("h3",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=a.forwardRef(({className:e,...t},r)=>s.jsx("p",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,n.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent";let u=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",e),...t}));u.displayName="CardFooter"},7042:(e,t,r)=>{"use strict";function s(e){return e.match(/(https?:\/\/[^\s]+)/g)||[]}function a(e){let t=s(e);if(0===t.length)return"";for(let e of t){let t=Object.keys(function(e){let t=new URLSearchParams(new URL(e.replace("#tgWebAppData=","?")).search),r={};return t.forEach((e,t)=>{r[t]=e}),r}(e)).find(e=>e.includes("%26user%3D")||e.includes("&user="));if(t)return t.split("&tgWebAppVersion=")[0];break}return""}function n(e){let t=decodeURIComponent(e);return t.includes("&user=")||t.includes("user=")?JSON.parse((t.includes("&user=")?t.split("&user=")[1].split("}&")[0]:t.split("user=")[1].split("}&")[0])+"}"):"Invalid auth string"}r.d(t,{HO:()=>a,gR:()=>n,vf:()=>s})},9344:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>l});var s=r(5677),a=r(9781);let n=(0,a.createProxy)(String.raw`C:\Users\sanji\Desktop\blumerx\src\components\Login.tsx#LoginForm`),i=(0,a.createProxy)(String.raw`C:\Users\sanji\Desktop\blumerx\src\components\Container.tsx#DemoContainer`),l={title:"Login",description:"Login Blum"};function o(){return s.jsx("div",{className:"flex min-h-svh items-center justify-center gap-6 rounded-lg p-8 align-middle md:grid",children:s.jsx(i,{children:s.jsx(n,{})})})}},3643:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(611);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[716,577,611,857],()=>r(7253));module.exports=s})();