import y,{Fragment as j,createContext as L,useContext as k,useEffect as g,useMemo as E,useReducer as N,useRef as R}from"react";import{match as O}from"../../utils/match.js";import{forwardRefWithAs as M,render as x,Features as F}from"../../utils/render.js";import{optionalRef as G,useSyncRefs as v}from"../../hooks/use-sync-refs.js";import{useId as _}from"../../hooks/use-id.js";import{Keys as S}from"../keyboard.js";import{isDisabledReactIssue7711 as W}from"../../utils/bugs.js";import{OpenClosedProvider as $,State as B,useOpenClosed as q}from"../../internal/open-closed.js";import{useResolveButtonType as z}from"../../hooks/use-resolve-button-type.js";import{getOwnerDocument as J}from"../../utils/owner.js";import{useEvent as b}from"../../hooks/use-event.js";var Q=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Q||{}),V=(l=>(l[l.ToggleDisclosure=0]="ToggleDisclosure",l[l.CloseDisclosure=1]="CloseDisclosure",l[l.SetButtonId=2]="SetButtonId",l[l.SetPanelId=3]="SetPanelId",l[l.LinkPanel=4]="LinkPanel",l[l.UnlinkPanel=5]="UnlinkPanel",l))(V||{});let X={[0]:e=>({...e,disclosureState:O(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},h=L(null);h.displayName="DisclosureContext";function H(e){let t=k(h);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,H),o}return t}let U=L(null);U.displayName="DisclosureAPIContext";function K(e){let t=k(U);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,K),o}return t}let w=L(null);w.displayName="DisclosurePanelContext";function Y(){return k(w)}function Z(e,t){return O(t.type,X,e,t)}let ee=j,te=M(function(t,o){let{defaultOpen:n=!1,...s}=t,i=`headlessui-disclosure-button-${_()}`,l=`headlessui-disclosure-panel-${_()}`,u=R(null),D=v(o,G(f=>{u.current=f},t.as===void 0||t.as===y.Fragment)),P=R(null),m=R(null),p=N(Z,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:m,panelRef:P,buttonId:i,panelId:l}),[{disclosureState:a},c]=p;g(()=>c({type:2,buttonId:i}),[i,c]),g(()=>c({type:3,panelId:l}),[l,c]);let T=b(f=>{c({type:1});let A=J(u);if(!A)return;let I=(()=>f?f instanceof HTMLElement?f:f.current instanceof HTMLElement?f.current:A.getElementById(i):A.getElementById(i))();I==null||I.focus()}),C=E(()=>({close:T}),[T]),r=E(()=>({open:a===0,close:T}),[a,T]),d={ref:D};return y.createElement(h.Provider,{value:p},y.createElement(U.Provider,{value:C},y.createElement($,{value:O(a,{[0]:B.Open,[1]:B.Closed})},x({ourProps:d,theirProps:s,slot:r,defaultTag:ee,name:"Disclosure"}))))}),ne="button",le=M(function(t,o){let[n,s]=H("Disclosure.Button"),i=Y(),l=i===null?!1:i===n.panelId,u=R(null),D=v(u,o,l?null:n.buttonRef),P=b(r=>{var d;if(l){if(n.disclosureState===1)return;switch(r.key){case S.Space:case S.Enter:r.preventDefault(),r.stopPropagation(),s({type:0}),(d=n.buttonRef.current)==null||d.focus();break}}else switch(r.key){case S.Space:case S.Enter:r.preventDefault(),r.stopPropagation(),s({type:0});break}}),m=b(r=>{switch(r.key){case S.Space:r.preventDefault();break}}),p=b(r=>{var d;W(r.currentTarget)||t.disabled||(l?(s({type:0}),(d=n.buttonRef.current)==null||d.focus()):s({type:0}))}),a=E(()=>({open:n.disclosureState===0}),[n]),c=z(t,u),T=t,C=l?{ref:D,type:c,onKeyDown:P,onClick:p}:{ref:D,id:n.buttonId,type:c,"aria-expanded":t.disabled?void 0:n.disclosureState===0,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:P,onKeyUp:m,onClick:p};return x({ourProps:C,theirProps:T,slot:a,defaultTag:ne,name:"Disclosure.Button"})}),oe="div",re=F.RenderStrategy|F.Static,se=M(function(t,o){let[n,s]=H("Disclosure.Panel"),{close:i}=K("Disclosure.Panel"),l=v(o,n.panelRef,()=>{n.linkedPanel||s({type:4})}),u=q(),D=(()=>u!==null?u===B.Open:n.disclosureState===0)();g(()=>()=>s({type:5}),[s]),g(()=>{var a;n.disclosureState===1&&((a=t.unmount)!=null?a:!0)&&s({type:5})},[n.disclosureState,t.unmount,s]);let P=E(()=>({open:n.disclosureState===0,close:i}),[n,i]),m=t,p={ref:l,id:n.panelId};return y.createElement(w.Provider,{value:n.panelId},x({ourProps:p,theirProps:m,slot:P,defaultTag:oe,features:re,visible:D,name:"Disclosure.Panel"}))}),ke=Object.assign(te,{Button:le,Panel:se});export{ke as Disclosure};
