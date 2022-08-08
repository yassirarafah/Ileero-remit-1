import y,{Fragment as d,createContext as b,useContext as h,useEffect as s,useRef as m,useState as T}from"react";import{createPortal as L}from"react-dom";import{forwardRefWithAs as P,render as R}from"../../utils/render.js";import{useIsoMorphicEffect as G}from"../../hooks/use-iso-morphic-effect.js";import{usePortalRoot as M}from"../../internal/portal-force-root.js";import{useServerHandoffComplete as v}from"../../hooks/use-server-handoff-complete.js";import{optionalRef as C,useSyncRefs as g}from"../../hooks/use-sync-refs.js";import{useOwnerDocument as c}from"../../hooks/use-owner.js";import{microTask as O}from"../../utils/micro-task.js";function H(i){let u=M(),o=h(E),e=c(i),[r,f]=T(()=>{if(!u&&o!==null||typeof window=="undefined")return null;let n=e==null?void 0:e.getElementById("headlessui-portal-root");if(n)return n;if(e===null)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return s(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),s(()=>{u||o!==null&&f(o.current)},[o,f,u]),r}let x=d,_=P(function(u,o){let e=u,r=m(null),f=g(C(a=>{r.current=a}),o),n=c(r),t=H(r),[l]=T(()=>{var a;return typeof window=="undefined"?null:(a=n==null?void 0:n.createElement("div"))!=null?a:null}),A=v(),p=m(!1);return G(()=>{if(p.current=!1,!(!t||!l))return t.contains(l)||(l.setAttribute("data-headlessui-portal",""),t.appendChild(l)),()=>{p.current=!0,O(()=>{var a;!p.current||!t||!l||(t.removeChild(l),t.childNodes.length<=0&&((a=t.parentElement)==null||a.removeChild(t)))})}},[t,l]),A?!t||!l?null:L(R({ourProps:{ref:f},theirProps:e,defaultTag:x,name:"Portal"}),l):null}),U=d,E=b(null),j=P(function(u,o){let{target:e,...r}=u,n={ref:g(o)};return y.createElement(E.Provider,{value:e},R({ourProps:n,theirProps:r,defaultTag:U,name:"Popover.Group"}))}),X=Object.assign(_,{Group:j});export{X as Portal};
