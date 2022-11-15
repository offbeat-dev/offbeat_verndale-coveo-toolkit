"use strict";(self.webpackChunk_verndale_toolkit=self.webpackChunk_verndale_toolkit||[]).push([[7937],{8934:function(A,p,n){n.d(p,{A:function(){return E},F:function(){return b},f:function(){return m},g:function(){return P}});var a=n(22973);const m="atomic/accessibility/findAriaLive";function E(s){function f(l){const c=(0,a.b)(m,{});document.dispatchEvent(c);const{element:d}=c.detail;d&&d.updateMessage(s,l)}return(l,c)=>{Object.defineProperty(l,c,{set:d=>f(d)})}}function b(){return(s,f)=>{const{componentWillLoad:l}=s;s.componentWillLoad=function(){l&&l.call(this);const{componentDidRender:c}=this;let d=!1,v=!1,o=null,t,e;this.componentDidRender=function(){if(c&&c.call(this),!!this.bindings&&d&&this.bindings.engine.state.search.response.searchUid!==t&&(d=!1,e)){const r=e;setTimeout(()=>{r.focus(),o==null||o()})}};const i={setTarget:r=>{!r||(e=r,v&&(v=!1,e.focus(),o==null||o()))},focusAfterSearch:()=>(t=this.bindings.engine.state.search.response.searchUid,d=!0,new Promise(r=>o=r)),focusOnNextTarget:()=>(v=!0,new Promise(r=>o=r)),disableForCurrentSearch:()=>this.bindings.engine.state.search.response.searchUid!==t&&(d=!1)};this[f]=i}}}function g(s){if(s.getAttribute("tabindex")==="-1")return!1;if(s.hasAttribute("tabindex")||s.getAttribute("contentEditable")==="true")return!0;switch(s.tagName){case"A":case"AREA":return s.hasAttribute("href");case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":return!s.hasAttribute("disabled");case"IFRAME":return!0;default:return!1}}function P(s){if(g(s))return s;let f=Array.from(s.children);s instanceof HTMLSlotElement?f=s.assignedElements():s.shadowRoot&&f.push(...Array.from(s.shadowRoot.children));for(const l of f){const c=P(l);if(c)return c}return null}},69839:function(A,p,n){n.d(p,{A:function(){return a}});const a=`<svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.09619 10.5962L5.69239 6L1.09619 1.40381" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`},57937:function(A,p,n){n.r(p),n.d(p,{atomic_result_printable_uri:function(){return t}});var a=n(51860),m=n(7941),E=n(24731),b=n(59348),g=n(52276),P=n(6981),s=n(69839),f=n(25452),l=n(8934),c=n(27663),d=n(29721);const v="atomic-result-printable-uri{max-width:100%;word-break:break-word}atomic-result-printable-uri a,atomic-result-printable-uri button{color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri a.focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri button.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:hover,atomic-result-printable-uri a:focus-visible,atomic-result-printable-uri button:hover,atomic-result-printable-uri button:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-printable-uri a:focus,atomic-result-printable-uri button:focus{outline:none}atomic-result-printable-uri a:visited,atomic-result-printable-uri button:visited{color:var(--atomic-visited)}atomic-result-printable-uri ul{display:flex;flex-wrap:wrap}atomic-result-printable-uri li{display:inline-flex;align-items:center;max-width:100%}atomic-result-printable-uri li a{display:inline-block;vertical-align:middle;max-width:100%;text-overflow:ellipsis;overflow:hidden}atomic-result-printable-uri li{white-space:nowrap}atomic-result-printable-uri li:last-child{white-space:normal}atomic-result-printable-uri li:last-child::after{content:none}atomic-result-printable-uri li .result-printable-uri-separator{display:inline-block;margin:0 0.5rem;vertical-align:middle;width:0.75rem;height:0.75rem;color:var(--atomic-neutral-dark)}";var o=function(e,i,r,u){var h=arguments.length,_=h<3?i:u===null?u=Object.getOwnPropertyDescriptor(i,r):u,O;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")_=Reflect.decorate(e,i,r,u);else for(var x=e.length-1;x>=0;x--)(O=e[x])&&(_=(h<3?O(_):h>3?O(i,r,_):O(i,r))||_);return h>3&&_&&Object.defineProperty(i,r,_),_};const t=class{constructor(e){(0,a.r)(this,e),this.listExpanded=!1,this.maxNumberOfParts=5,this.target="_self"}connectedCallback(){try{new P.S({maxNumberOfParts:new P.N({min:3})}).validate({maxNumberOfParts:this.maxNumberOfParts})}catch(e){this.error=e}}initialize(){this.interactiveResult=(0,m.N)(this.bindings.engine,{options:{result:this.result}})}getIndexOfEllipsis(e){return Math.min(e-1,this.maxNumberOfParts)}renderEllipsis(){return(0,a.h)("li",null,(0,a.h)("button",{"aria-label":this.bindings.i18n.t("collapsed-uri-parts"),onClick:e=>{e.preventDefault(),this.expandedPartFocus.focusOnNextTarget(),this.listExpanded=!0}},"..."),this.renderSeparator())}get allParents(){const e=(0,b.p)(`${this.result.raw.parents}`),i=Array.from(e.getElementsByTagName("parent")),r=this.getIndexOfEllipsis(i.length);return i.map((u,h)=>{const _=u.getAttribute("name"),O=u.getAttribute("uri");return(0,a.h)("li",null,this.renderLink(_,O,h===r),h===i.length-1?null:this.renderSeparator())})}renderSeparator(){return(0,a.h)("atomic-icon",{class:"result-printable-uri-separator",icon:s.A,role:"separator"})}renderParents(){const e=this.allParents;if(this.listExpanded||e.length<=this.maxNumberOfParts)return e;const i=this.getIndexOfEllipsis(e.length)-1;return[e.slice(0,i),this.renderEllipsis(),e.slice(-1)]}renderLink(e,i,r){return(0,a.h)(f.L,{href:i,title:typeof e=="string"?e:void 0,target:this.target,onSelect:()=>this.interactiveResult.select(),onBeginDelayedSelect:()=>this.interactiveResult.beginDelayedSelect(),onCancelPendingSelect:()=>this.interactiveResult.cancelPendingSelect(),ref:r?this.expandedPartFocus.setTarget:void 0},e)}render(){const e=this.renderParents();return e.length?(0,a.h)("ul",{"aria-label":this.bindings.i18n.t("printable-uri")},e):this.renderLink((0,a.h)("atomic-result-text",{field:"printableUri"}),this.result.clickUri,!1)}get host(){return(0,a.g)(this)}};o([(0,g.I)()],t.prototype,"bindings",void 0),o([(0,E.R)()],t.prototype,"result",void 0),o([(0,l.F)()],t.prototype,"expandedPartFocus",void 0),t.style=v},6981:function(A,p,n){n.d(p,{N:function(){return f},S:function(){return E},a:function(){return v},i:function(){return g}});/**
 * @license
 *
 * Copyright 2022 Coveo Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a(t,e){const i=`
  The following properties are invalid:

    ${t.join(`
	`)}
  
  ${e}
  `;return new m(i)}var m=class extends Error{constructor(t){super(t);this.name="SchemaValidationError"}},E=class{constructor(t){this.definition=t}validate(t={},e=""){const i={...this.default,...t},r=[];for(const u in this.definition){const h=this.definition[u].validate(i[u]);h&&r.push(`${u}: ${h}`)}if(r.length)throw a(r,e);return i}get default(){const t={};for(const e in this.definition){const i=this.definition[e].default;i!==void 0&&(t[e]=i)}return t}},b=class{constructor(t={}){this.baseConfig=t}validate(t){return this.baseConfig.required&&s(t)?"value is required.":null}get default(){return this.baseConfig.default instanceof Function?this.baseConfig.default():this.baseConfig.default}get required(){return this.baseConfig.required===!0}};function g(t){return t===void 0}function P(t){return t===null}function s(t){return g(t)||P(t)}var f=class{constructor(t={}){this.config=t,this.value=new b(t)}validate(t){const e=this.value.validate(t);return e||(l(t)?t<this.config.min?`minimum value of ${this.config.min} not respected.`:t>this.config.max?`maximum value of ${this.config.max} not respected.`:null:"value is not a number.")}get default(){return this.value.default}get required(){return this.value.required}};function l(t){return g(t)||c(t)}function c(t){return typeof t=="number"&&!isNaN(t)}var d=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,v=class{constructor(t={}){this.config={emptyAllowed:!0,url:!1,...t},this.value=new b(this.config)}validate(t){const{emptyAllowed:e,url:i,regex:r,constrainTo:u}=this.config,h=this.value.validate(t);return h||(g(t)?null:o(t)?!e&&!t.length?"value is an empty string.":i&&!d.test(t)?"value is not a valid URL.":r&&!r.test(t)?`value did not match provided regex ${r}`:u&&!u.includes(t)?`value should be one of: ${u.join(", ")}.`:null:"value is not a string.")}get default(){return this.value.default}get required(){return this.value.required}};function o(t){return Object.prototype.toString.call(t)==="[object String]"}},25452:function(A,p,n){n.d(p,{L:function(){return E}});var a=n(51860),m=n(18144);const E=({href:b,target:g,className:P,part:s,title:f,onSelect:l,onBeginDelayedSelect:c,onCancelPendingSelect:d,ref:v,attributes:o},t)=>{const e=(i,r)=>{i.stopPropagation(),r()};return(0,a.h)("a",{class:P,part:s,href:(0,m.f)(b),title:f,onClick:i=>e(i,l),onContextMenu:i=>e(i,l),onMouseDown:i=>e(i,l),onMouseUp:i=>e(i,l),onTouchStart:i=>e(i,c),onTouchEnd:i=>e(i,d),target:g,ref:i=>{v&&v(i),(o==null?void 0:o.length)&&[...o].forEach(({nodeName:r,nodeValue:u})=>{i==null||i.setAttribute(r,u)})}},t)}},18144:function(A,p,n){n.d(p,{f:function(){return a}});function a(m){const E=/^(https?|ftp|file|mailto|tel):/i.test(m),b=/^\//.test(m);return E||b?m:""}}}]);

//# sourceMappingURL=7937.bundle.js.map