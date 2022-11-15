"use strict";(self.webpackChunk_verndale_toolkit=self.webpackChunk_verndale_toolkit||[]).push([[4444],{64444:function(P,f,r){r.r(f),r.d(f,{atomic_result_link:function(){return u}});var l=r(51860),a=r(7941),_=r(24731),c=r(52276),d=r(25452),g=r(6981),v=r(28828);function b(t,n){const i=Array.from(t.children).filter(o=>o.getAttribute("slot")===n||o.getAttribute("slot")!=="");if(!!i.length)return i.length>1&&console.warn(`Element should only have 1 slot named "${n}".`,t),i[0]}function h(t){const e=Array.from(t.children).filter(i=>!i.hasAttribute("slot")||i.getAttribute("slot")==="");if(!!e.length)return e.length>1&&console.warn("Element should only have 1 default slot.",t),e[0]}function p(t,n){const e=b(t,n);if(!!e){if(e.nodeName!=="A"){console.warn(`Slot named "${n}" should be an "a" tag`,e);return}return Array.from(e.attributes).filter(({nodeName:i})=>i==="slot"?!1:i==="href"?(console.warn('The "href" attribute set on the "attributes" slot element will be ignored.'),!1):!0)}}const E="atomic-result-link a{color:var(--atomic-on-background)}atomic-result-link a:hover,atomic-result-link a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:hover,atomic-result-link a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}atomic-result-link a:focus{outline:none}atomic-result-link a:visited{color:var(--atomic-visited)}";var m=function(t,n,e,i){var o=arguments.length,s=o<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,e):i,A;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,n,e,i);else for(var D=t.length-1;D>=0;D--)(A=t[D])&&(s=(o<3?A(s):o>3?A(n,e,s):A(n,e))||s);return o>3&&s&&Object.defineProperty(n,e,s),s};const u=class{constructor(t){(0,l.r)(this,t),this.target="_self"}initialize(){this.interactiveResult=(0,a.N)(this.bindings.engine,{options:{result:this.result}})}connectedCallback(){const t="attributes";this.hasDefaultSlot=!!h(this.host),this.linkAttributes=p(this.host,t)}render(){const t=(0,g.i)(this.hrefTemplate)?this.result.clickUri:(0,v.a)(this.hrefTemplate,this.result,this.bindings);return(0,l.h)(d.L,{href:t,target:this.target,onSelect:()=>this.interactiveResult.select(),onBeginDelayedSelect:()=>this.interactiveResult.beginDelayedSelect(),onCancelPendingSelect:()=>this.interactiveResult.cancelPendingSelect(),attributes:this.linkAttributes},this.hasDefaultSlot?(0,l.h)("slot",null):(0,l.h)("atomic-result-text",{field:"title",default:"no-title"}))}get host(){return(0,l.g)(this)}};m([(0,c.I)()],u.prototype,"bindings",void 0),m([(0,_.R)()],u.prototype,"result",void 0),u.style=E},6981:function(P,f,r){r.d(f,{N:function(){return b},S:function(){return _},a:function(){return m},i:function(){return d}});/**
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
 */function l(t,n){const e=`
  The following properties are invalid:

    ${t.join(`
	`)}
  
  ${n}
  `;return new a(e)}var a=class extends Error{constructor(t){super(t);this.name="SchemaValidationError"}},_=class{constructor(t){this.definition=t}validate(t={},n=""){const e={...this.default,...t},i=[];for(const o in this.definition){const s=this.definition[o].validate(e[o]);s&&i.push(`${o}: ${s}`)}if(i.length)throw l(i,n);return e}get default(){const t={};for(const n in this.definition){const e=this.definition[n].default;e!==void 0&&(t[n]=e)}return t}},c=class{constructor(t={}){this.baseConfig=t}validate(t){return this.baseConfig.required&&v(t)?"value is required.":null}get default(){return this.baseConfig.default instanceof Function?this.baseConfig.default():this.baseConfig.default}get required(){return this.baseConfig.required===!0}};function d(t){return t===void 0}function g(t){return t===null}function v(t){return d(t)||g(t)}var b=class{constructor(t={}){this.config=t,this.value=new c(t)}validate(t){const n=this.value.validate(t);return n||(h(t)?t<this.config.min?`minimum value of ${this.config.min} not respected.`:t>this.config.max?`maximum value of ${this.config.max} not respected.`:null:"value is not a number.")}get default(){return this.value.default}get required(){return this.value.required}};function h(t){return d(t)||p(t)}function p(t){return typeof t=="number"&&!isNaN(t)}var E=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,m=class{constructor(t={}){this.config={emptyAllowed:!0,url:!1,...t},this.value=new c(this.config)}validate(t){const{emptyAllowed:n,url:e,regex:i,constrainTo:o}=this.config,s=this.value.validate(t);return s||(d(t)?null:u(t)?!n&&!t.length?"value is an empty string.":e&&!E.test(t)?"value is not a valid URL.":i&&!i.test(t)?`value did not match provided regex ${i}`:o&&!o.includes(t)?`value should be one of: ${o.join(", ")}.`:null:"value is not a string.")}get default(){return this.value.default}get required(){return this.value.required}};function u(t){return Object.prototype.toString.call(t)==="[object String]"}},25452:function(P,f,r){r.d(f,{L:function(){return _}});var l=r(51860),a=r(18144);const _=({href:c,target:d,className:g,part:v,title:b,onSelect:h,onBeginDelayedSelect:p,onCancelPendingSelect:E,ref:m,attributes:u},t)=>{const n=(e,i)=>{e.stopPropagation(),i()};return(0,l.h)("a",{class:g,part:v,href:(0,a.f)(c),title:b,onClick:e=>n(e,h),onContextMenu:e=>n(e,h),onMouseDown:e=>n(e,h),onMouseUp:e=>n(e,h),onTouchStart:e=>n(e,p),onTouchEnd:e=>n(e,E),target:d,ref:e=>{m&&m(e),(u==null?void 0:u.length)&&[...u].forEach(({nodeName:i,nodeValue:o})=>{e==null||e.setAttribute(i,o)})}},t)}},18144:function(P,f,r){r.d(f,{f:function(){return l}});function l(a){const _=/^(https?|ftp|file|mailto|tel):/i.test(a),c=/^\//.test(a);return _||c?a:""}}}]);

//# sourceMappingURL=4444.bundle.js.map