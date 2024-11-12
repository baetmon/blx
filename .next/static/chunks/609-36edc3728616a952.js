"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{399:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(8030).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},6538:function(e,r,t){t.d(r,{aU:function(){return ej},$j:function(){return eb},VY:function(){return eD},dk:function(){return eN},aV:function(){return ew},h_:function(){return ex},fC:function(){return ey},Dx:function(){return eR},xz:function(){return eh}});var n=t(2265),o=t(8324),a=t(1584),i=t(8149),l=t(3201),s=t(1715),u=t(3938),d=t(467),c=t(6935),f=t(1383),p=t(5171),g=t(589),v=t(9418),m=t(8369),y=t(1538),h=t(7437),x="Dialog",[w,D]=(0,o.b)(x),[j,b]=w(x),R=e=>{let{__scopeDialog:r,children:t,open:o,defaultOpen:a,onOpenChange:i,modal:u=!0}=e,d=n.useRef(null),c=n.useRef(null),[f=!1,p]=(0,s.T)({prop:o,defaultProp:a,onChange:i});return(0,h.jsx)(j,{scope:r,triggerRef:d,contentRef:c,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:n.useCallback(()=>p(e=>!e),[p]),modal:u,children:t})};R.displayName=x;var N="DialogTrigger",A=n.forwardRef((e,r)=>{let{__scopeDialog:t,...n}=e,o=b(N,t),l=(0,a.e)(r,o.triggerRef);return(0,h.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Y(o.open),...n,ref:l,onClick:(0,i.M)(e.onClick,o.onOpenToggle)})});A.displayName=N;var C="DialogPortal",[I,O]=w(C,{forceMount:void 0}),E=e=>{let{__scopeDialog:r,forceMount:t,children:o,container:a}=e,i=b(C,r);return(0,h.jsx)(I,{scope:r,forceMount:t,children:n.Children.map(o,e=>(0,h.jsx)(f.z,{present:t||i.open,children:(0,h.jsx)(c.h,{asChild:!0,container:a,children:e})}))})};E.displayName=C;var M="DialogOverlay",F=n.forwardRef((e,r)=>{let t=O(M,e.__scopeDialog),{forceMount:n=t.forceMount,...o}=e,a=b(M,e.__scopeDialog);return a.modal?(0,h.jsx)(f.z,{present:n||a.open,children:(0,h.jsx)(_,{...o,ref:r})}):null});F.displayName=M;var _=n.forwardRef((e,r)=>{let{__scopeDialog:t,...n}=e,o=b(M,t);return(0,h.jsx)(v.Z,{as:y.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,h.jsx)(p.WV.div,{"data-state":Y(o.open),...n,ref:r,style:{pointerEvents:"auto",...n.style}})})}),k="DialogContent",V=n.forwardRef((e,r)=>{let t=O(k,e.__scopeDialog),{forceMount:n=t.forceMount,...o}=e,a=b(k,e.__scopeDialog);return(0,h.jsx)(f.z,{present:n||a.open,children:a.modal?(0,h.jsx)(P,{...o,ref:r}):(0,h.jsx)(W,{...o,ref:r})})});V.displayName=k;var P=n.forwardRef((e,r)=>{let t=b(k,e.__scopeDialog),o=n.useRef(null),l=(0,a.e)(r,t.contentRef,o);return n.useEffect(()=>{let e=o.current;if(e)return(0,m.Ry)(e)},[]),(0,h.jsx)(T,{...e,ref:l,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var r;e.preventDefault(),null===(r=t.triggerRef.current)||void 0===r||r.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let r=e.detail.originalEvent,t=0===r.button&&!0===r.ctrlKey;(2===r.button||t)&&e.preventDefault()}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault())})}),W=n.forwardRef((e,r)=>{let t=b(k,e.__scopeDialog),o=n.useRef(!1),a=n.useRef(!1);return(0,h.jsx)(T,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var n,i;null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,r),r.defaultPrevented||(o.current||null===(i=t.triggerRef.current)||void 0===i||i.focus(),r.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:r=>{var n,i;null===(n=e.onInteractOutside)||void 0===n||n.call(e,r),r.defaultPrevented||(o.current=!0,"pointerdown"!==r.detail.originalEvent.type||(a.current=!0));let l=r.target;(null===(i=t.triggerRef.current)||void 0===i?void 0:i.contains(l))&&r.preventDefault(),"focusin"===r.detail.originalEvent.type&&a.current&&r.preventDefault()}})}),T=n.forwardRef((e,r)=>{let{__scopeDialog:t,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,...s}=e,c=b(k,t),f=n.useRef(null),p=(0,a.e)(r,f);return(0,g.EW)(),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,h.jsx)(u.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Y(c.open),...s,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(X,{titleId:c.titleId}),(0,h.jsx)(G,{contentRef:f,descriptionId:c.descriptionId})]})]})}),S="DialogTitle",z=n.forwardRef((e,r)=>{let{__scopeDialog:t,...n}=e,o=b(S,t);return(0,h.jsx)(p.WV.h2,{id:o.titleId,...n,ref:r})});z.displayName=S;var B="DialogDescription",Z=n.forwardRef((e,r)=>{let{__scopeDialog:t,...n}=e,o=b(B,t);return(0,h.jsx)(p.WV.p,{id:o.descriptionId,...n,ref:r})});Z.displayName=B;var L="DialogClose",U=n.forwardRef((e,r)=>{let{__scopeDialog:t,...n}=e,o=b(L,t);return(0,h.jsx)(p.WV.button,{type:"button",...n,ref:r,onClick:(0,i.M)(e.onClick,()=>o.onOpenChange(!1))})});function Y(e){return e?"open":"closed"}U.displayName=L;var q="DialogTitleWarning",[H,K]=(0,o.k)(q,{contentName:k,titleName:S,docsSlug:"dialog"}),X=e=>{let{titleId:r}=e,t=K(q),o="`".concat(t.contentName,"` requires a `").concat(t.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(t.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(t.docsSlug);return n.useEffect(()=>{r&&!document.getElementById(r)&&console.error(o)},[o,r]),null},G=e=>{let{contentRef:r,descriptionId:t}=e,o=K("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return n.useEffect(()=>{var e;let n=null===(e=r.current)||void 0===e?void 0:e.getAttribute("aria-describedby");t&&n&&!document.getElementById(t)&&console.warn(a)},[a,r,t]),null},J="AlertDialog",[Q,$]=(0,o.b)(J,[D]),ee=D(),er=e=>{let{__scopeAlertDialog:r,...t}=e,n=ee(r);return(0,h.jsx)(R,{...n,...t,modal:!0})};er.displayName=J;var et=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,...n}=e,o=ee(t);return(0,h.jsx)(A,{...o,...n,ref:r})});et.displayName="AlertDialogTrigger";var en=e=>{let{__scopeAlertDialog:r,...t}=e,n=ee(r);return(0,h.jsx)(E,{...n,...t})};en.displayName="AlertDialogPortal";var eo=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,...n}=e,o=ee(t);return(0,h.jsx)(F,{...o,...n,ref:r})});eo.displayName="AlertDialogOverlay";var ea="AlertDialogContent",[ei,el]=Q(ea),es=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,children:o,...l}=e,s=ee(t),u=n.useRef(null),d=(0,a.e)(r,u),c=n.useRef(null);return(0,h.jsx)(H,{contentName:ea,titleName:eu,docsSlug:"alert-dialog",children:(0,h.jsx)(ei,{scope:t,cancelRef:c,children:(0,h.jsxs)(V,{role:"alertdialog",...s,...l,ref:d,onOpenAutoFocus:(0,i.M)(l.onOpenAutoFocus,e=>{var r;e.preventDefault(),null===(r=c.current)||void 0===r||r.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,h.jsx)(y.A4,{children:o}),(0,h.jsx)(em,{contentRef:u})]})})})});es.displayName=ea;var eu="AlertDialogTitle",ed=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,...n}=e,o=ee(t);return(0,h.jsx)(z,{...o,...n,ref:r})});ed.displayName=eu;var ec="AlertDialogDescription",ef=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,...n}=e,o=ee(t);return(0,h.jsx)(Z,{...o,...n,ref:r})});ef.displayName=ec;var ep=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,...n}=e,o=ee(t);return(0,h.jsx)(U,{...o,...n,ref:r})});ep.displayName="AlertDialogAction";var eg="AlertDialogCancel",ev=n.forwardRef((e,r)=>{let{__scopeAlertDialog:t,...n}=e,{cancelRef:o}=el(eg,t),i=ee(t),l=(0,a.e)(r,o);return(0,h.jsx)(U,{...i,...n,ref:l})});ev.displayName=eg;var em=e=>{let{contentRef:r}=e,t="`".concat(ea,"` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(ea,"` by passing a `").concat(ec,"` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(ea,"`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");return n.useEffect(()=>{var e;document.getElementById(null===(e=r.current)||void 0===e?void 0:e.getAttribute("aria-describedby"))||console.warn(t)},[t,r]),null},ey=er,eh=et,ex=en,ew=eo,eD=es,ej=ep,eb=ev,eR=ed,eN=ef},4458:function(e,r,t){t.d(r,{Ee:function(){return w},NY:function(){return D},fC:function(){return x}});var n=t(2265),o=t(8324),a=t(5137),i=t(1336),l=t(5171),s=t(7437),u="Avatar",[d,c]=(0,o.b)(u),[f,p]=d(u),g=n.forwardRef((e,r)=>{let{__scopeAvatar:t,...o}=e,[a,i]=n.useState("idle");return(0,s.jsx)(f,{scope:t,imageLoadingStatus:a,onImageLoadingStatusChange:i,children:(0,s.jsx)(l.WV.span,{...o,ref:r})})});g.displayName=u;var v="AvatarImage",m=n.forwardRef((e,r)=>{let{__scopeAvatar:t,src:o,onLoadingStatusChange:u=()=>{},...d}=e,c=p(v,t),f=function(e,r){let[t,o]=n.useState("idle");return(0,i.b)(()=>{if(!e){o("error");return}let t=!0,n=new window.Image,a=e=>()=>{t&&o(e)};return o("loading"),n.onload=a("loaded"),n.onerror=a("error"),n.src=e,r&&(n.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(o,d.referrerPolicy),g=(0,a.W)(e=>{u(e),c.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==f&&g(f)},[f,g]),"loaded"===f?(0,s.jsx)(l.WV.img,{...d,ref:r,src:o}):null});m.displayName=v;var y="AvatarFallback",h=n.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:o,...a}=e,i=p(y,t),[u,d]=n.useState(void 0===o);return n.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>d(!0),o);return()=>window.clearTimeout(e)}},[o]),u&&"loaded"!==i.imageLoadingStatus?(0,s.jsx)(l.WV.span,{...a,ref:r}):null});h.displayName=y;var x=g,w=m,D=h},2290:function(e,r,t){t.d(r,{x0:function(){return n}});let n=(e=21)=>{let r="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&t[e]];return r}}}]);