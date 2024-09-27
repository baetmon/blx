(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5776:function(e,t,n){Promise.resolve().then(n.bind(n,2982)),Promise.resolve().then(n.bind(n,1993))},2982:function(e,t,n){"use strict";n.d(t,{DemoContainer:function(){return s}});var r=n(9368),a=n(5655);function s(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.cn)("flex w-full items-center justify-center",t),...n})}},1993:function(e,t,n){"use strict";n.d(t,{LoginForm:function(){return h}});var r=n(9368),a=n(4300),s=n(6561),i=n(2210),o=n(6041),u=n(5655);let l=o.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("textarea",{className:(0,u.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});l.displayName="Textarea";let c=(0,n(3517).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var d=n(3815),f=n(9808),p=n(6246),m=n(9866);function h(){let e=(0,m.useRouter)(),[t,n]=(0,o.useState)(""),[h,v]=(0,o.useState)(null),[g,x]=(0,o.useState)(""),[b,w]=(0,o.useState)(!1),y=async()=>{if(w(!0),/https?:\/\/[^\s/$.?#].[^\s]*\b/.test(t)){let e=(0,d.vf)(t);if(e.length){let t=(0,d.HO)(e[0]),n=(0,d.gR)(t);"string"!=typeof n&&(null==n?void 0:n.id)&&(x(t),v(n),w(!1))}}else{let e=(0,d.gR)(t);"string"!=typeof e&&(null==e?void 0:e.id)&&(x(t),v(e))}if(g&&h){let t=await fetch("./api/auth",{method:"POST",headers:{"init-data":g}});if(t.ok){var n,r,a,s;let i=await t.json();if((null==i?void 0:null===(n=i.token)||void 0===n?void 0:n.access)&&(null==i?void 0:null===(r=i.token)||void 0===r?void 0:r.refresh)){let e={accessToken:null==i?void 0:null===(a=i.token)||void 0===a?void 0:a.access,refreshToken:null==i?void 0:null===(s=i.token)||void 0===s?void 0:s.refresh};p.Ju.setItem(h.id.toString(),e).then(()=>{(0,f.Am)({title:"\uD83D\uDE32 Yes!",description:"\uD83D\uDC4D Welcome, ".concat(h.first_name,"!")})}).catch(()=>{(0,f.Am)({title:"\uD83D\uDE32 Yes!",description:"\uD83D\uDC4D Welcome, ".concat(h.first_name,"!")})})}p.eH.setItem(h.id.toString(),g),e.push("./playground?id=".concat(h.id))}else(0,f.Am)({title:"\uD83D\uDE42‍↔️ Nope!",description:"⛔ Invalid telegram data."})}else(0,f.Am)({title:"\uD83D\uDE42‍↔️ Nope!",description:"\uD83D\uDE42‍ Please enter a valid data.",variant:"destructive"});await (0,u._v)(1),w(!1)};return(0,r.jsxs)(s.Zb,{className:"w-full max-w-sm",children:[(0,r.jsxs)(s.Ol,{children:[(0,r.jsx)(s.ll,{className:"text-2xl",children:"Account"}),(0,r.jsx)(s.SZ,{children:"Paste your telegram webapp data from bot."})]}),(0,r.jsx)(s.aY,{className:"grid gap-4",children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsx)(i._,{htmlFor:"webappdata",children:"Webapp Data"}),(0,r.jsx)(l,{rows:9,defaultValue:t,onChange:e=>n(e.target.value),className:"resize-none",readOnly:b,id:"webappdata",maxLength:2e3,minLength:500,placeholder:"Paste webapp data here"})]})}),(0,r.jsx)(s.eW,{children:(0,r.jsx)(a.z,{disabled:b||!t||t.length<500||t.length>2e3,onClick:y,type:"button",className:(0,u.cn)("w-full py-4 font-bold",b&&"cursor-wait"),children:b?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{className:"mr-2 h-5 w-5 animate-spin"})," Loading"]}):"Load Account"})})]})}},6246:function(e,t,n){"use strict";n.d(t,{Ju:function(){return i},eH:function(){return s},ix:function(){return u},uk:function(){return o}});var r=n(9015),a=n.n(r);let s=a().createInstance({name:"profiles"}),i=a().createInstance({name:"gameSessions"}),o=a().createInstance({name:"gameConfig"});async function u(e){let t=[];try{return await e.iterate(e=>{t.push(e)}),t}catch(e){return console.error("Error getting all values:",e),[]}}},4300:function(e,t,n){"use strict";n.d(t,{d:function(){return u},z:function(){return l}});var r=n(9368),a=n(6041),s=n(316),i=n(9325),o=n(5655);let u=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:n,variant:a,size:i,asChild:l=!1,...c}=e,d=l?s.g7:"button";return(0,r.jsx)(d,{className:(0,o.cn)(u({variant:a,size:i,className:n})),ref:t,...c})});l.displayName="Button"},6561:function(e,t,n){"use strict";n.d(t,{Ol:function(){return o},SZ:function(){return l},Zb:function(){return i},aY:function(){return c},eW:function(){return d},ll:function(){return u}});var r=n(9368),a=n(6041),s=n(5655);let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",n),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...a})});o.displayName="CardHeader";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",n),...a})});u.displayName="CardTitle";let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",n),...a})});l.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",n),...a})});c.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",n),...a})});d.displayName="CardFooter"},2210:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var r=n(9368),a=n(6041),s=n(8866),i=n(9325),o=n(5655);let u=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.f,{ref:t,className:(0,o.cn)(u(),n),...a})});l.displayName=s.f.displayName},9808:function(e,t,n){"use strict";n.d(t,{Am:function(){return d},pm:function(){return f}});var r=n(6041);let a=0,s=new Map,i=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?i(n):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},u=[],l={toasts:[]};function c(e){l=o(l,e),u.forEach(e=>{e(l)})}function d(e){let{...t}=e,n=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:n});return c({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||r()}}}),{id:n,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function f(){let[e,t]=r.useState(l);return r.useEffect(()=>(u.push(t),()=>{let e=u.indexOf(t);e>-1&&u.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},3815:function(e,t,n){"use strict";function r(e){return e.match(/(https?:\/\/[^\s]+)/g)||[]}function a(e){let t=r(e);if(0===t.length)return"";for(let e of t){let t=Object.keys(function(e){let t=new URLSearchParams(new URL(e.replace("#tgWebAppData=","?")).search),n={};return t.forEach((e,t)=>{n[t]=e}),n}(e)).find(e=>e.includes("%26user%3D")||e.includes("&user="));if(t)return t.split("&tgWebAppVersion=")[0];break}return""}function s(e){let t=decodeURIComponent(e);return t.includes("&user=")||t.includes("user=")?JSON.parse((t.includes("&user=")?t.split("&user=")[1].split("}&")[0]:t.split("user=")[1].split("}&")[0])+"}"):"Invalid auth string"}n.d(t,{HO:function(){return a},gR:function(){return s},vf:function(){return r}})},5655:function(e,t,n){"use strict";n.d(t,{Au:function(){return u},Kd:function(){return o},_v:function(){return i},cn:function(){return s}});var r=n(4488),a=n(4653);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}function i(e){return new Promise(t=>setTimeout(t,1e3*e))}function o(e,t){return Math.floor(Math.random()*(t-e+1))+e}function u(e){return e.replace(/[^\x00-\x7F]/g,"")}},8866:function(e,t,n){"use strict";n.d(t,{_:function(){return i},f:function(){return o}});var r=n(6041),a=n(7933),s=n(9368),i=r.forwardRef((e,t)=>(0,s.jsx)(a.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var o=i}},function(e){e.O(0,[945,111,487,744],function(){return e(e.s=5776)}),_N_E=e.O()}]);