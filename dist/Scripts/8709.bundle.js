"use strict";(self.webpackChunk_verndale_toolkit=self.webpackChunk_verndale_toolkit||[]).push([[8709],{58709:function(p,a,t){t.r(a),t.d(a,{default:function(){return E}});var e=t(67294),s=t(98411),m=t(45697),i=t.n(m);const c=n=>{const{controller:r}=n,[l,f]=(0,e.useState)(r.state);return(0,e.useEffect)(()=>r.subscribe(()=>f(r.state)),[]),l.error?e.createElement("div",null,e.createElement("div",null,"Oops ",l.error.message),e.createElement("code",null,JSON.stringify(l.error))):e.createElement("div",null,e.createElement("ul",{style:{textAlign:"left"}},l.recommendations.map(o=>e.createElement("li",{key:o.uniqueId},e.createElement("article",null,e.createElement("h2",null,e.createElement("a",null,o.title)),e.createElement("p",null,o.excerpt))))))};c.propTypes={controller:i().object.isRequired};var u=c,d=(0,s.nt)({configuration:{},loggerOptions:{level:"info"}}),v=()=>{const n=(0,s.IM)(d,{options:{id:"Recommendation"}});return(0,e.useState)(()=>{n.refresh()},[]),e.createElement(e.Fragment,null,e.createElement(u,{controller:n}))},E=e.memo(v)}}]);

//# sourceMappingURL=8709.bundle.js.map