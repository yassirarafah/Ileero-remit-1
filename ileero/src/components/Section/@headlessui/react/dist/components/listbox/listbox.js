import U,{Fragment as z,createContext as $,createRef as G,useContext as X,useEffect as q,useMemo as M,useReducer as J,useRef as N}from"react";import{useDisposables as B}from"../../hooks/use-disposables.js";import{useId as k}from"../../hooks/use-id.js";import{useIsoMorphicEffect as h}from"../../hooks/use-iso-morphic-effect.js";import{useComputed as W}from"../../hooks/use-computed.js";import{useSyncRefs as E}from"../../hooks/use-sync-refs.js";import{Features as Q,forwardRefWithAs as I,render as F,compact as Y}from"../../utils/render.js";import{match as P}from"../../utils/match.js";import{disposables as _}from"../../utils/disposables.js";import{Keys as f}from"../keyboard.js";import{Focus as v,calculateActiveIndex as Z}from"../../utils/calculate-active-index.js";import{isDisabledReactIssue7711 as ee}from"../../utils/bugs.js";import{isFocusableElement as te,FocusableMode as oe,sortByDomNode as ne}from"../../utils/focus-management.js";import{useOpenClosed as re,State as V,OpenClosedProvider as ie}from"../../internal/open-closed.js";import{useResolveButtonType as ae}from"../../hooks/use-resolve-button-type.js";import{useOutsideClick as le}from"../../hooks/use-outside-click.js";import{Hidden as se,Features as pe}from"../../internal/hidden.js";import{objectToFormEntries as ue}from"../../utils/form.js";import{getOwnerDocument as de}from"../../utils/owner.js";import{useEvent as g}from"../../hooks/use-event.js";var ce=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(ce||{}),fe=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(fe||{}),be=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(be||{}),Te=(r=>(r[r.OpenListbox=0]="OpenListbox",r[r.CloseListbox=1]="CloseListbox",r[r.SetDisabled=2]="SetDisabled",r[r.SetOrientation=3]="SetOrientation",r[r.GoToOption=4]="GoToOption",r[r.Search=5]="Search",r[r.ClearSearch=6]="ClearSearch",r[r.RegisterOption=7]="RegisterOption",r[r.UnregisterOption=8]="UnregisterOption",r))(Te||{});function H(t,i=n=>n){let n=t.activeOptionIndex!==null?t.options[t.activeOptionIndex]:null,e=ne(i(t.options.slice()),p=>p.dataRef.current.domRef.current),o=n?e.indexOf(n):null;return o===-1&&(o=null),{options:e,activeOptionIndex:o}}let xe={[1](t){return t.disabled||t.listboxState===1?t:{...t,activeOptionIndex:null,listboxState:1}},[0](t){if(t.disabled||t.listboxState===0)return t;let i=t.activeOptionIndex,{value:n,mode:e,compare:o}=t.propsRef.current,p=t.options.findIndex(l=>{let s=l.dataRef.current.value;return P(e,{[1]:()=>n.some(r=>o(r,s)),[0]:()=>o(n,s)})});return p!==-1&&(i=p),{...t,listboxState:0,activeOptionIndex:i}},[2](t,i){return t.disabled===i.disabled?t:{...t,disabled:i.disabled}},[3](t,i){return t.orientation===i.orientation?t:{...t,orientation:i.orientation}},[4](t,i){var o;if(t.disabled||t.listboxState===1)return t;let n=H(t),e=Z(i,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});return{...t,...n,searchQuery:"",activeOptionIndex:e,activationTrigger:(o=i.trigger)!=null?o:1}},[5]:(t,i)=>{if(t.disabled||t.listboxState===1)return t;let e=t.searchQuery!==""?0:1,o=t.searchQuery+i.value.toLowerCase(),l=(t.activeOptionIndex!==null?t.options.slice(t.activeOptionIndex+e).concat(t.options.slice(0,t.activeOptionIndex+e)):t.options).find(u=>{var r;return!u.dataRef.current.disabled&&((r=u.dataRef.current.textValue)==null?void 0:r.startsWith(o))}),s=l?t.options.indexOf(l):-1;return s===-1||s===t.activeOptionIndex?{...t,searchQuery:o}:{...t,searchQuery:o,activeOptionIndex:s,activationTrigger:1}},[6](t){return t.disabled||t.listboxState===1||t.searchQuery===""?t:{...t,searchQuery:""}},[7]:(t,i)=>{let n={id:i.id,dataRef:i.dataRef},e=H(t,o=>[...o,n]);if(t.activeOptionIndex===null){let{value:o,mode:p,compare:l}=t.propsRef.current,s=i.dataRef.current.value;P(p,{[1]:()=>o.some(r=>l(r,s)),[0]:()=>l(o,s)})&&(e.activeOptionIndex=e.options.indexOf(n))}return{...t,...e}},[8]:(t,i)=>{let n=H(t,e=>{let o=e.findIndex(p=>p.id===i.id);return o!==-1&&e.splice(o,1),e});return{...t,...n,activationTrigger:1}}},j=$(null);j.displayName="ListboxContext";function w(t){let i=X(j);if(i===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return i}function ye(t,i){return P(i.type,xe,t,i)}let Oe=z,me=I(function(i,n){let{value:e,name:o,onChange:p,disabled:l=!1,horizontal:s=!1,multiple:u=!1,...r}=i;const x=s?"horizontal":"vertical";let A=E(n),R=J(ye,{listboxState:1,propsRef:{current:{value:e,onChange:p,mode:u?1:0,compare:g((y,m)=>y===m)}},labelRef:G(),buttonRef:G(),optionsRef:G(),disabled:l,orientation:x,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:b,propsRef:O,optionsRef:T,buttonRef:d},a]=R;O.current.value=e,O.current.mode=u?1:0,h(()=>{O.current.onChange=y=>P(O.current.mode,{[0](){return p(y)},[1](){let m=O.current.value.slice(),C=m.indexOf(y);return C===-1?m.push(y):m.splice(C,1),p(m)}})},[p,O]),h(()=>a({type:2,disabled:l}),[l]),h(()=>a({type:3,orientation:x}),[x]),le([d,T],(y,m)=>{var C;a({type:1}),te(m,oe.Loose)||(y.preventDefault(),(C=d.current)==null||C.focus())},b===0);let c=M(()=>({open:b===0,disabled:l}),[b,l]),D={ref:A};return U.createElement(j.Provider,{value:R},U.createElement(ie,{value:P(b,{[0]:V.Open,[1]:V.Closed})},o!=null&&e!=null&&ue({[o]:e}).map(([y,m])=>U.createElement(se,{features:pe.Hidden,...Y({key:y,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:y,value:m})})),F({ourProps:D,theirProps:r,slot:c,defaultTag:Oe,name:"Listbox"})))}),ge="button",Re=I(function(i,n){var T;let[e,o]=w("Listbox.Button"),p=E(e.buttonRef,n),l=`headlessui-listbox-button-${k()}`,s=B(),u=g(d=>{switch(d.key){case f.Space:case f.Enter:case f.ArrowDown:d.preventDefault(),o({type:0}),s.nextFrame(()=>{e.propsRef.current.value||o({type:4,focus:v.First})});break;case f.ArrowUp:d.preventDefault(),o({type:0}),s.nextFrame(()=>{e.propsRef.current.value||o({type:4,focus:v.Last})});break}}),r=g(d=>{switch(d.key){case f.Space:d.preventDefault();break}}),x=g(d=>{if(ee(d.currentTarget))return d.preventDefault();e.listboxState===0?(o({type:1}),s.nextFrame(()=>{var a;return(a=e.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),o({type:0}))}),A=W(()=>{if(!!e.labelRef.current)return[e.labelRef.current.id,l].join(" ")},[e.labelRef.current,l]),R=M(()=>({open:e.listboxState===0,disabled:e.disabled}),[e]),b=i,O={ref:p,id:l,type:ae(i,e.buttonRef),"aria-haspopup":!0,"aria-controls":(T=e.optionsRef.current)==null?void 0:T.id,"aria-expanded":e.disabled?void 0:e.listboxState===0,"aria-labelledby":A,disabled:e.disabled,onKeyDown:u,onKeyUp:r,onClick:x};return F({ourProps:O,theirProps:b,slot:R,defaultTag:ge,name:"Listbox.Button"})}),Le="label",ve=I(function(i,n){let[e]=w("Listbox.Label"),o=`headlessui-listbox-label-${k()}`,p=E(e.labelRef,n),l=g(()=>{var x;return(x=e.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}),s=M(()=>({open:e.listboxState===0,disabled:e.disabled}),[e]);return F({ourProps:{ref:p,id:o,onClick:l},theirProps:i,slot:s,defaultTag:Le,name:"Listbox.Label"})}),Se="ul",Ae=Q.RenderStrategy|Q.Static,he=I(function(i,n){var d;let[e,o]=w("Listbox.Options"),p=E(e.optionsRef,n),l=`headlessui-listbox-options-${k()}`,s=B(),u=B(),r=re(),x=(()=>r!==null?r===V.Open:e.listboxState===0)();q(()=>{var c;let a=e.optionsRef.current;!a||e.listboxState===0&&a!==((c=de(a))==null?void 0:c.activeElement)&&a.focus({preventScroll:!0})},[e.listboxState,e.optionsRef]);let A=g(a=>{switch(u.dispose(),a.key){case f.Space:if(e.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),o({type:5,value:a.key});case f.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex!==null){let{dataRef:c}=e.options[e.activeOptionIndex];e.propsRef.current.onChange(c.current.value)}e.propsRef.current.mode===0&&(o({type:1}),_().nextFrame(()=>{var c;return(c=e.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})}));break;case P(e.orientation,{vertical:f.ArrowDown,horizontal:f.ArrowRight}):return a.preventDefault(),a.stopPropagation(),o({type:4,focus:v.Next});case P(e.orientation,{vertical:f.ArrowUp,horizontal:f.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),o({type:4,focus:v.Previous});case f.Home:case f.PageUp:return a.preventDefault(),a.stopPropagation(),o({type:4,focus:v.First});case f.End:case f.PageDown:return a.preventDefault(),a.stopPropagation(),o({type:4,focus:v.Last});case f.Escape:return a.preventDefault(),a.stopPropagation(),o({type:1}),s.nextFrame(()=>{var c;return(c=e.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})});case f.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(o({type:5,value:a.key}),u.setTimeout(()=>o({type:6}),350));break}}),R=W(()=>{var a,c,D;return(D=(a=e.labelRef.current)==null?void 0:a.id)!=null?D:(c=e.buttonRef.current)==null?void 0:c.id},[e.labelRef.current,e.buttonRef.current]),b=M(()=>({open:e.listboxState===0}),[e]),O=i,T={"aria-activedescendant":e.activeOptionIndex===null||(d=e.options[e.activeOptionIndex])==null?void 0:d.id,"aria-multiselectable":e.propsRef.current.mode===1?!0:void 0,"aria-labelledby":R,"aria-orientation":e.orientation,id:l,onKeyDown:A,role:"listbox",tabIndex:0,ref:p};return F({ourProps:T,theirProps:O,slot:b,defaultTag:Se,features:Ae,visible:x,name:"Listbox.Options"})}),Pe="li",De=I(function(i,n){let{disabled:e=!1,value:o,...p}=i,[l,s]=w("Listbox.Option"),u=`headlessui-listbox-option-${k()}`,r=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===u:!1,{value:x,compare:A}=l.propsRef.current,R=P(l.propsRef.current.mode,{[1]:()=>x.some(S=>A(S,o)),[0]:()=>A(x,o)}),b=N(null),O=E(n,b);h(()=>{if(l.listboxState!==0||!r||l.activationTrigger===0)return;let S=_();return S.requestAnimationFrame(()=>{var L,K;(K=(L=b.current)==null?void 0:L.scrollIntoView)==null||K.call(L,{block:"nearest"})}),S.dispose},[b,r,l.listboxState,l.activationTrigger,l.activeOptionIndex]);let T=N({disabled:e,value:o,domRef:b});h(()=>{T.current.disabled=e},[T,e]),h(()=>{T.current.value=o},[T,o]),h(()=>{var S,L;T.current.textValue=(L=(S=b.current)==null?void 0:S.textContent)==null?void 0:L.toLowerCase()},[T,b]);let d=g(()=>l.propsRef.current.onChange(o));h(()=>(s({type:7,id:u,dataRef:T}),()=>s({type:8,id:u})),[T,u]);let a=g(S=>{if(e)return S.preventDefault();d(),l.propsRef.current.mode===0&&(s({type:1}),_().nextFrame(()=>{var L;return(L=l.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})}))}),c=g(()=>{if(e)return s({type:4,focus:v.Nothing});s({type:4,focus:v.Specific,id:u})}),D=g(()=>{e||r||s({type:4,focus:v.Specific,id:u,trigger:0})}),y=g(()=>{e||!r||s({type:4,focus:v.Nothing})}),m=M(()=>({active:r,selected:R,disabled:e}),[r,R,e]);return F({ourProps:{id:u,ref:O,role:"option",tabIndex:e===!0?void 0:-1,"aria-disabled":e===!0?!0:void 0,"aria-selected":R===!0?!0:void 0,disabled:void 0,onClick:a,onFocus:c,onPointerMove:D,onMouseMove:D,onPointerLeave:y,onMouseLeave:y},theirProps:p,slot:m,defaultTag:Pe,name:"Listbox.Option"})}),rt=Object.assign(me,{Button:Re,Label:ve,Options:he,Option:De});export{rt as Listbox};
