import{d as f,u as g,g as P,e as $,t as m,j as t,k as p,S as z,B as T,f as E,L as q,h as A,l as D,m as I}from"./chunk-SM9GPrqJ.js";import{j as y,k as R,n as F,b as O,a as h,o as W,q as U,u as B,f as v,s as G,t as K,v as Y,l as J,w as Q,x as V,y as X}from"./chunk-Bo3F5zRI.js";import{i as Z}from"./chunk-DtO0Zc_c.js";function ee(e,s){const n=`URL ${e} passed to ${s}() is invalid`;return y(R(e),n),e.startsWith(location.origin)&&(e=e.slice(location.origin.length)),y(e.startsWith("/")||F(e),n),e}/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=f("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=f("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=f("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=f("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=f("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=f("TableOfContents",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]]),ie=e=>typeof e!="string"?e:e.split(/(`[^`]+`)/g).map((s,n)=>s.startsWith("`")&&s.endsWith("`")?t.jsx("code",{className:"font-medium",children:s.slice(1,-1)},n):t.jsx(h.Fragment,{children:s},n)),w=e=>{const s=e.direction==="previous";return t.jsx("a",{href:e.item.href,className:p("group rounded-box border border-base-muted-light bg-base-100 p-5 no-underline transition-colors hover:bg-base-200 hover:border-primary-muted-medium",s?"text-left":"text-right",e.className),children:t.jsxs("div",{className:"flex flex-col justify-between",children:[t.jsx("p",{className:"text-xl mb-2 font-semibold text-base-content",children:ie(e.item.title)}),t.jsxs("div",{className:p("flex items-center gap-1 text-base-muted transition-colors group-hover:text-base-content",s?"justify-start":"justify-end"),children:[s&&t.jsx(se,{className:"h-4 w-4"}),t.jsx("span",{children:e.label}),!s&&t.jsx(ne,{className:"h-4 w-4"})]})]})})},ce=()=>{const e=g(),{locale:s}=e,n=O(e);if(!n.footer.pagination)return null;const a=P(e),o=$(s,n),i=o.findIndex(u=>u.docPath===a);if(i<0)return null;const c=i>0?o[i-1]:null,r=i<o.length-1?o[i+1]:null;if(!c&&!r)return null;const l=m(s,"docs","previous"),d=m(s,"docs","next");return t.jsx("nav",{className:"mt-16 mb-10","aria-label":`${l} ${d}`,children:t.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[c&&t.jsx(w,{item:c,direction:"previous",label:l,className:"sm:col-start-1"}),r&&t.jsx(w,{item:r,direction:"next",label:d,className:p(!c&&"sm:col-start-2")})]})})};W();async function le(e,s){ee(e,"navigate"),Z();const{keepScrollPosition:n,overwriteLastHistoryEntry:a,pageContext:o}={};await U({scrollTarget:{preserveScroll:n??!1},urlOriginal:e,overwriteLastHistoryEntry:a,pageContextInitClient:o})}const de=()=>{const{urlPathnameLocalized:e,urlPathname:s}=g(),n=B(r=>r.setLocalePreference),a=e??s,o=v(a),i=G(a).locale,c=async r=>{const d=r.currentTarget.value,u=J(o,d);n(d),u!==a&&le(u)};return t.jsxs("label",{className:"select select-sm w-28",children:[t.jsx("span",{className:"floating-label",children:t.jsx(ae,{className:"w-4 h-4"})}),t.jsx("select",{value:i,onChange:r=>{c(r)},"aria-label":"Switch language",children:K.map(r=>t.jsx("option",{value:r,children:Y[r]},r))})]})},ue=()=>{const{locale:e}=g();return t.jsxs("footer",{className:"mb-8 mt-12 text-sm border-t border-base-muted-light pt-10",children:[t.jsxs("div",{className:"mb-16 flex items-center gap-2",children:[t.jsxs("a",{href:"edit",className:"btn btn-sm btn-primary btn-soft",children:[t.jsx(oe,{className:"w-3 h-3"})," ",m(e,"docs","edit")]}),t.jsxs("a",{href:"edit",className:"btn btn-sm btn-primary btn-soft",children:[t.jsx(te,{className:"w-3 h-3"})," ",m(e,"docs","reportIssue")]})]}),t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx(z,{}),t.jsxs("div",{className:"flex gap-2 items-center",children:[t.jsx(de,{}),t.jsx(T,{locale:e,showText:!1})]})]})]})},x=e=>"href"in e,he=(e,s)=>{const n=i=>{const c=v(i);return c==="/"?"/":c.replace(/\/+$/g,"")},a=n(e),o=n(s);return o==="/"?a===o:a===o||a.startsWith(`${o}/`)},me=(e,s)=>{let n=null,a=-1;for(const o of e)for(const i of o.links??[]){if(!x(i)||!he(s,i.href))continue;const c=v(i.href).length;c>a&&(n=i.href,a=c)}return n},j=e=>typeof e!="string"?e:e.split(/(`[^`]+`)/g).map((s,n)=>s.startsWith("`")&&s.endsWith("`")?t.jsx("code",{className:"text-sm!",children:s.slice(1,-1)},n):t.jsx(h.Fragment,{children:s},n)),b=(e,s)=>("href"in e?e.href:e.id)??`sidebar-item-${s}`,N=e=>t.jsx("li",{children:t.jsx("a",{href:e.href,className:p("text-base-muted hover:text-base-content justify-start hover:bg-base-200",e.activeHref===e.href&&"text-primary! font-semibold bg-base-200"),children:j(e.title)})}),L=e=>t.jsx("li",{className:"ml-3 mt-2 text-xs text-base-muted-medium pointer-events-none font-semibold border-b border-base-muted-light mb-2",children:t.jsx("span",{className:"-ml-3",children:j(e.title)})}),H=e=>{const s=e.icon;return t.jsxs(t.Fragment,{children:[s&&t.jsx(s,{className:"inline w-3 h-3"}),t.jsx("span",{className:"text-base-content font-semibold",children:j(e.title)})]})},fe=e=>{const s=e.collapsible!==!1&&e.collapsible!==void 0,n=typeof e.collapsible=="object"?e.collapsible.isDefaultOpen??!0:!1,a=(e.links??[]).some(r=>x(r)&&r.href===e.activeHref),o=h.useRef(null),i=h.useRef(!1),c=h.useRef(a);return h.useEffect(()=>{if(!(!s||!o.current)){if(!i.current){i.current=!0,(n||a)&&(o.current.open=!0),c.current=a;return}a&&!c.current&&(o.current.open=!0),c.current=a}},[a,s,n]),t.jsxs("li",{className:"pb-4",children:[s?t.jsxs("details",{ref:o,children:[t.jsx("summary",{children:t.jsx(H,{icon:e.icon,title:e.title})}),t.jsx("ul",{children:e.links?.map((r,l)=>x(r)?t.jsx(N,{...r,activeHref:e.activeHref},b(r,l)):t.jsx(L,{title:r.title},b(r,l)))})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"pointer-events-none",children:t.jsx(H,{icon:e.icon,title:e.title})}),t.jsx("ul",{children:e.links?.map((r,l)=>x(r)?t.jsx(N,{...r,activeHref:e.activeHref},b(r,l)):t.jsx(L,{title:r.title},b(r,l)))})]}),e.showSeparator&&t.jsx("span",{className:"pointer-events-none absolute -bottom-1 block rounded-none w-full mx-auto mb-3"})]})},ge=e=>{const s=me(e.groups,e.currentPathname);return t.jsx("ul",{className:"menu w-full px-0 py-5 li:last-child:border-0",children:e.groups.map((n,a)=>t.jsx(fe,{...n,activeHref:s,showSeparator:a!==e.groups.length-1},`sidebar-group-${n.id}`))})},be=()=>{const{locale:e,urlPathnameLocalized:s,urlPathname:n}=g(),a=E(e);return t.jsx(ge,{groups:a,currentPathname:s??n})},xe=()=>t.jsxs("div",{className:"-ml-3 sticky top-16",children:[t.jsx("div",{className:"absolute h-full w-px right-0 top-0 bg-linear-to-t to-base-muted-light  via-base-muted-light  pointer-events-none z-1"}),t.jsx("div",{className:"pr-4 h-[calc(100svh-16*var(--spacing))] overflow-y-scroll overflow-x-hidden  relative z-10",children:t.jsx(be,{})})]}),pe=q.a`
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
`,ve=()=>{try{return decodeURIComponent(window.location.hash)}catch{return window.location.hash}},je=()=>{const e=document.querySelector("[data-doc-content]");return e instanceof HTMLElement?Array.from(e.querySelectorAll("h2, h3, h4")).filter(s=>s instanceof HTMLHeadingElement):[]},M=e=>{const s=document.querySelector("[data-doc-content]");if(!(s instanceof HTMLElement))return;const n=V(),a=Array.from(s.querySelectorAll("h2, h3, h4")).map(o=>{const i=Q(o.textContent??"");if(!i)return null;const c=o.id||n(i);return o.id||(o.id=c),{depth:Number(o.tagName.slice(1)),id:c,title:i}}).filter(o=>o!==null);e(a)},C=e=>{const s=je();if(s.length===0)return;const n=144;let a=s[0]?.id??"";for(const i of s)if(i.id){if(i.getBoundingClientRect().top<=n){a=i.id;continue}break}const o=s.at(-1);o?.id&&window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-8&&(a=o.id),e(a)},ke=({headings:e})=>{const{locale:s}=g(),[n,a]=h.useState(""),[o,i]=h.useState(e),c=o.length>0?o:e,r=c.length>0;return h.useEffect(()=>{let l=0;const d=()=>{l||(l=window.requestAnimationFrame(()=>{l=0,C(a)}))},u=()=>{const k=ve().replace(/^#/,"");if(k!==""){a(k);return}d()};return u(),queueMicrotask(()=>{M(i),d()}),window.addEventListener("hashchange",u),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{l&&window.cancelAnimationFrame(l),window.removeEventListener("hashchange",u),window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]),h.useEffect(()=>{typeof window>"u"||(i(e),a(""),queueMicrotask(()=>{M(i),C(a)}))},[e]),t.jsx("aside",{className:"hidden xl:block w-64 shrink-0",children:r&&t.jsxs("div",{className:"sticky top-16 pt-10 max-h-[calc(100svh-7rem)] overflow-y-auto pb-8",children:[t.jsxs("p",{className:"mb-4 text-xs font-semibold tracking-widest text-base-muted uppercase flex gap-2 items-center",children:[t.jsx(re,{className:"w-3 h-3"}),m(s,"docs","onThisPage")]}),t.jsx("nav",{"aria-label":m(s,"docs","onThisPage"),children:t.jsx("ul",{children:c.map((l,d)=>t.jsx("li",{children:t.jsx(pe,{href:`#${l.id}`,$isNested:l.depth>2,$isActive:n?n===l.id:d===0,"aria-current":n===l.id?"location":void 0,onClick:()=>a(l.id),children:l.title})},l.id))})})]})})},S={title:"telefunc",description:"telefunc documentation"},ye=()=>({title:S.title,description:S.description}),_=e=>{const s=P(e);return X(s,e.locale)??ye()},we=q.section`
  min-h-[calc(100svh-92*var(--spacing))]
  prose 
  prose-neutral
  max-w-none
  dark:prose-invert
  prose-a:text-primary

  prose-pre:bg-base-200!

  prose-code:py-0!
  prose-code:px-1!

  prose-code:rounded!
  prose-code:dark:inset-shadow-2xs

  prose-code:bg-primary/5!
  prose-code:border-primary/15!

  prose-code:dark:bg-primary/10!
  prose-code:dark:border-primary/20!

  prose-p:leading-[240%]
  prose-li:leading-[240%]

  prose-p:after:content-none
  prose-p:before:content-none
  prose-blockquote:not-italic
  prose-blockquote:bg-base-200
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
`,Ne=({children:e})=>{const s=g(),{locale:n,pageId:a,is404:o,errorWhileRendering:i}=s,c=o||i,r=c?null:A(s),l=!c&&(r?.config.tableOfContents??!0),d=`${a}:${r?.docSlug??"docs-error"}:${n}`,u=_(s)?.title??"";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"absolute w-full h-full top-0 left-0 overflow-hidden",children:t.jsx("div",{className:"w-500 h-200 absolute top-16 -right-100 z-0 opacity-40 dark:opacity-70",children:t.jsx("img",{src:`${D}decorators/dot.png`,alt:"",width:400,height:400,className:"w-full h-full object-fill absolute inset-0"})})}),t.jsx(I,{children:t.jsxs("div",{className:"lg:flex mx-auto gap-10 xl:gap-14",children:[t.jsx("div",{className:"basis-80 shrink-0 relative hidden lg:block",children:t.jsx(xe,{})}),t.jsxs("div",{className:"mt-10 flex-1 min-w-0 relative basis-auto shrink",children:[t.jsxs(we,{className:"flex-1 z-1 relative","data-doc-content":!0,children:[t.jsx("h1",{children:u}),e]}),t.jsx(ce,{}),t.jsx(ue,{})]}),l&&t.jsx(ke,{headings:r?.headings??[]},d)]})})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),Le=e=>`${_(e)?.title??""} | telefunc`,Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));export{Se as a,Pe as i};
