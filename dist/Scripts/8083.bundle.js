"use strict";(self.webpackChunk_verndale_toolkit=self.webpackChunk_verndale_toolkit||[]).push([[8083],{8934:function(F,m,i){i.d(m,{A:function(){return g},F:function(){return r},f:function(){return u},g:function(){return C}});var a=i(22973);const u="atomic/accessibility/findAriaLive";function g(t){function p(e){const o=(0,a.b)(u,{});document.dispatchEvent(o);const{element:d}=o.detail;d&&d.updateMessage(t,e)}return(e,o)=>{Object.defineProperty(e,o,{set:d=>p(d)})}}function r(){return(t,p)=>{const{componentWillLoad:e}=t;t.componentWillLoad=function(){e&&e.call(this);const{componentDidRender:o}=this;let d=!1,l=!1,c=null,n,h;this.componentDidRender=function(){if(o&&o.call(this),!!this.bindings&&d&&this.bindings.engine.state.search.response.searchUid!==n&&(d=!1,h)){const s=h;setTimeout(()=>{s.focus(),c==null||c()})}};const y={setTarget:s=>{!s||(h=s,l&&(l=!1,h.focus(),c==null||c()))},focusAfterSearch:()=>(n=this.bindings.engine.state.search.response.searchUid,d=!0,new Promise(s=>c=s)),focusOnNextTarget:()=>(l=!0,new Promise(s=>c=s)),disableForCurrentSearch:()=>this.bindings.engine.state.search.response.searchUid!==n&&(d=!1)};this[p]=y}}}function w(t){if(t.getAttribute("tabindex")==="-1")return!1;if(t.hasAttribute("tabindex")||t.getAttribute("contentEditable")==="true")return!0;switch(t.tagName){case"A":case"AREA":return t.hasAttribute("href");case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":return!t.hasAttribute("disabled");case"IFRAME":return!0;default:return!1}}function C(t){if(w(t))return t;let p=Array.from(t.children);t instanceof HTMLSlotElement?p=t.assignedElements():t.shadowRoot&&p.push(...Array.from(t.shadowRoot.children));for(const e of p){const o=C(e);if(o)return o}return null}},28083:function(F,m,i){i.r(m),i.d(m,{atomic_query_error:function(){return s}});var a=i(51860),u=i(7941),g=i(52276),r=i(86032),w=i(8934);const C=`<svg viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<g filter="url(#filter0_b)">
<rect x="156.118" width="220.784" height="220.784" rx="14.7189" transform="rotate(45 156.118 0)" fill="#F6F7F9"/>
</g>
<g filter="url(#filter1_di)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M204.789 132.203C207.913 129.079 207.913 124.013 204.789 120.889L194.703 110.804C191.579 107.679 186.514 107.679 183.39 110.804L159.296 134.897L135.203 110.804C132.079 107.68 127.014 107.68 123.889 110.804L113.804 120.889C110.68 124.013 110.68 129.079 113.804 132.203L137.897 156.296L113.804 180.39C110.68 183.514 110.68 188.579 113.804 191.703L123.889 201.789C127.014 204.913 132.079 204.913 135.203 201.789L159.296 177.695L183.39 201.789C186.514 204.913 191.579 204.913 194.704 201.789L204.789 191.703C207.913 188.579 207.913 183.514 204.789 180.39L180.696 156.296L204.789 132.203Z" fill="url(#paint0_linear)"/>
</g>
</g>
<defs>
<filter id="filter0_b" x="2.41695" y="2.41707" width="307.401" height="307.401" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
<filter id="filter1_di" x="71.4607" y="94.4604" width="175.672" height="175.672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="26"/>
<feGaussianBlur stdDeviation="20"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.631373 0 0 0 0 0.0784315 0 0 0 0 0.0352941 0 0 0 0.34 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
</filter>
<linearGradient id="paint0_linear" x1="140.957" y1="85.034" x2="194.968" y2="243.078" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD7D3"/>
<stop offset="0.34375" stop-color="#E03729"/>
<stop offset="1" stop-color="#80130A"/>
</linearGradient>
<clipPath id="clip0">
<rect width="312" height="312" fill="white"/>
</clipPath>
</defs>
</svg>
`,t=`<svg viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b)">
<rect x="156.118" y="18.1177" width="195.162" height="195.162" rx="14.7189" transform="rotate(45 156.118 18.1177)" fill="#F6F7F9"/>
</g>
<g opacity="0.3" filter="url(#filter1_f)">
<ellipse cx="163" cy="208" rx="82" ry="67" fill="#6B6BBD"/>
</g>
<path d="M52.8789 191.42V176.016C52.8789 167.509 59.7754 160.612 68.2827 160.612V206.824C59.7754 206.824 52.8789 199.927 52.8789 191.42Z" fill="url(#paint0_linear)"/>
<path d="M260.622 191.42V176.016C260.622 167.509 253.725 160.612 245.218 160.612V206.824C253.725 206.824 260.622 199.927 260.622 191.42Z" fill="url(#paint1_linear)"/>
<path d="M68.2827 136.401V223.333C68.2827 235.484 78.1325 245.333 90.2827 245.333H223.426C235.576 245.333 245.426 235.484 245.426 223.333V136.401C245.426 124.251 235.576 114.401 223.426 114.401H90.2827C78.1325 114.401 68.2827 124.251 68.2827 136.401Z" fill="url(#paint2_radial)"/>
<path d="M68 136V179C68 191.15 77.8497 201 90 201H223C235.15 201 245 191.15 245 179V136C245 123.85 235.15 114 223 114H90C77.8497 114 68 123.85 68 136Z" fill="url(#paint3_radial)"/>
<g filter="url(#filter2_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M109.871 169.827C107.854 167.81 104.583 167.81 102.566 169.827C100.549 171.844 100.549 175.114 102.566 177.131L109.687 184.252L101.756 192.183C99.7394 194.2 99.7394 197.47 101.756 199.487C103.774 201.505 107.044 201.505 109.061 199.487L116.992 191.557L124.48 199.044C126.497 201.061 129.767 201.061 131.784 199.044C133.801 197.027 133.801 193.757 131.784 191.74L124.296 184.252L130.974 177.574C132.991 175.557 132.991 172.287 130.974 170.27C128.957 168.253 125.687 168.253 123.67 170.27L116.992 176.948L109.871 169.827Z" fill="url(#paint4_linear)"/>
</g>
<g filter="url(#filter3_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M189.928 169.827C187.911 167.81 184.641 167.81 182.624 169.827C180.607 171.844 180.607 175.114 182.624 177.131L189.745 184.252L181.814 192.183C179.797 194.2 179.797 197.47 181.814 199.487C183.831 201.505 187.101 201.505 189.118 199.487L197.049 191.557L204.537 199.044C206.554 201.061 209.824 201.061 211.841 199.044C213.859 197.027 213.859 193.757 211.841 191.74L204.354 184.252L211.031 177.574C213.049 175.557 213.049 172.287 211.031 170.27C209.014 168.253 205.744 168.253 203.727 170.27L197.049 176.948L189.928 169.827Z" fill="url(#paint5_linear)"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M156.705 97.54C158.914 97.54 160.705 99.3309 160.705 101.54L160.705 118.297C160.705 120.506 158.914 122.297 156.705 122.297C154.496 122.297 152.705 120.506 152.705 118.297L152.705 101.54C152.705 99.3309 154.496 97.54 156.705 97.54Z" fill="url(#paint6_linear)"/>
<g filter="url(#filter4_dd)">
<circle cx="157" cy="90" r="12" fill="url(#paint7_radial)"/>
</g>
<path d="M168.048 51.898C170.62 57.9389 166.78 65.3571 163.029 68C165.037 58.5 159.689 56 156.5 51C152.355 44.5 156.5 34.5 163.029 31C157.037 43 165.476 45.8571 168.048 51.898Z" fill="url(#paint8_linear)"/>
<path d="M145.836 28.898C143.264 34.9389 147.104 42.3571 150.856 45C148.848 35.5 154.196 33 157.385 28C161.53 21.5 157.385 11.5 150.855 8C156.848 20 148.408 22.8571 145.836 28.898Z" fill="url(#paint9_linear)"/>
<defs>
<filter id="filter0_b" x="20.5346" y="20.5346" width="271.166" height="271.166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
<filter id="filter1_f" x="56" y="116" width="214" height="184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter2_d" x="99.2437" y="168.147" width="35.0532" height="34.6865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.832636"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.945833 0 0 0 0 0.94768 0 0 0 0 1 0 0 0 0.52 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="179.301" y="168.147" width="35.0532" height="34.6865" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.832636"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.945833 0 0 0 0 0.94768 0 0 0 0 1 0 0 0 0.52 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_dd" x="113" y="46" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="7" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="8"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="20" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.28 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="21.5" y1="225.5" x2="48.5" y2="138.5" gradientUnits="userSpaceOnUse">
<stop offset="0.280743" stop-color="#262646"/>
<stop offset="0.669978" stop-color="#3F3F71"/>
<stop offset="0.947917" stop-color="#E03729"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="292" y1="225.5" x2="265.001" y2="138.5" gradientUnits="userSpaceOnUse">
<stop offset="0.280743" stop-color="#262646"/>
<stop offset="0.669978" stop-color="#3F3F71"/>
<stop offset="0.947917" stop-color="#E03729"/>
</linearGradient>
<radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37.5 127) rotate(32.0722) scale(363.474 350.348)">
<stop offset="0.00285263" stop-color="#F1F2FF"/>
<stop offset="0.288869" stop-color="#AEB0F1"/>
<stop offset="0.49092" stop-color="#6B6BBD"/>
<stop offset="0.725328" stop-color="#3F3F71"/>
<stop offset="0.948659" stop-color="#262646"/>
</radialGradient>
<radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(156.646 115.062) rotate(-179.685) scale(193.064 138.557)">
<stop stop-color="#F3B4AE"/>
<stop offset="0.135417" stop-color="#F05245"/>
<stop offset="0.359375" stop-color="#9A52C1" stop-opacity="0.33"/>
<stop offset="0.579441" stop-color="#525296" stop-opacity="0"/>
<stop offset="1" stop-color="#3F3F71" stop-opacity="0"/>
</radialGradient>
<linearGradient id="paint4_linear" x1="117.03" y1="236.548" x2="111.865" y2="161.655" gradientUnits="userSpaceOnUse">
<stop offset="0.192501" stop-color="#525296"/>
<stop offset="1" stop-color="#333357"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="195.15" y1="218.027" x2="191.922" y2="161.655" gradientUnits="userSpaceOnUse">
<stop offset="0.301964" stop-color="#525296"/>
<stop offset="1" stop-color="#333357"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="152" y1="100.5" x2="146.793" y2="123.958" gradientUnits="userSpaceOnUse">
<stop stop-color="#E03729"/>
<stop offset="0.543987" stop-color="#F05245"/>
<stop offset="0.910536" stop-color="#F3B4AE" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(153.5 74) rotate(-67.1094) scale(24.4233 32.8644)">
<stop stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
<linearGradient id="paint8_linear" x1="156.73" y1="26.0055" x2="191.658" y2="56.8092" gradientUnits="userSpaceOnUse">
<stop offset="0.067573" stop-color="#E5E8E8" stop-opacity="0.45"/>
<stop offset="1" stop-color="#8E959D" stop-opacity="0.35"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="157.154" y1="3.00553" x2="122.227" y2="33.8092" gradientUnits="userSpaceOnUse">
<stop offset="0.067573" stop-color="#E5E8E8" stop-opacity="0.45"/>
<stop offset="1" stop-color="#8E959D" stop-opacity="0.35"/>
</linearGradient>
</defs>
</svg>
`,p=`<svg viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<g filter="url(#filter0_b)">
<rect x="156.118" width="220.784" height="220.784" rx="14.7189" transform="rotate(45 156.118 0)" fill="#F6F7F9"/>
</g>
<rect x="60.1177" y="126" width="34" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="102.118" y="126" width="67" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="177.118" y="126" width="67" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="60.1177" y="151" width="162" height="9" rx="4.5" fill="#E5E8E8"/>
<rect x="60.1177" y="176" width="177" height="9" rx="4.5" fill="#E5E8E8"/>
<g filter="url(#filter1_f)">
<path d="M183.857 226.206C179.378 223.774 178.389 217.774 181.85 214.033C184.309 211.374 188.272 210.753 191.427 212.532L247.56 244.198C251.767 246.571 252.551 252.302 249.136 255.717C246.849 258.004 243.331 258.513 240.49 256.97L183.857 226.206Z" fill="#E5E8E8"/>
</g>
<rect x="195.143" y="205.948" width="15.064" height="78.2384" rx="7.53201" transform="rotate(-45 195.143 205.948)" fill="#333357"/>
<g filter="url(#filter2_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M161.415 226.595C200.792 226.595 232.713 194.674 232.713 155.298C232.713 115.921 200.792 84 161.415 84C122.039 84 90.1177 115.921 90.1177 155.298C90.1177 194.674 122.039 226.595 161.415 226.595ZM161.441 212.539C193.04 212.539 218.657 186.922 218.657 155.323C218.657 123.724 193.04 98.108 161.441 98.108C129.842 98.108 104.226 123.724 104.226 155.323C104.226 186.922 129.842 212.539 161.441 212.539Z" fill="url(#paint0_linear)"/>
</g>
<g filter="url(#filter3_d)">
<circle cx="161.415" cy="155.297" r="59.6307" fill="url(#paint1_linear)"/>
</g>
<g filter="url(#filter4_i)">
<circle cx="161.441" cy="155.323" r="57.2153" fill="url(#paint2_linear)"/>
</g>
<mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="104" y="98" width="115" height="115">
<circle cx="161.415" cy="155.298" r="57.038" fill="white"/>
</mask>
<g mask="url(#mask0)">
<rect opacity="0.5" x="104.117" y="126" width="37" height="18" rx="8" fill="url(#paint3_linear)"/>
<rect opacity="0.5" x="184.117" y="167" width="37" height="18" rx="8" fill="url(#paint4_linear)"/>
<g opacity="0.6" filter="url(#filter5_f)">
<path d="M179.302 90.5598L187.576 96.3234C187.576 96.3234 140.258 159.434 177.534 239.025C164.157 234.174 126.719 230.494 120.018 222.474C88.6869 131.944 179.302 90.5598 179.302 90.5598Z" fill="url(#paint5_linear)"/>
</g>
<g opacity="0.5" filter="url(#filter6_f)">
<circle cx="197.896" cy="133.778" r="7.77791" fill="white"/>
</g>
<g opacity="0.7" filter="url(#filter7_f)">
<circle cx="207.358" cy="150.241" r="3.2408" fill="white"/>
</g>
<g filter="url(#filter8_di)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M179.633 147.409C180.414 146.628 180.414 145.362 179.633 144.581L173.983 138.931C173.202 138.15 171.936 138.15 171.155 138.931L160.782 149.304L150.409 138.931C149.628 138.15 148.362 138.15 147.581 138.931L141.931 144.581C141.15 145.362 141.15 146.628 141.931 147.409L152.304 157.782L141.931 168.155C141.15 168.936 141.15 170.202 141.931 170.983L147.581 176.633C148.362 177.414 149.628 177.414 150.409 176.633L160.782 166.26L171.155 176.633C171.936 177.414 173.202 177.414 173.983 176.633L179.633 170.983C180.414 170.202 180.414 168.936 179.633 168.155L169.261 157.782L179.633 147.409Z" fill="url(#paint6_linear)"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_b" x="2.41695" y="2.41695" width="307.401" height="307.401" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
<filter id="filter1_f" x="174.586" y="206.339" width="81.8738" height="56.7021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.59264" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter2_d" x="59.006" y="84" width="204.818" height="206.115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="32.408"/>
<feGaussianBlur stdDeviation="15.5558"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.320677 0 0 0 0 0.320677 0 0 0 0 0.5875 0 0 0 0.38 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="91.4139" y="85.2962" width="140.002" height="140.002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.18528"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.320677 0 0 0 0 0.320677 0 0 0 0 0.5875 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_i" x="104.226" y="98.1079" width="114.431" height="124.801" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="10.3706"/>
<feGaussianBlur stdDeviation="5.83344"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.529306 0 0 0 0 0.529306 0 0 0 0 0.858333 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter5_f" x="110.431" y="87.5598" width="80.1448" height="154.465" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter6_f" x="187.525" y="123.407" width="20.7412" height="20.7412" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.29632" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter7_f" x="201.525" y="144.407" width="11.667" height="11.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.29632" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter8_di" x="128.345" y="129.345" width="64.874" height="64.874" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.933333 0 0 0 0 0.509331 0 0 0 0 0.474444 0 0 0 0.47 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.631373 0 0 0 0 0.0784315 0 0 0 0 0.0352941 0 0 0 0.47 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
</filter>
<linearGradient id="paint0_linear" x1="106.615" y1="63.4032" x2="289.344" y2="240.521" gradientUnits="userSpaceOnUse">
<stop offset="0.505208" stop-color="#3F3F71"/>
<stop offset="1" stop-color="#5D237D"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="200.305" y1="208.446" x2="121.878" y2="98.2589" gradientUnits="userSpaceOnUse">
<stop stop-color="#333357"/>
<stop offset="1" stop-color="#6B6BBD" stop-opacity="0.49"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="116.692" y1="142.334" x2="206.138" y2="195.483" gradientUnits="userSpaceOnUse">
<stop offset="0.0255459" stop-color="white"/>
<stop offset="1" stop-color="#E5E8E8"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="134.811" y1="148.895" x2="127.845" y2="133.378" gradientUnits="userSpaceOnUse">
<stop stop-color="#8787DB" stop-opacity="0.41"/>
<stop offset="1" stop-color="#C5CACF" stop-opacity="0.44"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="214.811" y1="189.895" x2="207.845" y2="174.378" gradientUnits="userSpaceOnUse">
<stop stop-color="#8787DB"/>
<stop offset="1" stop-color="#C5CACF" stop-opacity="0.44"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="164.859" y1="93.9621" x2="143.031" y2="190.673" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.198345" stop-color="white" stop-opacity="0.72"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="174.982" y1="133.098" x2="158.633" y2="177.137" gradientUnits="userSpaceOnUse">
<stop offset="0.067573" stop-color="#FFF2F1"/>
<stop offset="0.390337" stop-color="#EE8279"/>
<stop offset="0.635919" stop-color="#DA4134"/>
<stop offset="1" stop-color="#A11409"/>
</linearGradient>
<clipPath id="clip0">
<rect width="312" height="312" fill="white"/>
</clipPath>
</defs>
</svg>
`,e=`<svg viewBox="0 0 312 324" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b)">
<rect x="156.118" y="30.1177" width="195.162" height="195.162" rx="14.7189" transform="rotate(45 156.118 30.1177)" fill="#F6F7F9"/>
</g>
<g opacity="0.3" filter="url(#filter1_f)">
<ellipse cx="163" cy="220" rx="82" ry="67" fill="#6B6BBD"/>
</g>
<path d="M52.8789 203.42V188.016C52.8789 179.509 59.7754 172.613 68.2827 172.613V218.824C59.7754 218.824 52.8789 211.927 52.8789 203.42Z" fill="url(#paint0_linear)"/>
<path d="M260.622 203.42V188.016C260.622 179.509 253.725 172.613 245.218 172.613V218.824C253.725 218.824 260.622 211.927 260.622 203.42Z" fill="url(#paint1_linear)"/>
<path d="M68.2827 148.401V235.333C68.2827 247.483 78.1325 257.333 90.2827 257.333H223.426C235.576 257.333 245.426 247.483 245.426 235.333V148.401C245.426 136.251 235.576 126.401 223.426 126.401H90.2827C78.1325 126.401 68.2827 136.251 68.2827 148.401Z" fill="url(#paint2_radial)"/>
<g filter="url(#filter2_d)">
<rect x="137.025" y="202.044" width="41.32" height="10.33" rx="5.165" transform="rotate(-180 137.025 202.044)" fill="url(#paint3_linear)"/>
</g>
<g filter="url(#filter3_d)">
<rect x="217.083" y="202.044" width="41.32" height="10.33" rx="5.165" transform="rotate(-180 217.083 202.044)" fill="url(#paint4_linear)"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M156.705 109.54C158.914 109.54 160.705 111.331 160.705 113.54L160.705 130.297C160.705 132.506 158.914 134.297 156.705 134.297C154.496 134.297 152.705 132.506 152.705 130.297L152.705 113.54C152.705 111.331 154.496 109.54 156.705 109.54Z" fill="url(#paint5_linear)"/>
<g filter="url(#filter4_dd)">
<circle cx="157" cy="102" r="12" fill="url(#paint6_radial)"/>
</g>
<g filter="url(#filter5_dd)">
<path d="M189.951 48.1857C190.846 50.2055 189.934 52.5683 187.914 53.4631C185.895 54.3579 183.532 53.4459 182.637 51.4261C178.969 43.1461 171.834 36.7003 162.839 34.24C162.109 34.0403 161.695 33.2507 161.984 32.5507L162.062 32.3606C162.173 32.0902 162.416 31.8962 162.704 31.8472C163.256 31.7533 163.567 31.1606 163.332 30.653L163.297 30.5774C163.141 30.2433 163.202 29.8487 163.451 29.5771L163.78 29.2182C164.071 28.9 164.149 28.4412 163.981 28.0443C163.631 27.2203 164.357 26.3549 165.219 26.5972C176.501 29.7693 185.391 37.8919 189.951 48.1857Z" fill="url(#paint7_radial)"/>
</g>
<g filter="url(#filter6_dd)">
<path d="M124.625 50.2152C122.679 49.1703 121.948 46.7454 122.993 44.799C128.149 35.195 137.198 27.9272 148.196 25.3777C148.941 25.205 149.713 25.4939 150.187 26.0942L150.386 26.3466C150.804 26.8754 150.842 27.6104 150.48 28.1792L150.058 28.8437C149.877 29.1283 149.933 29.5026 150.19 29.7219C150.514 29.9999 150.504 30.5056 150.167 30.7697L150.013 30.8909C149.667 31.1623 149.59 31.6554 149.836 32.0199C150.169 32.5141 149.897 33.1908 149.32 33.3391C140.954 35.4887 134.047 41.1216 130.042 48.5829C128.997 50.5293 126.572 51.2601 124.625 50.2152Z" fill="url(#paint8_radial)"/>
</g>
<g filter="url(#filter7_dd)">
<path d="M141.288 59.1245C140.074 60.9703 137.593 61.4825 135.748 60.2687C133.902 59.0549 133.39 56.5745 134.603 54.7288C139.012 48.0254 146.196 43.3227 154.502 42.3249C155.01 42.2639 155.39 42.765 155.212 43.2446C155.13 43.4655 155.165 43.7129 155.304 43.9028L155.878 44.684C156.296 45.2537 156.357 46.0108 156.034 46.6397L155.96 46.7837C155.701 47.2905 155.732 47.8977 156.043 48.3748L156.2 48.6154C156.402 48.9251 156.43 49.317 156.274 49.6521C156.113 49.9972 155.78 50.2285 155.403 50.2752C149.546 50.9978 144.447 54.32 141.288 59.1245Z" fill="url(#paint9_radial)"/>
</g>
<g filter="url(#filter8_dd)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M147.894 70.4007C146.016 69.2378 145.436 66.7724 146.599 64.8941C148.753 61.4149 152.563 58.9999 157 58.9999C161.437 58.9999 165.247 61.4149 167.401 64.8941C168.564 66.7724 167.984 69.2378 166.106 70.4007C164.227 71.5637 161.762 70.9838 160.599 69.1056C159.771 67.768 158.424 66.9999 157 66.9999C155.576 66.9999 154.229 67.768 153.401 69.1056C152.238 70.9838 149.772 71.5637 147.894 70.4007Z" fill="url(#paint10_radial)"/>
</g>
<g filter="url(#filter9_dd)">
<path d="M178.066 63.4318C176.081 64.4019 173.686 63.5794 172.715 61.5947C170.221 56.491 165.666 52.5825 160.043 51.0819C159.462 50.9269 159.209 50.2189 159.591 49.7546C159.792 49.5108 159.828 49.1715 159.685 48.8903L159.433 48.3947C159.223 47.982 159.196 47.4999 159.36 47.0668L159.501 46.6968C159.715 46.1302 159.72 45.5056 159.514 44.9358L159.236 44.1658C159.134 43.8831 159.173 43.5686 159.342 43.3201C159.549 43.0161 159.915 42.8597 160.276 42.93C169.063 44.6423 176.17 50.4458 179.903 58.0815C180.873 60.0663 180.05 62.4616 178.066 63.4318Z" fill="url(#paint11_radial)"/>
</g>
<defs>
<filter id="filter0_b" x="20.5346" y="32.5347" width="271.166" height="271.166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
<filter id="filter1_f" x="56" y="128" width="214" height="184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter2_d" x="94.7051" y="191.546" width="43.3201" height="12.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.832636"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.945833 0 0 0 0 0.94768 0 0 0 0 1 0 0 0 0.52 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="174.762" y="191.546" width="43.3201" height="12.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.832636"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.945833 0 0 0 0 0.94768 0 0 0 0 1 0 0 0 0.52 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_dd" x="120" y="65" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter5_dd" x="136.891" y="1.55576" width="78.4041" height="77.2512" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter6_dd" x="97.5166" y="0.328194" width="78.2109" height="75.3635" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter7_dd" x="108.945" y="17.3198" width="72.4292" height="68.6072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter8_dd" x="120.999" y="33.9999" width="72.0012" height="62.0006" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter9_dd" x="134.18" y="17.9133" width="71.1299" height="70.9257" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.630409 0 0 0 0 0.6 0 0 0 0.65 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14" operator="dilate" in="SourceAlpha" result="effect2_dropShadow"/>
<feOffset/>
<feGaussianBlur stdDeviation="5.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.776706 0 0 0 0 0.758333 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="21.5" y1="237.5" x2="48.5" y2="150.5" gradientUnits="userSpaceOnUse">
<stop offset="0.280743" stop-color="#262646"/>
<stop offset="0.669978" stop-color="#3F3F71"/>
<stop offset="0.947917" stop-color="#E03729"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="292" y1="237.5" x2="265.001" y2="150.5" gradientUnits="userSpaceOnUse">
<stop offset="0.280743" stop-color="#262646"/>
<stop offset="0.669978" stop-color="#3F3F71"/>
<stop offset="0.947917" stop-color="#E03729"/>
</linearGradient>
<radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(101 126) rotate(34.9835) scale(276.45 266.467)">
<stop offset="0.00285263" stop-color="#F1F2FF"/>
<stop offset="0.288869" stop-color="#AEB0F1"/>
<stop offset="0.49092" stop-color="#6B6BBD"/>
<stop offset="0.725328" stop-color="#3F3F71"/>
<stop offset="0.948659" stop-color="#262646"/>
</radialGradient>
<linearGradient id="paint3_linear" x1="158.01" y1="223.608" x2="157.595" y2="199.834" gradientUnits="userSpaceOnUse">
<stop offset="0.192501" stop-color="#525296"/>
<stop offset="1" stop-color="#CD2113"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="238.067" y1="223.608" x2="237.653" y2="199.834" gradientUnits="userSpaceOnUse">
<stop offset="0.192501" stop-color="#525296"/>
<stop offset="1" stop-color="#CD2113"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="152.675" y1="86.4314" x2="161.724" y2="86.9609" gradientUnits="userSpaceOnUse">
<stop offset="0.280743" stop-color="#262646"/>
<stop offset="1" stop-color="#3F3F71"/>
</linearGradient>
<radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(153.5 86) rotate(-67.1094) scale(24.4233 32.8644)">
<stop stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
<radialGradient id="paint7_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.927 54.7428) rotate(148.137) scale(34.4296 63.8968)">
<stop stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
<radialGradient id="paint8_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.645 51.6621) rotate(134.916) scale(34.4296 63.8968)">
<stop stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
<radialGradient id="paint9_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(148.404 64.1809) rotate(117.278) scale(19.8216 29.8784)">
<stop offset="0.161458" stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
<radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160.208 73.0005) rotate(127.743) scale(14.2273 25.8601)">
<stop offset="0.161458" stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
<radialGradient id="paint11_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(171.356 66.4657) rotate(123.825) scale(19.9712 30.4288)">
<stop offset="0.161458" stop-color="#FFE4E2"/>
<stop offset="0.463542" stop-color="#F05245"/>
<stop offset="0.723958" stop-color="#FF5042"/>
<stop offset="1" stop-color="#FFA59D"/>
</radialGradient>
</defs>
</svg>
`,o=`<svg viewBox="0 0 501 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M230.5 260.235H175.25L152 283.485H74.5" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M363 170.485H396" stroke="url(#paint1_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M390.385 177.556L397.456 170.485L390.385 163.414" stroke="#C5CACF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.4998 66.6466L140.162 66.6467L162.5 88.9848H226.5" stroke="url(#paint2_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106.146 114.058L129.5 114.058L149 133.558L178.61 133.558" stroke="url(#paint3_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106.146 229.466L129.5 229.466L149 209.966L178.61 209.966" stroke="url(#paint4_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter0_d)">
<path d="M63.2996 222.279C64.3381 221.197 65.7839 220.525 67.3829 220.525C69.5084 220.525 71.3629 221.711 72.3505 223.47C73.2087 223.087 74.1587 222.873 75.1581 222.873C78.9918 222.873 82.0999 226.009 82.0999 229.876C82.0999 233.743 78.9918 236.879 75.1581 236.879C74.6989 236.879 74.2409 236.833 73.7908 236.742C72.9211 238.294 71.2638 239.342 69.3617 239.342C68.5654 239.342 67.8122 239.158 67.1416 238.831C66.26 240.905 64.206 242.359 61.8121 242.359C59.3191 242.359 57.1944 240.781 56.3789 238.569C56.0225 238.645 55.6533 238.684 55.2744 238.684C52.3062 238.684 49.8999 236.253 49.8999 233.254C49.8999 231.244 50.981 229.489 52.5874 228.55C52.2567 227.789 52.0727 226.949 52.0727 226.066C52.0727 222.617 54.873 219.82 58.327 219.82C60.3548 219.82 62.157 220.785 63.2996 222.279Z" fill="#00A1E0"/>
<path d="M54.5637 231.508C54.5435 231.561 54.571 231.572 54.5774 231.581C54.638 231.625 54.6995 231.657 54.7614 231.692C55.0898 231.866 55.3999 231.917 55.7242 231.917C56.3847 231.917 56.7948 231.566 56.7948 231V230.989C56.7948 230.466 56.332 230.276 55.8976 230.139L55.8412 230.121C55.5137 230.015 55.2311 229.923 55.2311 229.707V229.696C55.2311 229.511 55.3962 229.376 55.6522 229.376C55.9366 229.376 56.2742 229.47 56.4916 229.59C56.4916 229.59 56.5553 229.632 56.5787 229.57C56.5916 229.537 56.7017 229.24 56.7131 229.208C56.7255 229.173 56.7035 229.148 56.681 229.134C56.4329 228.983 56.0898 228.88 55.7348 228.88L55.6687 228.88C55.0642 228.88 54.6422 229.245 54.6422 229.769V229.78C54.6422 230.331 55.1078 230.51 55.544 230.635L55.6142 230.657C55.932 230.754 56.2059 230.838 56.2059 231.062V231.073C56.2059 231.278 56.0279 231.43 55.7408 231.43C55.6293 231.43 55.2738 231.428 54.8899 231.185C54.8435 231.158 54.8165 231.138 54.7807 231.117C54.7619 231.105 54.7147 231.084 54.694 231.147L54.5637 231.508ZM64.2333 231.508C64.2131 231.561 64.2406 231.572 64.2471 231.581C64.3076 231.625 64.3691 231.657 64.431 231.692C64.7594 231.866 65.0695 231.917 65.3938 231.917C66.0543 231.917 66.4644 231.566 66.4644 231V230.989C66.4644 230.466 66.0016 230.276 65.5672 230.139L65.5108 230.121C65.1832 230.015 64.9007 229.923 64.9007 229.707V229.696C64.9007 229.511 65.0658 229.376 65.3217 229.376C65.6061 229.376 65.9437 229.47 66.1612 229.59C66.1612 229.59 66.2249 229.632 66.2483 229.57C66.2611 229.537 66.3712 229.24 66.3827 229.208C66.3951 229.173 66.3731 229.148 66.3506 229.134C66.1024 228.983 65.7593 228.88 65.4043 228.88L65.3382 228.88C64.7337 228.88 64.3117 229.245 64.3117 229.769V229.78C64.3117 230.331 64.7773 230.51 65.2135 230.635L65.2837 230.657C65.6016 230.754 65.8759 230.838 65.8759 231.062V231.073C65.8759 231.278 65.6974 231.43 65.4103 231.43C65.2989 231.43 64.9434 231.428 64.5594 231.185C64.5131 231.158 64.4856 231.139 64.4508 231.117C64.4388 231.109 64.3828 231.087 64.3636 231.147L64.2333 231.508ZM70.8345 230.4C70.8345 230.72 70.7749 230.972 70.6574 231.15C70.5414 231.326 70.3657 231.412 70.1208 231.412C69.8754 231.412 69.7007 231.326 69.5864 231.15C69.4708 230.972 69.4121 230.72 69.4121 230.4C69.4121 230.081 69.4708 229.83 69.5864 229.653C69.7007 229.479 69.8754 229.394 70.1208 229.394C70.3657 229.394 70.5414 229.479 70.6579 229.653C70.7749 229.83 70.8345 230.081 70.8345 230.4ZM71.3859 229.808C71.3317 229.625 71.2473 229.463 71.135 229.329C71.0226 229.194 70.8804 229.086 70.7116 229.007C70.5432 228.928 70.3442 228.888 70.1208 228.888C69.897 228.888 69.6979 228.928 69.5295 229.007C69.3607 229.086 69.2186 229.194 69.1057 229.329C68.9938 229.464 68.9094 229.625 68.8548 229.808C68.8012 229.99 68.7741 230.189 68.7741 230.4C68.7741 230.612 68.8012 230.811 68.8548 230.993C68.9094 231.175 68.9934 231.337 69.1062 231.472C69.2186 231.607 69.3612 231.714 69.5296 231.791C69.6983 231.868 69.897 231.907 70.1208 231.907C70.3442 231.907 70.5428 231.868 70.7116 231.791C70.8799 231.714 71.0226 231.607 71.135 231.472C71.2474 231.337 71.3317 231.176 71.3859 230.993C71.44 230.811 71.4671 230.611 71.4671 230.4C71.4671 230.189 71.44 229.99 71.3859 229.808ZM75.9134 231.326C75.8951 231.273 75.8433 231.293 75.8433 231.293C75.763 231.324 75.6777 231.352 75.5869 231.366C75.4946 231.38 75.3933 231.388 75.2845 231.388C75.0176 231.388 74.8057 231.308 74.6539 231.152C74.5016 230.995 74.4163 230.741 74.4172 230.398C74.4181 230.086 74.4933 229.851 74.6287 229.672C74.7631 229.494 74.9676 229.403 75.2405 229.403C75.4681 229.403 75.6415 229.429 75.823 229.486C75.823 229.486 75.8666 229.505 75.8873 229.448C75.9354 229.314 75.9712 229.218 76.0226 229.071C76.0373 229.029 76.0015 229.011 75.9886 229.006C75.9171 228.978 75.7483 228.933 75.6208 228.914C75.5015 228.895 75.3621 228.886 75.207 228.886C74.9753 228.886 74.769 228.925 74.5924 229.004C74.4162 229.082 74.2667 229.191 74.1484 229.325C74.03 229.46 73.9401 229.622 73.8801 229.804C73.8204 229.986 73.7902 230.186 73.7902 230.398C73.7902 230.855 73.9135 231.225 74.1571 231.496C74.4011 231.767 74.7676 231.905 75.2456 231.905C75.5282 231.905 75.8181 231.848 76.0263 231.766C76.0263 231.766 76.0662 231.746 76.0488 231.7L75.9134 231.326ZM76.8781 230.094C76.9043 229.916 76.9533 229.769 77.029 229.654C77.1433 229.479 77.3175 229.383 77.5625 229.383C77.8075 229.383 77.9694 229.479 78.0854 229.654C78.1625 229.769 78.196 229.923 78.2093 230.094H76.8781ZM78.7344 229.704C78.6877 229.527 78.5716 229.349 78.4955 229.267C78.3753 229.138 78.2579 229.047 78.1414 228.997C77.9891 228.932 77.8065 228.889 77.6065 228.889C77.3735 228.889 77.162 228.928 76.9905 229.008C76.8185 229.089 76.674 229.199 76.5607 229.336C76.4474 229.473 76.3621 229.636 76.308 229.821C76.2534 230.005 76.2259 230.205 76.2259 230.416C76.2259 230.632 76.2543 230.832 76.3107 231.012C76.3676 231.194 76.4584 231.354 76.5813 231.486C76.7038 231.62 76.8616 231.725 77.0506 231.797C77.2382 231.87 77.4662 231.908 77.7281 231.907C78.2671 231.905 78.551 231.785 78.6679 231.72C78.6886 231.709 78.7083 231.689 78.6835 231.631L78.5615 231.289C78.5432 231.238 78.4913 231.257 78.4913 231.257C78.3578 231.307 78.168 231.396 77.7253 231.395C77.4359 231.394 77.2212 231.309 77.0868 231.175C76.9487 231.039 76.8813 230.838 76.8694 230.554L78.7358 230.556C78.7358 230.556 78.7848 230.555 78.7899 230.508C78.7918 230.488 78.8542 230.124 78.7344 229.704ZM61.9309 230.094C61.9575 229.916 62.0061 229.769 62.0818 229.654C62.196 229.479 62.3703 229.383 62.6152 229.383C62.8602 229.383 63.0221 229.479 63.1386 229.654C63.2152 229.769 63.2487 229.923 63.262 230.094H61.9309ZM63.7867 229.704C63.7399 229.527 63.6244 229.349 63.5482 229.267C63.428 229.138 63.3106 229.047 63.1941 228.997C63.0418 228.932 62.8593 228.889 62.6593 228.889C62.4267 228.889 62.2148 228.928 62.0433 229.008C61.8713 229.089 61.7268 229.199 61.6135 229.336C61.5002 229.473 61.4149 229.636 61.3607 229.821C61.3066 230.005 61.2787 230.205 61.2787 230.416C61.2787 230.632 61.3071 230.832 61.3635 231.012C61.4204 231.194 61.5112 231.354 61.6341 231.486C61.7566 231.62 61.9144 231.725 62.1034 231.797C62.291 231.87 62.519 231.908 62.7809 231.907C63.3198 231.905 63.6038 231.785 63.7207 231.72C63.7414 231.709 63.7611 231.689 63.7363 231.631L63.6148 231.289C63.596 231.238 63.5442 231.257 63.5442 231.257C63.4107 231.307 63.2212 231.396 62.7777 231.395C62.4887 231.394 62.2741 231.309 62.1396 231.175C62.0016 231.039 61.9342 230.838 61.9222 230.554L63.7886 230.556C63.7886 230.556 63.8377 230.555 63.8427 230.508C63.8445 230.488 63.9069 230.124 63.7867 229.704ZM57.8966 231.316C57.8237 231.258 57.8136 231.243 57.7889 231.205C57.7522 231.148 57.7334 231.067 57.7334 230.963C57.7334 230.799 57.7875 230.681 57.8999 230.601C57.8985 230.602 58.0604 230.462 58.4411 230.467C58.7085 230.47 58.9475 230.51 58.9475 230.51V231.358H58.9479C58.9479 231.358 58.7108 231.409 58.4439 231.425C58.0641 231.448 57.8953 231.316 57.8966 231.316ZM58.6392 230.005C58.5636 229.999 58.4654 229.996 58.348 229.996C58.1879 229.996 58.0333 230.016 57.8884 230.055C57.7425 230.094 57.6113 230.155 57.4985 230.236C57.3858 230.316 57.2932 230.422 57.2279 230.544C57.1618 230.667 57.1283 230.811 57.1283 230.974C57.1283 231.139 57.1568 231.283 57.2136 231.4C57.2705 231.518 57.3526 231.616 57.4572 231.692C57.5609 231.767 57.6888 231.823 57.8374 231.856C57.9838 231.89 58.1498 231.907 58.3315 231.907C58.5227 231.907 58.7135 231.891 58.8984 231.86C59.0814 231.828 59.3062 231.783 59.3685 231.769C59.4123 231.758 59.4559 231.747 59.4993 231.735C59.5456 231.724 59.5419 231.674 59.5419 231.674L59.541 229.967C59.541 229.593 59.441 229.316 59.2442 229.144C59.0484 228.972 58.7599 228.885 58.387 228.885C58.247 228.885 58.0218 228.905 57.887 228.932C57.887 228.932 57.4792 229.011 57.3113 229.142C57.3113 229.142 57.2746 229.165 57.2948 229.216L57.4269 229.571C57.4434 229.617 57.4879 229.601 57.4879 229.601C57.4879 229.601 57.5022 229.596 57.5187 229.586C57.8779 229.391 58.3319 229.397 58.3319 229.397C58.5338 229.397 58.6888 229.437 58.7934 229.518C58.8952 229.595 58.947 229.713 58.947 229.962V230.041C58.7865 230.018 58.6392 230.005 58.6392 230.005ZM73.6927 229.043C73.7068 229.001 73.6771 228.981 73.6646 228.976C73.633 228.964 73.4743 228.93 73.3518 228.922C73.1175 228.908 72.9872 228.948 72.8707 229C72.7551 229.052 72.6267 229.137 72.5551 229.232V229.005C72.5551 228.974 72.5326 228.948 72.5014 228.948H72.023C71.9918 228.948 71.9694 228.974 71.9694 229.005V231.789C71.9694 231.82 71.995 231.846 72.0262 231.846H72.5166C72.5316 231.846 72.546 231.84 72.5565 231.829C72.5671 231.819 72.573 231.804 72.573 231.789V230.398C72.573 230.212 72.5936 230.026 72.6349 229.909C72.6753 229.793 72.7303 229.7 72.7982 229.634C72.8665 229.568 72.9441 229.521 73.0289 229.495C73.1156 229.469 73.2115 229.46 73.2794 229.46C73.3771 229.46 73.4844 229.485 73.4844 229.485C73.5202 229.489 73.5404 229.467 73.5523 229.435C73.5844 229.349 73.6752 229.094 73.6927 229.043Z" fill="white"/>
<path d="M69.0901 227.753C69.0304 227.734 68.9763 227.722 68.9057 227.709C68.8341 227.696 68.7488 227.689 68.652 227.689C68.3144 227.689 68.0483 227.785 67.8617 227.973C67.6759 228.16 67.5497 228.445 67.4864 228.82L67.4635 228.946H67.0397C67.0397 228.946 66.9883 228.944 66.9773 229L66.9081 229.388C66.903 229.425 66.9191 229.449 66.9686 229.449H67.381L66.9626 231.784C66.93 231.972 66.8924 232.127 66.8507 232.244C66.8098 232.36 66.77 232.447 66.7204 232.51C66.6727 232.57 66.6278 232.615 66.5498 232.641C66.4856 232.663 66.4113 232.673 66.3301 232.673C66.2851 232.673 66.2251 232.666 66.1805 232.657C66.1365 232.648 66.1131 232.638 66.0796 232.624C66.0796 232.624 66.0315 232.606 66.0122 232.654C65.997 232.694 65.887 232.996 65.8737 233.033C65.8608 233.07 65.8792 233.099 65.9025 233.108C65.9576 233.127 65.9984 233.14 66.0732 233.158C66.1769 233.182 66.2644 233.184 66.3465 233.184C66.5181 233.184 66.675 233.159 66.8048 233.113C66.9351 233.065 67.0488 232.983 67.1497 232.872C67.2584 232.752 67.3268 232.626 67.3919 232.454C67.4566 232.285 67.5121 232.074 67.5561 231.828L67.9768 229.449H68.5914C68.5914 229.449 68.6432 229.45 68.6538 229.394L68.7235 229.006C68.7281 228.969 68.7125 228.946 68.6625 228.946H68.0657C68.0689 228.933 68.096 228.722 68.1643 228.525C68.1937 228.441 68.2487 228.372 68.2951 228.326C68.341 228.28 68.3937 228.247 68.4515 228.228C68.5107 228.209 68.5781 228.2 68.652 228.2C68.7079 228.2 68.7634 228.206 68.8052 228.215C68.8629 228.228 68.8854 228.234 68.9006 228.239C68.9616 228.257 68.9698 228.239 68.9818 228.21L69.1244 227.818C69.1391 227.776 69.1029 227.758 69.0901 227.753ZM60.7522 231.789C60.7522 231.82 60.7297 231.846 60.6985 231.846H60.2036C60.1724 231.846 60.1504 231.82 60.1504 231.789V227.806C60.1504 227.775 60.1724 227.75 60.2036 227.75H60.6985C60.7297 227.75 60.7522 227.775 60.7522 227.806V231.789Z" fill="white"/>
</g>
<g filter="url(#filter1_d)">
<path d="M69.1056 118.683C73.7985 118.683 77.6028 114.879 77.6028 110.186C77.6028 105.493 73.7985 101.689 69.1056 101.689C64.4127 101.689 60.6084 105.493 60.6084 110.186C60.6084 114.879 64.4127 118.683 69.1056 118.683Z" fill="#036C70"/>
<path d="M77.0437 124.945C81.0574 124.945 84.3111 121.691 84.3111 117.677C84.3111 113.663 81.0574 110.41 77.0437 110.41C73.0301 110.41 69.7764 113.663 69.7764 117.677C69.7764 121.691 73.0301 124.945 77.0437 124.945Z" fill="#1A9BA1"/>
<path d="M69.9999 130.311C73.2108 130.311 75.8138 127.708 75.8138 124.497C75.8138 121.286 73.2108 118.683 69.9999 118.683C66.789 118.683 64.186 121.286 64.186 124.497C64.186 127.708 66.789 130.311 69.9999 130.311Z" fill="#37C6D0"/>
<path opacity="0.1" d="M70.5967 107.95H60.9062C60.5635 109.211 60.5159 110.533 60.767 111.815C61.0181 113.097 61.5613 114.304 62.3543 115.342C63.1474 116.38 64.1689 117.222 65.3398 117.801C66.5106 118.381 67.7992 118.683 69.1056 118.683C69.3534 118.683 69.5985 118.672 69.8417 118.651L69.8462 118.685C68.3314 118.725 66.8921 119.355 65.8349 120.441C64.7777 121.526 64.1861 122.982 64.1862 124.497C64.1862 124.648 64.1918 124.797 64.2032 124.945H70.5967C70.9126 124.944 71.2153 124.818 71.4387 124.594C71.6621 124.371 71.788 124.068 71.789 123.752V109.142C71.788 108.826 71.6621 108.524 71.4387 108.3C71.2153 108.077 70.9126 107.951 70.5967 107.95Z" fill="#282829"/>
<path opacity="0.2" d="M69.7022 108.845H60.713C60.5196 110.059 60.5919 111.3 60.9247 112.483C61.2575 113.667 61.8429 114.764 62.6407 115.699C63.4384 116.634 64.4295 117.386 65.5456 117.901C66.6617 118.416 67.8763 118.683 69.1056 118.683C69.3533 118.683 69.5984 118.672 69.8417 118.651L69.8462 118.685C68.982 118.709 68.134 118.925 67.3637 119.317C66.5934 119.709 65.9202 120.268 65.393 120.953C64.8658 121.638 64.498 122.432 64.3161 123.278C64.1343 124.123 64.143 124.998 64.3418 125.839H69.7022C70.0181 125.838 70.3208 125.712 70.5442 125.489C70.7676 125.265 70.8935 124.963 70.8945 124.647V110.037C70.8935 109.721 70.7676 109.418 70.5442 109.195C70.3208 108.971 70.0181 108.846 69.7022 108.845Z" fill="#282829"/>
<path opacity="0.2" d="M69.7022 108.845H60.713C60.5196 110.059 60.5919 111.3 60.9247 112.483C61.2575 113.667 61.8429 114.764 62.6407 115.699C63.4384 116.634 64.4295 117.386 65.5456 117.901C66.6617 118.416 67.8763 118.683 69.1056 118.683C69.3533 118.683 69.5984 118.672 69.8417 118.651L69.8462 118.685C68.4085 118.723 67.0358 119.292 65.9934 120.283C64.951 121.274 64.3128 122.616 64.2022 124.05H69.7022C70.0181 124.049 70.3208 123.923 70.5442 123.7C70.7676 123.477 70.8935 123.174 70.8945 122.858V110.037C70.8935 109.721 70.7676 109.418 70.5442 109.195C70.3208 108.971 70.0181 108.846 69.7022 108.845Z" fill="#282829"/>
<path opacity="0.2" d="M68.8077 108.845H60.713C60.5196 110.059 60.5919 111.3 60.9247 112.483C61.2575 113.667 61.8429 114.764 62.6407 115.699C63.4384 116.634 64.4295 117.386 65.5456 117.901C66.6617 118.416 67.8763 118.683 69.1056 118.683C69.3533 118.683 69.5984 118.672 69.8417 118.651L69.8462 118.685C68.4085 118.723 67.0358 119.292 65.9934 120.283C64.951 121.274 64.3128 122.616 64.2022 124.05H68.8077C69.1236 124.049 69.4264 123.923 69.6498 123.7C69.8732 123.477 69.9991 123.174 70 122.858V110.037C69.9991 109.721 69.8732 109.418 69.6498 109.195C69.4264 108.971 69.1236 108.846 68.8077 108.845Z" fill="#282829"/>
<path d="M56.8813 108.845H68.8078C69.124 108.845 69.4273 108.97 69.6509 109.194C69.8745 109.417 70.0001 109.721 70.0001 110.037V121.963C70.0001 122.28 69.8745 122.583 69.6509 122.806C69.4273 123.03 69.124 123.156 68.8078 123.156H56.8813C56.565 123.156 56.2618 123.03 56.0382 122.806C55.8146 122.583 55.689 122.28 55.689 121.963V110.037C55.689 109.721 55.8146 109.417 56.0382 109.194C56.2618 108.97 56.565 108.845 56.8813 108.845Z" fill="#03787C"/>
<path d="M60.7605 115.844C60.4592 115.644 60.2077 115.378 60.0253 115.065C59.8476 114.739 59.7591 114.372 59.7686 114.001C59.753 113.499 59.9227 113.008 60.2453 112.623C60.584 112.237 61.0221 111.951 61.5118 111.796C62.0701 111.612 62.6548 111.522 63.2426 111.528C64.0154 111.499 64.7872 111.608 65.5225 111.847V113.457C65.203 113.264 64.8549 113.121 64.4912 113.036C64.0964 112.939 63.6912 112.89 63.2846 112.891C62.8562 112.876 62.4305 112.966 62.0449 113.153C61.8994 113.216 61.7754 113.32 61.6882 113.452C61.601 113.585 61.5543 113.74 61.5539 113.898C61.5521 114.094 61.6268 114.284 61.7623 114.426C61.9232 114.593 62.1133 114.728 62.3231 114.827C62.558 114.943 62.9087 115.099 63.375 115.292C63.4268 115.308 63.4773 115.328 63.5261 115.352C63.9861 115.532 64.4299 115.751 64.8526 116.006C65.173 116.204 65.4418 116.474 65.637 116.796C65.838 117.16 65.9361 117.572 65.9206 117.988C65.9434 118.503 65.7856 119.011 65.4742 119.423C65.1635 119.802 64.7482 120.08 64.2801 120.225C63.7299 120.397 63.1556 120.481 62.5789 120.472C62.0628 120.474 61.5475 120.432 61.0387 120.345C60.608 120.277 60.1874 120.156 59.7865 119.984V118.283C60.17 118.557 60.5987 118.761 61.053 118.886C61.5044 119.027 61.9737 119.103 62.4465 119.11C62.8844 119.138 63.3216 119.045 63.7104 118.842C63.843 118.766 63.9525 118.655 64.0273 118.522C64.1021 118.388 64.1394 118.237 64.1352 118.084C64.1361 117.977 64.1156 117.87 64.0747 117.77C64.0338 117.671 63.9735 117.58 63.8973 117.505C63.7052 117.316 63.483 117.162 63.2399 117.047C62.9602 116.906 62.547 116.721 62.0002 116.492C61.5664 116.318 61.1511 116.1 60.7605 115.844Z" fill="white"/>
</g>
<g filter="url(#filter2_d)">
<rect x="34.7366" y="268" width="22.2548" height="22.2548" rx="2.4271" transform="rotate(45 34.7366 268)" fill="#6B6BBD"/>
<path d="M29.6578 279.127L25.3039 283.482L29.6581 287.836" stroke="white" stroke-width="1.21355" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.5686 287.587L43.6738 283.482L39.5686 279.377" stroke="white" stroke-width="1.21355" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.9006 276.225L32.0626 290.739" stroke="white" stroke-width="1.21355" stroke-linecap="round"/>
</g>
<g filter="url(#filter3_d)">
<rect x="35.7366" y="50" width="22.2548" height="22.2548" rx="2.4271" transform="rotate(45 35.7366 50)" fill="#F05245"/>
<circle cx="35.8706" cy="65.8704" r="6.5" stroke="white"/>
<path d="M40.8706 61.4073C39.5194 62.0092 37.7928 62.3704 35.9115 62.3704C33.992 62.3704 32.2336 61.9945 30.8706 61.3704" stroke="white"/>
<path d="M40.8706 70.3335C39.5194 69.7315 37.7928 69.3704 35.9115 69.3704C33.992 69.3704 32.2336 69.7463 30.8706 70.3704" stroke="white"/>
<path d="M29.1206 65.3704H42.6206" stroke="white"/>
<path d="M35.8706 59.1204L35.8706 72.6204" stroke="white"/>
<path d="M35.2906 72.1939C33.5223 70.7663 32.3706 68.5758 32.3706 65.8703C32.3706 63.1242 33.5571 60.9087 35.3706 59.4829" stroke="white"/>
<path d="M36.3706 72.2577C38.1841 70.8319 39.3706 68.6164 39.3706 65.8703C39.3706 63.1242 38.1841 60.9087 36.3706 59.4829" stroke="white"/>
</g>
<circle r="4" transform="matrix(-1 0 0 1 68 66.4849)" stroke="#C5CACF" stroke-width="2"/>
<circle r="4" transform="matrix(-1 0 0 1 102 113.485)" stroke="#C5CACF" stroke-width="2"/>
<circle cx="102" cy="230.04" r="4" transform="rotate(180 102 230.04)" stroke="#C5CACF" stroke-width="2"/>
<circle r="4" transform="matrix(-1 0 0 1 69 283.485)" stroke="#C5CACF" stroke-width="2"/>
<rect x="379" y="62.4846" width="68" height="24" rx="4" fill="#F6F7F9"/>
<g filter="url(#filter4_d)">
<rect x="404" y="190.485" width="68" height="24" rx="4" fill="#C5CACF"/>
</g>
<g filter="url(#filter5_d)">
<rect x="404" y="126.485" width="68" height="24" rx="4" fill="#C5CACF"/>
</g>
<rect x="379" y="254.485" width="68" height="24" rx="4" fill="#F6F7F9"/>
<rect x="392" y="94.4846" width="68" height="24" rx="4" fill="#E5E8E8"/>
<rect x="392" y="222.485" width="68" height="24" rx="4" fill="#E5E8E8"/>
<g filter="url(#filter6_dd)">
<rect x="413" y="158.485" width="68" height="24" rx="4" fill="#16DCC1"/>
</g>
<g filter="url(#filter7_b)">
<rect x="242.808" y="37.2927" width="189.276" height="189.276" rx="16" transform="rotate(45 242.808 37.2927)" fill="#F6F7F9"/>
</g>
<g style="mix-blend-mode:multiply" opacity="0.5" filter="url(#filter8_f)">
<circle cx="246" cy="170.485" r="58" fill="#AEB0F1"/>
</g>
<path d="M260.5 131.435C273.156 132.794 283 143.222 283 155.885C283 168.547 274.563 180.485 260.5 180.485H164.875C155.555 180.485 148 173.142 148 164.085C148 154.934 156.034 147.395 165.436 147.694C168.094 134.945 180.099 125.61 193.466 125.822C196.143 110.307 210.026 98.4846 226.75 98.4846C245.236 98.4846 260.541 113.502 260.5 131.435Z" fill="white"/>
<path d="M238.001 162.604C227.875 163.681 220 171.947 220 181.985C220 192.022 226.75 201.485 238 201.485H314.5C321.956 201.485 328 195.664 328 188.485C328 181.231 321.573 175.255 314.052 175.492C311.925 165.386 302.321 157.987 291.627 158.154C289.486 145.856 278.38 136.485 265 136.485C250.212 136.485 237.968 148.389 238.001 162.604Z" fill="white"/>
<g filter="url(#filter9_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M291.612 130.35C294.524 128.768 298.167 129.846 299.748 132.758L305.244 142.874C306.826 145.785 305.748 149.428 302.836 151.01L298.901 153.148C296.457 154.475 295.285 157.303 295.757 160.043C296.139 162.254 296.37 164.474 296.455 166.691C296.562 169.47 298.298 171.991 300.965 172.78L305.259 174.051C308.436 174.991 310.25 178.33 309.309 181.507L306.043 192.546C305.102 195.723 301.764 197.537 298.587 196.596L294.293 195.326C291.626 194.536 288.797 195.707 287.195 197.98C285.917 199.794 284.514 201.532 282.989 203.181C281.101 205.222 280.546 208.233 281.873 210.676L284.01 214.61C285.592 217.522 284.514 221.165 281.602 222.747L271.487 228.242C268.575 229.824 264.932 228.746 263.35 225.834L261.213 221.899C259.885 219.456 257.058 218.283 254.317 218.756C252.105 219.138 249.883 219.369 247.665 219.454C244.885 219.561 242.364 221.297 241.574 223.964L240.303 228.261C239.362 231.438 236.024 233.252 232.847 232.311L221.808 229.044C218.631 228.104 216.817 224.766 217.758 221.588L219.03 217.289C219.819 214.622 218.649 211.794 216.376 210.192C214.564 208.914 212.827 207.512 211.181 205.99C209.14 204.102 206.129 203.547 203.686 204.874L199.75 207.012C196.838 208.594 193.196 207.516 191.614 204.604L186.118 194.488C184.536 191.577 185.615 187.934 188.526 186.352L192.461 184.215C194.904 182.887 196.077 180.059 195.604 177.319C195.222 175.106 194.991 172.884 194.906 170.666C194.799 167.887 193.063 165.366 190.396 164.577L186.097 163.304C182.919 162.364 181.106 159.026 182.046 155.848L185.313 144.81C186.254 141.632 189.592 139.819 192.769 140.759L197.068 142.032C199.735 142.821 202.564 141.651 204.166 139.377C205.444 137.563 206.848 135.825 208.372 134.177C210.26 132.136 210.816 129.125 209.488 126.681L207.351 122.748C205.769 119.836 206.847 116.193 209.759 114.611L219.875 109.116C222.786 107.534 226.429 108.612 228.011 111.524L230.149 115.459C231.476 117.902 234.304 119.075 237.044 118.602C239.255 118.221 241.475 117.99 243.691 117.904C246.47 117.798 248.991 116.061 249.78 113.394L251.052 109.097C251.993 105.919 255.331 104.106 258.508 105.046L269.547 108.313C272.724 109.254 274.538 112.592 273.598 115.769L272.326 120.066C271.537 122.733 272.707 125.562 274.981 127.164C276.795 128.442 278.534 129.846 280.183 131.371C282.224 133.259 285.235 133.815 287.678 132.487L291.612 130.35Z" fill="url(#paint5_linear)"/>
</g>
<g filter="url(#filter10_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M282.78 161.22C284.437 161.22 285.78 162.563 285.78 164.22L285.78 173.143C285.78 174.8 284.437 176.143 282.78 176.143L278.491 176.143C277.1 176.143 275.906 177.104 275.486 178.429C274.926 180.199 274.216 181.903 273.373 183.526C272.732 184.76 272.897 186.283 273.88 187.266L276.914 190.3C278.085 191.471 278.085 193.371 276.914 194.542L270.604 200.852C269.432 202.024 267.533 202.024 266.361 200.852L263.328 197.819C262.345 196.836 260.821 196.671 259.587 197.312C257.963 198.156 256.259 198.865 254.488 199.426C253.162 199.846 252.202 201.04 252.202 202.431L252.202 206.72C252.202 208.376 250.859 209.72 249.202 209.72L240.278 209.72C238.621 209.72 237.278 208.376 237.278 206.72L237.278 202.43C237.278 201.04 236.318 199.846 234.992 199.426C233.221 198.865 231.516 198.155 229.892 197.311C228.658 196.67 227.134 196.835 226.151 197.818L223.116 200.853C221.945 202.024 220.045 202.024 218.874 200.853L212.564 194.543C211.392 193.371 211.392 191.472 212.564 190.3L215.6 187.264C216.583 186.281 216.748 184.758 216.107 183.524C215.264 181.901 214.555 180.198 213.995 178.429C213.575 177.103 212.381 176.143 210.991 176.143L206.7 176.143C205.044 176.143 203.7 174.8 203.7 173.143L203.7 164.219C203.7 162.562 205.044 161.219 206.7 161.219L210.99 161.219C212.381 161.219 213.574 160.259 213.994 158.933C214.555 157.162 215.265 155.457 216.109 153.834C216.75 152.6 216.585 151.076 215.601 150.093L212.565 147.057C211.394 145.885 211.394 143.986 212.565 142.814L218.875 136.504C220.047 135.333 221.946 135.333 223.118 136.504L226.154 139.54C227.137 140.524 228.661 140.689 229.895 140.048C231.518 139.204 233.223 138.494 234.994 137.934C236.319 137.514 237.28 136.32 237.28 134.929L237.28 130.64C237.28 128.983 238.623 127.64 240.28 127.64L249.204 127.64C250.86 127.64 252.204 128.983 252.204 130.64L252.204 134.93C252.204 136.321 253.164 137.514 254.49 137.934C256.259 138.495 257.963 139.204 259.586 140.047C260.82 140.688 262.343 140.523 263.326 139.54L266.362 136.505C267.533 135.333 269.433 135.333 270.604 136.505L276.914 142.815C278.086 143.986 278.086 145.886 276.914 147.057L273.88 150.092C272.896 151.075 272.731 152.599 273.372 153.833C274.216 155.457 274.926 157.162 275.487 158.933C275.907 160.259 277.101 161.22 278.491 161.22L282.78 161.22Z" fill="#525296"/>
</g>
<g clip-path="url(#clip0)">
<path d="M254.471 159.305C252.248 157.095 249.4 155.853 246.478 155.58C246.128 155.555 245.928 155.977 246.178 156.226L250.849 160.87C250.874 160.895 250.849 160.944 250.799 160.92C249.45 159.951 247.927 159.405 246.353 159.256C246.103 159.231 245.978 159.529 246.153 159.703L249.351 162.881C249.375 162.906 249.351 162.956 249.301 162.931C248.426 162.335 247.427 161.987 246.403 161.888C246.228 161.863 246.128 162.087 246.253 162.186L251.673 167.575C251.798 167.699 251.998 167.6 251.973 167.426C251.873 166.408 251.524 165.415 250.924 164.545C250.899 164.52 250.949 164.471 250.974 164.496L254.046 167.55C254.221 167.724 254.521 167.575 254.496 167.352C254.371 165.812 253.822 164.272 252.847 162.956C252.822 162.931 252.872 162.881 252.897 162.906L257.568 167.55C257.818 167.799 258.243 167.6 258.218 167.227C257.943 164.347 256.694 161.516 254.471 159.305Z" fill="#00ADFF"/>
<path d="M236.137 159.305C238.36 157.095 241.208 155.853 244.13 155.58C244.48 155.555 244.68 155.977 244.43 156.226L239.759 160.87C239.734 160.895 239.759 160.944 239.809 160.92C241.158 159.951 242.681 159.405 244.255 159.256C244.505 159.231 244.63 159.529 244.455 159.703L241.258 162.881C241.233 162.906 241.258 162.956 241.307 162.931C242.182 162.335 243.181 161.987 244.205 161.888C244.38 161.863 244.48 162.087 244.355 162.186L238.935 167.6C238.81 167.724 238.61 167.625 238.635 167.451C238.735 166.433 239.084 165.439 239.684 164.57C239.709 164.545 239.659 164.496 239.634 164.52L236.562 167.575C236.387 167.749 236.087 167.6 236.112 167.376C236.262 165.812 236.811 164.272 237.786 162.956C237.811 162.931 237.761 162.881 237.736 162.906L233.04 167.55C232.79 167.799 232.365 167.6 232.39 167.227C232.665 164.347 233.914 161.516 236.137 159.305Z" fill="#F05245"/>
<path d="M236.137 177.683C238.36 179.893 241.208 181.135 244.13 181.408C244.48 181.433 244.68 181.01 244.43 180.762L239.759 176.118C239.734 176.093 239.759 176.044 239.809 176.068C241.158 177.037 242.681 177.583 244.255 177.732C244.505 177.757 244.63 177.459 244.455 177.285L241.258 174.106C241.233 174.082 241.258 174.032 241.307 174.057C242.182 174.653 243.181 175.001 244.205 175.1C244.38 175.125 244.48 174.901 244.355 174.802L238.935 169.388C238.81 169.264 238.61 169.363 238.635 169.537C238.735 170.555 239.084 171.549 239.684 172.418C239.709 172.443 239.659 172.492 239.634 172.467L236.562 169.413C236.387 169.239 236.087 169.388 236.112 169.611C236.262 171.176 236.811 172.716 237.786 174.032C237.811 174.057 237.761 174.106 237.736 174.082L233.04 169.438C232.79 169.189 232.365 169.388 232.39 169.76C232.665 172.641 233.914 175.472 236.137 177.683Z" fill="#1CEBCF"/>
<path d="M254.471 177.683C252.248 179.893 249.4 181.135 246.478 181.408C246.128 181.433 245.928 181.01 246.178 180.762L250.849 176.118C250.874 176.093 250.849 176.044 250.799 176.068C249.45 177.037 247.927 177.583 246.353 177.732C246.103 177.757 245.978 177.459 246.153 177.285L249.351 174.107C249.375 174.082 249.351 174.032 249.301 174.057C248.426 174.653 247.427 175.001 246.403 175.1C246.228 175.125 246.128 174.901 246.253 174.802L251.673 169.413C251.798 169.289 251.998 169.388 251.973 169.562C251.873 170.58 251.524 171.573 250.924 172.443C250.899 172.467 250.949 172.517 250.974 172.492L254.046 169.438C254.221 169.264 254.521 169.413 254.496 169.636C254.371 171.176 253.822 172.716 252.847 174.057C252.822 174.082 252.872 174.131 252.897 174.107L257.568 169.463C257.818 169.214 258.243 169.413 258.218 169.785C257.943 172.641 256.694 175.472 254.471 177.683Z" fill="#FFE300"/>
</g>
<g style="mix-blend-mode:hard-light" opacity="0.6" clip-path="url(#clip1)" filter="url(#filter11_f)">
<path d="M255.792 158.183C253.296 155.701 250.099 154.307 246.818 154C246.425 153.973 246.201 154.447 246.482 154.725L251.726 159.939C251.754 159.967 251.726 160.023 251.67 159.995C250.155 158.908 248.445 158.294 246.678 158.127C246.397 158.099 246.257 158.434 246.453 158.629L250.043 162.198C250.071 162.226 250.043 162.282 249.987 162.254C249.005 161.584 247.884 161.194 246.734 161.083C246.538 161.055 246.425 161.306 246.566 161.417L252.651 167.468C252.791 167.607 253.016 167.496 252.988 167.3C252.876 166.157 252.483 165.042 251.81 164.066C251.782 164.038 251.838 163.982 251.866 164.01L255.315 167.44C255.512 167.635 255.848 167.468 255.82 167.217C255.68 165.488 255.063 163.759 253.969 162.282C253.941 162.254 253.997 162.198 254.025 162.226L259.27 167.44C259.55 167.719 260.027 167.496 259.999 167.077C259.69 163.843 258.288 160.664 255.792 158.183Z" fill="#00ADFF"/>
<path d="M235.208 158.183C237.704 155.701 240.901 154.307 244.182 154C244.575 153.973 244.799 154.447 244.518 154.725L239.274 159.939C239.246 159.967 239.274 160.023 239.33 159.995C240.845 158.908 242.555 158.294 244.322 158.127C244.603 158.099 244.743 158.434 244.546 158.629L240.957 162.198C240.929 162.226 240.957 162.282 241.013 162.254C241.994 161.584 243.116 161.194 244.266 161.083C244.462 161.055 244.575 161.306 244.434 161.417L238.349 167.496C238.209 167.635 237.984 167.523 238.012 167.328C238.124 166.185 238.517 165.07 239.19 164.094C239.218 164.066 239.162 164.01 239.134 164.038L235.685 167.468C235.488 167.663 235.152 167.496 235.18 167.245C235.348 165.488 235.965 163.759 237.059 162.282C237.087 162.254 237.031 162.198 237.003 162.226L231.73 167.44C231.45 167.719 230.973 167.496 231.001 167.077C231.31 163.843 232.712 160.664 235.208 158.183Z" fill="#F05245"/>
<path d="M235.208 178.816C237.704 181.297 240.901 182.691 244.182 182.998C244.575 183.026 244.799 182.552 244.518 182.273L239.274 177.059C239.246 177.031 239.274 176.976 239.33 177.003C240.845 178.091 242.555 178.704 244.322 178.872C244.603 178.899 244.743 178.565 244.546 178.37L240.957 174.801C240.929 174.773 240.957 174.717 241.013 174.745C241.994 175.414 243.116 175.804 244.266 175.916C244.462 175.944 244.575 175.693 244.434 175.581L238.349 169.503C238.209 169.364 237.984 169.475 238.012 169.67C238.124 170.814 238.517 171.929 239.19 172.905C239.218 172.933 239.162 172.988 239.134 172.96L235.685 169.531C235.488 169.336 235.152 169.503 235.18 169.754C235.348 171.511 235.965 173.239 237.059 174.717C237.087 174.745 237.031 174.801 237.003 174.773L231.73 169.559C231.45 169.28 230.973 169.503 231.001 169.921C231.31 173.156 232.712 176.334 235.208 178.816Z" fill="#1CEBCF"/>
<path d="M255.792 178.816C253.296 181.297 250.099 182.691 246.818 182.998C246.425 183.026 246.201 182.552 246.482 182.273L251.726 177.059C251.754 177.031 251.726 176.975 251.67 177.003C250.155 178.091 248.445 178.704 246.678 178.871C246.397 178.899 246.257 178.565 246.453 178.37L250.043 174.801C250.071 174.773 250.043 174.717 249.987 174.745C249.005 175.414 247.884 175.804 246.734 175.916C246.538 175.944 246.425 175.693 246.566 175.581L252.651 169.531C252.791 169.391 253.016 169.503 252.988 169.698C252.876 170.841 252.483 171.957 251.81 172.933C251.782 172.96 251.838 173.016 251.866 172.988L255.315 169.559C255.512 169.364 255.848 169.531 255.82 169.782C255.68 171.511 255.063 173.239 253.969 174.745C253.941 174.773 253.997 174.829 254.025 174.801L259.27 169.587C259.55 169.308 260.027 169.531 259.999 169.949C259.69 173.156 258.288 176.334 255.792 178.816Z" fill="#FFE300"/>
</g>
<defs>
<filter id="filter0_d" x="18" y="190" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="12.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="22" y="75" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="12.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="9.00537" y="265.005" width="51.4624" height="51.4624" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="5.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="10.0054" y="47.0054" width="51.4624" height="51.4624" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7"/>
<feGaussianBlur stdDeviation="5.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_d" x="393" y="181.485" width="90" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="5.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter5_d" x="393" y="117.485" width="90" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="5.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter6_dd" x="387" y="138.485" width="114" height="85" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-3" dy="18"/>
<feGaussianBlur stdDeviation="11.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0 0.7 0 0 0 0.38 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.921569 0 0 0 0 0.811765 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter7_b" x="111.597" y="39.9202" width="262.422" height="262.422" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
</filter>
<filter id="filter8_f" x="141" y="65.4847" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="23.5" result="effect1_foregroundBlur"/>
</filter>
<filter id="filter9_d" x="155.798" y="101.798" width="179.76" height="179.761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="23"/>
<feGaussianBlur stdDeviation="13"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter10_d" x="190.7" y="118.64" width="108.08" height="108.079" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="6.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter11_f" x="216" y="138.999" width="59" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="97.5003" y1="293.487" x2="166.5" y2="283.486" gradientUnits="userSpaceOnUse">
<stop stop-color="#C5CACF"/>
<stop offset="1" stop-color="#F6F7F9"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="374.5" y1="170.485" x2="387.5" y2="170.485" gradientUnits="userSpaceOnUse">
<stop stop-color="#F6F7F9"/>
<stop offset="1" stop-color="#C5CACF"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="65.8949" y1="95.2157" x2="108.104" y2="134.686" gradientUnits="userSpaceOnUse">
<stop stop-color="#C5CACF"/>
<stop offset="1" stop-color="#F6F7F9"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="96.7414" y1="127.433" x2="120.984" y2="149.717" gradientUnits="userSpaceOnUse">
<stop stop-color="#C5CACF"/>
<stop offset="1" stop-color="#F6F7F9"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="96.7414" y1="216.092" x2="120.984" y2="193.807" gradientUnits="userSpaceOnUse">
<stop stop-color="#C5CACF"/>
<stop offset="1" stop-color="#F6F7F9"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="295.176" y1="85.2276" x2="233.165" y2="307.434" gradientUnits="userSpaceOnUse">
<stop offset="0.505208" stop-color="#3F3F71"/>
<stop offset="1" stop-color="#5D237D"/>
</linearGradient>
<clipPath id="clip0">
<rect width="25.8297" height="25.8297" fill="white" transform="translate(232.389 155.579)"/>
</clipPath>
<clipPath id="clip1">
<rect width="29" height="29" fill="white" transform="translate(231 153.999)"/>
</clipPath>
</defs>
</svg>
`,d=`*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link.focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);-webkit-text-decoration-line:underline;text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-0{left:0px}.top-0{top:0px}.right-0{right:0px}.bottom-0{bottom:0px}.top-full{top:100%}.top-px{top:1px}.bottom-px{bottom:1px}.right-px{right:1px}.z-1{z-index:1}.z-\\[9999\\]{z-index:9999}.z-10{z-index:10}.z-0{z-index:0}.col-span-2{grid-column:span 2 / span 2}.m-2{margin:0.5rem}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-0{margin-left:0px;margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-0{margin-right:0px}.ml-2{margin-left:0.5rem}.mt-px{margin-top:1px}.mb-1{margin-bottom:0.25rem}.mt-8{margin-top:2rem}.mt-2\\.5{margin-top:0.625rem}.mt-2{margin-top:0.5rem}.mt-10{margin-top:2.5rem}.mb-3{margin-bottom:0.75rem}.mr-1{margin-right:0.25rem}.mb-6{margin-bottom:1.5rem}.mb-2{margin-bottom:0.5rem}.mt-1\\.5{margin-top:0.375rem}.mt-1{margin-top:0.25rem}.mr-3{margin-right:0.75rem}.mr-1\\.5{margin-right:0.375rem}.-mr-px{margin-right:-1px}.mb-4{margin-bottom:1rem}.mr-2{margin-right:0.5rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-7{margin-top:1.75rem}.ml-1{margin-left:0.25rem}.ml-4{margin-left:1rem}.mt-0{margin-top:0px}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-2\\.5{height:0.625rem}.h-2{height:0.5rem}.h-1{height:0.25rem}.h-full{height:100%}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-5{height:1.25rem}.h-8{height:2rem}.h-3{height:0.75rem}.h-auto{height:auto}.h-4{height:1rem}.h-12{height:3rem}.w-2\\.5{width:0.625rem}.w-2{width:0.5rem}.w-full{width:100%}.w-72{width:18rem}.w-1\\/2{width:50%}.w-5{width:1.25rem}.w-60{width:15rem}.w-max{width:-webkit-max-content;width:-moz-max-content;width:max-content}.w-6{width:1.5rem}.w-28{width:7rem}.w-8{width:2rem}.w-3{width:0.75rem}.w-12{width:3rem}.w-4{width:1rem}.w-3\\.5{width:0.875rem}.w-10{width:2.5rem}.w-44{width:11rem}.w-9{width:2.25rem}.w-auto{width:auto}.w-3\\/5{width:60%}.min-w-0{min-width:0px}.max-w-lg{max-width:32rem}.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@-webkit-keyframes scaleUp{0%{transform:scale(0.7) translateY(1000px);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}@keyframes scaleUp{0%{transform:scale(0.7) translateY(1000px);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{-webkit-animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@-webkit-keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{-webkit-animation:slideDown .5s linear forwards;animation:slideDown .5s linear forwards}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}.animate-pulse{-webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-min-1fr{grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:0.25rem}.gap-0\\.5{gap:0.125rem}.gap-0{gap:0px}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-2{gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-full{border-radius:9999px}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.border{border-width:1px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-neutral{border-color:var(--atomic-neutral)}.border-primary{border-color:var(--atomic-primary)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-background{background-color:var(--atomic-background)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-transparent{background-color:transparent}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-primary{background-color:var(--atomic-primary)}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-2{padding:0.5rem}.p-3{padding:0.75rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-4{padding:1rem}.p-2\\.5{padding:0.625rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.pl-0{padding-left:0px}.pr-6{padding-right:1.5rem}.pl-10{padding-left:2.5rem}.pb-6{padding-bottom:1.5rem}.pb-4{padding-bottom:1rem}.pl-3{padding-left:0.75rem}.pr-24{padding-right:6rem}.pl-9{padding-left:2.25rem}.pl-1{padding-left:0.25rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.text-sm{font-size:var(--atomic-text-sm)}.text-lg{font-size:var(--atomic-text-lg)}.text-xl{font-size:var(--atomic-text-xl)}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.italic{font-style:italic}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-8{line-height:2rem}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-primary{color:var(--atomic-primary)}.text-on-background{color:var(--atomic-on-background)}.text-error{color:var(--atomic-error)}.text-transparent{color:transparent}.text-success{color:var(--atomic-success)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark:-ms-input-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-primary{outline-color:var(--atomic-primary)}.outline-neutral{outline-color:var(--atomic-neutral)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;-webkit-animation:ripple var(--animation-duration) linear;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@-webkit-keyframes ripple{to{transform:scale(4);opacity:0}}@keyframes ripple{to{transform:scale(4);opacity:0}}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-neutral-light:hover{background-color:var(--atomic-neutral-light)}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}`;var l=function(f,b,v,_){var k=arguments.length,x=k<3?b:_===null?_=Object.getOwnPropertyDescriptor(b,v):_,B;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")x=Reflect.decorate(f,b,v,_);else for(var S=f.length-1;S>=0;S--)(B=f[S])&&(x=(k<3?B(x):k>3?B(b,v,x):B(b,v))||x);return k>3&&x&&Object.defineProperty(b,v,x),x};const c="Disconnected",n="NoEndpointsException",h="InvalidTokenException",y="OrganizationIsPausedException",s=class{constructor(f){(0,a.r)(this,f),this.showMoreInfo=!1}initialize(){this.queryError=(0,u.w)(this.bindings.engine)}renderShowMoreInfo(){return this.showMoreInfo?(0,a.h)("pre",{part:"error-info",class:"text-left border border-neutral bg-neutral-light p-3 rounded mt-8 whitespace-pre-wrap"},(0,a.h)("code",null,JSON.stringify(this.queryErrorState.error,null,2))):(0,a.h)(r.B,{part:"more-info-btn",style:"primary",class:"p-3 mt-8",onClick:()=>this.showMoreInfo=!0,text:this.bindings.i18n.t("more-info")})}get org(){return this.bindings.engine.state.configuration.organizationId}get url(){return this.bindings.engine.state.configuration.platformUrl}get errorType(){return this.queryErrorState.error.type}get details(){switch(this.errorType){case c:return{icon:e,title:this.bindings.i18n.t("disconnected"),description:this.bindings.i18n.t("check-your-connection",{url:this.url,interpolation:{escapeValue:!1}})};case n:return{icon:o,title:this.bindings.i18n.t("no-endpoints",{org:this.org}),description:this.bindings.i18n.t("add-sources"),link:"https://docs.coveo.com/"};case h:return{icon:C,title:this.bindings.i18n.t("cannot-access",{org:this.org}),description:this.bindings.i18n.t("invalid-token"),link:"https://docs.coveo.com/"};case y:return{icon:p,title:this.bindings.i18n.t("organization-is-paused",{org:this.org}),description:this.bindings.i18n.t("organization-will-resume",{org:this.org}),link:"https://docs.coveo.com/l6af0467"};default:return{icon:t,title:this.bindings.i18n.t("something-went-wrong"),description:this.bindings.i18n.t("if-problem-persists")}}}render(){if(!this.queryErrorState.hasError)return;const f=this.details;return this.ariaMessage=`${f.title} ${f.description}`,(0,a.h)("div",{class:"text-center"},(0,a.h)("atomic-icon",{part:"icon",icon:f.icon,class:"w-1/2 mt-8"}),(0,a.h)("h3",{part:"title",class:"text-2xl text-on-background mt-8"},f.title),(0,a.h)("p",{part:"description",class:"text-lg text-neutral-dark mt-2.5"},f.description),f.link?(0,a.h)("a",{href:f.link,part:"doc-link",class:"btn-primary p-3 mt-10 inline-block"},this.bindings.i18n.t("coveo-online-help")):this.renderShowMoreInfo())}};l([(0,g.I)()],s.prototype,"bindings",void 0),l([(0,g.B)("queryError")],s.prototype,"queryErrorState",void 0),l([(0,w.A)("query-error")],s.prototype,"ariaMessage",void 0),s.style=d},86032:function(F,m,i){i.d(m,{B:function(){return g}});var a=i(51860),u=i(4398);const g=(r,w)=>{const C=(0,u.g)(r.style),t=(0,u.a)(r.style),p={class:r.class?`${t} ${r.class}`:t,part:r.part,onClick:r.onClick,title:r.title,type:r.type,role:r.role,"aria-label":r.ariaLabel,"aria-expanded":r.ariaExpanded,"aria-pressed":r.ariaPressed,"aria-checked":r.ariaChecked,"aria-current":r.ariaCurrent,"aria-controls":r.ariaControls,disabled:r.disabled,ref(e){var o;r.form&&(e==null||e.setAttribute("form",r.form)),(o=r.ref)===null||o===void 0||o.call(r,e)}};return(0,a.h)("button",{...p,onMouseDown:e=>(0,u.c)(e,{color:C})},r.text?(0,a.h)("span",{class:"truncate"},r.text):null,w)}},4398:function(F,m,i){i.d(m,{a:function(){return t},c:function(){return w},g:function(){return p}});var a=i(22973);const u="ripple";function g(e){return Math.cbrt(e)*129.21}function r(e){getComputedStyle(e).position==="static"&&e.classList.add("ripple-relative")}function w(e,o){var d;const l=(d=o.parent)!==null&&d!==void 0?d:e.currentTarget,c=l.getElementsByClassName(u)[0];c&&c.remove(),l.classList.add("ripple-parent"),r(l),Array.from(l.children).forEach(r);const n=document.createElement("span");n.classList.add(u),n.style.backgroundColor=`var(--atomic-${o.color})`,n.setAttribute("part",u);const h=Math.max(l.clientWidth,l.clientHeight),y=h/2,{top:s,left:f}=l.getBoundingClientRect();n.style.width=n.style.height=`${h}px`,n.style.left=`${e.clientX-(f+y)}px`,n.style.top=`${e.clientY-(s+y)}px`,n.style.setProperty("--animation-duration",`${g(y)}ms`),l.prepend(n),C(n)}async function C(e){(0,a.l)(e,"animationend",()=>{e&&e.remove()})}function t(e){switch(e){case"primary":return"btn-primary";case"outline-primary":return"btn-outline-primary";case"outline-neutral":return"btn-outline-neutral";case"outline-bg-neutral":return"btn-outline-bg-neutral";case"text-primary":return"btn-text-primary";case"text-neutral":return"btn-text-neutral";case"text-transparent":return"btn-text-transparent";case"square-neutral":return"btn-square-neutral"}}function p(e){switch(e){case"primary":return"primary";case"text-transparent":return"neutral-light";default:return"neutral"}}}}]);

//# sourceMappingURL=8083.bundle.js.map