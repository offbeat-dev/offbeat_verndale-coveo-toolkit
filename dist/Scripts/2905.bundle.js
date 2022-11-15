"use strict";(self.webpackChunk_verndale_toolkit=self.webpackChunk_verndale_toolkit||[]).push([[2905],{2905:function(S,m,o){o.r(m),o.d(m,{atomic_search_layout:function(){return u}});var l=o(51860),h=o(59348),E=o(27663),M=o(29721);function n(t,i){return t.querySelector(r(i))}function r(t){return`atomic-layout-section[section="${t}"]`}function g(t,i){const c=`atomic-search-layout#${t.id}`,y="atomic-search-interface:not(.atomic-search-interface-no-results, .atomic-search-interface-error)",d=`@media only screen and (min-width: ${i})`,p=`${c} { display: grid }`,$=()=>{const a=n(t,"facets"),s=n(t,"main");if(!a||!s)return"";const e=a.minWidth||"17rem",b=a.maxWidth||"22rem",x=s.minWidth||"50%",v=s.maxWidth||"70rem";return`${d} {
      ${c} {
        grid-template-areas:
        '. .                     atomic-section-search .'
        '. atomic-section-main   atomic-section-main   .';
        grid-template-columns: 
          1fr minmax(${e}, ${b}) minmax(${x}, ${v}) 1fr;
        column-gap: var(--atomic-layout-spacing-x);
      }

      ${y} ${c} {
        grid-template-areas:
          '. .                     atomic-section-search .'
          '. atomic-section-facets atomic-section-main   .'
          '. atomic-section-facets .                     .';
      }

      ${y} ${c} ${r("facets")} {
        display: block;
      }
    }`},_=()=>{const a=n(t,"status");if(!a||!a.querySelector("atomic-refine-toggle"))return"";const e=`${c} ${r("status")}`;return`${e} atomic-sort-dropdown {
      display:none;
    }

    ${d} {
     ${e} atomic-sort-dropdown {
       display:block;
      }

      ${e} atomic-refine-toggle {
        display: none;
       }
    }`};return[p,$(),_()].filter(a=>a!=="").join(`

`)}const f=`.atomic-modal-opened{overflow-y:hidden}atomic-layout-section[section='search']{grid-area:atomic-section-search}atomic-layout-section[section='facets']{grid-area:atomic-section-facets}atomic-layout-section[section='main']{grid-area:atomic-section-main}atomic-layout-section[section='status']{grid-area:atomic-section-status}atomic-layout-section[section='pagination']{grid-area:atomic-section-pagination}atomic-search-layout{width:100%;height:100%;display:none;grid-template-areas:'. atomic-section-search .'
    '. atomic-section-main .';grid-template-columns:var(--atomic-layout-spacing-x) minmax(18rem, 1fr) var(--atomic-layout-spacing-x)}atomic-search-layout atomic-layout-section[section='search']{margin:var(--atomic-layout-spacing-y) 0}atomic-search-layout atomic-layout-section[section='facets']{display:none}atomic-search-layout atomic-layout-section[section='facets'] *{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='main']{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='status']{display:grid;justify-content:space-between;grid-template-areas:'atomic-breadbox      atomic-breadbox'
      'atomic-query-summary atomic-sort'
      'atomic-did-you-mean  atomic-did-you-mean'}atomic-search-layout atomic-layout-section[section='status']>*{margin-bottom:var(--atomic-layout-spacing-y)}atomic-search-layout atomic-layout-section[section='status'] atomic-breadbox{grid-area:atomic-breadbox}atomic-search-layout atomic-layout-section[section='status'] atomic-query-summary{grid-area:atomic-query-summary;align-self:center;overflow:hidden;min-width:12rem}atomic-search-layout atomic-layout-section[section='status'] atomic-sort-dropdown{grid-area:atomic-sort;justify-self:end}atomic-search-layout atomic-layout-section[section='status'] atomic-refine-toggle{grid-area:atomic-sort}atomic-search-layout atomic-layout-section[section='status'] atomic-did-you-mean{grid-area:atomic-did-you-mean}atomic-search-layout atomic-layout-section[section='results'] atomic-smart-snippet{margin-bottom:1.5rem}atomic-search-layout atomic-layout-section[section='results'] atomic-smart-snippet-suggestions{margin-bottom:1.5rem}atomic-search-layout atomic-layout-section[section='pagination']{display:flex;flex-direction:column;justify-content:space-between;align-items:center}atomic-search-layout atomic-layout-section[section='pagination'] atomic-load-more-results{width:100%}atomic-search-layout atomic-layout-section[section='pagination']>*{margin-top:var(--atomic-layout-spacing-y)}@media only screen and (min-width: 50rem){atomic-search-layout atomic-layout-section[section='pagination']{flex-direction:row}}`,u=class{constructor(t){(0,l.r)(this,t),this.mobileBreakpoint="1024px"}componentDidLoad(){const t=this.host.id||(0,h.r)("atomic-search-layout-");this.host.id=t;const i=document.createElement("style");i.innerHTML=g(this.host,this.mobileBreakpoint),this.host.appendChild(i)}get host(){return(0,l.g)(this)}};u.style=f}}]);

//# sourceMappingURL=2905.bundle.js.map