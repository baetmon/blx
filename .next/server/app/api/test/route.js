"use strict";(()=>{var e={};e.id=329,e.ids=[329],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2197:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>l,patchFetch:()=>m,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{GET:()=>i});var a=r(8689),o=r(6997),n=r(7939);async function i(e){return console.log(e.headers.get("user-agent")),Response.json({hi:!0})}let p=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/test/route",pathname:"/api/test",filename:"route",bundlePath:"app/api/test/route"},resolvedPagePath:"C:\\Users\\sanji\\Desktop\\blumerx\\src\\app\\api\\test\\route.ts",nextConfigOutput:"standalone",userland:s}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:c}=p,l="/api/test/route";function m(){return(0,n.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}},8689:(e,t,r)=>{e.exports=r(517)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[716],()=>r(2197));module.exports=s})();