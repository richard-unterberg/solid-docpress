import{c as j,i as _,d as T,g as v,r as z,e as $,f as A,u as f,k as E,l as k,s as O,j as t,m as D,n as I,o as R,p as h,q as F,t as P}from"./chunk-BHnu8lAE.js";import{g as q,i as U,a as B,n as W,c as K,b as G}from"./chunk-Bh_LmmzU.js";import{c as g,t as m,S as Y,B as J,M as Q,e as V,L as X}from"./chunk-BBufqsCj.js";function Z(e,s){const n=`URL ${e} passed to ${s}() is invalid`;return j(_(e),n),e.startsWith(location.origin)&&(e=e.slice(location.origin.length)),j(e.startsWith("/")||T(e),n),e}/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=g("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=g("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=g("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=g("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=g("TableOfContents",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]]),oe=async e=>{const s=v(e),o=(e.routeParams.slug?.replace(/^\/+|\/+$/g,"")??"")||s.defaultSlug;if(!q(o,e.locale,s)?.Page)throw z(404)},qe=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));$();async function re(e,s){Z(e,"navigate"),U();const{keepScrollPosition:n,overwriteLastHistoryEntry:a,pageContext:o}={};await A({scrollTarget:{preserveScroll:n??!1},urlOriginal:e,overwriteLastHistoryEntry:a,pageContextInitClient:o})}const ie=()=>{const{urlPathnameLocalized:e,urlPathname:s}=f(),n=E(i=>i.setLocalePreference),a=e??s,o=k(a),r=O(a).locale,l=async i=>{const d=i.currentTarget.value,u=R(o,d);n(d),u!==a&&re(u)};return t.jsxs("label",{className:"select select-sm w-28",children:[t.jsx("span",{className:"floating-label",children:t.jsx(te,{className:"w-4 h-4"})}),t.jsx("select",{value:r,onChange:i=>{l(i)},"aria-label":"Switch language",children:D.map(i=>t.jsx("option",{value:i,children:I[i]},i))})]})},ce=()=>{const{locale:e}=f();return t.jsxs("footer",{className:"mb-8 mt-12 text-sm border-t border-base-muted-light pt-10",children:[t.jsxs("div",{className:"mb-16 flex items-center gap-2",children:[t.jsxs("a",{href:"edit",className:"btn btn-sm btn-primary btn-soft",children:[t.jsx(se,{className:"w-3 h-3"})," ",m(e,"docs","edit")]}),t.jsxs("a",{href:"edit",className:"btn btn-sm btn-primary btn-soft",children:[t.jsx(ee,{className:"w-3 h-3"})," ",m(e,"docs","reportIssue")]})]}),t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx(Y,{}),t.jsxs("div",{className:"flex gap-2 items-center",children:[t.jsx(ie,{}),t.jsx("p",{children:t.jsx("a",{href:"unterberg.dev",className:"text-base-content",children:t.jsx(J,{locale:e,showText:!1})})})]})]})]})},x=e=>"href"in e,le=(e,s)=>{const n=r=>{const l=k(r);return l==="/"?"/":l.replace(/\/+$/g,"")},a=n(e),o=n(s);return o==="/"?a===o:a===o||a.startsWith(`${o}/`)},de=(e,s)=>{let n=null,a=-1;for(const o of e)for(const r of o.links??[]){if(!x(r)||!le(s,r.href))continue;const l=k(r.href).length;l>a&&(n=r.href,a=l)}return n},y=e=>typeof e!="string"?e:e.split(/(`[^`]+`)/g).map((s,n)=>s.startsWith("`")&&s.endsWith("`")?t.jsx("code",{className:"text-sm!",children:s.slice(1,-1)},n):t.jsx(h.Fragment,{children:s},n)),p=(e,s)=>("href"in e?e.href:e.id)??`sidebar-item-${s}`,w=e=>t.jsx("li",{children:t.jsx("a",{href:e.href,className:F("text-base-muted hover:text-base-content justify-start hover:bg-base-200",e.activeHref===e.href&&"text-primary! font-semibold bg-base-200"),children:y(e.title)})}),S=e=>t.jsx("li",{className:"ml-3 mt-2 text-xs text-base-muted-medium pointer-events-none font-semibold border-b border-base-muted-light mb-2",children:t.jsx("span",{className:"-ml-3",children:y(e.title)})}),H=e=>{const s=e.icon;return t.jsxs(t.Fragment,{children:[s&&t.jsx(s,{className:"inline w-3 h-3"}),t.jsx("span",{className:"text-base-content font-semibold",children:y(e.title)})]})},ue=e=>{const s=e.collapsible!==!1&&e.collapsible!==void 0,n=typeof e.collapsible=="object"?e.collapsible.isDefaultOpen??!0:!1,a=(e.links??[]).some(i=>x(i)&&i.href===e.activeHref),o=h.useRef(null),r=h.useRef(!1),l=h.useRef(a);return h.useEffect(()=>{if(!(!s||!o.current)){if(!r.current){r.current=!0,(n||a)&&(o.current.open=!0),l.current=a;return}a&&!l.current&&(o.current.open=!0),l.current=a}},[a,s,n]),t.jsxs("li",{className:"pb-4",children:[s?t.jsxs("details",{ref:o,children:[t.jsx("summary",{children:t.jsx(H,{icon:e.icon,title:e.title})}),t.jsx("ul",{children:e.links?.map((i,c)=>x(i)?t.jsx(w,{...i,activeHref:e.activeHref},p(i,c)):t.jsx(S,{title:i.title},p(i,c)))})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"pointer-events-none",children:t.jsx(H,{icon:e.icon,title:e.title})}),t.jsx("ul",{children:e.links?.map((i,c)=>x(i)?t.jsx(w,{...i,activeHref:e.activeHref},p(i,c)):t.jsx(S,{title:i.title},p(i,c)))})]}),e.showSeparator&&t.jsx("span",{className:"pointer-events-none absolute -bottom-1 block rounded-none w-full mx-auto mb-3"})]})},he=e=>{const s=de(e.groups,e.currentPathname);return t.jsx("ul",{className:"menu w-full px-0 py-5 li:last-child:border-0",children:e.groups.map((n,a)=>t.jsx(ue,{...n,activeHref:s,showSeparator:a!==e.groups.length-1},`sidebar-group-${n.id}`))})},me=[{id:"get-started",icon:ne,groupKey:"getStarted",links:["getStarted","quickStart","concepts","bestPractices",{dividerText:"Guides"},"serverIntegration","initialData","permissions","validation","fileUploads","errorHandling",{dividerText:"Learn More"},"whySchemaless","howItWorks"]},{id:"guides",icon:Q,groupKey:"api",links:[{dividerText:"Server"},"apiTelefunc","throwAbort","getContext","shield","onBug",{dividerText:"Client"},"onAbort",{dividerText:"Config"},"telefuncUrl","disableNamingConvention","httpHeaders","fetch","telefuncFiles","root","configShield","log"]}],fe=e=>me.map(s=>({id:s.id,icon:s.icon,title:m(e,"sidebar",s.groupKey),collapsible:s.collapsible,links:s.links.map(n=>typeof n=="object"&&"dividerText"in n?{id:`divider-${n.dividerText}`,title:n.dividerText,isDivider:!0}:B(n))})),ge=()=>{const{locale:e,urlPathnameLocalized:s,urlPathname:n}=f(),a=fe(e);return t.jsx(he,{groups:a,currentPathname:s??n})},be=()=>t.jsxs("div",{className:"-ml-3 sticky top-16",children:[t.jsx("div",{className:"absolute h-full w-px right-0 top-0 bg-linear-to-t to-base-muted-light  via-base-muted-light  pointer-events-none z-1"}),t.jsx("div",{className:"pr-4 h-[calc(100svh-16*var(--spacing))] overflow-y-scroll overflow-x-hidden  relative z-10",children:t.jsx(ge,{})})]}),pe=P.a`
  block
  border-l
  border-base-muted-light
  py-1.5
  text-sm
  text-base-muted
  transition-colors
  hover:border-primary-muted
  hover:text-base-content
  ${e=>e.$isNested?"pl-6":"pl-4"}
  ${e=>e.$isActive?"border-l-2 border-primary text-base-content font-semibold":""}
`,xe=()=>{try{return decodeURIComponent(window.location.hash)}catch{return window.location.hash}},ve=()=>{const e=document.querySelector("[data-doc-content]");return e instanceof HTMLElement?Array.from(e.querySelectorAll("h2, h3, h4")).filter(s=>s instanceof HTMLHeadingElement):[]},M=e=>{const s=document.querySelector("[data-doc-content]");if(!(s instanceof HTMLElement))return;const n=K(),a=Array.from(s.querySelectorAll("h2, h3, h4")).map(o=>{const r=W(o.textContent??"");if(!r)return null;const l=o.id||n(r);return o.id||(o.id=l),{depth:Number(o.tagName.slice(1)),id:l,title:r}}).filter(o=>o!==null);e(a)},N=e=>{const s=ve();if(s.length===0)return;const n=144;let a=s[0]?.id??"";for(const r of s)if(r.id){if(r.getBoundingClientRect().top<=n){a=r.id;continue}break}const o=s.at(-1);o?.id&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-8&&(a=o.id),e(a)},ke=({headings:e})=>{const{locale:s}=f(),[n,a]=h.useState(""),[o,r]=h.useState(e),l=o.length>0?o:e,i=l.length>0;return h.useEffect(()=>{let c=0;const d=()=>{c||(c=window.requestAnimationFrame(()=>{c=0,N(a)}))},u=()=>{const b=xe().replace(/^#/,"");if(b!==""){a(b);return}d()};return u(),queueMicrotask(()=>{M(r),d()}),window.addEventListener("hashchange",u),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{c&&window.cancelAnimationFrame(c),window.removeEventListener("hashchange",u),window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]),h.useEffect(()=>{typeof window>"u"||(r(e),a(""),queueMicrotask(()=>{M(r),N(a)}))},[e]),t.jsx("aside",{className:"hidden xl:block w-64 shrink-0",children:i&&t.jsxs("div",{className:"sticky top-16 pt-10 max-h-[calc(100svh-7rem)] overflow-y-auto pb-8",children:[t.jsxs("p",{className:"mb-4 text-xs font-semibold tracking-widest text-base-muted uppercase flex gap-2 items-center",children:[t.jsx(ae,{className:"w-3 h-3"}),m(s,"docs","onThisPage")]}),t.jsx("nav",{"aria-label":m(s,"docs","onThisPage"),children:t.jsx("ul",{children:l.map((c,d)=>t.jsx("li",{children:t.jsx(pe,{href:`#${c.id}`,$isNested:c.depth>2,$isActive:n?n===c.id:d===0,"aria-current":n===c.id?"location":void 0,onClick:()=>a(c.id),children:c.title})},c.id))})})]})})},ye=P.section`
  min-h-[calc(100svh-92*var(--spacing))]
  prose 
  prose-neutral
  max-w-none
  dark:prose-invert
  prose-a:text-primary

  prose-pre:bg-base-200!

  prose-code:rounded!
  prose-code:dark:inset-shadow-2xs

  prose-code:bg-primary/5!
  prose-code:border-primary/15!

  prose-code:dark:bg-primary/10!
  prose-code:dark:border-primary/20!

  prose-p:after:content-none
  prose-p:before:content-none
  prose-blockquote:not-italic
  prose-li:my-1
  [&_blockquote_p]:mt-0
  [&_blockquote_p]:mb-2
  [&_blockquote_ul]:pl-4
  [&_blockquote_ul]:mt-2
  [&_blockquote_li]:mt-2
  [&_blockquote_blockquote]:mt-2
  [&_blockquote_blockquote]:mb-0
  [&_blockquote_blockquote]:bg-base-300/40
  [&_blockquote_blockquote]:pt-2
  [&_blockquote_blockquote]:pb-1
`,je=({children:e})=>{const s=f(),{locale:n,pageId:a,is404:o,errorWhileRendering:r}=s,l=v(s),c=(s.routeParams.slug??"").replace(/^\/+|\/+$/g,"")||l.defaultSlug,d=o||r,u=d?null:q(c,n,l),b=!d&&(u?.config.tableOfContents??!0),C=`${a}:${c}:${n}`;return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"absolute w-full h-full top-0 left-0 overflow-hidden",children:t.jsx("div",{className:"w-500 h-200 absolute top-16 -right-100 z-0 opacity-40 dark:opacity-70",children:t.jsx("img",{src:`${V}decorators/dot.png`,alt:"",width:400,height:400,className:"w-full h-full object-fill absolute inset-0"})})}),t.jsx(X,{children:t.jsxs("div",{className:"lg:flex mx-auto gap-10 xl:gap-14",children:[t.jsx("div",{className:"basis-80 shrink-0 relative hidden lg:block",children:t.jsx(be,{})}),t.jsxs("div",{className:"mt-10 flex-1 min-w-0 relative basis-auto shrink",children:[t.jsx(ye,{className:"flex-1 z-1 relative","data-doc-content":!0,children:e}),t.jsx(ce,{})]}),b&&t.jsx(ke,{headings:u?.headings??[]},C)]})})]})},Ce=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"})),L={title:"telefunc",description:"telefunc documentation"},we=e=>e.replace(/^\/+|\/+$/g,""),Se=()=>({title:L.title,description:L.description}),He=e=>{const s=e,n=v(s),o=we(s.routeParams?.slug??"")||n.defaultSlug;return G(o,s.locale)??Se()};function Me(e){return`${He(e)?.title??""} | telefunc`}const _e=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));export{Ce as a,qe as b,_e as i};
