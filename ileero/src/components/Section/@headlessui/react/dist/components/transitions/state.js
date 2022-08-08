var E=Object.defineProperty;var _=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var p=(t,e,n)=>(_(t,typeof e!="symbol"?e+"":e,n),n),x=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var l=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)};var c=(t,e,n)=>(x(t,e,"access private method"),n);var u,$,v,D,T,I,g,L,y,P,S,j,m,U;import{match as R}from"utils/match";let b=[];function G(t,e){let n=new C(t,e);return b.push(n),n}typeof window!="undefined"&&(window.debugMachines=()=>{b.forEach(t=>t.send("#debug"))});let A=1;const M=class{constructor(e,n={}){l(this,u);l(this,v);l(this,T);l(this,g);l(this,y);l(this,S);l(this,m);p(this,"id");p(this,"state",["idle","idle","idle"]);p(this,"actions");p(this,"parent");p(this,"children",new Set);this.id=`${e} [${A++}]`,this.actions=n}add(e){this.send("#child.add",e)}remove(e){this.send("#child.remove",e)}send(e,n){var i,s;(s=(i=this.actions).onEvent)==null||s.call(i,e,n),R(e,{reset:()=>this.reset(),enter:()=>this.enter(),leave:()=>this.leave(),cancel:()=>this.cancel(),start:()=>this.start(),stop:()=>this.stop(),"#child.add":()=>c(this,u,$).call(this,n),"#child.remove":()=>c(this,v,D).call(this,n),"#child.become":()=>c(this,T,I).call(this,n),"#child.resign":()=>c(this,g,L).call(this,n),"#child.start":()=>c(this,y,P).call(this),"#child.stop":()=>c(this,S,j).call(this),"#debug":()=>c(this,m,U).call(this)})}reset(){this.children.forEach(e=>e.send("reset")),this.moveTo({container:"idle",self:"idle",children:"idle"})}enter(){this.moveTo({container:"entering",self:"idle"})}leave(){this.moveTo({container:"leaving",self:"idle"})}cancel(){this.when({container:["entering","leaving"]},()=>this.moveTo({container:"cancelled",self:"idle",children:"idle"}))}start(){this.when({self:["idle"]},()=>this.moveTo({self:"running"}))}stop(){this.when({self:["running"]},()=>{this.hasRunningChildren()?this.moveTo({self:"waiting_for_children"}):this.moveTo({container:"done"})}),this.when({children:["waiting_for_self"]},()=>this.moveTo({container:"done"}))}onStateChange(e,n){var i,s,r,a,o,h,d,f;this.matches(e,{container:["idle"]})&&this.matches(n,{container:["entering","leaving"]})&&((s=(i=this.actions).onStart)==null||s.call(i)),this.matches(e,{container:["entering","leaving"]})&&this.matches(n,{container:["done"]})&&((a=(r=this.actions).onStop)==null||a.call(r)),this.matches(n,{container:["cancelled"]})&&((h=(o=this.actions).onCancel)==null||h.call(o)),this.matches(e,{container:["idle"]})&&this.matches(n,{container:["entering","leaving"]})&&((d=this.parent)==null||d.send("#child.start")),!this.matches(e,{container:["done"]})&&this.matches(n,{container:["done"]})&&((f=this.parent)==null||f.send("#child.stop"))}hasRunningChildren(){for(const e of this.children)if(e.state[0]==="entering"||e.state[0]==="leaving")return!0;return!1}when(e,n){this.matches(this.state,e)&&(n==null||n())}matches(e,n){var a,o,h,d,f,w;let i=(o=(a=n.container)==null?void 0:a.includes(e[0]))!=null?o:!0,s=(d=(h=n.self)==null?void 0:h.includes(e[1]))!=null?d:!0,r=(w=(f=n.children)==null?void 0:f.includes(e[2]))!=null?w:!0;return i&&s&&r}moveTo(e){var r,a,o,h,d;const n=this.state,i=[(r=e.container)!=null?r:n[0],(a=e.self)!=null?a:n[1],(o=e.children)!=null?o:n[2]];n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]||(this.state=i,this.onStateChange(n,i),(d=(h=this.actions).onChange)==null||d.call(h,n,i))}debugDescription(e="	"){const n=[];for(const i of this.debugLines(this,e))n.push(i);return n.join(`
`)}*debugLines(e,n,i=0){if(yield`${n.repeat(i)}<Machine ${e.id}> [${e.state.join(", ")}]`,e instanceof M)for(const a of e.children)yield*this.debugLines(a,n,i+1)}};let C=M;u=new WeakSet,$=function(e){this.children.add(e),e.send("#child.become",this)},v=new WeakSet,D=function(e){this.children.delete(e),e.send("#child.resign",this)},T=new WeakSet,I=function(e){this.parent=e},g=new WeakSet,L=function(e){this.parent=void 0},y=new WeakSet,P=function(){this.when({children:["idle"]},()=>this.moveTo({children:"running"}))},S=new WeakSet,j=function(){var e,n;this.when({self:["idle","running"],children:["running"]},()=>{this.hasRunningChildren()||this.moveTo({children:"waiting_for_self"})}),this.when({self:["waiting_for_children"],children:["running"]},()=>{this.hasRunningChildren()||this.moveTo({container:"done"})}),this.when({self:["waiting_for_children"],children:["waiting_for_self"]},()=>{this.hasRunningChildren()||this.moveTo({container:"done",self:"idle"})}),(n=(e=this.actions).onChildStop)==null||n.call(e)},m=new WeakSet,U=function(){console.log(this.debugDescription())};export{G as createTransitionMachine};