import{c as o,L as i,j as e,k as c}from"./chunk-CTnsBUtn.js";import{b as d}from"./chunk-GV06ends.js";/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=o("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=o("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.443.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=o("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),u={info:f,warning:b,error:p,success:d},y=({type:t="info",heading:r,children:m,icon:a=!0})=>{const s=a===!0?u[t]:typeof a=="object"?()=>e.jsx(e.Fragment,{children:a}):null,n={info:"text-info",warning:"text-warning",error:"text-error",success:"text-success"}[t];return e.jsxs(x,{$variant:t,children:[!!r&&s&&e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(s,{className:c(n,"float-left w-5 h-5 ")}),e.jsx(l,{children:r})]}),!(r&&s)&&!!r&&e.jsx(l,{children:r}),!(r&&s)&&s&&e.jsx("div",{className:c(n,"float-left mr-2"),children:e.jsx(s,{className:"w-5 h-5 mt-1"})}),m]})},x=i.section.variants({base:`
    p-4
    mb-5
    border
    rounded-lg
    prose-p:last:mb-0
    prose-p:mt-0
    prose-headings:first:mt-0
    prose-headings:last:mb-0
    prose-ul:first:mt-0
    prose-ul:last:mb-0
    prose-div:my-0!
    text-sm
  `,variants:{$variant:{info:"bg-info/10 border-info/30",warning:"bg-warning/10 border-warning/30",error:"bg-error/10 border-error/25",success:"bg-success/10 border-success/35"}},defaultVariants:{$variant:"info"}}),l=i.header`
  font-bold
  text-base
`;export{y as A};
