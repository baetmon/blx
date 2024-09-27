"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[822],{6997:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(3517).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},8361:function(e,t,r){r.d(t,{aU:function(){return ej},$j:function(){return eb},VY:function(){return eD},dk:function(){return eN},aV:function(){return ew},h_:function(){return ex},fC:function(){return eh},Dx:function(){return eR},xz:function(){return ey}});var n=r(6041),o=r(8588),a=r(7314),i=r(8358),l=r(5763),s=r(6645),u=r(735),d=r(6699),c=r(7107),f=r(9373),p=r(7933),g=r(1351),v=r(5512),m=r(3794),h=r(316),y=r(9368),x="Dialog",[w,D]=(0,o.b)(x),[j,b]=w(x),R=e=>{let{__scopeDialog:t,children:r,open:o,defaultOpen:a,onOpenChange:i,modal:u=!0}=e,d=n.useRef(null),c=n.useRef(null),[f=!1,p]=(0,s.T)({prop:o,defaultProp:a,onChange:i});return(0,y.jsx)(j,{scope:t,triggerRef:d,contentRef:c,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:n.useCallback(()=>p(e=>!e),[p]),modal:u,children:r})};R.displayName=x;var N="DialogTrigger",A=n.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,o=b(N,r),l=(0,a.e)(t,o.triggerRef);return(0,y.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Y(o.open),...n,ref:l,onClick:(0,i.M)(e.onClick,o.onOpenToggle)})});A.displayName=N;var C="DialogPortal",[I,O]=w(C,{forceMount:void 0}),E=e=>{let{__scopeDialog:t,forceMount:r,children:o,container:a}=e,i=b(C,t);return(0,y.jsx)(I,{scope:t,forceMount:r,children:n.Children.map(o,e=>(0,y.jsx)(f.z,{present:r||i.open,children:(0,y.jsx)(c.h,{asChild:!0,container:a,children:e})}))})};E.displayName=C;var M="DialogOverlay",F=n.forwardRef((e,t)=>{let r=O(M,e.__scopeDialog),{forceMount:n=r.forceMount,...o}=e,a=b(M,e.__scopeDialog);return a.modal?(0,y.jsx)(f.z,{present:n||a.open,children:(0,y.jsx)(_,{...o,ref:t})}):null});F.displayName=M;var _=n.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,o=b(M,r);return(0,y.jsx)(v.Z,{as:h.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,y.jsx)(p.WV.div,{"data-state":Y(o.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),k="DialogContent",V=n.forwardRef((e,t)=>{let r=O(k,e.__scopeDialog),{forceMount:n=r.forceMount,...o}=e,a=b(k,e.__scopeDialog);return(0,y.jsx)(f.z,{present:n||a.open,children:a.modal?(0,y.jsx)(W,{...o,ref:t}):(0,y.jsx)(P,{...o,ref:t})})});V.displayName=k;var W=n.forwardRef((e,t)=>{let r=b(k,e.__scopeDialog),o=n.useRef(null),l=(0,a.e)(t,r.contentRef,o);return n.useEffect(()=>{let e=o.current;if(e)return(0,m.Ry)(e)},[]),(0,y.jsx)(T,{...e,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=r.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey;(2===t.button||r)&&e.preventDefault()}),onFocusOutside:(0,i.M)(e.onFocusOutside,e=>e.preventDefault())})}),P=n.forwardRef((e,t)=>{let r=b(k,e.__scopeDialog),o=n.useRef(!1),a=n.useRef(!1);return(0,y.jsx)(T,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var n,i;null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,t),t.defaultPrevented||(o.current||null===(i=r.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var n,i;null===(n=e.onInteractOutside)||void 0===n||n.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=r.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),T=n.forwardRef((e,t)=>{let{__scopeDialog:r,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,...s}=e,c=b(k,r),f=n.useRef(null),p=(0,a.e)(t,f);return(0,g.EW)(),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,y.jsx)(u.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Y(c.open),...s,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(X,{titleId:c.titleId}),(0,y.jsx)(G,{contentRef:f,descriptionId:c.descriptionId})]})]})}),S="DialogTitle",z=n.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,o=b(S,r);return(0,y.jsx)(p.WV.h2,{id:o.titleId,...n,ref:t})});z.displayName=S;var B="DialogDescription",Z=n.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,o=b(B,r);return(0,y.jsx)(p.WV.p,{id:o.descriptionId,...n,ref:t})});Z.displayName=B;var L="DialogClose",U=n.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,o=b(L,r);return(0,y.jsx)(p.WV.button,{type:"button",...n,ref:t,onClick:(0,i.M)(e.onClick,()=>o.onOpenChange(!1))})});function Y(e){return e?"open":"closed"}U.displayName=L;var q="DialogTitleWarning",[H,K]=(0,o.k)(q,{contentName:k,titleName:S,docsSlug:"dialog"}),X=e=>{let{titleId:t}=e,r=K(q),o="`".concat(r.contentName,"` requires a `").concat(r.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(r.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(r.docsSlug);return n.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},G=e=>{let{contentRef:t,descriptionId:r}=e,o=K("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return n.useEffect(()=>{var e;let n=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");r&&n&&!document.getElementById(r)&&console.warn(a)},[a,t,r]),null},J="AlertDialog",[Q,$]=(0,o.b)(J,[D]),ee=D(),et=e=>{let{__scopeAlertDialog:t,...r}=e,n=ee(t);return(0,y.jsx)(R,{...n,...r,modal:!0})};et.displayName=J;var er=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...n}=e,o=ee(r);return(0,y.jsx)(A,{...o,...n,ref:t})});er.displayName="AlertDialogTrigger";var en=e=>{let{__scopeAlertDialog:t,...r}=e,n=ee(t);return(0,y.jsx)(E,{...n,...r})};en.displayName="AlertDialogPortal";var eo=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...n}=e,o=ee(r);return(0,y.jsx)(F,{...o,...n,ref:t})});eo.displayName="AlertDialogOverlay";var ea="AlertDialogContent",[ei,el]=Q(ea),es=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,children:o,...l}=e,s=ee(r),u=n.useRef(null),d=(0,a.e)(t,u),c=n.useRef(null);return(0,y.jsx)(H,{contentName:ea,titleName:eu,docsSlug:"alert-dialog",children:(0,y.jsx)(ei,{scope:r,cancelRef:c,children:(0,y.jsxs)(V,{role:"alertdialog",...s,...l,ref:d,onOpenAutoFocus:(0,i.M)(l.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=c.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,y.jsx)(h.A4,{children:o}),(0,y.jsx)(em,{contentRef:u})]})})})});es.displayName=ea;var eu="AlertDialogTitle",ed=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...n}=e,o=ee(r);return(0,y.jsx)(z,{...o,...n,ref:t})});ed.displayName=eu;var ec="AlertDialogDescription",ef=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...n}=e,o=ee(r);return(0,y.jsx)(Z,{...o,...n,ref:t})});ef.displayName=ec;var ep=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...n}=e,o=ee(r);return(0,y.jsx)(U,{...o,...n,ref:t})});ep.displayName="AlertDialogAction";var eg="AlertDialogCancel",ev=n.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...n}=e,{cancelRef:o}=el(eg,r),i=ee(r),l=(0,a.e)(t,o);return(0,y.jsx)(U,{...i,...n,ref:l})});ev.displayName=eg;var em=e=>{let{contentRef:t}=e,r="`".concat(ea,"` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(ea,"` by passing a `").concat(ec,"` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(ea,"`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");return n.useEffect(()=>{var e;document.getElementById(null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},eh=et,ey=er,ex=en,ew=eo,eD=es,ej=ep,eb=ev,eR=ed,eN=ef},3931:function(e,t,r){r.d(t,{Ee:function(){return w},NY:function(){return D},fC:function(){return x}});var n=r(6041),o=r(8588),a=r(6665),i=r(4436),l=r(7933),s=r(9368),u="Avatar",[d,c]=(0,o.b)(u),[f,p]=d(u),g=n.forwardRef((e,t)=>{let{__scopeAvatar:r,...o}=e,[a,i]=n.useState("idle");return(0,s.jsx)(f,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:i,children:(0,s.jsx)(l.WV.span,{...o,ref:t})})});g.displayName=u;var v="AvatarImage",m=n.forwardRef((e,t)=>{let{__scopeAvatar:r,src:o,onLoadingStatusChange:u=()=>{},...d}=e,c=p(v,r),f=function(e){let[t,r]=n.useState("idle");return(0,i.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,o=e=>()=>{t&&r(e)};return r("loading"),n.onload=o("loaded"),n.onerror=o("error"),n.src=e,()=>{t=!1}},[e]),t}(o),g=(0,a.W)(e=>{u(e),c.onImageLoadingStatusChange(e)});return(0,i.b)(()=>{"idle"!==f&&g(f)},[f,g]),"loaded"===f?(0,s.jsx)(l.WV.img,{...d,ref:t,src:o}):null});m.displayName=v;var h="AvatarFallback",y=n.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:o,...a}=e,i=p(h,r),[u,d]=n.useState(void 0===o);return n.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>d(!0),o);return()=>window.clearTimeout(e)}},[o]),u&&"loaded"!==i.imageLoadingStatus?(0,s.jsx)(l.WV.span,{...a,ref:t}):null});y.displayName=h;var x=g,w=m,D=y},7602:function(e,t,r){r.d(t,{x0:function(){return n}});let n=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&r[e]];return t}}}]);