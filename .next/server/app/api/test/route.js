"use strict";(()=>{var e={};e.id=329,e.ids=[329],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4076:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>l,patchFetch:()=>h,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{GET:()=>i});var a=r(9303),o=r(8716),n=r(670);async function i(e){return console.log(e.headers.get("user-agent")),Response.json({hi:!0})}let p=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/test/route",pathname:"/api/test",filename:"route",bundlePath:"app/api/test/route"},resolvedPagePath:"C:\\Users\\sanji\\Desktop\\archive\\blumerx\\src\\app\\api\\test\\route.ts",nextConfigOutput:"standalone",userland:s}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:c}=p,l="/api/test/route";function h(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}},9303:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948],()=>r(4076));module.exports=s})();