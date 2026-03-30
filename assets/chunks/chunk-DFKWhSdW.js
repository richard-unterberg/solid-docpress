const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_-docs-_-config-_error.y5kts4LZ.js","assets/chunks/chunk-CR2TOEXF.js","assets/chunks/chunk-DAslebie.js","assets/static/components_css_tailwind-80b22bf9.DAMwGIu_.css","assets/chunks/chunk-CPWUtI3_.js","assets/entries/pages_index.B55_6f1L.js","assets/entries/pages_-docs-_-config-.Dx2g_Ogn.js"])))=>i.map(i=>d[i]);
import{v as C,j as a,a as n,b as i,L as l,F as R,G as u,h as be,A as Ne,t as v,H as Oe,I as $e,J as ze,K as He,M as Xe,N as We,O as Ve,m as T,P as Ye,Q as Ge,S as Ke,T as Qe,s as ve,B as xe,U as we,W as Je,X as Te,Y as Ze,Z as en,_ as nn,$ as I,a0 as sn,a1 as ln,a2 as rn,a3 as an,a4 as tn,a5 as on,a6 as cn,a7 as dn,a8 as hn}from"./chunk-DAslebie.js";const c=({type:s="info",heading:e,children:r})=>a.jsxs(kn,{$variant:s,children:[e&&a.jsx(pn,{children:e}),r]}),kn=C.section.variants({base:`
    p-4
    mb-5
    border
    rounded-lg
    prose-p:leading-7
    prose-p:last:mb-0
    prose-p:first:mt-0
    prose-headings:first:mt-0
    prose-headings:last:mb-0
    prose-ul:first:mt-0
    prose-ul:last:mb-0
    prose-div:my-0!
    text-sm
  `,variants:{$variant:{info:"bg-info/5 border-info/30",warning:"bg-warning/5 border-warning/30",error:"bg-error/5 border-error/25",success:"bg-success/5 border-success/35"}},defaultVariants:{$variant:"info"}}),pn=C.header`
  mt-1
  font-bold
  text-base
  mb-5
`;C.div.variants({base:`
    p-4 py-0 mb-6
    rounded-box border 
  `,variants:{$elevated:{true:`
        shadow
        shadow-base-muted-superlight
        dark:shadow-black
        border-base-muted-light
      `,false:`
        inset-shadow-sm
        inset-shadow-base-muted-light
        dark:inset-shadow-black 
        border-base-muted-light
      `}}});const A=({size:s="md",data:e})=>a.jsxs(yn,{$size:s,children:[a.jsx("thead",{className:"bg-base-200 rounded-t-box overflow-hidden",children:a.jsx("tr",{children:e.headers.map((r,t)=>a.jsx("th",{children:r},t))})}),a.jsx("tbody",{children:e.rows.map((r,t)=>a.jsx("tr",{children:r.map((o,d)=>a.jsx("td",{children:o},d))},t))})]}),yn=C.table.variants({base:`
    not-prose
    table
    w-full
    table-zebra
    mb-6
  `,variants:{$size:{sm:"table-sm",md:"table-md",lg:"table-lg"}},defaultVariants:{$size:"md"}});function P(s){const e={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.p,{children:"Telefunc unlocks a full-stack development pattern that allows you to colocate (and co-develop) highly-tailored server functions with client code."}),`
`,n(e.p,{children:"Telefunctions are meant to be a seamless adapter between frontend and backend. They enable rapid and performant full-stack development when used as designed."}),`
`,n(e.h2,{id:"event-based-architecture",className:"scroll-mt-24",children:"Event-based architecture"}),`
`,n(e.p,{children:"Telefunction calls should always be triggered by some kind of event — typically a user action like a button click. Coupling telefunctions to individual interactions or pieces of UI allows you to tailor them to specific use-cases, keeping them slim, secure, and performant."}),`
`,n(e.h3,{id:"colocation",className:"scroll-mt-24",children:"Colocation"}),`
`,n(e.p,{children:"Colocating telefunctions with the component(s) that call them makes it simple to jump (or share types) between environments, while staying within the call scope."}),`
`,n(e.p,{children:"Telefunctions can change as fast as your UI, so deploying frontend and backend at the same time also radically simplifies versioning."}),`
`,n(e.h3,{id:"naming-convention",className:"scroll-mt-24",children:"Naming convention"}),`
`,i(e.p,{children:["The naming convention (e.g., ",n(e.code,{children:"onSomeEvent"}),") is meant to reinforce that telefunctions are event handlers. It also helps enforce coupling and prevent scope creep."]}),`
`,n(c,{type:"warning",children:n(e.p,{children:"By default, telfunction versioning is typically equivalent to project versioning. You will need a custom solution if you choose to use Telefunc with a monorepo."})}),`
`,i(e.p,{children:["You can opt-out at any time by setting ",n(l,{href:"/disableNamingConvention",children:n("code",{children:"config.disableNamingConvention"})}),", but we recommend having a clear reason for doing so."]}),`
`,i(e.h3,{id:"telefunc-js-scope",className:"scroll-mt-24",children:[n(e.code,{children:"*.telefunc.js"})," scope"]}),`
`,i(e.p,{children:[n(e.code,{children:"*.telefunc.js"})," files are a minimal adapter between the frontend and backend. They should only export functions."]}),`
`,i(c,{children:[n(e.p,{children:"Exporting shared or similarly-scoped telefunctions from the same file can improve call performance with some bundlers."}),n(e.pre,{children:n(e.code,{children:`├── Todos
  ├── AddTodo.tsx // imports 
  ├── todos.telefunc.ts // exports \`onAddTodo\` and \`onLoadTodoList\`
  ├── TodoList.tsx // imports 
  └── Todos.tsx
`})})]}),`
`,n(e.p,{children:"Non-function exports increase the chance of scope creep,"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// NewsletterForm.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ✅ Exporting a function"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewSubscription"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"email"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ❌ Non-function export"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" isValidEmail"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#E06C75"},children:" /"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"^"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E06C75"},children:"\\S"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#D19A66"},children:"+"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#E06C75"},children:"@"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E06C75"},children:"\\S"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#D19A66"},children:"+"}),n(e.span,{style:{color:"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#56B6C2","--shiki-dark-font-weight":"inherit"},children:"\\."}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E06C75"},children:"\\S"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#D19A66"},children:"+"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"$"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#E06C75"},children:"/"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"control-flow",className:"scroll-mt-24",children:"Control flow"}),`
`,i(e.p,{children:["Telefunction calls should be invisible: the client calls (remote) logic, and gets back a ",n(e.code,{children:"Promise"})," that either:"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Resolves to the telefunction's return value, or"}),`
`,i(e.li,{children:["Is rejected with ",n(e.code,{children:"TelefunctionCallAbort"}),"."]}),`
`]}),`
`,n(e.h4,{id:"telefunction-guards",className:"scroll-mt-24",children:"Telefunction guards"}),`
`,n(c,{type:"warning",children:n(e.p,{children:"Telefunctions are public. Never take it for granted that calls originate from authenticated clients, or are properly formed."})}),`
`,i(e.p,{children:["Protect telefunctions by implementing reusable guard functions with ",n(e.code,{children:"getContext()"})," and ",n(e.code,{children:"throw Abort()"}),"."]}),`
`,i(e.p,{children:["Telefunc's ",n(e.code,{children:"shield()"})," enforces argument types at runtime, and enables type inference and intellisense. It is generated automatically if you're using TypeScript, but must be added manually to ",n(e.code,{children:".js"})," files."]}),`
`,n(e.h4,{id:"expected-errors",className:"scroll-mt-24",children:"Expected errors"}),`
`,i(e.p,{children:["Handle expected errors (e.g., ",n(e.code,{children:'"Email exists"'}),") by early-returning an error code and/or message to the display to the user. For more info, see ",n(l,{href:"/error-handling"}),"."]}),`
`,n(e.h2,{id:"multiple-clients",className:"scroll-mt-24",children:"Multiple clients"}),`
`,n(e.p,{children:"If your telefunctions are used by multiple clients, we recommend deploying one Telefunc server per client. This helps keep telefunctions slim, so you can get the most out of Telefunc."}),`
`,n(c,{children:i(e.p,{children:["If clients need to share a resources, it ",n(e.em,{children:"can"})," make sense to make (slightly) more generic telefunctions."]})})]})}function un(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(P,{...s})}):P(s)}const fn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"}));function M(s){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.p,{children:"Telefunc can be used in any JavaScript environment without using a transformer but, for improved convenience, we recommend using a transformer plugin if possible."}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["Telefunc plugins transform ",n(e.code,{children:"*.telefunc.js"})," browser-side imports into a thin HTTP client."]}),`
`]}),`
`,n(e.h2,{id:"without-transformer",className:"scroll-mt-24",children:"Without transformer"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"defineTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" as"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" onNewTodoType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './TodoList.telefunc.ts'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" onNewTodo"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" defineTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"typeof"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" onNewTodoType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'TodoList.telefunc.ts'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'onNewTodo'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onClick"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"form"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" text"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" form"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"input"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"value"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Exactly as usual, including TypeScript support"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.blockquote,{children:[`
`,n(e.p,{children:"This feature is not implemented yet, reach out on GitHub if you need this."}),`
`]}),`
`,n(e.h2,{id:"vite-plugin",className:"scroll-mt-24",children:"Vite plugin"}),`
`,i(e.p,{children:["Telefunc's ",n(e.a,{href:"https://vitejs.dev",children:"Vite"})," plugin automatically adds Telefunc to Vite apps."]}),`
`,i(e.p,{children:["If you use Vite, you can transform ",n(e.code,{children:"*.telefunc.js"})," files by using Telefunc's Vite plugin."]}),`
`,n(e.p,{children:"The plugin:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Transforms your ",n(e.code,{children:".telefunc.js"})," files, see ",n(l,{href:"/how-it-works#transformer"}),"."]}),`
`,i(e.li,{children:["Automatically adds the ",n(l,{text:"Telefunc Server Middleware",href:"/telefunc"})," to Vite's development server as well as Vite's preview server."]}),`
`,i(e.li,{children:["Lazy-loads your ",n(e.code,{children:".telefunc.js"})," files for optimal development speed (aka on-demand compilation)."]}),`
`]}),`
`,n(e.p,{children:"You can pass Telefunc server configurations to the Vite plugin:"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// vite.config.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/vite'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"UserConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'vite'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  plugins"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": ["}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()]"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"} "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"satisfies"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" UserConfig"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"webpack-plugin",className:"scroll-mt-24",children:"Webpack plugin"}),`
`,i(e.p,{children:["The ",n(e.a,{href:"https://webpack.js.org",children:"webpack"})," plugin adds the ",n(l,{text:"Telefunc Transformer",href:"/how-it-works#transformer"})," to webpack apps, such as:"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/next"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/nuxt"}),`
`]}),`
`]}),`
`,i(e.p,{children:["If you use webpack, you can transform ",n(e.code,{children:"*.telefunc.js"})," files by using the Telefunc's webpack plugin:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// webpack.config.js"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"module"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"exports"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  module"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    rules"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": ["})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"     { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"test"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#E06C75"},children:" /"}),n(e.span,{style:{color:"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#56B6C2","--shiki-dark-font-weight":"inherit"},children:"\\."}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#22863A","--shiki-light-font-weight":"bold","--shiki-dark":"#56B6C2","--shiki-dark-font-weight":"inherit"},children:"\\."}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#E06C75"},children:"/"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"use"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'telefunc/webpack/loader'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    ]"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"babel-plugin",className:"scroll-mt-24",children:"Babel plugin"}),`
`,i(e.p,{children:["Telefunc's ",n(e.a,{href:"https://babeljs.io",children:"Babel"})," plugin adds the ",n(l,{text:"Telefunc Transformer",href:"/how-it-works#transformer"})," to Babel apps, such as:"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/react-native"}),`
`]}),`
`]})]})}function mn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(M,{...s})}):M(s)}const Bn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"})),gn=({children:s})=>a.jsx("div",{className:"landing-code-samples grid grid-cols-2 gap-4 items-stretch",children:s});function q(s){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Telefunc is an RPC framework you can attach to your server. It ",n(e.strong,{children:"abstracts away the HTTP protocol"}),`
so you can `,n(e.strong,{children:"couple code, not environments, and focus on developing."})]}),`
`,i(e.p,{children:[`With Telefunc, you can type-safely call a named server-side function as if it was client-side.
For most use-cases it is `,n(e.strong,{children:"simpler, more flexible, and more performant"})," than REST or GraphQL."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"tsx","data-language-label":"tsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// NewTodo.tsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './NewTodo.telefunc.ts'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"event"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" newTodoId"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"title"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.p,{children:"Type inference and autocompletion are automatic, and Telefunc handles the remote call for you."}),`
`,n(e.h2,{id:"theyre-remote-functions",className:"scroll-mt-24",children:"They're (remote) functions"}),`
`,n(e.p,{children:`The function you write is the function that gets called (on the server).
Just import and call telefunctions from your front-end. No need for an adapter, or "server only" flag.`}),`
`,n(e.p,{children:"Since telefunctions can be customized to a specific page, display component, or interaction, they:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Can perform complex queries with a single round-trip,"}),`
`,n(e.li,{children:"And only need to return what the calling UI needs."}),`
`]}),`
`,i(gn,{children:[n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// MarkAllDone.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onMarkAllDone"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" db"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"query"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"    'UPDATE todo_items SET is_completed = TRUE WHERE userId = :userId;'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"userId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"};"})}),`
`,n(e.span,{className:"line"})]})}),n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"tsx","data-language-label":"tsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// MarkAllDone.tsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onMarkAllDone"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './MarkAllDone.telefunc.js'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" MarkAllDone"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // () => Promise<void>"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" onClick"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" onMarkAllDone"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"button"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" onClick"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"{"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onClick"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      Complete All"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    </"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"button"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(e.h3,{id:"couple-code-not-environments",className:"scroll-mt-24",children:"Couple code, not environments"}),`
`,n(e.p,{children:"Telefunctions always run on the server, so you can safely access environment secrets and use server-side tools (like ORMs or database clients)."}),`
`,n(c,{children:i(e.p,{children:["For end-to-end type safety, use a TypeScript ORM or query builder (e.g. ",n(e.a,{href:"https://orm.drizzle.team",children:"Drizzle"}),", ",n(e.a,{href:"https://github.com/koskimas/kysely",children:"Kysely"}),", and ",n(e.a,{href:"https://github.com/stars/brillout/lists/sql",children:"others"}),")."]})}),`
`,n(e.p,{children:"To the consumer, these are all just functions, that do some async work: RPC abstracts away the request management."}),`
`,n(c,{children:n(e.p,{children:`Operations like these are notoriously problematic with REST (often called the "N+1 problem"). With Telefunc, it's just SQL.
Using database-native queries is always more powerful than REST or GraphQL.`})}),`
`,n(e.h2,{id:"full-stack-design",className:"scroll-mt-24",children:"Full-stack design"}),`
`,n(e.p,{children:"Telefunc employs a full-stack pattern, and projects that combine front- and back-end in the same project will get the most out of the acceleration it has to offer."}),`
`,n(e.pre,{children:n(e.code,{children:`├── src
    ├── db // ORM, query builder, models, etc.
    ├── components
    │  ├── todos
    │  │  ├── AddTodo.tsx
    │  │  ├── MarkAllDone.tsx
    │  │  ├── todos.telefunc.ts
    │  │  ├── TodoList.tsx
    │  │  └── Todos.tsx
    │  ├── ...
    ├── server
    │  └── entry.ts // Attach \`telefunc\` to server
    ├── ...
`})}),`
`,n(e.p,{children:`It allows you to colocate (and codevelop) highly-tailored server functions with client code.
You can write a telefunction for each view and interaction, just as if you were mutating data locally in-memory, but with all the power of a remote server.`})]})}function En(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(q,{...s})}):q(s)}const An=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"}));function U(s){const e={code:"code",p:"p",pre:"pre",span:"span",...s.components};return i(c,{children:[i(e.p,{children:["You usually define server-side configs (",n(e.code,{children:"import { config } from 'telefunc'"}),") at your server entry. For example:"]}),n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// /server/index.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" express"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// If you use Express.js"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// @docpress-replace app2 app"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app2"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// If you use Hono"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Server configs can be set here"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"someServerSideSetting"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'some-value'"})]}),`
`,n(e.span,{className:"line"})]})})]})}function g(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(U,{...s})}):U(s)}function O(s){const e={a:"a",code:"code",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,i(e.p,{children:["Opt out of the ",n(l,{href:"/best-practices#naming-convention",children:"naming convention for event-based telefunctions"})," (removes all related warnings)."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"disableNamingConvention"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:" true"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,i(c,{type:"warning",children:[n(e.p,{children:"Opting out of the naming convention is perfectly fine, though we recommend having a clear reason for doing so."}),i(e.p,{children:["We recommend reading ",n(l,{href:"/best-practices"})," before opting out. It explains why event-based telefunctions lead to increased:"]}),i(e.ul,{children:[`
`,n(e.li,{children:"Development speed"}),`
`,n(e.li,{children:"Security"}),`
`,n(e.li,{children:"Performance"}),`
`]}),i(e.p,{children:[n(e.a,{href:"https://github.com/telefunc/telefunc/issues/new",children:"Feel free to reach out"})," if you have questions."]})]}),`
`,n(g,{})]})}function Cn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(O,{...s})}):O(s)}const Fn=Object.freeze(Object.defineProperty({__proto__:null,default:Cn},Symbol.toStringTag,{value:"Module"}));function $(s){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.p,{children:"This page is about handling bugs, expected errors, and network errors."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["To block unauthorized access, see: ",n(l,{href:"/permissions",text:"Permissions"})]}),`
`,i(e.li,{children:["To handle invalid telefunction arguments, see: ",n(l,{href:"/validation",text:"Validation"})]}),`
`,i(e.li,{children:["To install error tracking, see: ",n(l,{href:"/onBug",text:n(e.code,{children:"onBug()"})})]}),`
`]}),`
`,n(c,{type:"success",children:n(e.p,{children:"To prevent leaking sensitive information, Telefunc never forwards unexpected server errors to the client."})}),`
`,n(e.h2,{id:"error-flows",className:"scroll-mt-24",children:"Error flows"}),`
`,i(e.p,{children:["|                             | ",n(e.code,{children:"return someErrorData"})," | ",n(e.code,{children:"throw Abort()"}),"  | ",n(e.code,{children:"throw Error()"}),`           |
| --------------------------- | ---------------------- | -----------------|-------------------------- |
| When to use                 | For expected failures  | For control flow | For `,n(e.strong,{children:"bugs"}),`              |
| triggers `,n(e.code,{children:"onBug"}),` (server)   | ❌                      | ❌                | ✅                        |
| `,n(e.code,{children:"onAbort"}),` (client)          | ❌                      | ✅               | ❌                         |
| Passes error data to client | ✅                     | ✅               | ❌                         |
| Logged with `,n(e.code,{children:"console.error"})," | ❌                      | ❌                | ✅                        |"]}),`
`,n(e.h3,{id:"security-errors",className:"scroll-mt-24",children:"Security errors"}),`
`,i(e.p,{children:[n(l,{href:"/Abort"})," is used to reject invalid requests (e.g., an unauthorized user or invalid arguments)."]}),`
`,n(e.h3,{id:"app-errors",className:"scroll-mt-24",children:"App errors"}),`
`,i(e.p,{children:["To handle expected errors (e.g., ",n(e.code,{children:'"Email exists"'}),") gracefully, just return early with an error message. Add a flag to easily discriminate the return type."]}),`
`,i(e.p,{children:["If a telefunction throws an uncaught exception, then ",n(l,{href:"/onBug"})," is called. Catch the error and return early or ",n(e.code,{children:"throw Abort(errorData)"})," to send information back to the client. To avoid leaking sensitive information, Telefunc doesn't send the original ",n(e.code,{children:"Error"})," object to the frontend."]}),`
`,n(e.h3,{id:"network-errors",className:"scroll-mt-24",children:"Network errors"}),`
`,i(e.p,{children:["If the user's browser can't connect to your server, the error thrown client-side will include a boolean ",n(e.code,{children:"isConnectionError"})," property."]}),`
`,n(e.h2,{id:"client-side-handling",className:"scroll-mt-24",children:"Client side handling"}),`
`,i(e.p,{children:["If ",n(e.code,{children:"throw Abort()"})," interrupts a telefunction call, the abort data is returned to the client, and thrown as a ",n(e.code,{children:"new Error(abortData)"}),". It can be accessed with the ",n(l,{href:"/onAbort"})," hook, or caught and handled by your frontend:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"html","data-language-label":"html",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- index.html -->"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- Environment: client -->"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"html"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"script"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#D19A66"},children:" type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"module"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"      import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './hello.telefunc.js'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"      try"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"        await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Eva'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"        console"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"log"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:`"I'm never printed"`}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"catch"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"err"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"        console"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"log"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"err"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"message"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Prints 'Internal Server Error'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:'        // E.g. show a popup "Something went wrong. Try again (later)."'})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"        // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      }"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    </"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"script"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  </"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"</"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"html"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"server-side-handling",className:"scroll-mt-24",children:"Server side handling"}),`
`,n(e.p,{children:"You can also handle the thrown error at your Telefunc server middleware:"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Add Telefunc middleware to server (Hono/Express.js/...)"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"req"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"res"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"/* ... */"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Telefunc exposes any error thrown by a telefunction at httpResponse.err"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"err"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Error handling"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/Abort",children:n("code",{children:"throw Abort()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/shield",children:n("code",{children:"shield()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/telefunc",children:n("code",{children:"telefunc()"})}),`
`]}),`
`]})]})}function Dn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n($,{...s})}):$(s)}const bn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"}));function z(s){const e={a:"a",code:"code",p:"p",pre:"pre",span:"span",...s.components};return i(c,{children:[i(e.p,{children:["You can define client-side configs (",n(e.code,{children:"import { config } from 'telefunc/client'"}),") anywhere, just make sure to do it at global client-side code that is always executed. For example ",n(e.a,{href:"https://vike.dev/client",children:n(e.code,{children:"/pages/+client.js"})})," if you use ",n(e.a,{href:"https://vike.dev/",children:"Vike"}),":"]}),n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// /pages/+client.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Config values can be set here"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"someClientSideSetting"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'some-value'"})]}),`
`,n(e.span,{className:"line"})]})})]})}function _(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(z,{...s})}):z(s)}function H(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": client."]}),`
`,n(e.p,{children:"You can specify the fetch function that Telefunc uses for making HTTP requests on the client side."}),`
`,n(e.p,{children:"This is useful for customizing the request and response behavior."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"customFetch"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '../path/to/custom-fetch'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"fetch"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" customFetch"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(_,{}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/httpHeaders",children:n("code",{children:"httpHeaders"})}),`
`]}),`
`]})]})}function Nn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(H,{...s})}):H(s)}const vn=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"}));function X(s){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Telefunc supports ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File",children:n(e.code,{children:"File"})})," and ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:n(e.code,{children:"Blob"})})," arguments — you can pass them to a telefunction just like any other argument. Any signature works: single file, multiple files, ",n(e.code,{children:"File[]"})," arrays, mixed with other arguments — it's completely transparent."]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["When a telefunction call contains files, Telefunc automatically switches from JSON to ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",children:n(e.code,{children:"multipart/form-data"})}),"."]}),`
`]}),`
`,n(e.h2,{id:"example",className:"scroll-mt-24",children:"Example"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// FileUpload.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" fs"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'node:fs'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onUpload"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"file"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" File"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"description"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Stream to disk — constant memory usage, no matter the file size"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" writable"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" fs"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"createWriteStream"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"`./uploads/"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"${"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"name"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"`"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  for"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" chunk"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" of"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" file"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"stream"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()) {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    writable"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"write"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"chunk"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  writable"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"end"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  console"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"log"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"`Saved "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"${"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"name"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" ("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"${"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"size"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" bytes): "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"${"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"description"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"`"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"tsx","data-language-label":"tsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// FileUpload.tsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onUpload"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './FileUpload.telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" FileUpload"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"form"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:"      onSubmit"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"{"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"e"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"        e"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"preventDefault"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"        const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" form"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" FormData"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"e"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"currentTarget"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"        const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" file"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" form"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"get"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'file'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"as"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" File"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"        const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" description"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" form"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"get"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'description'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"as"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"        await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onUpload"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"file"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"description"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      }"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    >"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"input"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" name"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"file"'}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" type"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"file"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" />"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"input"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" name"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"description"'}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" type"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"text"'}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" placeholder"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"Description"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" />"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"button"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" type"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"submit"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">Upload</"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"button"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    </"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"form"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"reading-strategies",className:"scroll-mt-24",children:"Reading strategies"}),`
`,i(e.p,{children:["Each file argument is a standard ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/File",children:n(e.code,{children:"File"})})," / ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:n(e.code,{children:"Blob"})})," object:"]}),`
`,i(e.p,{children:[`| Method | Memory usage | Use case |
|---|---|---|
| `,n(e.code,{children:"file.stream()"})," | Low — chunk size",n("sup",{children:"(1)"}),` | Pipe to disk, S3, etc. |
| `,n(e.code,{children:"file.arrayBuffer()"})," | High — file size",n("sup",{children:"(2)"}),` | Process in memory |
| `,n(e.code,{children:"file.text()"})," | High — file size",n("sup",{children:"(2)"})," | Read text content |"]}),`
`,n("div",{style:{fontSize:"0.94em",color:"#64748b"},children:i(e.p,{children:["(1): Only a single file chunk at a time is loaded in memory. Thus, memory consumption is low and constant (the chunk size). Recommended if files are expected to be large.",n(e.br,{}),`
`,"(2): The whole file is loaded in memory. For large files (e.g. a large videos) this leads to prohibitively high memory usage."]})}),`
`,n(e.h2,{id:"limitations",className:"scroll-mt-24",children:"Limitations"}),`
`,n(e.p,{children:"For best performance and efficiency, nothing is buffered internally — file bytes flow directly from the HTTP stream to your code. If you don't read a file argument, the file bytes never leave the sender (the user's browser)."}),`
`,n(e.p,{children:"This zero-buffering design comes with following inherent limitations."}),`
`,n(e.h3,{id:"one-shot-reads",className:"scroll-mt-24",children:"One-shot reads"}),`
`,i(e.p,{children:["Each file can only be read once — calling ",n(e.code,{children:".stream()"}),", ",n(e.code,{children:".text()"}),", or ",n(e.code,{children:".arrayBuffer()"})," a second time throws an error."]}),`
`,n(c,{children:n(e.p,{children:"The HTTP stream isn't buffered and can therefore only be consumed once."})}),`
`,n(e.p,{children:"If you need the data multiple times, buffer it into a variable first."}),`
`,n(e.h3,{id:"read-in-order",className:"scroll-mt-24",children:"Read in order"}),`
`,i(e.p,{children:["When a telefunction has multiple file arguments (e.g. ",n(e.code,{children:"file1"})," and ",n(e.code,{children:"file2"}),"), they must be read in the order they appear in the function signature."]}),`
`,n(c,{children:i(e.p,{children:[i(e.strong,{children:["Reading out of order causes ",n(e.code,{children:"file1"})," to be discarded (with a warning)."]}),`
That's because all files share a single forward-only HTTP stream (reading `,n(e.code,{children:"file2"})," before ",n(e.code,{children:"file1"})," would require buffering ",n(e.code,{children:"file1"})," in memory)."]})}),`
`,i(e.p,{children:["That said, you don't need to ",n(e.code,{children:"await"})," each file before starting reading the next — you can kick off reads concurrently (e.g. ",n(e.code,{children:"Promise.all([file1.text(), file2.text()])"}),") and they will be automatically streamed in the correct order."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ✅ Works"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ❌ Doesn't work"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ✅ Works"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ❌ Doesn't work"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ✅ Works"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" Promise"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(["})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"])"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ❌ Doesn't work"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" Promise"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(["})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"])"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ✅ Works"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" Promise"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(["})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"stream"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"pipeTo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(..)"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"stream"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"pipeTo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(..)"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"])"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// ❌ Doesn't work"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" Promise"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(["})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file2"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"stream"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"pipeTo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(..)"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  file1"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"stream"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"pipeTo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(..)"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"])"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"server-integration",className:"scroll-mt-24",children:"Server integration"}),`
`,i(e.p,{children:["Pass the ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",children:n(e.code,{children:"Request"})})," object directly:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["Alternatively, with Express, Fastify, or any Node.js framework, you can pass the request as a ",n(e.a,{href:"https://nodejs.org/api/stream.html#readable-streams",children:n(e.code,{children:"Readable"})})," stream along with the ",n(e.code,{children:"Content-Type"})," header:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"res"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    url"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"originalUrl"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    readable"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"["}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"] "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"||"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" ''"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  res"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"send"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"how-it-works",className:"scroll-mt-24",children:"How it works"}),`
`,n(c,{children:n(e.p,{children:"You can skip reading this section. Read this only if you're curious."})}),`
`,i(e.p,{children:["Telefunc uses a custom multipart stream parser — files are ",n(e.strong,{children:"not"})," buffered into memory on the server."]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["The client serializes the telefunction call into a ",n(e.code,{children:"multipart/form-data"})," request. File/Blob arguments are replaced with placeholder descriptors and sent as separate binary parts."]}),`
`,i(e.li,{children:["On the server, Telefunc parses the metadata first, then creates lazy ",n(e.code,{children:"File"}),"/",n(e.code,{children:"Blob"})," objects that ",n(e.strong,{children:"reference the HTTP body stream"})," without reading it yet."]}),`
`,i(e.li,{children:["When your telefunction calls ",n(e.code,{children:"file.stream()"}),", ",n(e.code,{children:"file.text()"}),", or ",n(e.code,{children:"file.arrayBuffer()"}),", the bytes are pulled directly from the HTTP stream on demand."]}),`
`]}),`
`,i(e.p,{children:["This means ",n(e.strong,{children:"file bytes only flow through memory when you read them"})," — and if you stream to disk, memory consumption is constant regardless of file size."]}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/telefunc",children:n("code",{children:"telefunc()"})}),`
`]}),`
`]})]})}function xn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(X,{...s})}):X(s)}const wn=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"}));function W(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,i(e.p,{children:[n(e.code,{children:"getContext()"})," allows telefunctions to type-safely access the Telefunc request context."]}),`
`,n(c,{type:"warning",children:i(e.p,{children:["You must populate ",n(e.code,{children:"Telefunc.Context"})," using the ",n(l,{href:"/telefunc"})," before trying to access it with ",n(e.code,{children:"getContext()"}),"."]})}),`
`,i(e.p,{children:["It's most commonly used for implementing permissions, see ",n(l,{href:"/permissions"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onLoad"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"userId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"userId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  "})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"type-safety",className:"scroll-mt-24",children:"Type safety"}),`
`,n(e.p,{children:"You can use a generic type argument to set the type locally..."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// *.telefunc.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"type"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" UserContext"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" someTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // TypeScript knows that `userId` is a `string`"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"userId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:"UserContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["...or declare the ",n(e.code,{children:"Telefunc.Context"})," type globally."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TelefuncContext.d.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"declare"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" module"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  namespace"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    interface"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"      userId"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" null"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:" |"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// *.telefunc.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" someTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // TypeScript still knows that `user.id` is a `string`"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // const { userId } = getContext<UserContext>() // [!code --]"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"userId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// [!code ++]"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"call-order",className:"scroll-mt-24",children:"Call order"}),`
`,i(e.p,{children:["Make sure to call ",n(e.code,{children:"getContext()"})," before any ",n(e.code,{children:"await"})," operators:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.telefunc.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" myTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ✅ Good: getContext() is called before `await`"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" context"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" something"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["If you call ",n(e.code,{children:"getContext()"})," called after an ",n(e.code,{children:"await"})," operator..."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.telefunc.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" myTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" something"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ❌ Wrong: getContext() must be called before `await something()`"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" context"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.p,{children:"...you will see this error:"}),`
`,n(e.pre,{children:n(e.code,{children:`[telefunc][Wrong Usage][getContext()] Cannot access context object, see https://telefunc.com/getContext#access
`})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/server-integration",children:"Server Integration"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/permissions",children:"Permissions"}),`
`]}),`
`]})]})}function Tn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(W,{...s})}):W(s)}const _n=Object.freeze(Object.defineProperty({__proto__:null,default:Tn},Symbol.toStringTag,{value:"Module"}));function V(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.h1,{id:"telefunc-docs-maintainer-guide",className:"scroll-mt-24",children:"Telefunc docs maintainer guide"}),`
`,n(c,{type:"warning",heading:"Content-only workflow",children:i(e.p,{children:["Work in the MDX content files under ",n(e.code,{children:"pages/(docs)/(content)/**"}),". Reuse the components exported from ",n(e.code,{children:"@/components/index"})," and avoid changing TSX, layout, routing, or theme files unless a developer explicitly asks for it."]})}),`
`,n(e.h2,{id:"where-to-edit",className:"scroll-mt-24",children:"Where to edit"}),`
`,n(A,{data:{headers:["Path","Purpose","Maintainer action"],rows:[["pages/(docs)/(content)/<slug>/content.en.mdx","English source for one doc route","Write and update content"],["pages/(docs)/(content)/<slug>/content.zh.mdx","Chinese translation for the same route","Keep localized content aligned when needed"],["pages/(docs)/(content)/<slug>/content.config.ts","Shared per-document options such as tableOfContents","Only touch when the doc needs a TOC change"],["lib/headings.ts","Doc metadata registry keyed by heading ids","Update titles, navTitle, excerpt, and docPath mappings"],["lib/navigation/menuNavigation.ts","Sidebar groups and link order","Add, remove, or reorder links under the existing groups"],["components/index.tsx","Whitelisted MDX component exports","Import only from here"],["pages/+telefunc.ts","Global docs runtime settings","Read for context, but treat as developer-owned"],["pages/(docs)/(config) and components/**","Rendered layout, routing, and shared UI","Do not edit for normal documentation work"]]}}),`
`,n(c,{type:"info",heading:"Rule of thumb",children:n(e.p,{children:"If the change is prose, examples, headings, links, screenshots, callouts, or tables, it belongs in MDX. If it changes routing, layout, styling, navigation wiring, or React code, hand it back to a developer."})}),`
`,n(e.h2,{id:"working-rules",className:"scroll-mt-24",children:"Working rules"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Every doc route lives in its own folder under ",n(e.code,{children:"pages/(docs)/(content)"}),"."]}),`
`,i(e.li,{children:["The route slug comes from the folder path, so ",n(e.code,{children:"pages/(docs)/(content)/get-started/content.en.mdx"})," becomes ",n(e.code,{children:'<Link href="/get-started">/get-started</Link>'}),"."]}),`
`,i(e.li,{children:["English is the default locale. Non-default locale URLs are prefixed, for example ",n(e.code,{children:"/zh/get-started"}),"."]}),`
`,i(e.li,{children:["Shared per-document settings belong in ",n(e.code,{children:"content.config.ts"})," or ",n(e.code,{children:"content.config.js"}),"; do not create Vike ",n(e.code,{children:"+config.ts"})," files next to MDX content."]}),`
`,i(e.li,{children:["Search and table-of-contents data are extracted from raw MDX, so keep the top ",n(e.code,{children:"#"})," heading, section headings, and link text accurate."]}),`
`]}),`
`,n(e.h2,{id:"navigation-and-page-metadata",className:"scroll-mt-24",children:"Navigation and page metadata"}),`
`,i(e.p,{children:["Use ",n(e.code,{children:"lib/headings.ts"})," when a doc needs metadata or label changes, and use ",n(e.code,{children:"lib/navigation/menuNavigation.ts"})," when a doc needs to move within the sidebar."]}),`
`,n(A,{data:{headers:["Field","Meaning","When to edit it"],rows:[["docPath","The route slug for the document, for example `get-started` or `telefunc-url`","Set it to the doc folder path that the metadata entry belongs to"],["title","The main page title for the document","Edit when the document title itself should change"],["navTitle","An optional shorter or alternate label used in the sidebar instead of `title`","Edit when the full page title is too long or too technical for navigation"],["excerpt","The short page description used for page metadata and doc summaries","Edit when the page description shown in metadata should change"]]}}),`
`,n(c,{type:"info",heading:"How `navTitle` works",children:i(e.p,{children:["If ",n(e.code,{children:"navTitle"})," is omitted, the navigation uses ",n(e.code,{children:"title"}),". Only add ",n(e.code,{children:"navTitle"})," when the sidebar label should differ from the page heading."]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"quickStart"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"  docPath"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'get-started'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"  title"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"    en"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Getting Started with Telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  },"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"  navTitle"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"    en"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Get Started'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  },"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"  excerpt"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"    en"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Setup, repo orientation, and the writing rules for this documentation.'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  },"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Edit ",n(e.code,{children:"lib/headings.ts"})," when the document name, short nav label, or description needs to change."]}),`
`,i(e.li,{children:["Edit ",n(e.code,{children:"lib/navigation/menuNavigation.ts"})," when a link should move to another section, appear in a different order, or be removed from the sidebar."]}),`
`,i(e.li,{children:["Keep the keys aligned: the sidebar uses heading keys such as ",n(e.code,{children:"quickStart"}),", which must exist in ",n(e.code,{children:"lib/headings.ts"}),"."]}),`
`]}),`
`,n(e.h2,{id:"how-the-menu-builder-works",className:"scroll-mt-24",children:"How the menu builder works"}),`
`,i(e.p,{children:[n(e.code,{children:"lib/navigation/menuNavigation.ts"})," defines the sidebar as data. The important part is the ",n(e.code,{children:"menuGroups"})," array: each object becomes one sidebar section, and each item in its ",n(e.code,{children:"links"})," array becomes either a doc link or a divider label."]}),`
`,n(A,{data:{headers:["Part","Meaning","What the maintainer can change"],rows:[["id","Stable id for the sidebar section","Usually leave it as-is unless a developer asks for a structural rename"],["icon","Lucide icon shown for the section","Usually leave it alone"],["groupKey","Translation key for the section title","Usually leave it alone unless the section title system changes"],["links","Ordered list of heading keys and divider objects","This is the main place to edit the menu"],["heading key","A string like `quickStart` or `apiTelefunc` that maps to `lib/headings.ts`","Add, remove, or reorder these to control doc links"],["dividerText","A plain label inserted between link groups","Edit when you need sub-sections inside one sidebar group"]]}}),`
`,i(R,{children:[n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" menuGroups"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ["})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  {"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'get-started'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    icon"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Sprout"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    groupKey"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'getStarted'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    links"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": ["})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"      'quickStart'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"      'concepts'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"dividerText"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Guides'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"      'serverIntegration'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    ],"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  },"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"]"})}),`
`,n(e.span,{className:"line"})]})}),n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"quickStart"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"  docPath"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'get-started'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"  title"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E06C75"},children:"    en"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Quick Start'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  },"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(c,{type:"info",heading:"How a link is built",children:i(e.p,{children:["A string in ",n(e.code,{children:"links"})," is not the URL itself. It is a heading key. The builder passes that key to ",n(e.code,{children:"getHeadingData()"}),", which reads ",n(e.code,{children:"lib/headings.ts"})," and turns it into the localized sidebar label and href."]})}),`
`,n(c,{type:"info",heading:"Safe editing pattern",children:i(e.p,{children:["First create or update the metadata entry in ",n("code",{children:"lib/headings.ts"}),", then add that key to the right ",n("code",{children:"links"})," array in ",n("code",{children:"lib/navigation/menuNavigation.ts"}),"."]})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["To reorder the sidebar, move items up or down within a ",n(e.code,{children:"links"})," array."]}),`
`,i(e.li,{children:["To remove a doc from the sidebar, remove its heading key from ",n(e.code,{children:"links"}),"."]}),`
`,i(e.li,{children:["To add a divider, insert ",n(e.code,{children:"{ dividerText: 'Your label' }"})," where the break should appear."]}),`
`,i(e.li,{children:["To add a new doc link, add the matching heading key after confirming that key exists in ",n(e.code,{children:"lib/headings.ts"}),"."]}),`
`,i(e.li,{children:["Do not put raw URLs into ",n(e.code,{children:"links"}),"; always use heading keys so labels and localized paths stay in sync."]}),`
`]}),`
`,n(e.h2,{id:"approved-mdx-components",className:"scroll-mt-24",children:"Approved MDX components"}),`
`,n(e.p,{children:"Use this import at the top of a doc:"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"mdx","data-language-label":"mdx",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Alert"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"CodeGroup"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Link"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Table"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '@/components/index'"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(A,{data:{headers:["Component","Use it for","Example"],rows:[["Alert","Notes, warnings, and important guidance",'<Alert type="warning" heading="Heads up">...</Alert>'],["CodeGroup","Showing alternative snippets in one framed block","<CodeGroup>{multiple fenced code blocks}</CodeGroup>"],["Link","Internal or external links; internal links keep locale prefixes correct",'<Link href="/intro">Intro</Link>'],["Table","Structured reference tables with headers and rows","<Table data={{ headers: [...], rows: [...] }} />"]]}}),`
`,n(e.h2,{id:"starter-snippets",className:"scroll-mt-24",children:"Starter snippets"}),`
`,i(R,{children:[n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"mdx","data-language-label":"mdx",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Alert"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"CodeGroup"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Link"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Table"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '@/components/index'"})]}),`
`,n(e.span,{className:"line"})]})}),n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"mdx","data-language-label":"mdx",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"Alert"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" type"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"info"'}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" heading"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"Internal links"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  Use <"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"Link"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#D19A66","--shiki-dark-font-style":"italic"},children:" href"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:'"/intro"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">Link</"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"Link"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"> for links to docs pages so locale prefixes stay correct."})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"</"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"Alert"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,n(c,{type:"info",heading:"When to ask a developer",children:i(e.p,{children:["Ask for developer help if you need a new route, a sidebar or navigation change, a new MDX component, a layout tweak, or any change inside ",n(e.code,{children:"components"}),", ",n(e.code,{children:"pages/(docs)/(config)"}),", ",n(e.code,{children:"lib"}),", or the theme files."]})})]})}function Sn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(V,{...s})}):V(s)}const Ln=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"}));function Y(s){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["You can think of telefunction calls as a type-safe ",n(e.code,{children:"fetch"}),` call to a registered server-side function.
Under the hood, Telefunc converts telefunction calls into an HTTP request to your server.`]}),`
`,n(e.p,{children:"Let's see what happens when a telefunction is called."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// hello.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"name"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }) {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" message"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'Welcome '"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" +"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" name"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"message"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './hello.telefunc.js'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"message"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'Eva'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["The ",n(e.code,{children:"hello.telefunc.js"})," file is never loaded in the browser: instead Telefunc transforms ",n(e.code,{children:"hello.telefunc.js"})," into the following:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// hello.telefunc.js (after Telefunc transformation)"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: Browser"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"__internal_makeHttpRequest"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" const"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" hello"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:"..."}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"args"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" __internal_makeHttpRequest"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/hello.telefunc.js:hello'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"args"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"transformer",className:"scroll-mt-24",children:"Transformer"}),`
`,i(e.p,{children:["Telefunc uses plugins to transform ",n(e.code,{children:".telefunc.js"})," files for:"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["The client-side, replacing ",n(e.code,{children:".telefunc.js"})," imports with a thin HTTP client."]}),`
`,i(e.li,{children:["The server-side, for ",n(l,{href:"/shield#automatic-from-typescript",text:"automatic TypeScript runtime validation",doNotInferSectionTitle:!0}),"."]}),`
`]}),`
`,i(e.p,{children:["Telefunc plugins also automatically crawl your ",n(e.code,{children:".telefunc.js"})," files (so that you don't have to use ",n(l,{href:"/telefuncFiles",text:n(e.code,{children:"config.telefuncFiles"})}),")."]}),`
`,n(c,{children:i(e.p,{children:["There is work-in-progress to be able to use Telefunc without any transformer, see ",n(e.a,{href:"https://github.com/telefunc/telefunc/issues/52",children:"#52"}),"."]})}),`
`,n(e.h2,{id:"telefunction-lifecycle",className:"scroll-mt-24",children:"Telefunction lifecycle"}),`
`,i(e.p,{children:["When ",n(e.code,{children:"hello('Eva')"})," is called in the browser,"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["The HTTP client (",n(e.code,{children:"__internal_makeHttpRequest"}),") serializes the call and makes an HTTP request to the ",n(e.code,{children:"/_telefunc"})," route on your server."]}),`
`]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"sh","data-language-label":"sh",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"POST"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" /_telefunc"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" HTTP/1.1"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"{"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:'  "path"'}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#56B6C2"},children:":"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:' "/hello.telefunc.js:hello",'})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:'  "args"'}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#56B6C2"},children:":"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" [{"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:'"name"'}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#56B6C2"},children:":"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:' "Eva"}]'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.ol,{start:"2",children:[`
`,i(e.li,{children:["The ",n(l,{href:"/telefunc",text:n(e.code,{children:"telefunc"})})," middleware on your server intercepts the request, executes the telefunction call, and returns the (serialized) result."]}),`
`]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"sh","data-language-label":"sh",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"HTTP/1.1"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:" 200"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" OK"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"{"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:'  "return"'}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#56B6C2"},children:":"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:'    "message"'}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#56B6C2"},children:":"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:' "Welcome Eva"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.ol,{start:"3",children:[`
`,n(e.li,{children:"The HTTP client parses the response and type-safely returns the result, as though the control flow never left the browser."}),`
`]})]})}function jn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(Y,{...s})}):Y(s)}const Rn=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"}));function G(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": client."]}),`
`,n(e.p,{children:"Send additional HTTP headers to be sent along Telefunc HTTP requests."}),`
`,n(e.p,{children:"Usually used for sending authentication headers."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"httpHeaders"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  Authorization"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"`Bearer "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"${"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"token"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"`"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(_,{}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/fetch",children:n("code",{children:"fetch()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/permissions",children:"Permissions"}),`
`]}),`
`,n(e.li,{children:i(e.a,{href:"https://github.com/telefunc/telefunc/issues/167",children:["#167 - Dynamic ",n(e.code,{children:"httpHeaders"}),"?"]})}),`
`]})]})}function In(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(G,{...s})}):G(s)}const Pn=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"}));function K(s){const e={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.p,{children:"For fetching the initial data of pages (SSR data) use your framework's built-in data fetching mechanism instead of Telefunc. For more information, see:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching",children:"Next.js Docs > Data Fetching"})}),`
`,n(e.li,{children:n(e.a,{href:"https://svelte.dev/docs/kit/load#Universal-vs-server",children:"SvelteKit Docs > Loading data > Universal vs server"})}),`
`,n(e.li,{children:n(e.a,{href:"https://vike.dev/data-fetching",children:"vike.dev > Data Fetching"})}),`
`]}),`
`,n(e.p,{children:"You can still use Telefunc for fetching data but only after the initial rendering of the page, for example for pagination or infinite scroll."}),`
`,i(e.blockquote,{children:[`
`,n(e.p,{children:"You cannot use Telefunc for server-side rendered (SSR) data because only the framework can pass SSR data from the server to the client-side (which is needed for hydration). This is common to all SSR frameworks."}),`
`]})]})}function Mn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(K,{...s})}):K(s)}const qn=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"}));function Q(s){const e={br:"br",code:"code",p:"p",pre:"pre",span:"span",strong:"strong",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server",n(e.br,{}),`
`,n(e.strong,{children:"Default"}),": ",n(e.code,{children:"{ shieldErrors: { dev: true, prod: false } }{:ts}"})]}),`
`,n(e.p,{children:"Whether to log shield validation errors."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"log"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shieldErrors"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:" true"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Or"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"log"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shieldErrors"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"dev"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:"true"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"prod"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:"true"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(g,{})]})}function Un(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(Q,{...s})}):Q(s)}const On=Object.freeze(Object.defineProperty({__proto__:null,default:Un},Symbol.toStringTag,{value:"Module"}));function J(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Using Telefunc with ",n(e.a,{href:"https://nextjs.org",children:"Next.js"}),"."]}),`
`,n(e.h2,{id:"1-install",className:"scroll-mt-24",children:"1. Install"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"shell","data-language-label":"shell",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"npm"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" install"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" telefunc"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"2-next-js-config",className:"scroll-mt-24",children:"2. Next.js config"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// next.config.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"NextConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'next'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" withTelefunc"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/next'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"let"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" nextConfig"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" NextConfig"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {}"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"nextConfig"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" withTelefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"nextConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" nextConfig"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"3-add-telefunc-middleware",className:"scroll-mt-24",children:"3. Add Telefunc middleware"}),`
`,i(e.p,{children:["The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see ",n(l,{href:"/getContext"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// app/api/telefunc/route.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncUrl"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/api/telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" handler"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"request"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:":{"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"      context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": { "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"/** */"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": { "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"handler"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" as"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" GET"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"handler"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" as"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" POST"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"4-client-config",className:"scroll-mt-24",children:"4. Client config"}),`
`,i(e.p,{children:["Since the route handler is at ",n(e.code,{children:"/api/telefunc"})," instead of the default ",n(e.code,{children:"/_telefunc"}),", set the client-side URL using a ",n(e.code,{children:"'use client'"})," provider:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"tsx","data-language-label":"tsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// app/client-providers.tsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'use client'"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncUrl"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/api/telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" ClientProviders"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"children"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"children"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" React"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:"ReactNode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }) {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" <>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"{"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"children"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"</>"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"tsx","data-language-label":"tsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// app/layout.tsx"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"ClientProviders"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './client-providers'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" RootLayout"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"children"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"children"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" React"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:"ReactNode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }) {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"html"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      <"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"        <"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"ClientProviders"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"{"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"children"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#C678DD"},children:"}"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"</"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"ClientProviders"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"      </"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    </"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"html"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"5-initial-data",className:"scroll-mt-24",children:"5. Initial data"}),`
`,i(e.p,{children:["Telefunc ",n(l,{href:"/initial-data",children:"can't write to the initial data load"}),", but can be used for any requests (e.g., for pagination or infinite scroll) after the first render."]}),`
`,i(e.p,{children:["Use Next.js Server Components to fetch initial data directly from a database, see ",n(e.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching",children:"Next.js Docs > Data Fetching"}),"."]}),`
`,n(e.h2,{id:"example",className:"scroll-mt-24",children:"Example"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{path:"https://github.com/telefunc/telefunc/blob/main/examples/next",children:n("code",{children:"/examples/next"})}),`
`]}),`
`]})]})}function $n(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(J,{...s})}):J(s)}const zn=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"}));function Z(s){const e={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Using Telefunc with ",n(e.a,{href:"https://nuxt.com/",children:"Nuxt"}),"."]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["Contribution welcome to ",n(e.a,{href:"https://github.com/telefunc/telefunc/issues/153",children:"update the example to Nuxt 3"}),"."]}),`
`]}),`
`,n(e.h1,{id:"wip",className:"scroll-mt-24",children:"[WIP]"}),`
`,n(e.h2,{id:"next",className:"scroll-mt-24",children:"Next"}),`
`,n(l,{href:"/start#my-first-telefunction"}),`
`,n(e.h2,{id:"examples",className:"scroll-mt-24",children:"Examples"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/telefunc/telefunc/tree/513a21cdd7ef8780ce3f8ca98b182bf6989d3f14/examples/nuxt2",children:"/examples/nuxt2"})}),`
`]})]})}function Hn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(Z,{...s})}):Z(s)}const Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"}));function ee(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": client."]}),`
`,i(e.p,{children:["The client-side ",n(e.code,{children:"onAbort()"})," hook is called whenever telefunction calls fail because of ",n(l,{text:n(e.code,{children:"throw Abort()"}),href:"/Abort"}),"."]}),`
`,n(c,{type:"warning",children:i(e.p,{children:["It does ",n(e.strong,{children:"not"})," run when other errors are thrown, see ",n(l,{href:"/error-handling"}),"."]})}),`
`,i(e.p,{children:[n(e.code,{children:"onAbort"})," gives you type-safe access to any data from ",n(e.code,{children:"throw Abort(errorData)"})," on the client. It is designed to be used as part of Telefunc's DRY security pattern. For more, see ",n(l,{href:"/permissions#dry-permissions",doNotInferSectionTitle:!0}),"."]}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"abortValue"})," property to access the error data."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// *.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" someTelefunction"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// onAbort.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onAbort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"onAbort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"error"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" TelefunctionCallAbort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"isConnectionError"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"abortValue"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ==="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Redirect user to login page"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    window"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"location"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"href"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/login'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  "})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/permissions",children:"Permissions"}),`
`]}),`
`]})]})}function Wn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ee,{...s})}):ee(s)}const Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Wn},Symbol.toStringTag,{value:"Module"}));function ne(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,i(e.p,{children:["Unexpected errors trigger the server-side ",n(e.code,{children:"onBug()"})," hook. These may be bugs in your telefunction, or in the Telefunc library."]}),`
`,n(c,{type:"warning",children:i(e.p,{children:["The ",n(e.code,{children:"onBug()"})," hook is ",n(e.strong,{children:"not"})," called when ",n(l,{href:"/Abort"})," is used, and ",n(e.strong,{children:"cannot"})," be used to implement control flow."]})}),`
`,i(e.p,{children:["Use ",n(e.code,{children:"onBug()"})," to integrate with logging and monitoring tools like ",n(e.a,{href:"https://sentry.io/",children:"Sentry"}),", ",n(e.a,{href:"https://www.bugsnag.com/",children:"Bugsnag"}),", or ",n(e.a,{href:"https://rollbar.com/",children:"Rollbar"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onBug"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"onBug"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // type of error is `unknown`"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  console"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/error-handling",children:"Error Handling"}),`
`]}),`
`]})]})}function Yn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ne,{...s})}):ne(s)}const Gn=Object.freeze(Object.defineProperty({__proto__:null,default:Yn},Symbol.toStringTag,{value:"Module"}));function ie(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Always keep in mind that your ",n(e.strong,{children:"telefuncs are public"}),". A simple HTTP request could be used to extract, modify, or destroy user secrets or business-critical data from an unprotected function."]}),`
`,n(e.p,{children:"Add authorization checks to telefunctions using guard expressions in the function body."}),`
`,n(e.h2,{id:"abort-requests",className:"scroll-mt-24",children:"Abort requests"}),`
`,i(e.p,{children:["To reject a request for any reason, simply ",n(l,{href:"/Abort"}),". This is equivalent to a status code of ",n(e.code,{children:"403"}),". Include error data like a code to trigger a redirect or a message to display to the user."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoItem.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"/**"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" * "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@param"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {string}"}),n(e.span,{style:{color:"#24292E","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:" todoId"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" * "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@param"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {string}"}),n(e.span,{style:{color:"#24292E","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:" text"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" * "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@returns"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {Promise<{ todos: Todo[] }>}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" */"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onTextChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"todoId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Code tells frontend to redirect to /login"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" todo"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" db"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"query"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"    'SELECT id, text FROM todos WHERE id = :id LIMIT 1'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"todo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Technically 403, but can be used for any rejection"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'invalid_id'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Easily implement advanced permissions schemes"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"todoItem"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"authorId"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" !=="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"id"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ||"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" !"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"isAdmin"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthorized'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"todo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["Use ",n(e.code,{children:"throw Abort()"})," to when rejecting access to a resource, or if a telefunction call is otherwise invalid."]}),`
`,i(e.p,{children:["On the frontend, use the ",n(l,{href:"/onAbort"})," hook to handle redirects."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onAbort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"onAbort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"err"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"err"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"abortValue"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ==="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'unauthorized'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Redirect user to login page"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    window"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"location"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"href"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/login'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"early-returns",className:"scroll-mt-24",children:"Early returns"}),`
`,i(e.p,{children:["Not every failed request is an error though. To bypass the ",n(e.code,{children:"onAbort"})," control flow, return early with an error code or message."]}),`
`,i(e.p,{children:["We can update the previous example to use a ",n(e.code,{children:"code"})," property instead of ",n(e.code,{children:"throw Abort()"})," to trigger the redirect."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoItem.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"/**"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" * "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@param"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {string}"}),n(e.span,{style:{color:"#24292E","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:" text"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" * "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@returns"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {Promise<OnTextChangeResult>}"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" */"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Code tells frontend to redirect to /login"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// [!code ++]"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }) "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// [!code --]"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"todos"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.p,{children:"Use the error code or message property to discriminate the response type."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"type"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" OnNewTodoResult"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"  code"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'unauthenticated'"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:" |"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'unauthorized'"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:" |"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'invalid_id'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"} "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:"|"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"  todos"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Todo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"[]"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#E36209","--shiki-dark":"#E06C75"},children:"  code"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"?"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" undefined"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"jsx","data-language-label":"jsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoItem.jsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"/** "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@param"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {string}"}),n(e.span,{style:{color:"#24292E","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:" text"}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" */"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" result"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"result"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Error"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"else"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Ok"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"dry-permissions",className:"scroll-mt-24",children:"DRY Permissions"}),`
`,i(e.p,{children:["To implement reusable permissions logic, define helper functions that call ",n(l,{href:"/getContext",text:n(e.code,{children:"getContext()"})}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// auth/getUser.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getUser"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" user"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.p,{children:"Then use as needed in your telefunctions."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// components/TodoItem.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getUser"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '../auth/getUser'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onTextChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"id"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" user"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getUser"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  /* ... */"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/onAbort",children:n("code",{children:"onAbort()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/Abort",children:n("code",{children:"throw Abort()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/getContext",children:n("code",{children:"getContext()"})}),`
`]}),`
`]})]})}function Kn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ie,{...s})}):ie(s)}const Qn=Object.freeze(Object.defineProperty({__proto__:null,default:Kn},Symbol.toStringTag,{value:"Module"}));function se(s){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.h2,{id:"set-up-telefunc",className:"scroll-mt-24",children:"Set up Telefunc"}),`
`,n(e.h3,{id:"install-dependencies",className:"scroll-mt-24",children:"Install dependencies"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"sh","data-language-label":"sh",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"npm"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" install"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" telefunc"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h3,{id:"add-telefunc-to-your-server",className:"scroll-mt-24",children:"Add Telefunc to your server"}),`
`,i(e.p,{children:["Telefunc is built on ",n(e.a,{href:"https://www.w3.org/standards/",children:"Web Standards"}),". You can add Telefunc to any server that exposes ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",children:n(e.code,{children:"Request"})})," or ",i(e.a,{href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage",children:["Node.js ",n(e.code,{children:"req"})]}),`.
This includes server frameworks like `,n(e.a,{href:"https://hono.dev",children:"Hono"})," or ",n(e.a,{href:"https://expressjs.com",children:"Express"}),", and metaframeworks like ",n(e.a,{href:"https://nextjs.org",children:"Next.js"})," and ",n(e.a,{href:"https://svelte.dev/docs/kit",children:"SvelteKit"}),"."]}),`
`,n(c,{children:i(e.p,{children:["The ",n(l,{href:"/telefunc",children:n("code",{children:"telefunc()"})}),` middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context.
For more info, see `,n(l,{href:"/getContext",children:n("code",{children:"getContext()"})}),"."]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'hono'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"raw"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"      // You can add any arbitrary contextual information here"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    },"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": { "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(c,{children:n(e.p,{children:"Check out the setup guide for your framework of choice for integration and configuration steps."})}),`
`,n(e.h2,{id:"my-first-telefunction",className:"scroll-mt-24",children:"My first telefunction"}),`
`,i(e.p,{children:["After adding the ",n(e.code,{children:"telefunc"})," middleware to your server, create a new file for your telefunction, ideally as close to the component (or page) that will call it."]}),`
`,i(e.p,{children:["By convention, telefunctions are named after the events they handle (e.g., ",n(e.code,{children:"onNewTodo"}),"). This ensures close coupling between telefunctions and the UI that calls them."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// components/TodoList.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"title"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" db"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"execute"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'INSERT INTO todos VALUES (:title,:text)'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"title"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" db"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"execute"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'SELECT id, title, text FROM todos'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(c,{children:i(e.p,{children:["Coupling telefunctions to specific data views or interactions ",n(e.strong,{children:"keeps arguments and return values minimal"}),". This is ",n(e.strong,{children:"required"})," to take advantage of the performance and security benefits Telefunc offers."]})}),`
`,n(e.h3,{id:"secure-your-telefunction",className:"scroll-mt-24",children:"Secure your telefunction"}),`
`,n(c,{type:"warning",children:i(e.p,{children:["Always keep in mind that your ",n(e.strong,{children:"telefuncs are public"}),". A simple HTTP request could be used to extract, modify, or destroy user secrets or business-critical data from an unprotected function."]})}),`
`,n(e.p,{children:"Add guards to Telefunctions to prevent illegitimate access."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Use ",n("b",{children:n(l,{href:"/Abort",text:n(e.code,{children:"throw Abort()"})})})," (or return early) if the client is unauthenticated or doesn't have permission to access the requested resource."]}),`
`,i(e.li,{children:["Use ",n("b",{children:n(l,{href:"/shield",text:n(e.code,{children:"shield()"})})})," to validate telefunction call arguments."]}),`
`]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Todos.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// When using TypeScript, Telefunc automatically generates"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// shield for argument type inference and runtime validation"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// shield(onNewTodo, [shield.type.string]) // [!code --]"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"title"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h3,{id:"call-your-telefunction",className:"scroll-mt-24",children:"Call your telefunction"}),`
`,n(e.p,{children:"You can use Telefunc with most UI frameworks (e.g., React, Vue, Solid) or plain JavaScript."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"jsx","data-language-label":"jsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// components/TodoList.jsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './TodoList.telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" TodoList"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  /** "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@param"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {string}"}),n(e.span,{style:{color:"#24292E","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:" text"}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" */"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" todos"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"html","data-language-label":"html",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- components/TodoList.vue -->"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- Environment: client -->"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- ... -->"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"script"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './TodoList.telefunc.js'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    methods"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"        async"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"_event"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"            this"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"todoItems"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"this"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"        }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"</"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"script"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"jsx","data-language-label":"jsx",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// components/TodoList.jsx"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './TodoList.telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" TodoList"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  /** "}),n(e.span,{style:{color:"#D73A49","--shiki-light-font-style":"inherit","--shiki-dark":"#C678DD","--shiki-dark-font-style":"italic"},children:"@param"}),n(e.span,{style:{color:"#6F42C1","--shiki-light-font-style":"inherit","--shiki-dark":"#E5C07B","--shiki-dark-font-style":"italic"},children:" {string}"}),n(e.span,{style:{color:"#24292E","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:" text"}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" */"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" todos"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"html","data-language-label":"html",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- src/routes/TodoList.svelte -->"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"<!-- Environment: client -->"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"<"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"script"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './TodoList.telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"/** @param {string} text */"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" todos"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"</"}),n(e.span,{style:{color:"#22863A","--shiki-dark":"#E06C75"},children:"script"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:">"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.p,{children:"Telefunc uses a lightweight HTTP client combined with powerful middleware to route telefunction calls and process payloads."}),`
`,n(e.h2,{id:"telefunc-request-context",className:"scroll-mt-24",children:"(Telefunc) Request Context"}),`
`,i(e.p,{children:["Telefunc creates a context for each request that you can access from telefunctions with ",n(e.code,{children:"getContext()"}),"."]}),`
`,i(e.p,{children:[n(e.em,{children:"Context is not populated by default."})," Add arbitrary values, including from server context, to the ",n(e.code,{children:"context"})," object in the ",n(e.code,{children:"telefunc"})," middleware call."]}),`
`,n(c,{children:n(e.p,{children:"The following example uses Hono, but the same pattern applies for all framework integrations."})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'hono'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // Data added here is available in all telefunctions"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"      headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"raw"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"      user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getUser"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(),"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["Properties added to Telefunc context are returned type-safely from ",n(e.code,{children:"getContext()"}),"."]}),`
`,n(c,{type:"warning",children:n(e.p,{children:"Telefunc context is only available server-side."})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onLoad"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"() {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" todos"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" db"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"execute"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:`    'SELECT id, text FROM todos WHERE author_id = ":authorId"'`}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"authorId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    todos"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    userName"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"name"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"ssr",className:"scroll-mt-24",children:"SSR"}),`
`,n(e.p,{children:"Telefunc is compatible with most SSR solutions, with a few nuances."}),`
`,n(e.h3,{id:"initial-data-for-ssr",className:"scroll-mt-24",children:"Initial data for SSR"}),`
`,n(e.p,{children:"To fetch data for the first (server-side) page render, use your framework's built-in data fetching mechanism instead of Telefunc."}),`
`,n(e.p,{children:"You can still use Telefunc to fetch or mutate data client-side (e.g., for page navigation or infinite scroll)."}),`
`,n(c,{children:n(e.p,{children:"All SSR frameworks pass hydration data from server to client. Telefunc shouldn't intercept or modify this data, so it can't be used for initial page hydration."})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/getContext",children:n("code",{children:"getContext()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/telefunc",children:n("code",{children:"telefunc()"})}),`
`]}),`
`]})]})}function Jn(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(se,{...s})}):se(s)}const Zn=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"}));function le(s){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Using Telefunc with ",n(e.a,{href:"https://reactnative.dev",children:"React Native"}),"."]}),`
`,n(e.h1,{id:"wip",className:"scroll-mt-24",children:"[WIP]"}),`
`,n(e.h3,{id:"next",className:"scroll-mt-24",children:"Next"}),`
`,n(l,{href:"/start#my-first-telefunction"}),`
`,n(e.h2,{id:"examples",className:"scroll-mt-24",children:"Examples"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{path:"/examples/react-native"}),`
`]}),`
`]})]})}function ei(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(le,{...s})}):le(s)}const ni=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"}));function re({repo:s,timestamp:e}){if(!s||s.split("/").length!==2)throw new Error("Invalid repo");return a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"font-bold font-mono mr-0.5 bg-white",children:e}),a.jsxs("a",{href:"https://github.com/"+s,target:"_blank",rel:"noopener",children:["GitHub > ",a.jsx("code",{children:s})]})]})}function ae(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Using Telefunc with ",n(e.a,{href:"https://reactrouter.com",children:"React Router"}),"."]}),`
`,n(e.h2,{id:"1-install-telefunc",className:"scroll-mt-24",children:"1. Install Telefunc"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"bash","data-language-label":"bash",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"npm"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" install"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" telefunc"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"2-plugin-to-vite",className:"scroll-mt-24",children:"2. Plugin to Vite"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// vite.config.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"reactRouter"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '@react-router/dev/vite'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:";"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/vite'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"defineConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'vite'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" defineConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  plugins"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": ["}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"reactRouter"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(), "}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()],"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"3-add-telefunc-middleware",className:"scroll-mt-24",children:"3. Add Telefunc middleware"}),`
`,i(e.p,{children:["The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see ",n(l,{href:"/getContext"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// src/routes/_telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:' "telefunc"'}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" action"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" ActionFunctionArgs"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"url"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:";"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" body"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"json"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"();"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    url"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" URL"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"url"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"pathname"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"JSON"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"stringify"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"),"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  });"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" JSON"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"parse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:");"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"next",className:"scroll-mt-24",children:"Next"}),`
`,n(l,{href:"/start#my-first-telefunction"}),`
`,n(e.h2,{id:"examples",className:"scroll-mt-24",children:"Examples"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(re,{timestamp:"09.2025",repo:"arnaudsm/telefunc-react-router-demo"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["with ",n(e.a,{href:"https://reactrouter.com",children:"React Router"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:[`
`,n(re,{timestamp:"06.2024",repo:"overshom/remix-telefunc-demo"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["with ",n(e.a,{href:"https://remix.run",children:"Remix"}),", (",n(e.a,{href:"https://remix.run/blog/merging-remix-and-react-router",children:"renamed to React Router"}),")"]}),`
`]}),`
`]}),`
`]})]})}function ii(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ae,{...s})}):ae(s)}const si=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));function te(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,n(c,{type:"warning",children:"This is a beta feature."}),`
`,i(e.p,{children:["If you use ",n(l,{href:"/telefuncFiles",children:n(e.code,{children:"config.telefuncFiles"})}),", then you also need to set ",n(e.code,{children:"config.root"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Your project's root directory"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"root"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" __dirname"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["The ",n(e.code,{children:"config.root"})," setting is only needed if you use ",n(l,{href:"/telefuncFiles",children:n(e.code,{children:"config.telefuncFiles"})}),"."]}),`
`,n(g,{}),`
`,n(e.h2,{id:"monorepo",className:"scroll-mt-24",children:"Monorepo"}),`
`,i(e.p,{children:["If you have a monorepo structure, then set ",n(e.code,{children:"config.root"})," to the root directory of your client-side (i.e. the root of Vite/Vike/Next.js/Nuxt/...). Don't set ",n(e.code,{children:"config.root"})," to the monorepo root, nor to the root directory of your server. (The ",n(e.code,{children:"config.root"})," setting enables Telefunc to match your ",n(e.code,{children:".telefunc.js"})," files/imports between the server-side and the client-side.)"]}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/telefuncFiles",children:n("code",{children:"telefuncFiles"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/how-it-works#transformer",children:"How it works > Transformer"}),`
`]}),`
`]})]})}function li(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(te,{...s})}):te(s)}const ri=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"}));function oe(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.p,{children:"Using Telefunc with standalone servers"}),`
`,n(e.h2,{id:"1-install",className:"scroll-mt-24",children:"1. Install"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"shell","data-language-label":"shell",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"npm"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" install"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" telefunc"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"2-add-telefunc-middleware",className:"scroll-mt-24",children:"2. Add Telefunc middleware"}),`
`,i(e.p,{children:["The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see ",n(l,{href:"/getContext"}),"."]}),`
`,i(e.p,{children:["You can add Telefunc to any server that uses the standard ",n(e.code,{children:"Request"})," object, including ",n(e.a,{href:"https://hono.dev",children:"Hono"}),", ",n(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",n(e.a,{href:"https://nitro.build",children:"Nitro"}),", ",n(e.a,{href:"https://nuxt.com",children:"Nuxt"}),", and ",n(e.a,{href:"https://svelte.dev/docs/kit",children:"SvelteKit"}),`.
See configuration guide for:`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/next",children:"Next.js"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/svelte-kit",children:"SvelteKit"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/vike",children:"Vike"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/nuxt",children:"Nuxt"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/react-router",children:"React Router"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/react-native",children:"React Native"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/bundler",children:"Custom bundler"}),`
`]}),`
`]}),`
`,i(e.p,{children:["You can also add Telefunc to servers that use the Node.js ",n(e.code,{children:"req"})," readable stream, like ",n(e.a,{href:"https://expressjs.com",children:"Express"})," or ",n(e.a,{href:"https://fastify.dev",children:"Fastify"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'hono'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"raw"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": { "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"      // You can add any arbitrary contextual information here"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    },"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" express"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'express'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" express"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"res"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    url"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"originalUrl"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    readable"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"["}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"] "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"||"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" ''"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"      // You can add any arbitrary contextual information here"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    },"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  res"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"send"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/getContext",children:n("code",{children:"getContext()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/telefunc",children:n("code",{children:"telefunc()"})}),`
`]}),`
`]})]})}function ai(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(oe,{...s})}):oe(s)}const ti=Object.freeze(Object.defineProperty({__proto__:null,default:ai},Symbol.toStringTag,{value:"Module"}));function ce(s){const e={br:"br",code:"code",p:"p",pre:"pre",span:"span",strong:"strong",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server",n(e.br,{}),`
`,n(e.strong,{children:"Type"}),": ",n(e.code,{children:"boolean | { dev?: boolean; prod?: boolean }{:ts}"}),n(e.br,{}),`
`,n(e.strong,{children:"Default"}),": ",n(e.code,{children:"{ dev: false, prod: true }{:ts}"})]}),`
`,i(e.p,{children:["Whether to generate ",n(l,{href:"/shield",children:n(e.code,{children:"shield()"})})," in development and/or when building for production."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Enable shield() generation during development"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shield"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"dev"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:"true"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(c,{type:"warning",children:i(e.p,{children:["Enabling ",n(e.code,{children:"shield()"})," generation during development can significantly slow down development speed. Depending on how large your app and how fast your computer is, the decreased development speed can range from unnoticeable to significant."]})}),`
`,n(g,{})]})}function oi(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ce,{...s})}):ce(s)}const ci=Object.freeze(Object.defineProperty({__proto__:null,default:oi},Symbol.toStringTag,{value:"Module"}));function de(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,i(e.p,{children:["Use ",n(e.code,{children:"shield()"})," to guarantee the type of telefunction arguments at ",n(e.strong,{children:"compile- and run-time"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// CreateTodo.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" t"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"type"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Shield will `throw Abort` if `text` is not type `string`"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"])"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ..."})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["Under the hood, ",n(e.code,{children:"shield()"})," uses ",n(l,{href:"/Abort"})," to reject invalid telefunction calls, and pass an error message to the client."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onSubmit"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  try"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" todos"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ..."})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"catch"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    console"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"error"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"//"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"automatic-from-typescript",className:"scroll-mt-24",children:"Automatic (from TypeScript)"}),`
`,i(e.p,{children:["If you use TypeScript, Telefunc automatically generates ",n(e.code,{children:"shield()"})," for each telefunction."]}),`
`,n(c,{type:"warning",children:i(e.p,{children:["Automatic ",n(e.code,{children:"shield()"})," generation only works for stacks that transpile server-side code (Next.js, Vite, Vike, SvelteKit, Nuxt, etc.)."]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// CreateTodo.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" // [!code --]"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" t"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"type"}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:" // [!code --]"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"]) "}),n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// [!code --]"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewTodo"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // `text` is guaranteed to be a `string`"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["By default, Telefunc only generates ",n(e.code,{children:"shield()"})," guards when you build for production. This improves local development speed. You can opt-in to ",n(e.code,{children:"shield()"})," generation in development, see ",n(l,{href:"/shield-config"}),"."]}),`
`,n(e.h2,{id:"manual",className:"scroll-mt-24",children:"Manual"}),`
`,i(e.p,{children:["You need to define ",n(e.code,{children:"shield()"})," manually when using stacks that don't transpile server-side code (e.g. React Native or Parcel)."]}),`
`,n(e.p,{children:"In this case, wrap your telefunction to avoid defining type arguments twice:"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" onNewTodo"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"],"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // ✅ TypeScript knows that `text` is type `string`"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"type-examples",className:"scroll-mt-24",children:"Type examples"}),`
`,i(e.p,{children:["Examples showcasing the most common ",n(e.code,{children:"shield()"})," types:"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// TodoList.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" t"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"type"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onTextChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"number"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"])"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onTextChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"text"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // typeof id === 'number'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // typeof text === 'string'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onCompletedToggle"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", [{ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"number"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"isCompleted"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"boolean"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }])"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onCompletedToggle"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"id"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"isCompleted"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }) {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // typeof id === 'number'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // typeof isCompleted === 'boolean'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onTagListChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"array"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")])"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onTagListChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"tagList"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // tagList.every(tagName => typeof tagName === 'string')"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onNewMilestone"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", [{"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  name"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  deadline"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"nullable"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"date"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"),"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  ownerId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"optional"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"number"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}])"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onNewMilestone"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"name"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"deadline"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"ownerId"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }) {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // typeof name === 'string'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // deadline === null || deadline.constructor === Date"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // ownerId === undefined || typeof ownerId === 'number'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"shield"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"onStatusChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"or"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'DONE'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"),"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'PROGRESS'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"),"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  t"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'POSTPONED'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")])"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onStatusChange"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // status === 'DONE' || status === 'PROGRESS' || status === 'POSTPONED'"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"all-types",className:"scroll-mt-24",children:"All types"}),`
`,i(e.p,{children:["List of ",n(e.code,{children:"shield()"})," types:"]}),`
`,i(e.p,{children:[n(e.code,{children:"const t = shield.type"}),` | TypeScript | JavaScript
-|-|-
`,n(e.code,{children:"t.string"})," | ",n(e.code,{children:"string"})," | ",n(e.code,{children:"typeof value === 'string'"}),`
`,n(e.code,{children:"t.number"})," | ",n(e.code,{children:"number"})," | ",n(e.code,{children:"typeof value === 'number'"}),`
`,n(e.code,{children:"t.boolean"})," | ",n(e.code,{children:"boolean"})," | ",n("code",{children:"value === true || value === false"}),`
`,n(e.code,{children:"t.date"})," | ",n(e.code,{children:"Date"})," | ",n(e.code,{children:"value.constructor === Date"}),`
`,n(e.code,{children:"t.array(T)"})," | ",n(e.code,{children:"T[]"})," | ",n(e.code,{children:"value.every(element => isT(element))"}),`
`,n(e.code,{children:"t.object(T)"})," | ",n(e.code,{children:"Record<string, T>"})," | ",n(e.code,{children:"Object.values(value).every(v => isT(v))"}),`
`,n(e.code,{children:"{ k1: T1, k2: T2, ... }"})," | ",n("code",{children:"{ k1: T1, k2: T2, ... }"})," | ",n("code",{children:"isT1(value.k1) && isT2(value.k2) && ..."}),`
`,n(e.code,{children:"t.or(T1, T2, ...)"})," | ",n("code",{children:"T1 | T2 | ..."})," | ",n("code",{children:"isT1(value) || isT2(value) || ..."}),`
`,n(e.code,{children:"t.tuple(T1, T2, ...)"})," | ",n(e.code,{children:"[T1, T2, ...]"})," | ",n(e.code,{children:"isT1(value[0]) && isT2(value[1]) && ..."}),`
`,n(e.code,{children:"t.const(val)"})," | ",n(e.code,{children:"val as const"})," | ",n(e.code,{children:"value === val"}),`
`,n(e.code,{children:"t.optional(T)"})," | ",n("code",{children:"T | undefined"})," | ",n("code",{children:"isT(value) || value === undefined"}),`
`,n(e.code,{children:"t.nullable(T)"})," | ",n("code",{children:"T | null"})," | ",n("code",{children:"isT(value) || value === null"}),`
`,n(e.code,{children:"t.any"})," | ",n(e.code,{children:"any"})," | ",n(e.code,{children:"true"})]}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/Abort",children:n("code",{children:"throw Abort()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/error-handling",children:"Error Handling"}),`
`]}),`
`]})]})}function di(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(de,{...s})}):de(s)}const hi=Object.freeze(Object.defineProperty({__proto__:null,default:di},Symbol.toStringTag,{value:"Module"}));function he(s){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Using Telefunc with ",n(e.a,{href:"https://svelte.dev/docs/kit",children:"SvelteKit"}),"."]}),`
`,n(e.h2,{id:"1-install-telefunc",className:"scroll-mt-24",children:"1. Install Telefunc"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"bash","data-language-label":"bash",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"npm"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" install"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" telefunc"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"2-plugin-to-vite",className:"scroll-mt-24",children:"2. Plugin to Vite"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// vite.config.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"sveltekit"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '@sveltejs/kit/vite'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/vite'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"defineConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'vite'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" defineConfig"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  plugins"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": ["}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"sveltekit"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(), "}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()],"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"3-add-telefunc-middleware",className:"scroll-mt-24",children:"3. Add Telefunc middleware"}),`
`,i(e.p,{children:["The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see ",n(l,{href:"/getContext"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// src/routes/_telefunc/+server.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" type"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"RequestHandler"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" './$types'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" handler"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" RequestHandler"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"event"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"event"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }),"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"handler"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" as"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" GET"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"handler"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" as"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" POST"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"4-initial-data",className:"scroll-mt-24",children:"4. Initial data"}),`
`,i(e.p,{children:["Telefunc ",n(l,{href:"/initial-data",children:"can't write to the initial data load"}),", but can be used for any requests (e.g., for pagination or infinite scroll) after the first render."]}),`
`,i(e.p,{children:["Use Next.js Server Components to fetch initial data directly from a database, see ",n(e.a,{href:"https://svelte.dev/docs/kit/load#Universal-vs-server",children:"SvelteKit Docs > Loading data > Universal vs server"}),"."]}),`
`,n(e.h2,{id:"next",className:"scroll-mt-24",children:"Next"}),`
`,n(l,{href:"/start#my-first-telefunction"}),`
`,n(e.h2,{id:"examples",className:"scroll-mt-24",children:"Examples"}),`
`,n(l,{path:"https://github.com/telefunc/telefunc/blob/main/examples/svelte-kit"})]})}function ki(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(he,{...s})}):he(s)}const pi=Object.freeze(Object.defineProperty({__proto__:null,default:ki},Symbol.toStringTag,{value:"Module"}));function ke(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,n(c,{type:"warning",children:"This is a beta feature."}),`
`,i(e.p,{children:["If you don't use Telefunc's transformer on your server-side (see ",n(l,{href:"/how-it-works#transformer"}),") then you need to provide the list of your ",n(e.code,{children:".telefunc.js"})," files to Telefunc."]}),`
`,n(e.p,{children:"You do so by using:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"config.telefuncFiles"})}),`
`,i(e.li,{children:[`
`,n(l,{href:"/root",children:n(e.code,{children:"config.root"})}),`
`]}),`
`]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// List of telefunc files"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncFiles"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ["}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"require"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"resolve"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'./hello.telefunc.mjs'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")]"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// The root directory of the project"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"root"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" __dirname"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["See also ",n(l,{href:"/root",children:n(e.code,{children:"config.root"})}),"."]}),`
`,n(g,{}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/root",children:n("code",{children:"root"})}),`
`]}),`
`,i(e.li,{children:[`
`,i(l,{href:"/root#monorepo",children:[n("code",{children:"root"})," > Monorepo"]}),`
`]}),`
`]})]})}function yi(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ke,{...s})}):ke(s)}const ui=Object.freeze(Object.defineProperty({__proto__:null,default:yi},Symbol.toStringTag,{value:"Module"}));function pe(s){const e={code:"code",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server, client.",n("br",{})]}),`
`,i(e.p,{children:["By default, Telefunc uses the URL pathname ",n(e.code,{children:"/_telefunc"})," to communicate between client and server."]}),`
`,i(e.p,{children:["You can use ",n(e.code,{children:"config.telefuncUrl"})," to change that URL."]}),`
`,n(e.h2,{id:"basic-usage",className:"scroll-mt-24",children:"Basic usage"}),`
`,n(e.p,{children:"You always need to set the value twice: on the server- and client-side."}),`
`,n(e.p,{children:"On the server-side:"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncUrl"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/api/_telefunc'"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(g,{}),`
`,n(e.p,{children:"On the client-side:"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncUrl"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/api/_telefunc'"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(_,{}),`
`,n(e.h2,{id:"different-domain",className:"scroll-mt-24",children:"Different domain"}),`
`,n(e.p,{children:"If you deploy your frontend and backend at different domain names, then do the following."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: client"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/client'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// The client-side value can be:"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// - a URL pathname (such as '/_telefunc')"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// - a URL with origin (such as 'https://example.org/api/_telefunc')"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// - an IP address (such as '192.158.1.38')"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncUrl"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'https://example.org/api/_telefunc'"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// The server-side value always needs to be a URL pathname (such as '/_telefunc')"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"config"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefuncUrl"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '/api/_telefunc'"})]}),`
`,n(e.span,{className:"line"})]})})]})}function fi(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(pe,{...s})}):pe(s)}const mi=Object.freeze(Object.defineProperty({__proto__:null,default:fi},Symbol.toStringTag,{value:"Module"}));function ye(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,i(e.p,{children:[n(e.code,{children:"telefunc()"})," acts as an adapter between your server and telefunctions. It intercepts and executes telefunction calls, and returns the result (if any)."]}),`
`,n(c,{children:n(e.p,{children:"It's a pure function (no side effects)."})}),`
`,i(e.p,{children:["To add Telefunc to your server, ",n(l,{href:"/server-integration",children:"create middleware"})," that calls ",n(e.code,{children:"telefunc(req)"}),"."]}),`
`,i(e.p,{children:["By default, ",n(e.code,{children:"telefunc"})," accepts the ",i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",children:["web standard ",n(e.code,{children:"Request"})," object"]}),":"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Add Telefunc middleware to server (Hono/Fastify/Express.js/...)"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"use"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"req"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"res"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#E5C07B"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"  res"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"send"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"response",className:"scroll-mt-24",children:"Response"}),`
`,i(e.p,{children:["The return value ",n(e.code,{children:"httpResponse"})," is a plain JavaScript object with all the information needed to generate the HTTP response, for exampe using the ",i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",children:["web standard ",n(e.code,{children:"Response"})," object"]}),":"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" response"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": { "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"populating-telefunction-context",className:"scroll-mt-24",children:"Populating telefunction Context"}),`
`,i(e.p,{children:["You can optionally set values in the telefunction ",n(e.code,{children:"Context"})," so that you can later access them from telefunctions with ",n(l,{href:"/getContext",children:n("code",{children:"getContext()"})}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Required"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Optional"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    /* Some context */"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.p,{children:["This is your opportunity to pass any data from you server ",n(e.code,{children:"Context"}),", e.g., session or other auth records."]}),`
`,i(e.h2,{id:"with-node-req",className:"scroll-mt-24",children:["With Node ",n(e.code,{children:"req"})]}),`
`,i(e.p,{children:["You can also add Telefunc to servers that use the ",i(e.a,{href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage",children:["Node.js ",n(e.code,{children:"req"})," readable stream"]}),":"]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Required"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  url"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"originalUrl"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"method"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  readable"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"["}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"] "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"||"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" ''"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Optional"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  context"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    /* Some context */"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/error-handling",children:"Error Handling"}),`
`]}),`
`]})]})}function Bi(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ye,{...s})}):ye(s)}const gi=Object.freeze(Object.defineProperty({__proto__:null,default:Bi},Symbol.toStringTag,{value:"Module"}));function ue(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:[n(e.strong,{children:"Environment"}),": server."]}),`
`,i(e.p,{children:["Use ",n(e.code,{children:"throw Abort()"})," to implement ",n(l,{href:"/permissions",children:"permissions and other guards"}),"."]}),`
`,i(e.p,{children:["Telefunc uses ",n(e.code,{children:"Abort"})," to distinguish ",n(e.strong,{children:"expected failures"})," from bugs (errors in code, logic, data, etc.)."]}),`
`,i(c,{type:"warning",children:[i(e.p,{children:["Note that using ",n(e.code,{children:"throw Abort()"}),":"]}),i(e.ul,{children:[`
`,i(e.li,{children:["❌ Does not trigger ",n(l,{href:"/onBug"})]}),`
`,i(e.li,{children:["✅ Triggers ",n(l,{href:"/onAbort"})," on the client"]}),`
`,n(e.li,{children:"✅ Error data is passed to client"}),`
`,n(e.li,{children:"❌ Is not logged on the server"}),`
`]})]}),`
`,n(e.h2,{id:"rejecting-bad-requests",className:"scroll-mt-24",children:"Rejecting bad requests"}),`
`,i(e.p,{children:["In other words, use ",n(e.code,{children:"throw Abort"})," to implement permissions and other control flows. When returning an error message for the client to display, returning early is recommended instead. For more, see ",n(l,{href:"/error-handling"}),"."]}),`
`,i(e.p,{children:["In the following example, unauthenticated calls are rejected with ",n(e.code,{children:"throw Abort()"}),". The request bypasses ",n(e.code,{children:"onBug()"}),", and is returned with a status code ",n(e.code,{children:"403"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"js","data-language-label":"js",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// hello.telefunc.js"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" "})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" hello"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"name"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"="}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" getContext"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"    // We expect clients will sometimes make unauthed requests"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    throw"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Abort"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"code"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'unauthenticated'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Typo => syntax error => it should be `name` instead of `namee`"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'Hello '"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" +"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" namee"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,i(e.h2,{id:"accessing-abortvalue",className:"scroll-mt-24",children:["Accessing ",n(e.code,{children:"abortValue"})]}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Abort"})," error data can be accessed client-side from the ",n(l,{href:"/onAbort"})," hook."]}),`
`,i(e.p,{children:["This pattern is powerful when used in combination with ",n(l,{href:"/permissions#dry-permissions",doNotInferSectionTitle:!0})," helpers."]}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/onAbort",children:n("code",{children:"onAbort()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/permissions",children:"Permissions"}),`
`]}),`
`]})]})}function Ei(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(ue,{...s})}):ue(s)}const Ai=Object.freeze(Object.defineProperty({__proto__:null,default:Ei},Symbol.toStringTag,{value:"Module"}));function fe(s){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.p,{children:"When a user enters a form with invalid inputs, such as an invalid email address, then you want your UI to tell the user what went wrong."}),`
`,n(e.p,{children:"Simply return early with an error result, including any message the UI should display to the user."}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// SignUpForm.telefunc.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" async"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" function"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" onFormSubmit"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"email"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"password"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#ABB2BF"},children:":"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" string"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // Form validation"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" inputErrors"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {}"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"email"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    inputErrors"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"email"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'Please enter your email.'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"else"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"email"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"includes"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'@'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")) {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    inputErrors"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"email"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'Invalid email; make sure to enter a valid email.'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:"!"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"password"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    inputErrors"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"password"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'Please enter a password.'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"else"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"password"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E06C75"},children:"length"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" <"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:" 8"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"    inputErrors"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"password"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'Password must have at least 8 characters.'"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  if"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"Object"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"keys"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"inputErrors"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:")."}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E06C75"},children:"length"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" >"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#D19A66"},children:" 0"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"    return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"inputErrors"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  }"})}),`
`,n(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"  // IRL we'd want to hash the password first"})}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" user"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:" db"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"execute"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"    'INSERT INTO todos VALUES (:email, :password)'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"    { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"email"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"password"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  )"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"user"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" }"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(c,{children:i(e.p,{children:["You can also exit early and return error data with ",n(e.code,{children:"throw Abort(errorData)"})," instead of ",n(e.code,{children:"return errorData"}),". This hides the control flow though, and prevents Telefunc from distinguishing between app errors and request errors. See ",n(l,{href:"/error-handling"}),"."]})}),`
`,n(e.h2,{id:"see-also",className:"scroll-mt-24",children:"See also"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{href:"/onAbort",children:n("code",{children:"onAbort()"})}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{href:"/onBug",children:n("code",{children:"onBug()"})}),`
`]}),`
`]})]})}function Ci(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(fe,{...s})}):fe(s)}const Fi=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"}));function me(s){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return i(a.Fragment,{children:[i(e.p,{children:["Using Telefunc with ",n(e.a,{href:"https://vike.dev/",children:"Vike"}),"."]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"server integration"}),`
`]}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["Use ",n(e.a,{href:"https://vike.dev/new",children:"vike.dev/new"})," to scaffold a new Vike app that uses Telefunc."]}),`
`]}),`
`,n(e.h2,{id:"1-install-telefunc",className:"scroll-mt-24",children:"1. Install Telefunc"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"bash","data-language-label":"bash",children:i(e.code,{children:[i(e.span,{className:"line",children:[n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"npm"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" install"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" telefunc"})]}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"2-plugin-to-vite",className:"scroll-mt-24",children:"2. Plugin to Vite"}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// vite.config.ts"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" react"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" '@vitejs/plugin-react'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" vike"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'vike/plugin'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:" telefunc"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc/vite'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"export"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" default"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"  plugins"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": ["}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"react"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(), "}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"vike"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"(), "}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()],"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"}"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"3-add-telefunc-middleware",className:"scroll-mt-24",children:"3. Add Telefunc middleware"}),`
`,i(e.p,{children:["The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see ",n(l,{href:"/getContext"}),"."]}),`
`,n(e.pre,{className:"shiki shiki-themes github-light one-dark-pro",style:{backgroundColor:"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabIndex:"0",className:"shiki shiki-themes github-light one-dark-pro doc-code-pre","data-language":"ts","data-language-label":"ts",children:i(e.code,{children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// server.ts"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"},children:"// Environment: server"})}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'hono'"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"import"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" { "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" } "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"from"}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:" 'telefunc'"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" app"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Hono"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"()"})]}),`
`,n(e.span,{className:"line"}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"app"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:"all"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'/_telefunc'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"async"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" ("}),n(e.span,{style:{color:"#E36209","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:") "}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"=>"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  const"}),n(e.span,{style:{color:"#005CC5","--shiki-dark":"#E5C07B"},children:" httpResponse"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#56B6C2"},children:" ="}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" await"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" telefunc"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"({ "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"request"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"c"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"req"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"raw"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" })"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:"  return"}),n(e.span,{style:{color:"#D73A49","--shiki-dark":"#C678DD"},children:" new"}),n(e.span,{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"},children:" Response"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"("}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"body"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:", {"})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    status"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"statusCode"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:","})]}),`
`,i(e.span,{className:"line",children:[n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"    headers"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": { "}),n(e.span,{style:{color:"#032F62","--shiki-dark":"#98C379"},children:"'content-type'"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:": "}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E5C07B"},children:"httpResponse"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"."}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#E06C75"},children:"contentType"}),n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:" },"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"  })"})}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#24292E","--shiki-dark":"#ABB2BF"},children:"})"})}),`
`,n(e.span,{className:"line"})]})}),`
`,n(e.h2,{id:"4-initial-data",className:"scroll-mt-24",children:"4. Initial data"}),`
`,i(e.p,{children:["Telefunc ",n(l,{href:"/initial-data",children:"can't write to the initial data load"}),", but can be used for any requests (e.g., for pagination or infinite scroll) after the first render."]}),`
`,i(e.p,{children:["Use Next.js Server Components to fetch initial data directly from a database, see ",n(e.a,{href:"https://vike.dev/data-fetching",children:"vike.dev > Data Fetching"}),"."]}),`
`,n(e.h2,{id:"next",className:"scroll-mt-24",children:"Next"}),`
`,n(l,{href:"/start#my-first-telefunction"}),`
`,n(e.h2,{id:"examples",className:"scroll-mt-24",children:"Examples"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(l,{path:"https://github.com/telefunc/telefunc/blob/main/examples/vike"}),`
`]}),`
`,i(e.li,{children:[`
`,n(l,{path:"https://github.com/telefunc/telefunc/blob/main/examples/react-streaming"}),`
`]}),`
`]})]})}function Di(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(me,{...s})}):me(s)}const bi=Object.freeze(Object.defineProperty({__proto__:null,default:Di},Symbol.toStringTag,{value:"Module"}));function Be(s){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s.components};return i(a.Fragment,{children:[n(e.h2,{id:"schemaless-vs-schema-full",className:"scroll-mt-24",children:"Schemaless vs schema-full"}),`
`,n(e.p,{children:"Comparing RPC to GraphQL or REST is a bit like comparing apples to oranges. They each make trade-offs to achieve different goals."}),`
`,n(e.p,{children:`| RPC                                       | REST + GraphQL               |
| ----------------------------------------- | ---------------------------- |
| Full-stack: client calls server functions | Separate front- and back-end |
| Request tailored to caller's needs        | Consumer-agnostic            |`}),`
`,n(e.p,{children:"REST and GraphQL establish stable (but rigid) long-term data contracts. This makes it easier for third-parties to predictably consume your API, but gets in the way of prototyping, and forces the server to respond generically to clients."}),`
`,n(c,{children:i(e.p,{children:["A schema-full approach works best if you ",n(e.strong,{children:"must fulfill a maximum number of data requirements"}),", or want to allow other apps to be built on your data."]})}),`
`,n(e.p,{children:"RPC creates unique data contracts between specific pieces of UI and the server-side logic they call. This  allows components to invoke server-side logic as if it was local."}),`
`,n(e.h2,{id:"rpc",className:"scroll-mt-24",children:"RPC"}),`
`,i(e.blockquote,{children:[`
`,i(e.p,{children:["A ",n(e.a,{href:"https://en.wikipedia.org/wiki/Remote_procedure_call",children:"remote procedure call"})," (RPC) is when a [...] computer programmer writes essentially the same code whether the subroutine is local to the executing program, or remote."]}),`
`]}),`
`,n(e.p,{children:"RPC is a pattern for calling a remote function as if it were colocated with the client. No adapters or injection needed."}),`
`,i(e.ol,{children:[`
`,n(e.li,{children:"Create named Telefunctions to call the database or do other backend work."}),`
`,i(e.li,{children:["Import and call the function from your frontend, passing any required arguments (e.g., ",n(e.code,{children:"await onNewTodo(text)"}),")."]}),`
`,n(e.li,{children:"Telefunc creates a lightweight HTTP client to call your Telefunction, which returns only what the caller needs."}),`
`]}),`
`,n(c,{children:i(e.p,{children:["The term RPC is often used loosely to denote RPC-like approaches, like creating JSON endpoints. ",n(e.em,{children:"RPC-like describes an API that is schemaless — in contrast to RESTful and GraphQL APIs that always have a schema."})]})}),`
`,n(e.h2,{id:"rpc-vs-graphql-rest",className:"scroll-mt-24",children:"RPC vs GraphQL/REST"}),`
`,i(e.blockquote,{children:[`
`,n(e.p,{children:"Premature optimization is the root of all evil."}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.em,{children:"Turing Award winner, Donal Knuth"})}),`
`]}),`
`]}),`
`,n(e.p,{children:"In most cases you can start with RPC, and switch to REST or GraphQL as needed."}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"RPC enables you to stay lean, iterating faster and pivoting more flexibly."}),`
`,n(e.li,{children:"Many apps will never need a public (or schema-full) API."}),`
`,n(e.li,{children:"RPC functions are just functions; migrating to REST or GraphQL is fairly straightforward."}),`
`]}),`
`,n(e.p,{children:"There's a simple litmus test for whether RPC is the right solution:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"If your goal is to enable third party developers to access your data, then you need a generic API and you'll have to use REST or GraphQL"}),`
`,n(e.li,{children:"If your goal is to seamlessly add data and interactivity to a front-end, then RPC can improve DX and enable security and performance optimizations."}),`
`]})]})}function Ni(s={}){const{wrapper:e}=s.components||{};return e?n(e,{...s,children:n(Be,{...s})}):Be(s)}const vi=Object.freeze(Object.defineProperty({__proto__:null,default:Ni},Symbol.toStringTag,{value:"Module"})),xi=`import { Alert, Link } from '@/components/index'

Telefunc unlocks a full-stack development pattern that allows you to colocate (and co-develop) highly-tailored server functions with client code.

Telefunctions are meant to be a seamless adapter between frontend and backend. They enable rapid and performant full-stack development when used as designed.

## Event-based architecture

Telefunction calls should always be triggered by some kind of event — typically a user action like a button click. Coupling telefunctions to individual interactions or pieces of UI allows you to tailor them to specific use-cases, keeping them slim, secure, and performant.

### Colocation

Colocating telefunctions with the component(s) that call them makes it simple to jump (or share types) between environments, while staying within the call scope.

Telefunctions can change as fast as your UI, so deploying frontend and backend at the same time also radically simplifies versioning.

### Naming convention

The naming convention (e.g., \`onSomeEvent\`) is meant to reinforce that telefunctions are event handlers. It also helps enforce coupling and prevent scope creep.

<Alert type="warning">
  By default, telfunction versioning is typically equivalent to project versioning. You will need a custom solution if you choose to use Telefunc with a monorepo.
</Alert>

You can opt-out at any time by setting <Link href="/disableNamingConvention"><code>config.disableNamingConvention</code></Link>, but we recommend having a clear reason for doing so.

### \`*.telefunc.js\` scope

\`*.telefunc.js\` files are a minimal adapter between the frontend and backend. They should only export functions.

<Alert>
  Exporting shared or similarly-scoped telefunctions from the same file can improve call performance with some bundlers.
  \`\`\`
  ├── Todos
    ├── AddTodo.tsx // imports 
    ├── todos.telefunc.ts // exports \`onAddTodo\` and \`onLoadTodoList\`
    ├── TodoList.tsx // imports 
    └── Todos.tsx
  \`\`\`
</Alert>

Non-function exports increase the chance of scope creep, 

\`\`\`ts
// NewsletterForm.telefunc.ts
// Environment: server
 
// ✅ Exporting a function
export async function onNewSubscription(email: string) {
  // ...
}
 
// ❌ Non-function export
export const isValidEmail = /^\\S+@\\S+\\.\\S+$/
\`\`\`

## Control flow

Telefunction calls should be invisible: the client calls (remote) logic, and gets back a \`Promise\` that either:
- Resolves to the telefunction's return value, or
- Is rejected with \`TelefunctionCallAbort\`.

#### Telefunction guards

<Alert type="warning">
  Telefunctions are public. Never take it for granted that calls originate from authenticated clients, or are properly formed.
</Alert>

Protect telefunctions by implementing reusable guard functions with \`getContext()\` and \`throw Abort()\`.

Telefunc's \`shield()\` enforces argument types at runtime, and enables type inference and intellisense. It is generated automatically if you're using TypeScript, but must be added manually to \`.js\` files.

#### Expected errors

Handle expected errors (e.g., \`"Email exists"\`) by early-returning an error code and/or message to the display to the user. For more info, see <Link href="/error-handling" />.

## Multiple clients

If your telefunctions are used by multiple clients, we recommend deploying one Telefunc server per client. This helps keep telefunctions slim, so you can get the most out of Telefunc.

<Alert>
  If clients need to share a resources, it _can_ make sense to make (slightly) more generic telefunctions.
</Alert>
`;function wi(s){return n(a.Fragment,{})}function Ti(s={}){return n(xi,{...s,children:n(wi,{...s})})}const _i=`import Link from '@/components/docs/Link'

Telefunc can be used in any JavaScript environment without using a transformer but, for improved convenience, we recommend using a transformer plugin if possible.

> Telefunc plugins transform \`*.telefunc.js\` browser-side imports into a thin HTTP client.

## Without transformer

\`\`\`ts
// TodoList.ts
// Environment: client

import { defineTelefunction } from 'telefunc/client'
import type { onNewTodo as onNewTodoType } from './TodoList.telefunc.ts'
const onNewTodo = defineTelefunction<typeof onNewTodoType>('TodoList.telefunc.ts', 'onNewTodo')

async function onClick(form) {
  const text = form.input.value
  // Exactly as usual, including TypeScript support
  await onNewTodo({ text })
}
\`\`\`

> This feature is not implemented yet, reach out on GitHub if you need this.

## Vite plugin

Telefunc's [Vite](https://vitejs.dev) plugin automatically adds Telefunc to Vite apps.

If you use Vite, you can transform \`*.telefunc.js\` files by using Telefunc's Vite plugin.

The plugin:
 - Transforms your \`.telefunc.js\` files, see <Link href="/how-it-works#transformer" />.
 - Automatically adds the <Link text="Telefunc Server Middleware" href="/telefunc" /> to Vite's development server as well as Vite's preview server.
 - Lazy-loads your \`.telefunc.js\` files for optimal development speed (aka on-demand compilation).

You can pass Telefunc server configurations to the Vite plugin:

\`\`\`ts
// vite.config.ts

import { telefunc } from 'telefunc/vite'
import { UserConfig } from 'vite'

export default {
  plugins: [telefunc()]
} satisfies UserConfig
\`\`\`

## Webpack plugin

The [webpack](https://webpack.js.org) plugin adds the <Link text="Telefunc Transformer" href="/how-it-works#transformer" /> to webpack apps, such as:
 - <Link href="/next" />
 - <Link href="/nuxt" />

If you use webpack, you can transform \`*.telefunc.js\` files by using the Telefunc's webpack plugin:

\`\`\`js
// webpack.config.js

module.exports = {
  module: {
    rules: [
     { test: /\\.telefunc\\./, use: 'telefunc/webpack/loader' }
    ]
  }
}
\`\`\`

## Babel plugin

Telefunc's [Babel](https://babeljs.io) plugin adds the <Link text="Telefunc Transformer" href="/how-it-works#transformer" /> to Babel apps, such as:
 - <Link href="/react-native" />
`;function Si(s){return n(a.Fragment,{})}function Li(s={}){return n(_i,{...s,children:n(Si,{...s})})}const ji=`import { Alert, Link } from '@/components/index'
import { CodeComparison } from './CodeComparison'

Telefunc is an RPC framework you can attach to your server. It **abstracts away the HTTP protocol**
so you can **couple code, not environments, and focus on developing.**

With Telefunc, you can type-safely call a named server-side function as if it was client-side.
For most use-cases it is **simpler, more flexible, and more performant** than REST or GraphQL.

\`\`\`tsx
// NewTodo.tsx
// Environment: client

import { onNewTodo } from './NewTodo.telefunc.ts'

async function onSubmit(event) {
  // ...
  const newTodoId = await onNewTodo(title, text)
}
\`\`\`

Type inference and autocompletion are automatic, and Telefunc handles the remote call for you.

## They're (remote) functions

The function you write is the function that gets called (on the server).
Just import and call telefunctions from your front-end. No need for an adapter, or "server only" flag.

Since telefunctions can be customized to a specific page, display component, or interaction, they:
- Can perform complex queries with a single round-trip,
- And only need to return what the calling UI needs.

<CodeComparison>
  \`\`\`ts ts-only
  // MarkAllDone.telefunc.ts
  // Environment: server

  import { getContext } from 'telefunc'

  async function onMarkAllDone() {
    const { user } = getContext()
    if (!getContext().user) {
      throw Abort()
    }

    await db.query(
      'UPDATE todo_items SET is_completed = TRUE WHERE userId = :userId;',
      { userId: user.id }
    )
  };
  \`\`\`
  \`\`\`tsx ts-only
  // MarkAllDone.tsx
  // Environment: client

  import { onMarkAllDone } from './MarkAllDone.telefunc.js'

  function MarkAllDone() {
    // () => Promise<void>
    const onClick = onMarkAllDone

    return (
      <button onClick={onClick}>
        Complete All
      </button>
    )
  }

  \`\`\`
</CodeComparison>

### Couple code, not environments

Telefunctions always run on the server, so you can safely access environment secrets and use server-side tools (like ORMs or database clients).

<Alert>
  For end-to-end type safety, use a TypeScript ORM or query builder (e.g. [Drizzle](https://orm.drizzle.team), [Kysely](https://github.com/koskimas/kysely), and [others](https://github.com/stars/brillout/lists/sql)).
</Alert>

To the consumer, these are all just functions, that do some async work: RPC abstracts away the request management.

<Alert>
  Operations like these are notoriously problematic with REST (often called the "N+1 problem"). With Telefunc, it's just SQL.
  Using database-native queries is always more powerful than REST or GraphQL.
</Alert>

## Full-stack design

Telefunc employs a full-stack pattern, and projects that combine front- and back-end in the same project will get the most out of the acceleration it has to offer.

\`\`\`
├── src
    ├── db // ORM, query builder, models, etc.
    ├── components
    │  ├── todos
    │  │  ├── AddTodo.tsx
    │  │  ├── MarkAllDone.tsx
    │  │  ├── todos.telefunc.ts
    │  │  ├── TodoList.tsx
    │  │  └── Todos.tsx
    │  ├── ...
    ├── server
    │  └── entry.ts // Attach \`telefunc\` to server
    ├── ...
\`\`\`

It allows you to colocate (and codevelop) highly-tailored server functions with client code.
You can write a telefunction for each view and interaction, just as if you were mutating data locally in-memory, but with all the power of a remote server.
`;function Ri(s){return n(a.Fragment,{})}function Ii(s={}){return n(ji,{...s,children:n(Ri,{...s})})}const Pi=`import { Alert, Link } from '@/components/index'
import ConfigWhereServer from '@/components/ConfigWhereServer.mdx'

**Environment**: server.

Opt out of the <Link href="/best-practices#naming-convention">naming convention for event-based telefunctions</Link> (removes all related warnings).

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

config.disableNamingConvention = true
\`\`\`

<Alert type="warning">
Opting out of the naming convention is perfectly fine, though we recommend having a clear reason for doing so.

We recommend reading <Link href="/best-practices" /> before opting out. It explains why event-based telefunctions lead to increased:
- Development speed
- Security
- Performance

[Feel free to reach out](https://github.com/telefunc/telefunc/issues/new) if you have questions.
</Alert>

<ConfigWhereServer />
`;function Mi(s){return n(a.Fragment,{})}function qi(s={}){return n(Pi,{...s,children:n(Mi,{...s})})}const Ui=`import { Alert, Link } from '@/components/index'

This page is about handling bugs, expected errors, and network errors.
 - To block unauthorized access, see: <Link href="/permissions" text="Permissions" />
 - To handle invalid telefunction arguments, see: <Link href="/validation" text="Validation" />
 - To install error tracking, see: <Link href="/onBug" text={(<code>onBug()</code>)} />

<Alert type="success">
  To prevent leaking sensitive information, Telefunc never forwards unexpected server errors to the client.
</Alert>

## Error flows

|                             | \`return someErrorData\` | \`throw Abort()\`  | \`throw Error()\`           |
| --------------------------- | ---------------------- | -----------------|-------------------------- |
| When to use                 | For expected failures  | For control flow | For **bugs**              |
| triggers \`onBug\` (server)   | ❌                      | ❌                | ✅                        |
| \`onAbort\` (client)          | ❌                      | ✅               | ❌                         |
| Passes error data to client | ✅                     | ✅               | ❌                         |
| Logged with \`console.error\` | ❌                      | ❌                | ✅                        |

### Security errors

<Link href="/Abort" /> is used to reject invalid requests (e.g., an unauthorized user or invalid arguments).

### App errors

To handle expected errors (e.g., \`"Email exists"\`) gracefully, just return early with an error message. Add a flag to easily discriminate the return type.

If a telefunction throws an uncaught exception, then <Link href="/onBug" /> is called. Catch the error and return early or \`throw Abort(errorData)\` to send information back to the client. To avoid leaking sensitive information, Telefunc doesn't send the original \`Error\` object to the frontend.

### Network errors

If the user's browser can't connect to your server, the error thrown client-side will include a boolean \`isConnectionError\` property.

## Client side handling

If \`throw Abort()\` interrupts a telefunction call, the abort data is returned to the client, and thrown as a \`new Error(abortData)\`. It can be accessed with the <Link href="/onAbort" /> hook, or caught and handled by your frontend:

\`\`\`html
<!-- index.html -->
<!-- Environment: client -->

<html>
  <body>
    <script type="module">
      import { hello } from './hello.telefunc.js'

      try {
        await hello('Eva')
        console.log("I'm never printed")
      } catch(err) {
        console.log(err.message) // Prints 'Internal Server Error'
        // E.g. show a popup "Something went wrong. Try again (later)."
        // ...
      }
    <\/script>
  </body>
</html>
\`\`\`

## Server side handling

You can also handle the thrown error at your Telefunc server middleware:

\`\`\`ts
// server.ts

import { telefunc } from 'telefunc'

// Add Telefunc middleware to server (Hono/Express.js/...)
app.all('/_telefunc', async (req: Request, res: Response) => {
  const httpResponse = await telefunc(/* ... */)
  // Telefunc exposes any error thrown by a telefunction at httpResponse.err
  if (httpResponse.err) {
    // Error handling
  }
})
\`\`\`

## See also

- <Link href="/Abort"><code>throw Abort()</code></Link>
- <Link href="/shield"><code>shield()</code></Link>
- <Link href="/telefunc"><code>telefunc()</code></Link>
`;function Oi(s){return n(a.Fragment,{})}function $i(s={}){return n(Ui,{...s,children:n(Oi,{...s})})}const zi=`import Link from '@/components/docs/Link'
import ConfigWhereClient from '@/components/ConfigWhereClient.mdx'

**Environment**: client.

You can specify the fetch function that Telefunc uses for making HTTP requests on the client side.

This is useful for customizing the request and response behavior.

\`\`\`ts
// Environment: client

import { config } from 'telefunc/client'
import { customFetch } from '../path/to/custom-fetch'

config.fetch = customFetch
\`\`\`

<ConfigWhereClient />

## See also

- <Link href="/httpHeaders"><code>httpHeaders</code></Link>
`;function Hi(s){return n(a.Fragment,{})}function Xi(s={}){return n(zi,{...s,children:n(Hi,{...s})})}const Wi=`import { Alert, Link } from '@/components/index'

Telefunc supports [\`File\`](https://developer.mozilla.org/en-US/docs/Web/API/File) and [\`Blob\`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) arguments — you can pass them to a telefunction just like any other argument. Any signature works: single file, multiple files, \`File[]\` arrays, mixed with other arguments — it's completely transparent.

> When a telefunction call contains files, Telefunc automatically switches from JSON to [\`multipart/form-data\`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

## Example

\`\`\`ts
// FileUpload.telefunc.ts
// Environment: server

import fs from 'node:fs'

export async function onUpload(file: File, description: string) {
  // Stream to disk — constant memory usage, no matter the file size
  const writable = fs.createWriteStream(\`./uploads/\${file.name}\`)
  for await (const chunk of file.stream()) {
    writable.write(chunk)
  }
  writable.end()

  console.log(\`Saved \${file.name} (\${file.size} bytes): \${description}\`)
}
\`\`\`

\`\`\`tsx
// FileUpload.tsx
// Environment: client

import { onUpload } from './FileUpload.telefunc'

function FileUpload() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const file = form.get('file') as File
        const description = form.get('description') as string
        await onUpload(file, description)
      }}
    >
      <input name="file" type="file" />
      <input name="description" type="text" placeholder="Description" />
      <button type="submit">Upload</button>
    </form>
  )
}
\`\`\`


## Reading strategies

Each file argument is a standard [\`File\`](https://developer.mozilla.org/en-US/docs/Web/API/File) / [\`Blob\`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object:

| Method | Memory usage | Use case |
|---|---|---|
| \`file.stream()\` | Low — chunk size<sup>(1)</sup> | Pipe to disk, S3, etc. |
| \`file.arrayBuffer()\` | High — file size<sup>(2)</sup> | Process in memory |
| \`file.text()\` | High — file size<sup>(2)</sup> | Read text content |

<div style={{fontSize: '0.94em', color: '#64748b'}}>
(1): Only a single file chunk at a time is loaded in memory. Thus, memory consumption is low and constant (the chunk size). Recommended if files are expected to be large.  
(2): The whole file is loaded in memory. For large files (e.g. a large videos) this leads to prohibitively high memory usage.
</div>

## Limitations

For best performance and efficiency, nothing is buffered internally — file bytes flow directly from the HTTP stream to your code. If you don't read a file argument, the file bytes never leave the sender (the user's browser).

This zero-buffering design comes with following inherent limitations.

### One-shot reads

Each file can only be read once — calling \`.stream()\`, \`.text()\`, or \`.arrayBuffer()\` a second time throws an error.

<Alert>
  The HTTP stream isn't buffered and can therefore only be consumed once.
</Alert>

If you need the data multiple times, buffer it into a variable first.

### Read in order

When a telefunction has multiple file arguments (e.g. \`file1\` and \`file2\`), they must be read in the order they appear in the function signature.

<Alert>
  **Reading out of order causes \`file1\` to be discarded (with a warning).**
  That's because all files share a single forward-only HTTP stream (reading \`file2\` before \`file1\` would require buffering \`file1\` in memory).
</Alert>

That said, you don't need to \`await\` each file before starting reading the next — you can kick off reads concurrently (e.g. \`Promise.all([file1.text(), file2.text()])\`) and they will be automatically streamed in the correct order.


\`\`\`js
// ✅ Works
await file1.text()
await file2.text()

// ❌ Doesn't work
await file2.text()
await file1.text()
\`\`\`
\`\`\`js
// ✅ Works
file1.text()
file2.text()

// ❌ Doesn't work
file2.text()
file1.text()
\`\`\`
\`\`\`js
// ✅ Works
await Promise.all([
  file1.text()
  file2.text()
])

// ❌ Doesn't work
await Promise.all([
  file2.text()
  file1.text()
])
\`\`\`
\`\`\`js
// ✅ Works
await Promise.all([
  file1.stream().pipeTo(..)
  file2.stream().pipeTo(..)
])

// ❌ Doesn't work
await Promise.all([
  file2.stream().pipeTo(..)
  file1.stream().pipeTo(..)
])
\`\`\`


## Server integration

Pass the [\`Request\`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object directly:

\`\`\`ts
const httpResponse = await telefunc({ request })
\`\`\`

Alternatively, with Express, Fastify, or any Node.js framework, you can pass the request as a [\`Readable\`](https://nodejs.org/api/stream.html#readable-streams) stream along with the \`Content-Type\` header:

\`\`\`ts
app.all('/_telefunc', async (req, res) => {
  const httpResponse = await telefunc({
    url: req.originalUrl,
    method: req.method,
    readable: req,
    contentType: req.headers['content-type'] || '',
  })
  res.status(httpResponse.statusCode).type(httpResponse.contentType).send(httpResponse.body)
})
\`\`\`


## How it works

<Alert>
  You can skip reading this section. Read this only if you're curious.
</Alert>

Telefunc uses a custom multipart stream parser — files are **not** buffered into memory on the server.

1. The client serializes the telefunction call into a \`multipart/form-data\` request. File/Blob arguments are replaced with placeholder descriptors and sent as separate binary parts.
2. On the server, Telefunc parses the metadata first, then creates lazy \`File\`/\`Blob\` objects that **reference the HTTP body stream** without reading it yet.
3. When your telefunction calls \`file.stream()\`, \`file.text()\`, or \`file.arrayBuffer()\`, the bytes are pulled directly from the HTTP stream on demand.

This means **file bytes only flow through memory when you read them** — and if you stream to disk, memory consumption is constant regardless of file size.

## See also

- <Link href="/telefunc"><code>telefunc()</code></Link>
`;function Vi(s){return n(a.Fragment,{})}function Yi(s={}){return n(Wi,{...s,children:n(Vi,{...s})})}const Gi=`import { Alert, Link } from '@/components/index'

**Environment**: server.

\`getContext()\` allows telefunctions to type-safely access the Telefunc request context.

<Alert type="warning">
    You must populate \`Telefunc.Context\` using the <Link href="/telefunc" /> before trying to access it with \`getContext()\`.
</Alert>

It's most commonly used for implementing permissions, see <Link href="/permissions" />.

\`\`\`ts
// TodoList.telefunc.ts
// Environment: server

import { Abort, getContext } from 'telefunc'

export async function onLoad() {
  const { userId } = getContext()
  if (!userId) {
    throw Abort()
  }
  
  // ...
}
\`\`\`

## Type safety

You can use a generic type argument to set the type locally...

\`\`\`ts ts-only
// *.telefunc.ts

import { getContext } from 'telefunc'

type UserContext = { user: string }

export async function someTelefunction() {
  // TypeScript knows that \`userId\` is a \`string\`
  const { userId } = getContext<UserContext>()
}
\`\`\`

...or declare the \`Telefunc.Context\` type globally.

\`\`\`ts ts-only
// TelefuncContext.d.ts

import 'telefunc'

declare module 'telefunc' {
  namespace Telefunc {
    interface Context {
      userId: null | string
    }
  }
}
\`\`\`

\`\`\`ts ts-only
// *.telefunc.ts

import { getContext } from 'telefunc'

export async function someTelefunction() {
  // TypeScript still knows that \`user.id\` is a \`string\`
  // const { userId } = getContext<UserContext>() // [!code --]
  const { userId } = getContext() // [!code ++]
}
\`\`\`

## Call order

Make sure to call \`getContext()\` before any \`await\` operators:

\`\`\`ts
// TodoList.telefunc.ts

export async function myTelefunction() {
  // ✅ Good: getContext() is called before \`await\`
  const context = getContext()
  await something()
}
\`\`\`

If you call \`getContext()\` called after an \`await\` operator...

\`\`\`ts
// TodoList.telefunc.ts

export async function myTelefunction() {
  await something()
  // ❌ Wrong: getContext() must be called before \`await something()\`
  const context = getContext()
}
\`\`\`

...you will see this error:

\`\`\`
[telefunc][Wrong Usage][getContext()] Cannot access context object, see https://telefunc.com/getContext#access
\`\`\`

## See also

- <Link href="/server-integration">Server Integration</Link>
- <Link href="/permissions">Permissions</Link>
`;function Ki(s){return n(a.Fragment,{})}function Qi(s={}){return n(Gi,{...s,children:n(Ki,{...s})})}const Ji=`import { Alert, CodeGroup, Link, Table } from '@/components/index'

# Telefunc docs maintainer guide

<Alert type="warning" heading="Content-only workflow">
  Work in the MDX content files under \`pages/(docs)/(content)/**\`. Reuse the components exported from \`@/components/index\` and avoid changing TSX, layout, routing, or theme files unless a developer explicitly asks for it.
</Alert>

## Where to edit

<Table data={{
  headers: ['Path', 'Purpose', 'Maintainer action'],
  rows: [
    ['pages/(docs)/(content)/<slug>/content.en.mdx', 'English source for one doc route', 'Write and update content'],
    ['pages/(docs)/(content)/<slug>/content.zh.mdx', 'Chinese translation for the same route', 'Keep localized content aligned when needed'],
    ['pages/(docs)/(content)/<slug>/content.config.ts', 'Shared per-document options such as tableOfContents', 'Only touch when the doc needs a TOC change'],
    ['lib/headings.ts', 'Doc metadata registry keyed by heading ids', 'Update titles, navTitle, excerpt, and docPath mappings'],
    ['lib/navigation/menuNavigation.ts', 'Sidebar groups and link order', 'Add, remove, or reorder links under the existing groups'],
    ['components/index.tsx', 'Whitelisted MDX component exports', 'Import only from here'],
    ['pages/+telefunc.ts', 'Global docs runtime settings', 'Read for context, but treat as developer-owned'],
    ['pages/(docs)/(config) and components/**', 'Rendered layout, routing, and shared UI', 'Do not edit for normal documentation work'],
  ]
}} />

<Alert type="info" heading="Rule of thumb">
  If the change is prose, examples, headings, links, screenshots, callouts, or tables, it belongs in MDX. If it changes routing, layout, styling, navigation wiring, or React code, hand it back to a developer.
</Alert>

## Working rules

- Every doc route lives in its own folder under \`pages/(docs)/(content)\`.
- The route slug comes from the folder path, so \`pages/(docs)/(content)/get-started/content.en.mdx\` becomes \`<Link href="/get-started">/get-started</Link>\`.
- English is the default locale. Non-default locale URLs are prefixed, for example \`/zh/get-started\`.
- Shared per-document settings belong in \`content.config.ts\` or \`content.config.js\`; do not create Vike \`+config.ts\` files next to MDX content.
- Search and table-of-contents data are extracted from raw MDX, so keep the top \`#\` heading, section headings, and link text accurate.

## Navigation and page metadata

Use \`lib/headings.ts\` when a doc needs metadata or label changes, and use \`lib/navigation/menuNavigation.ts\` when a doc needs to move within the sidebar.

<Table data={{
  headers: ['Field', 'Meaning', 'When to edit it'],
  rows: [
    ['docPath', 'The route slug for the document, for example \`get-started\` or \`telefunc-url\`', 'Set it to the doc folder path that the metadata entry belongs to'],
    ['title', 'The main page title for the document', 'Edit when the document title itself should change'],
    ['navTitle', 'An optional shorter or alternate label used in the sidebar instead of \`title\`', 'Edit when the full page title is too long or too technical for navigation'],
    ['excerpt', 'The short page description used for page metadata and doc summaries', 'Edit when the page description shown in metadata should change'],
  ]
}} />

<Alert type="info" heading="How \`navTitle\` works">
  If \`navTitle\` is omitted, the navigation uses \`title\`. Only add \`navTitle\` when the sidebar label should differ from the page heading.
</Alert>

\`\`\`ts
quickStart: {
  docPath: 'get-started',
  title: {
    en: 'Getting Started with Telefunc',
  },
  navTitle: {
    en: 'Get Started',
  },
  excerpt: {
    en: 'Setup, repo orientation, and the writing rules for this documentation.',
  },
}
\`\`\`

- Edit \`lib/headings.ts\` when the document name, short nav label, or description needs to change.
- Edit \`lib/navigation/menuNavigation.ts\` when a link should move to another section, appear in a different order, or be removed from the sidebar.
- Keep the keys aligned: the sidebar uses heading keys such as \`quickStart\`, which must exist in \`lib/headings.ts\`.

## How the menu builder works

\`lib/navigation/menuNavigation.ts\` defines the sidebar as data. The important part is the \`menuGroups\` array: each object becomes one sidebar section, and each item in its \`links\` array becomes either a doc link or a divider label.

<Table data={{
  headers: ['Part', 'Meaning', 'What the maintainer can change'],
  rows: [
    ['id', 'Stable id for the sidebar section', 'Usually leave it as-is unless a developer asks for a structural rename'],
    ['icon', 'Lucide icon shown for the section', 'Usually leave it alone'],
    ['groupKey', 'Translation key for the section title', 'Usually leave it alone unless the section title system changes'],
    ['links', 'Ordered list of heading keys and divider objects', 'This is the main place to edit the menu'],
    ['heading key', 'A string like \`quickStart\` or \`apiTelefunc\` that maps to \`lib/headings.ts\`', 'Add, remove, or reorder these to control doc links'],
    ['dividerText', 'A plain label inserted between link groups', 'Edit when you need sub-sections inside one sidebar group'],
  ]
}} />

<CodeGroup>
\`\`\`ts
const menuGroups = [
  {
    id: 'get-started',
    icon: Sprout,
    groupKey: 'getStarted',
    links: [
      'quickStart',
      'concepts',
      { dividerText: 'Guides' },
      'serverIntegration',
    ],
  },
]
\`\`\`

\`\`\`ts
quickStart: {
  docPath: 'get-started',
  title: {
    en: 'Quick Start',
  },
}
\`\`\`
</CodeGroup>

<Alert type="info" heading="How a link is built">
  A string in \`links\` is not the URL itself. It is a heading key. The builder passes that key to \`getHeadingData()\`, which reads \`lib/headings.ts\` and turns it into the localized sidebar label and href.
</Alert>

<Alert type="info" heading="Safe editing pattern">
  First create or update the metadata entry in <code>lib/headings.ts</code>, then add that key to the right <code>links</code> array in <code>lib/navigation/menuNavigation.ts</code>.
</Alert>

- To reorder the sidebar, move items up or down within a \`links\` array.
- To remove a doc from the sidebar, remove its heading key from \`links\`.
- To add a divider, insert \`{ dividerText: 'Your label' }\` where the break should appear.
- To add a new doc link, add the matching heading key after confirming that key exists in \`lib/headings.ts\`.
- Do not put raw URLs into \`links\`; always use heading keys so labels and localized paths stay in sync.

## Approved MDX components

Use this import at the top of a doc:

\`\`\`mdx
import { Alert, CodeGroup, Link, Table } from '@/components/index'
\`\`\`

<Table data={{
  headers: ['Component', 'Use it for', 'Example'],
  rows: [
    ['Alert', 'Notes, warnings, and important guidance', '<Alert type="warning" heading="Heads up">...</Alert>'],
    ['CodeGroup', 'Showing alternative snippets in one framed block', '<CodeGroup>{multiple fenced code blocks}</CodeGroup>'],
    ['Link', 'Internal or external links; internal links keep locale prefixes correct', '<Link href="/intro">Intro</Link>'],
    ['Table', 'Structured reference tables with headers and rows', '<Table data={{ headers: [...], rows: [...] }} />'],
  ]
}} />

## Starter snippets

<CodeGroup>
\`\`\`mdx
import { Alert, CodeGroup, Link, Table } from '@/components/index'
\`\`\`

\`\`\`mdx
<Alert type="info" heading="Internal links">
  Use <Link href="/intro">Link</Link> for links to docs pages so locale prefixes stay correct.
</Alert>
\`\`\`
</CodeGroup>

<Alert type="info" heading="When to ask a developer">
  Ask for developer help if you need a new route, a sidebar or navigation change, a new MDX component, a layout tweak, or any change inside \`components\`, \`pages/(docs)/(config)\`, \`lib\`, or the theme files.
</Alert>
`;function Zi(s){return n(a.Fragment,{})}function es(s={}){return n(Ji,{...s,children:n(Zi,{...s})})}const ns=`import { Alert, Link } from '@/components/index'

You can think of telefunction calls as a type-safe \`fetch\` call to a registered server-side function.
Under the hood, Telefunc converts telefunction calls into an HTTP request to your server.

Let's see what happens when a telefunction is called.

\`\`\`js
// hello.telefunc.js
// Environment: server

export { hello }

async function hello({ name }) {
  const message = 'Welcome ' + name
  return { message }
}
\`\`\`

\`\`\`js
// Environment: client

import { hello } from './hello.telefunc.js'

const { message } = await hello('Eva')
\`\`\`

The \`hello.telefunc.js\` file is never loaded in the browser: instead Telefunc transforms \`hello.telefunc.js\` into the following:

\`\`\`js
// hello.telefunc.js (after Telefunc transformation)
// Environment: Browser
import { __internal_makeHttpRequest } from 'telefunc/client'
export const hello = (...args) => __internal_makeHttpRequest('/hello.telefunc.js:hello', args)
\`\`\`

## Transformer

Telefunc uses plugins to transform \`.telefunc.js\` files for:

- The client-side, replacing \`.telefunc.js\` imports with a thin HTTP client.
- The server-side, for <Link href="/shield#automatic-from-typescript" text="automatic TypeScript runtime validation"  
doNotInferSectionTitle={true} />.

Telefunc plugins also automatically crawl your \`.telefunc.js\` files (so that you don't have to use <Link href="/telefuncFiles" text={(<code>config.telefuncFiles</code>)} />).

<Alert>
  There is work-in-progress to be able to use Telefunc without any transformer, see [#52](https://github.com/telefunc/telefunc/issues/52).
</Alert>

## Telefunction lifecycle

When \`hello('Eva')\` is called in the browser,
1. The HTTP client (\`__internal_makeHttpRequest\`) serializes the call and makes an HTTP request to the \`/_telefunc\` route on your server.
\`\`\`sh
POST /_telefunc HTTP/1.1
{
  "path": "/hello.telefunc.js:hello",
  "args": [{"name": "Eva"}]
}
\`\`\`
2. The <Link href="/telefunc" text={(<code>telefunc</code>)} /> middleware on your server intercepts the request, executes the telefunction call, and returns the (serialized) result.
\`\`\`sh
HTTP/1.1 200 OK
{
  "return": {
    "message": "Welcome Eva"
  }
}
\`\`\`
3. The HTTP client parses the response and type-safely returns the result, as though the control flow never left the browser.
`;function is(s){return n(a.Fragment,{})}function ss(s={}){return n(ns,{...s,children:n(is,{...s})})}const ls=`import Link from '@/components/docs/Link'
import ConfigWhereClient from '@/components/ConfigWhereClient.mdx'

**Environment**: client.

Send additional HTTP headers to be sent along Telefunc HTTP requests.

Usually used for sending authentication headers.

\`\`\`ts
// Environment: client

import { config } from 'telefunc/client'

config.httpHeaders = {
  Authorization: \`Bearer \${token}\`
}
\`\`\`

<ConfigWhereClient />


## See also

- <Link href="/fetch"><code>fetch()</code></Link>
- <Link href="/permissions">Permissions</Link>
- [#167 - Dynamic \`httpHeaders\`?](https://github.com/telefunc/telefunc/issues/167)
`;function rs(s){return n(a.Fragment,{})}function as(s={}){return n(ls,{...s,children:n(rs,{...s})})}const ts=`import Link from '@/components/docs/Link'

For fetching the initial data of pages (SSR data) use your framework's built-in data fetching mechanism instead of Telefunc. For more information, see:
- [Next.js Docs > Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [SvelteKit Docs > Loading data > Universal vs server](https://svelte.dev/docs/kit/load#Universal-vs-server)
- [vike.dev > Data Fetching](https://vike.dev/data-fetching)

You can still use Telefunc for fetching data but only after the initial rendering of the page, for example for pagination or infinite scroll.

> You cannot use Telefunc for server-side rendered (SSR) data because only the framework can pass SSR data from the server to the client-side (which is needed for hydration). This is common to all SSR frameworks.
`;function os(s){return n(a.Fragment,{})}function cs(s={}){return n(ts,{...s,children:n(os,{...s})})}const ds=`import Link from '@/components/docs/Link'
import ConfigWhereServer from '@/components/ConfigWhereServer.mdx'

**Environment**: server  
**Default**: \`{ shieldErrors: { dev: true, prod: false } }{:ts}\`

Whether to log shield validation errors.

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

config.log.shieldErrors = true
// Or
config.log.shieldErrors = { dev: true, prod: true }
\`\`\`

<ConfigWhereServer />
`;function hs(s){return n(a.Fragment,{})}function ks(s={}){return n(ds,{...s,children:n(hs,{...s})})}const ps=`import { Alert, Link } from '@/components/index'

Using Telefunc with [Next.js](https://nextjs.org).

## 1. Install

\`\`\`shell
npm install telefunc
\`\`\`

## 2. Next.js config

\`\`\`ts
// next.config.ts

import type { NextConfig } from 'next'
import withTelefunc from 'telefunc/next'

let nextConfig: NextConfig = {}
nextConfig = withTelefunc(nextConfig)

export default nextConfig
\`\`\`

## 3. Add Telefunc middleware

The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see <Link href="/getContext" />.

\`\`\`ts
// app/api/telefunc/route.ts
// Environment: server

import { telefunc, config } from 'telefunc'

config.telefuncUrl = '/api/telefunc'

async function handler(request: Request) {
  const httpResponse = await telefunc({
    request:{
      context: { /** */ }
    }
  })

  return new Response(httpResponse.body, {
    status: httpResponse.statusCode,
    headers: { 'content-type': httpResponse.contentType },
  })
}

export { handler as GET, handler as POST }
\`\`\`

## 4. Client config

Since the route handler is at \`/api/telefunc\` instead of the default \`/_telefunc\`, set the client-side URL using a \`'use client'\` provider:

\`\`\`tsx
// app/client-providers.tsx
// Environment: client

'use client'

import { config } from 'telefunc/client'

config.telefuncUrl = '/api/telefunc'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
\`\`\`

\`\`\`tsx
// app/layout.tsx

import { ClientProviders } from './client-providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
\`\`\`

## 5. Initial data

Telefunc <Link href="/initial-data">can't write to the initial data load</Link>, but can be used for any requests (e.g., for pagination or infinite scroll) after the first render.

Use Next.js Server Components to fetch initial data directly from a database, see [Next.js Docs > Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching).

## Example

- <Link path="https://github.com/telefunc/telefunc/blob/main/examples/next"><code>/examples/next</code></Link>
`;function ys(s){return n(a.Fragment,{})}function us(s={}){return n(ps,{...s,children:n(ys,{...s})})}const fs=`import Link from '@/components/docs/Link'

Using Telefunc with [Nuxt](https://nuxt.com/).

> Contribution welcome to [update the example to Nuxt 3](https://github.com/telefunc/telefunc/issues/153).

# [WIP]

## Next

<Link href="/start#my-first-telefunction" />

## Examples

 - [/examples/nuxt2](https://github.com/telefunc/telefunc/tree/513a21cdd7ef8780ce3f8ca98b182bf6989d3f14/examples/nuxt2)
`;function ms(s){return n(a.Fragment,{})}function Bs(s={}){return n(fs,{...s,children:n(ms,{...s})})}const gs=`import { Alert, Link } from '@/components/index'

**Environment**: client.

The client-side \`onAbort()\` hook is called whenever telefunction calls fail because of <Link text={<code>throw Abort()</code>} href="/Abort" />.

<Alert type="warning">
  It does **not** run when other errors are thrown, see <Link href="/error-handling" />.
</Alert>

\`onAbort\` gives you type-safe access to any data from \`throw Abort(errorData)\` on the client. It is designed to be used as part of Telefunc's DRY security pattern. For more, see <Link href="/permissions#dry-permissions" doNotInferSectionTitle={true} />.

Use the \`abortValue\` property to access the error data.

\`\`\`ts
// *.telefunc.ts
// Environment: server
import { abort, getContext } from 'telefunc'

export async function someTelefunction() {
  const { user } = getContext()
  if (!user) {
    throw Abort({ code: 'unauthenticated' })
  }
}
\`\`\`\`

\`\`\`ts
// onAbort.ts
// Environment: client

import { onAbort } from 'telefunc/client'

onAbort((error: TelefunctionCallAbort) => {
  if (error.isConnectionError) {
    // ...
  }
  
  if (error.abortValue.code === 'unauthenticated') {
    // Redirect user to login page
    window.location.href = '/login'
  }
  
  // ...
})
\`\`\`

## See also

 - <Link href="/permissions">Permissions</Link>
`;function Es(s){return n(a.Fragment,{})}function As(s={}){return n(gs,{...s,children:n(Es,{...s})})}const Cs=`import { Alert, Link } from '@/components/index'

**Environment**: server.

Unexpected errors trigger the server-side \`onBug()\` hook. These may be bugs in your telefunction, or in the Telefunc library.

<Alert type="warning">
    The \`onBug()\` hook is **not** called when <Link href="/Abort" /> is used, and **cannot** be used to implement control flow.
</Alert>

Use \`onBug()\` to integrate with logging and monitoring tools like [Sentry](https://sentry.io/), [Bugsnag](https://www.bugsnag.com/), or [Rollbar](https://rollbar.com/).

\`\`\`ts
import { onBug } from 'telefunc'

onBug((error) => {
  // type of error is \`unknown\`
  console.error(error)
  // ...
})
\`\`\`

## See also

- <Link href="/error-handling">Error Handling</Link>
`;function Fs(s){return n(a.Fragment,{})}function Ds(s={}){return n(Cs,{...s,children:n(Fs,{...s})})}const bs=`import Link from '@/components/docs/Link'

Always keep in mind that your **telefuncs are public**. A simple HTTP request could be used to extract, modify, or destroy user secrets or business-critical data from an unprotected function.

Add authorization checks to telefunctions using guard expressions in the function body.

## Abort requests

To reject a request for any reason, simply <Link href="/Abort" />. This is equivalent to a status code of \`403\`. Include error data like a code to trigger a redirect or a message to display to the user.

\`\`\`js
// TodoItem.telefunc.js
// Environment: server

import { getContext, Abort } from 'telefunc'

/**
 * @param {string} todoId
 * @param {string} text
 * @returns {Promise<{ todos: Todo[] }>}
 */
export async function onTextChange(todoId, text) {
  const { user } = getContext()
  if (!user) {
    // Code tells frontend to redirect to /login
    throw Abort({ code: 'unauthenticated' })
  }

  const todo = await db.query(
    'SELECT id, text FROM todos WHERE id = :id LIMIT 1',
    { id }
  )

  if (!todo) {
    // Technically 403, but can be used for any rejection
    throw Abort({ code: 'invalid_id' })
  }

  // Easily implement advanced permissions schemes
  if (todoItem.authorId !== user.id || !user.isAdmin) {
    throw Abort({ code: 'unauthorized' })
  }

  // ...

  return { todo }
}
\`\`\`

Use \`throw Abort()\` to when rejecting access to a resource, or if a telefunction call is otherwise invalid.

On the frontend, use the <Link href="/onAbort" /> hook to handle redirects.

\`\`\`js
// Environment: client
 
import { onAbort } from 'telefunc/client'
 
onAbort((err) => {
  if (err.abortValue.code === 'unauthorized') {
    // Redirect user to login page
    window.location.href = '/login'
  }
})
\`\`\`

## Early returns

Not every failed request is an error though. To bypass the \`onAbort\` control flow, return early with an error code or message.

We can update the previous example to use a \`code\` property instead of \`throw Abort()\` to trigger the redirect.

\`\`\`js
// TodoItem.telefunc.js
// Environment: server

import { getContext, Abort } from 'telefunc'

/**
 * @param {string} text
 * @returns {Promise<OnTextChangeResult>}
 */
export async function onNewTodo(text) {
  const { user } = getContext()
  if (!user) {
    // Code tells frontend to redirect to /login
    return { code: 'unauthenticated' } // [!code ++]
    throw Abort({ code: 'unauthenticated' }) // [!code --]
  }

  // ...

  return { todos }
}
\`\`\`

Use the error code or message property to discriminate the response type.

\`\`\`ts ts-only
type OnNewTodoResult = {
  code: 'unauthenticated' | 'unauthorized' | 'invalid_id'
} | {
  todos: Todo[]
  code?: undefined
}
\`\`\`

\`\`\`jsx
// TodoItem.jsx
// Environment: client

/** @param {string} text */
const onSubmit = async (text) => {
  const result = await onNewTodo(text)
  if (result.code) {
    // Error
  } else {
    // Ok
  }
}
\`\`\`

## DRY Permissions

To implement reusable permissions logic, define helper functions that call <Link href="/getContext" text={(<code>getContext()</code>)}/>.

\`\`\`ts
// auth/getUser.ts
// Environment: server

import { getContext, Abort } from 'telefunc'

export function getUser() {
  const { user } = getContext()
  if (!user) {
    throw Abort({ code: 'unauthenticated' })
  }
  return user
}
\`\`\`

Then use as needed in your telefunctions.

\`\`\`ts
// components/TodoItem.telefunc.ts
// Environment: server

import { getUser } from '../auth/getUser'

export function onTextChange(id: string, text: string) {
  const user = getUser()
  /* ... */
}
\`\`\`

## See also

 - <Link href="/onAbort"><code>onAbort()</code></Link>
 - <Link href="/Abort"><code>throw Abort()</code></Link>
 - <Link href="/getContext"><code>getContext()</code></Link>
`;function Ns(s){return n(a.Fragment,{})}function vs(s={}){return n(bs,{...s,children:n(Ns,{...s})})}const xs=`import { Alert, Link } from '@/components/index'

## Set up Telefunc

### Install dependencies

\`\`\`sh
npm install telefunc
\`\`\`

### Add Telefunc to your server

Telefunc is built on [Web Standards](https://www.w3.org/standards/). You can add Telefunc to any server that exposes [\`Request\`](https://developer.mozilla.org/en-US/docs/Web/API/Request) or [Node.js \`req\`](https://nodejs.org/api/http.html#http_class_http_incomingmessage).
This includes server frameworks like [Hono](https://hono.dev) or [Express](https://expressjs.com), and metaframeworks like [Next.js](https://nextjs.org) and [SvelteKit](https://svelte.dev/docs/kit).

<Alert>
  The <Link href="/telefunc"><code>telefunc()</code></Link> middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context.
  For more info, see <Link href="/getContext"><code>getContext()</code></Link>.
</Alert>

\`\`\`js
// server.js
// Environment: server

import { Hono } from 'hono'
import { telefunc } from 'telefunc'

const app = new Hono()

app.all('/_telefunc', async (c) => {
  const httpResponse = await telefunc({
    request: c.req.raw,
    context: {
      // You can add any arbitrary contextual information here
    },
  })

  return new Response(httpResponse.body, {
    status: httpResponse.statusCode,
    headers: { 'content-type': httpResponse.contentType },
  })
})
\`\`\`

<Alert>
  Check out the setup guide for your framework of choice for integration and configuration steps.
</Alert>

## My first telefunction

After adding the \`telefunc\` middleware to your server, create a new file for your telefunction, ideally as close to the component (or page) that will call it.

By convention, telefunctions are named after the events they handle (e.g., \`onNewTodo\`). This ensures close coupling between telefunctions and the UI that calls them.

\`\`\`ts
// components/TodoList.telefunc.ts
// Environment: server

export async function onNewTodo(title: string, text: string) {
  await db.execute('INSERT INTO todos VALUES (:title,:text)', { title, text })
  return await db.execute('SELECT id, title, text FROM todos')
}
\`\`\`

<Alert>
  Coupling telefunctions to specific data views or interactions **keeps arguments and return values minimal**. This is **required** to take advantage of the performance and security benefits Telefunc offers.
</Alert>

### Secure your telefunction

<Alert type="warning">
  Always keep in mind that your **telefuncs are public**. A simple HTTP request could be used to extract, modify, or destroy user secrets or business-critical data from an unprotected function.
</Alert>
  
Add guards to Telefunctions to prevent illegitimate access.
- Use <b><Link href="/Abort" text={(<code>throw Abort()</code>)} /></b> (or return early) if the client is unauthenticated or doesn't have permission to access the requested resource.
- Use <b><Link href="/shield" text={(<code>shield()</code>)} /></b> to validate telefunction call arguments.
  
\`\`\`ts
// Todos.telefunc.ts
// Environment: server

import { getContext, shield } from 'telefunc'
// When using TypeScript, Telefunc automatically generates
// shield for argument type inference and runtime validation
// shield(onNewTodo, [shield.type.string]) // [!code --]

export async function onNewTodo(title: string, text: string) {
  const { user } = getContext()
  if (!user) {
    throw Abort()
  }

  // ...
}
\`\`\`

### Call your telefunction

You can use Telefunc with most UI frameworks (e.g., React, Vue, Solid) or plain JavaScript.

\`\`\`jsx choice=react client
// components/TodoList.jsx
// Environment: client

import { onNewTodo } from './TodoList.telefunc'

function TodoList() {
  /** @param {string} text */
  const onSubmit = async (text) => {
    const todos = await onNewTodo(text)
    // ...
  }
}
\`\`\`

\`\`\`html choice=vue client
<!-- components/TodoList.vue -->
<!-- Environment: client -->

<!-- ... -->

<script>
import { onNewTodo } from './TodoList.telefunc.js'

export default {
    methods: {
        async onSubmit(_event) {
            this.todoItems = await onNewTodo(this.text)
        }
    }
}
<\/script>
\`\`\`

\`\`\`jsx choice=solid client
// components/TodoList.jsx
// Environment: client

import { onNewTodo } from './TodoList.telefunc'

function TodoList() {
  /** @param {string} text */
  const onSubmit = async (text) => {
    const todos = await onNewTodo(text)
    // ...
  }
}
\`\`\`

\`\`\`html choice=svelte client
<!-- src/routes/TodoList.svelte -->
<!-- Environment: client -->

<script>
import { onNewTodo } from './TodoList.telefunc'

/** @param {string} text */
const onSubmit = async (text) => {
    const todos = await onNewTodo(text)
    // ...
}
<\/script>
\`\`\`

Telefunc uses a lightweight HTTP client combined with powerful middleware to route telefunction calls and process payloads.

## (Telefunc) Request Context

Telefunc creates a context for each request that you can access from telefunctions with \`getContext()\`.

_Context is not populated by default._ Add arbitrary values, including from server context, to the \`context\` object in the \`telefunc\` middleware call.

<Alert>
  The following example uses Hono, but the same pattern applies for all framework integrations.
</Alert>

\`\`\`js
// server.ts
// Environment: server
 
import { Hono } from 'hono'
import { telefunc } from 'telefunc'

const app = new Hono()
app.all('/_telefunc', async (c) => {
  const httpResponse = await telefunc({
    // ...
    // Data added here is available in all telefunctions
    context: {
      headers: c.req.raw.headers,
      user: await getUser(),
    }
  })
})
\`\`\`

Properties added to Telefunc context are returned type-safely from \`getContext()\`.

<Alert type="warning">
  Telefunc context is only available server-side.
</Alert>


\`\`\`js
// TodoList.telefunc.js
// Environment: server
 
import { getContext } from 'telefunc'
 
export async function onLoad() {
  const { user } = getContext()

  const todos = await db.execute(
    'SELECT id, text FROM todos WHERE author_id = ":authorId"',
    { authorId: user.id }
  )

  return {
    todos,
    userName: user.name
  }
}
\`\`\`

## SSR

Telefunc is compatible with most SSR solutions, with a few nuances.

### Initial data for SSR

To fetch data for the first (server-side) page render, use your framework's built-in data fetching mechanism instead of Telefunc.

You can still use Telefunc to fetch or mutate data client-side (e.g., for page navigation or infinite scroll).

<Alert>
  All SSR frameworks pass hydration data from server to client. Telefunc shouldn't intercept or modify this data, so it can't be used for initial page hydration.
</Alert>

## See also

- <Link href="/getContext"><code>getContext()</code></Link>
- <Link href="/telefunc"><code>telefunc()</code></Link>
`;function ws(s){return n(a.Fragment,{})}function Ts(s={}){return n(xs,{...s,children:n(ws,{...s})})}const _s=`import Link from '@/components/docs/Link'

Using Telefunc with [React Native](https://reactnative.dev).

# [WIP]

### Next

<Link href="/start#my-first-telefunction" />

## Examples

 - <Link path="/examples/react-native" />
`;function Ss(s){return n(a.Fragment,{})}function Ls(s={}){return n(_s,{...s,children:n(Ss,{...s})})}const js=`import Link from '@/components/docs/Link'
import { RepoLink } from '@/components/docs/RepoLink'

Using Telefunc with [React Router](https://reactrouter.com).

## 1. Install Telefunc

\`\`\`bash
npm install telefunc
\`\`\`

## 2. Plugin to Vite

\`\`\`ts
// vite.config.ts

import { reactRouter } from '@react-router/dev/vite';
import { telefunc } from 'telefunc/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRouter(), telefunc()],
})
\`\`\`

## 3. Add Telefunc middleware

The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see <Link href="/getContext" />.

\`\`\`ts
// src/routes/_telefunc.ts
// Environment: server

import { telefunc } from "telefunc";

export async function action({ request }: ActionFunctionArgs) {
  const { url, method } = request;
  const body = await request.json();
  const httpResponse = await telefunc({
    url: new URL(url).pathname,
    method,
    body: JSON.stringify(body),
  });

  return JSON.parse(httpResponse.body);
}
\`\`\`

## Next

<Link href="/start#my-first-telefunction" />

## Examples

- <RepoLink timestamp="09.2025" repo="arnaudsm/telefunc-react-router-demo" />
    - with [React Router](https://reactrouter.com)
- <RepoLink timestamp="06.2024" repo="overshom/remix-telefunc-demo" />
    - with [Remix](https://remix.run), ([renamed to React Router](https://remix.run/blog/merging-remix-and-react-router))
`;function Rs(s){return n(a.Fragment,{})}function Is(s={}){return n(js,{...s,children:n(Rs,{...s})})}const Ps=`import { Alert, Link } from '@/components/index'
import ConfigWhereServer from '@/components/ConfigWhereServer.mdx'

**Environment**: server.

<Alert type="warning">This is a beta feature.</Alert>

If you use <Link href="/telefuncFiles">\`config.telefuncFiles\`</Link>, then you also need to set \`config.root\`.

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

// Your project's root directory
config.root = __dirname
\`\`\`

The \`config.root\` setting is only needed if you use <Link href="/telefuncFiles">\`config.telefuncFiles\`</Link>.

<ConfigWhereServer />


## Monorepo

If you have a monorepo structure, then set \`config.root\` to the root directory of your client-side (i.e. the root of Vite/Vike/Next.js/Nuxt/...). Don't set \`config.root\` to the monorepo root, nor to the root directory of your server. (The \`config.root\` setting enables Telefunc to match your \`.telefunc.js\` files/imports between the server-side and the client-side.)


## See also

- <Link href="/telefuncFiles"><code>telefuncFiles</code></Link>
- <Link href="/how-it-works#transformer">How it works > Transformer</Link>
`;function Ms(s){return n(a.Fragment,{})}function qs(s={}){return n(Ps,{...s,children:n(Ms,{...s})})}const Us=`import Link from '@/components/docs/Link'

Using Telefunc with standalone servers

## 1. Install

\`\`\`shell
npm install telefunc
\`\`\`

## 2. Add Telefunc middleware

The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see <Link href="/getContext" />.

You can add Telefunc to any server that uses the standard \`Request\` object, including [Hono](https://hono.dev), [Next.js](https://nextjs.org), [Nitro](https://nitro.build), [Nuxt](https://nuxt.com), and [SvelteKit](https://svelte.dev/docs/kit).
See configuration guide for:

- <Link href="/next">Next.js</Link>
- <Link href="/svelte-kit">SvelteKit</Link>
- <Link href="/vike">Vike</Link>
- <Link href="/nuxt">Nuxt</Link>
- <Link href="/react-router">React Router</Link>
- <Link href="/react-native">React Native</Link>
- <Link href="/bundler">Custom bundler</Link>

You can also add Telefunc to servers that use the Node.js \`req\` readable stream, like [Express](https://expressjs.com) or [Fastify](https://fastify.dev).

\`\`\`js choice=Hono
// server.js
// Environment: server

import { Hono } from 'hono'
import { telefunc } from 'telefunc'

const app = new Hono()

app.all('/_telefunc', async (c) => {
  const httpResponse = await telefunc({ request: c.req.raw })

  return new Response(httpResponse.body, {
    status: httpResponse.statusCode,
    headers: { 'content-type': httpResponse.contentType },
    context: {
      // You can add any arbitrary contextual information here
    },
  })
})
\`\`\`

\`\`\`js choice=Express
// server.js
// Environment: server

import express from 'express'
import { telefunc } from 'telefunc'

const app = express()

app.all('/_telefunc', async (req, res) => {
  const httpResponse = await telefunc({
    url: req.originalUrl,
    method: req.method,
    readable: req,
    contentType: req.headers['content-type'] || '',
    context: {
      // You can add any arbitrary contextual information here
    },
  })

  res.status(httpResponse.statusCode).type(httpResponse.contentType).send(httpResponse.body)
})
\`\`\`

## See also

- <Link href="/getContext"><code>getContext()</code></Link>
- <Link href="/telefunc"><code>telefunc()</code></Link>
`;function Os(s){return n(a.Fragment,{})}function $s(s={}){return n(Us,{...s,children:n(Os,{...s})})}const zs=`import { Alert, Link } from '@/components/index'
import ConfigWhereServer from '@/components/ConfigWhereServer.mdx'

**Environment**: server  
**Type**: \`boolean | { dev?: boolean; prod?: boolean }{:ts}\`  
**Default**: \`{ dev: false, prod: true }{:ts}\`  

Whether to generate <Link href="/shield">\`shield()\`</Link> in development and/or when building for production.

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

// Enable shield() generation during development
config.shield = { dev: true }
\`\`\`

<Alert type="warning">
    Enabling \`shield()\` generation during development can significantly slow down development speed. Depending on how large your app and how fast your computer is, the decreased development speed can range from unnoticeable to significant.
</Alert>

<ConfigWhereServer />
`;function Hs(s){return n(a.Fragment,{})}function Xs(s={}){return n(zs,{...s,children:n(Hs,{...s})})}const Ws=`import { Alert, Link } from '@/components/index'

**Environment**: server.

Use \`shield()\` to guarantee the type of telefunction arguments at **compile- and run-time**.

\`\`\`ts ts-only
// CreateTodo.telefunc.ts
// Environment: server

import { shield } from 'telefunc'
const t = shield.type

// Shield will \`throw Abort\` if \`text\` is not type \`string\`
shield(onNewTodo, [t.string])
export async function onNewTodo(text: string) {
  // ...
}
\`\`\`

Under the hood, \`shield()\` uses <Link href="/Abort" /> to reject invalid telefunction calls, and pass an error message to the client.

\`\`\`js
async function onSubmit(text) {
  try {
    const todos = await onNewTodo(text)
    // ...
  } catch (error) {
    console.error(error) //
  }
}
\`\`\`\`

## Automatic (from TypeScript)

If you use TypeScript, Telefunc automatically generates \`shield()\` for each telefunction.

<Alert type="warning">
  Automatic \`shield()\` generation only works for stacks that transpile server-side code (Next.js, Vite, Vike, SvelteKit, Nuxt, etc.).
</Alert>

\`\`\`ts ts-only
// CreateTodo.telefunc.ts
// Environment: server

import { shield } from 'telefunc' // [!code --]
const t = shield.type // [!code --]

shield(onNewTodo, [t.string]) // [!code --]
export async function onNewTodo(text) {
  // \`text\` is guaranteed to be a \`string\`
}
\`\`\`

By default, Telefunc only generates \`shield()\` guards when you build for production. This improves local development speed. You can opt-in to \`shield()\` generation in development, see <Link href="/shield-config" />.

## Manual

You need to define \`shield()\` manually when using stacks that don't transpile server-side code (e.g. React Native or Parcel).

In this case, wrap your telefunction to avoid defining type arguments twice:

\`\`\`js
// TodoList.telefunc.js
// Environment: server
import { shield } from 'telefunc'

export const onNewTodo = shield(
  [shield.type.string],
  async function (text) {
    // ✅ TypeScript knows that \`text\` is type \`string\`
  }
)
\`\`\`

## Type examples

Examples showcasing the most common \`shield()\` types:

\`\`\`js
// TodoList.telefunc.js
// Environment: server

import { shield } from 'telefunc'
const t = shield.type

shield(onTextChange, [t.number, t.string])
async function onTextChange(id, text) {
  // typeof id === 'number'
  // typeof text === 'string'
}

shield(onCompletedToggle, [{ id: t.number, isCompleted: t.boolean }])
async function onCompletedToggle({ id, isCompleted }) {
  // typeof id === 'number'
  // typeof isCompleted === 'boolean'
}

shield(onTagListChange, [t.array(t.string)])
async function onTagListChange(tagList) {
  // tagList.every(tagName => typeof tagName === 'string')
}

shield(onNewMilestone, [{
  name: t.string,
  deadline: t.nullable(t.date),
  ownerId: t.optional(t.number)
}])
async function onNewMilestone({ name, deadline, ownerId }) {
  // typeof name === 'string'
  // deadline === null || deadline.constructor === Date
  // ownerId === undefined || typeof ownerId === 'number'
}

shield(onStatusChange, [t.or(
  t.const('DONE'),
  t.const('PROGRESS'),
  t.const('POSTPONED')
)])
async function onStatusChange(status) {
  // status === 'DONE' || status === 'PROGRESS' || status === 'POSTPONED'
}
\`\`\`


## All types

List of \`shield()\` types:

\`const t = shield.type\` | TypeScript | JavaScript
-|-|-
\`t.string\` | \`string\` | \`typeof value === 'string'\`
\`t.number\` | \`number\` | \`typeof value === 'number'\`
\`t.boolean\` | \`boolean\` | <code>value === true &#x7c;&#x7c; value === false</code>
\`t.date\` | \`Date\` | \`value.constructor === Date\`
\`t.array(T)\` | \`T[]\` | \`value.every(element => isT(element))\`
\`t.object(T)\` | \`Record<string, T>\` | \`Object.values(value).every(v => isT(v))\`
\`{ k1: T1, k2: T2, ... }\` | <code>{'{ k1: T1, k2: T2, ... }'}</code> | <code>isT1(value.k1) && isT2(value.k2) && ...</code>
\`t.or(T1, T2, ...)\` | <code>T1 &#x7c; T2 &#x7c; ...</code> | <code>isT1(value) &#x7c;&#x7c; isT2(value) &#x7c;&#x7c; ...</code>
\`t.tuple(T1, T2, ...)\` | \`[T1, T2, ...]\` | \`isT1(value[0]) && isT2(value[1]) && ...\`
\`t.const(val)\` | \`val as const\` | \`value === val\`
\`t.optional(T)\` | <code>T &#x7c; undefined</code> | <code>isT(value) &#x7c;&#x7c; value === undefined</code>
\`t.nullable(T)\` | <code>T &#x7c; null</code> | <code>isT(value) &#x7c;&#x7c; value === null</code>
\`t.any\` | \`any\` | \`true\`

## See also

- <Link href="/Abort"><code>throw Abort()</code></Link>
- <Link href="/error-handling">Error Handling</Link>
`;function Vs(s){return n(a.Fragment,{})}function Ys(s={}){return n(Ws,{...s,children:n(Vs,{...s})})}const Gs=`import Link from '@/components/docs/Link'

Using Telefunc with [SvelteKit](https://svelte.dev/docs/kit).

## 1. Install Telefunc

\`\`\`bash
npm install telefunc
\`\`\`

## 2. Plugin to Vite

\`\`\`ts
// vite.config.ts

import { sveltekit } from '@sveltejs/kit/vite'
import { telefunc } from 'telefunc/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit(), telefunc()],
})
\`\`\`

## 3. Add Telefunc middleware

The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see <Link href="/getContext" />.

\`\`\`ts
// src/routes/_telefunc/+server.ts
// Environment: server

import { telefunc } from 'telefunc'
import type { RequestHandler } from './$types'

const handler: RequestHandler = async (event) => {
  const httpResponse = await telefunc({ request: event.request })
  return new Response(httpResponse.body, {
    headers: new Headers({ 'content-type': httpResponse.contentType }),
    status: httpResponse.statusCode,
  })
}

export { handler as GET, handler as POST }
\`\`\`

## 4. Initial data

Telefunc <Link href="/initial-data">can't write to the initial data load</Link>, but can be used for any requests (e.g., for pagination or infinite scroll) after the first render.

Use Next.js Server Components to fetch initial data directly from a database, see [SvelteKit Docs > Loading data > Universal vs server](https://svelte.dev/docs/kit/load#Universal-vs-server).

## Next

<Link href="/start#my-first-telefunction" />

## Examples

<Link path="https://github.com/telefunc/telefunc/blob/main/examples/svelte-kit" />
`;function Ks(s){return n(a.Fragment,{})}function Qs(s={}){return n(Gs,{...s,children:n(Ks,{...s})})}const Js=`import { Alert, Link } from '@/components/index'
import ConfigWhereServer from '@/components/ConfigWhereServer.mdx'

**Environment**: server.

<Alert type="warning">This is a beta feature.</Alert>

If you don't use Telefunc's transformer on your server-side (see <Link href="/how-it-works#transformer" />) then you need to provide the list of your \`.telefunc.js\` files to Telefunc.

You do so by using:
 - \`config.telefuncFiles\`
 - <Link href="/root">\`config.root\`</Link>

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

// List of telefunc files
config.telefuncFiles = [require.resolve('./hello.telefunc.mjs')]

// The root directory of the project
config.root = __dirname
\`\`\`

See also <Link href="/root">\`config.root\`</Link>.

<ConfigWhereServer />


## See also

- <Link href="/root"><code>root</code></Link>
- <Link href="/root#monorepo"><code>root</code> > Monorepo</Link>
`;function Zs(s){return n(a.Fragment,{})}function el(s={}){return n(Js,{...s,children:n(Zs,{...s})})}const nl=`import Link from '@/components/docs/Link'
import ConfigWhereClient from '@/components/ConfigWhereClient.mdx'
import ConfigWhereServer from '@/components/ConfigWhereServer.mdx'

**Environment**: server, client.<br/>

By default, Telefunc uses the URL pathname \`/_telefunc\` to communicate between client and server.

You can use \`config.telefuncUrl\` to change that URL.


## Basic usage

You always need to set the value twice: on the server- and client-side.

On the server-side:

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

config.telefuncUrl = '/api/_telefunc'
\`\`\`

<ConfigWhereServer />

On the client-side:

\`\`\`ts
// Environment: client

import { config } from 'telefunc/client'

config.telefuncUrl = '/api/_telefunc'
\`\`\`

<ConfigWhereClient />


## Different domain

If you deploy your frontend and backend at different domain names, then do the following.

\`\`\`ts
// Environment: client

import { config } from 'telefunc/client'

// The client-side value can be:
// - a URL pathname (such as '/_telefunc')
// - a URL with origin (such as 'https://example.org/api/_telefunc')
// - an IP address (such as '192.158.1.38')
config.telefuncUrl = 'https://example.org/api/_telefunc'
\`\`\`

\`\`\`ts
// Environment: server

import { config } from 'telefunc'

// The server-side value always needs to be a URL pathname (such as '/_telefunc')
config.telefuncUrl = '/api/_telefunc'
\`\`\`
`;function il(s){return n(a.Fragment,{})}function sl(s={}){return n(nl,{...s,children:n(il,{...s})})}const ll=`import { Alert, Link } from '@/components/index'

**Environment**: server.

\`telefunc()\` acts as an adapter between your server and telefunctions. It intercepts and executes telefunction calls, and returns the result (if any).

<Alert>
  It's a pure function (no side effects).
</Alert>

To add Telefunc to your server, <Link href="/server-integration">create middleware</Link> that calls \`telefunc(req)\`.

By default, \`telefunc\` accepts the [web standard \`Request\` object](https://developer.mozilla.org/en-US/docs/Web/API/Request):

\`\`\`ts
// server.ts

import { telefunc } from 'telefunc'
 
// Add Telefunc middleware to server (Hono/Fastify/Express.js/...)
app.use('/_telefunc', async (req: Request, res: Response) => {
  const httpResponse = await telefunc(req)
  res.send(httpResponse.body)
})
\`\`\`

## Response 

The return value \`httpResponse\` is a plain JavaScript object with all the information needed to generate the HTTP response, for exampe using the [web standard \`Response\` object](https://developer.mozilla.org/en-US/docs/Web/API/Response):

\`\`\`js
const response = new Response(httpResponse.body, {
  status: httpResponse.statusCode,
  headers: { 'content-type': httpResponse.contentType },
})
\`\`\`

## Populating telefunction Context

You can optionally set values in the telefunction \`Context\` so that you can later access them from telefunctions with <Link href="/getContext">{<code>getContext()</code>}</Link>.

\`\`\`js
const httpResponse = await telefunc({
  // Required
  request,

  // Optional
  context: {
    /* Some context */
  }
})
\`\`\`

This is your opportunity to pass any data from you server \`Context\`, e.g., session or other auth records.

## With Node \`req\`

You can also add Telefunc to servers that use the [Node.js \`req\` readable stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage):

\`\`\`js
const httpResponse = await telefunc({
  // Required
  url: req.originalUrl,
  method: req.method,
  readable: req,
  contentType: req.headers['content-type'] || '',

  // Optional
  context: {
    /* Some context */
  }
})
\`\`\`

## See also

- <Link href="/error-handling">Error Handling</Link>
`;function rl(s){return n(a.Fragment,{})}function al(s={}){return n(ll,{...s,children:n(rl,{...s})})}const tl=`import { Alert, Link } from '@/components/index'

**Environment**: server.

Use \`throw Abort()\` to implement <Link href="/permissions">permissions and other guards</Link>.

Telefunc uses \`Abort\` to distinguish **expected failures** from bugs (errors in code, logic, data, etc.).

<Alert type="warning">
Note that using \`throw Abort()\`:
- ❌ Does not trigger <Link href="/onBug" />
- ✅ Triggers <Link href="/onAbort" /> on the client
- ✅ Error data is passed to client
- ❌ Is not logged on the server
</Alert>

## Rejecting bad requests

In other words, use \`throw Abort\` to implement permissions and other control flows. When returning an error message for the client to display, returning early is recommended instead. For more, see <Link href="/error-handling" />.

In the following example, unauthenticated calls are rejected with \`throw Abort()\`. The request bypasses \`onBug()\`, and is returned with a status code \`403\`.

\`\`\`js
// hello.telefunc.js
// Environment: server
 
export async function hello(name) {
  const { user } = getContext()
  if (!user) {
    // We expect clients will sometimes make unauthed requests
    throw Abort({ code: 'unauthenticated' })
  }

  // Typo => syntax error => it should be \`name\` instead of \`namee\`
  return 'Hello ' + namee
}
\`\`\`

## Accessing \`abortValue\`

The \`Abort\` error data can be accessed client-side from the <Link href="/onAbort" /> hook.

This pattern is powerful when used in combination with <Link href="/permissions#dry-permissions" doNotInferSectionTitle={true} /> helpers.

## See also

 - <Link href="/onAbort"><code>onAbort()</code></Link>
 - <Link href="/permissions">Permissions</Link>
`;function ol(s){return n(a.Fragment,{})}function cl(s={}){return n(tl,{...s,children:n(ol,{...s})})}const dl=`import { Alert, Link } from '@/components/index'

When a user enters a form with invalid inputs, such as an invalid email address, then you want your UI to tell the user what went wrong.

Simply return early with an error result, including any message the UI should display to the user.

\`\`\`ts
// SignUpForm.telefunc.ts
// Environment: server

export async function onFormSubmit(email: string, password: string) {
  // Form validation
  const inputErrors = {}

  if (!email) {
    inputErrors.email = 'Please enter your email.'
  } else if (!email.includes('@')) {
    inputErrors.email = 'Invalid email; make sure to enter a valid email.'
  }

  if (!password) {
    inputErrors.password = 'Please enter a password.'
  } else if (password.length < 8) {
    inputErrors.password = 'Password must have at least 8 characters.'
  }

  if (Object.keys(inputErrors).length > 0) {
    return { inputErrors }
  }

  // IRL we'd want to hash the password first
  const user = await db.execute(
    'INSERT INTO todos VALUES (:email, :password)',
    { email, password },
  )

  return { user }
}
\`\`\`

<Alert>
  You can also exit early and return error data with \`throw Abort(errorData)\` instead of \`return errorData\`. This hides the control flow though, and prevents Telefunc from distinguishing between app errors and request errors. See <Link href="/error-handling" />.
</Alert>

## See also

 - <Link href="/onAbort"><code>onAbort()</code></Link>
 - <Link href="/onBug"><code>onBug()</code></Link>
`;function hl(s){return n(a.Fragment,{})}function kl(s={}){return n(dl,{...s,children:n(hl,{...s})})}const pl=`import Link from '@/components/docs/Link'

Using Telefunc with [Vike](https://vike.dev/).
- server integration

> Use [vike.dev/new](https://vike.dev/new) to scaffold a new Vike app that uses Telefunc.

## 1. Install Telefunc

\`\`\`bash
npm install telefunc
\`\`\`

## 2. Plugin to Vite

\`\`\`ts
// vite.config.ts

import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import telefunc from 'telefunc/vite'

export default {
  plugins: [react(), vike(), telefunc()],
}
\`\`\`

## 3. Add Telefunc middleware

The Telefunc middleware intercepts and executes telefunction calls. This is also your opportunity to set any data you'd like available in the Telefunc request context. For more info, see <Link href="/getContext" />.

\`\`\`ts
// server.ts
// Environment: server

import { Hono } from 'hono'
import { telefunc } from 'telefunc'

const app = new Hono()

app.all('/_telefunc', async (c) => {
  const httpResponse = await telefunc({ request: c.req.raw })
  return new Response(httpResponse.body, {
    status: httpResponse.statusCode,
    headers: { 'content-type': httpResponse.contentType },
  })
})
\`\`\`

## 4. Initial data

Telefunc <Link href="/initial-data">can't write to the initial data load</Link>, but can be used for any requests (e.g., for pagination or infinite scroll) after the first render.

Use Next.js Server Components to fetch initial data directly from a database, see [vike.dev > Data Fetching](https://vike.dev/data-fetching).

## Next

<Link href="/start#my-first-telefunction" />

## Examples

- <Link path="https://github.com/telefunc/telefunc/blob/main/examples/vike" />
- <Link path="https://github.com/telefunc/telefunc/blob/main/examples/react-streaming" />
`;function yl(s){return n(a.Fragment,{})}function ul(s={}){return n(pl,{...s,children:n(yl,{...s})})}const fl=`import { Alert, Link } from '@/components/index'

## Schemaless vs schema-full

Comparing RPC to GraphQL or REST is a bit like comparing apples to oranges. They each make trade-offs to achieve different goals.

| RPC                                       | REST + GraphQL               |
| ----------------------------------------- | ---------------------------- |
| Full-stack: client calls server functions | Separate front- and back-end |
| Request tailored to caller's needs        | Consumer-agnostic            |

REST and GraphQL establish stable (but rigid) long-term data contracts. This makes it easier for third-parties to predictably consume your API, but gets in the way of prototyping, and forces the server to respond generically to clients.

<Alert>
    A schema-full approach works best if you **must fulfill a maximum number of data requirements**, or want to allow other apps to be built on your data.
</Alert>

RPC creates unique data contracts between specific pieces of UI and the server-side logic they call. This  allows components to invoke server-side logic as if it was local.
  
## RPC

> A [remote procedure call](https://en.wikipedia.org/wiki/Remote_procedure_call) (RPC) is when a \\[...] computer programmer writes essentially the same code whether the subroutine is local to the executing program, or remote.

RPC is a pattern for calling a remote function as if it were colocated with the client. No adapters or injection needed.
1. Create named Telefunctions to call the database or do other backend work.
2. Import and call the function from your frontend, passing any required arguments (e.g., \`await onNewTodo(text)\`).
3. Telefunc creates a lightweight HTTP client to call your Telefunction, which returns only what the caller needs.

<Alert>
    The term RPC is often used loosely to denote RPC-like approaches, like creating JSON endpoints. _RPC-like describes an API that is schemaless — in contrast to RESTful and GraphQL APIs that always have a schema._
</Alert>

## RPC vs GraphQL/REST

> Premature optimization is the root of all evil.
> - *Turing Award winner, Donal Knuth*

In most cases you can start with RPC, and switch to REST or GraphQL as needed.
- RPC enables you to stay lean, iterating faster and pivoting more flexibly.
- Many apps will never need a public (or schema-full) API.
- RPC functions are just functions; migrating to REST or GraphQL is fairly straightforward.

There's a simple litmus test for whether RPC is the right solution:
- If your goal is to enable third party developers to access your data, then you need a generic API and you'll have to use REST or GraphQL
- If your goal is to seamlessly add data and interactivity to a front-end, then RPC can improve DX and enable security and performance optimizations.
`;function ml(s){return n(a.Fragment,{})}function Bl(s={}){return n(fl,{...s,children:n(ml,{...s})})}const S=s=>s.replace(/\s+/g," ").trim(),gl=s=>S(s).normalize("NFKD").toLowerCase().replace(/['"]/g,"").replace(/[^\p{Letter}\p{Number}\s-]/gu," ").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"")||"section",El=()=>{const s=new Map;return e=>{const r=gl(e),t=s.get(r)??0;return s.set(r,t+1),t===0?r:`${r}-${t}`}},Al=s=>S(s.replace(/!\[([^\]]*)\]\([^)]+\)/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/<[^>]+>/g," ").replace(/\\([\\`*_[\]{}()#+\-.!])/g,"$1").replace(/[*_~]/g,"").replace(/\{[^}]+\}/g," ")),Cl=s=>s.match(/^\s{0,3}(`{3,}|~{3,})/)?.[1]?.[0]??null,Fl=(s,e=2,r=3)=>{const t=El(),o=[];let d=null;for(const h of s.split(`
`)){const p=Cl(h);if(d){p===d&&(d=null);continue}if(p){d=p;continue}const E=h.match(/^\s{0,3}(#{1,6})\s+(.*?)(?:\s+#+\s*)?$/);if(!E)continue;const k=E[1].length,y=Al(E[2]??"");if(!y)continue;const B=t(y);k<e||k>r||o.push({depth:k,id:B,title:y})}return o},gr=s=>S(s),x=s=>s.replace(/^\/+|\/+$/g,""),_e=s=>be[s],Dl=s=>{const e=x(s);return Object.values(be).find(r=>x(r.docPath)===e)},bl=(s,e)=>Oe(_e(s).docPath,e),Nl=(s,e=u,r)=>{const t=Ne(e),o=_e(s);return{docPath:x(o.docPath),title:o.navTitle?.[t]??o.title[t],href:v(bl(s,r),t),description:o.excerpt?.[t]??null}},Er=(s,e=u,r)=>{const{title:t,href:o}=Nl(s,e,r);return{title:t,href:o}},Ar=(s,e=u)=>{const r=Dl(s);if(!r)return null;const t=Ne(e);return{title:r.title[t],description:r.excerpt?.[t]??null}},Se=Object.assign({"../../pages/(docs)/(content)/best-practices/content.en.mdx":fn,"../../pages/(docs)/(content)/bundler/content.en.mdx":Bn,"../../pages/(docs)/(content)/concepts/content.en.mdx":An,"../../pages/(docs)/(content)/disable-naming-convention/content.en.mdx":Fn,"../../pages/(docs)/(content)/error-handling/content.en.mdx":bn,"../../pages/(docs)/(content)/fetch/content.en.mdx":vn,"../../pages/(docs)/(content)/file-uploads/content.en.mdx":wn,"../../pages/(docs)/(content)/get-context/content.en.mdx":_n,"../../pages/(docs)/(content)/get-started/content.en.mdx":Ln,"../../pages/(docs)/(content)/how-it-works/content.en.mdx":Rn,"../../pages/(docs)/(content)/http-headers/content.en.mdx":Pn,"../../pages/(docs)/(content)/initial-data/content.en.mdx":qn,"../../pages/(docs)/(content)/log/content.en.mdx":On,"../../pages/(docs)/(content)/next/content.en.mdx":zn,"../../pages/(docs)/(content)/nuxt/content.en.mdx":Xn,"../../pages/(docs)/(content)/on-abort/content.en.mdx":Vn,"../../pages/(docs)/(content)/on-bug/content.en.mdx":Gn,"../../pages/(docs)/(content)/permissions/content.en.mdx":Qn,"../../pages/(docs)/(content)/quick-start/content.en.mdx":Zn,"../../pages/(docs)/(content)/react-native/content.en.mdx":ni,"../../pages/(docs)/(content)/react-router/content.en.mdx":si,"../../pages/(docs)/(content)/root/content.en.mdx":ri,"../../pages/(docs)/(content)/server-integration/content.en.mdx":ti,"../../pages/(docs)/(content)/shield-config/content.en.mdx":ci,"../../pages/(docs)/(content)/shield/content.en.mdx":hi,"../../pages/(docs)/(content)/svelte-kit/content.en.mdx":pi,"../../pages/(docs)/(content)/telefunc-files/content.en.mdx":ui,"../../pages/(docs)/(content)/telefunc-url/content.en.mdx":mi,"../../pages/(docs)/(content)/telefunc/content.en.mdx":gi,"../../pages/(docs)/(content)/throw-abort/content.en.mdx":Ai,"../../pages/(docs)/(content)/validation/content.en.mdx":Fi,"../../pages/(docs)/(content)/vike/content.en.mdx":bi,"../../pages/(docs)/(content)/why-schemaless/content.en.mdx":vi}),vl=Object.assign({"../../pages/(docs)/(content)/best-practices/content.en.mdx":Ti,"../../pages/(docs)/(content)/bundler/content.en.mdx":Li,"../../pages/(docs)/(content)/concepts/content.en.mdx":Ii,"../../pages/(docs)/(content)/disable-naming-convention/content.en.mdx":qi,"../../pages/(docs)/(content)/error-handling/content.en.mdx":$i,"../../pages/(docs)/(content)/fetch/content.en.mdx":Xi,"../../pages/(docs)/(content)/file-uploads/content.en.mdx":Yi,"../../pages/(docs)/(content)/get-context/content.en.mdx":Qi,"../../pages/(docs)/(content)/get-started/content.en.mdx":es,"../../pages/(docs)/(content)/how-it-works/content.en.mdx":ss,"../../pages/(docs)/(content)/http-headers/content.en.mdx":as,"../../pages/(docs)/(content)/initial-data/content.en.mdx":cs,"../../pages/(docs)/(content)/log/content.en.mdx":ks,"../../pages/(docs)/(content)/next/content.en.mdx":us,"../../pages/(docs)/(content)/nuxt/content.en.mdx":Bs,"../../pages/(docs)/(content)/on-abort/content.en.mdx":As,"../../pages/(docs)/(content)/on-bug/content.en.mdx":Ds,"../../pages/(docs)/(content)/permissions/content.en.mdx":vs,"../../pages/(docs)/(content)/quick-start/content.en.mdx":Ts,"../../pages/(docs)/(content)/react-native/content.en.mdx":Ls,"../../pages/(docs)/(content)/react-router/content.en.mdx":Is,"../../pages/(docs)/(content)/root/content.en.mdx":qs,"../../pages/(docs)/(content)/server-integration/content.en.mdx":$s,"../../pages/(docs)/(content)/shield-config/content.en.mdx":Xs,"../../pages/(docs)/(content)/shield/content.en.mdx":Ys,"../../pages/(docs)/(content)/svelte-kit/content.en.mdx":Qs,"../../pages/(docs)/(content)/telefunc-files/content.en.mdx":el,"../../pages/(docs)/(content)/telefunc-url/content.en.mdx":sl,"../../pages/(docs)/(content)/telefunc/content.en.mdx":al,"../../pages/(docs)/(content)/throw-abort/content.en.mdx":cl,"../../pages/(docs)/(content)/validation/content.en.mdx":kl,"../../pages/(docs)/(content)/vike/content.en.mdx":ul,"../../pages/(docs)/(content)/why-schemaless/content.en.mdx":Bl}),xl=Object.assign({}),wl=s=>typeof s=="string"?s:typeof s?.default=="string"?s.default:"",Le=s=>s.filter(e=>e!==""&&!(e.startsWith("(")&&e.endsWith(")"))),L=s=>{const e=s.match(/\/pages\/(.+)$/);if(!e)return null;const r=e[1].split("/").filter(Boolean),t=r.at(-1);return t?{segments:r.slice(0,-1),filename:t}:null},je=s=>{const e=s.indexOf("(content)");return e<0?null:Le(s.slice(e+1)).join("/")},Tl=()=>{const s=Object.keys(Se)[0],e=s?L(s):null;if(!e)return[];const r=e.segments.indexOf("(content)");return r<0?[]:e.segments.slice(0,r)},D=Tl(),Re=s=>{const e=L(s);if(!e)return null;const r=e.filename.match(/^content\.([^.]+)\.mdx$/);if(!r)return null;const[,t]=r;if(!$e(t))return null;const o=je(e.segments);return o===null?null:{locale:t,routeId:o}},_l=s=>{const e=L(s);if(!e||!/^content\.config\.[^.]+$/.test(e.filename))return null;const r=je(e.segments);return r!==null?r:D.length===0||!D.every((o,d)=>e.segments[d]===o)?null:Le(e.segments.slice(D.length)).join("/")},Sl=s=>{const e=s.split("/").filter(Boolean),r=[""];for(let t=0;t<e.length;t+=1)r.push(e.slice(0,t+1).join("/"));return r},f={},w=new Map;for(const[s,e]of Object.entries(Se)){const r=Re(s);if(!r)continue;f[r.routeId]??={},f[r.routeId][r.locale]??={};const t=f[r.routeId][r.locale];t&&(t.Page=e.default,t.config=e.docConfig)}for(const[s,e]of Object.entries(vl)){const r=Re(s);if(!r)continue;f[r.routeId]??={},f[r.routeId][r.locale]??={};const t=f[r.routeId][r.locale];if(t){const o=wl(e);t.headings=Fl(o),t.source=o}}for(const[s,e]of Object.entries(xl)){const r=_l(s);if(r!==null){if(w.has(r))throw new Error(`Duplicate content.config for logical route "${r||"/"}". Keep only one config file for that docs path.`);w.set(r,e.default??{})}}const Ll=s=>Sl(s).reduce((e,r)=>({...e,...w.get(r)??{}}),{}),Cr=(s,e,r)=>{const t=f[s];if(!t)return null;const o=t[e]??t[u];if(!o?.Page)return null;const h={...ze(r??He).defaultDocConfig,...Ll(s),...t[u]?.config??{},...t[e]?.config??{}};return{Page:o.Page,headings:o.headings??[],config:h,resolvedLocale:t[e]?e:u}},Ie=s=>jl().includes(s.replace(/^\/+|\/+$/g,"")),ge=(s,e)=>{const r=s.replace(/^\/+|\/+$/g,"");return!!f[r]?.[e]?.Page},jl=()=>Object.keys(f).sort((s,e)=>s.localeCompare(e));function Rl(){window.addEventListener("popstate",Il)}async function Il(){Xe("onPopState()");const s=We();if(s.skip)return;const{previous:e,current:r}=s;await Pl(e,r)}async function Pl(s,e){const r=e.state.vike.scrollPosition||void 0;if(Ee(e.url)===Ee(s.url)&&e.url!==s.url){Ve(r);return}const d=e.state.vike.triggeredBy==="user"||s.state.vike.triggeredBy==="user",h=!e.state.vike.timestamp||!s.state.vike.timestamp?null:e.state.vike.timestamp<s.state.vike.timestamp;await T({scrollTarget:r,isBackwardNavigation:h,doNotRenderIfSamePage:d,isHistoryNavigation:!0})}function Ee(s){return s.split("#")[0]}function Ml(){document.addEventListener("click",ql)}async function ql(s){if(!Ul(s))return;const e=Ol(s.target);if(!e)return;const r=e.getAttribute("href");if(r===null||Ye(e))return;if(r.includes("#")&&Ge(r)){s.preventDefault(),Ke(r.split("#")[1]);return}if(Qe(e))return;s.preventDefault();let t;{const o=e.getAttribute("keep-scroll-position");o!==null&&(t={preserveScroll:o!=="false"})}await T({scrollTarget:t,urlOriginal:r})}function Ul(s){return s.button===0&&!s.ctrlKey&&!s.shiftKey&&!s.altKey&&!s.metaKey}function Ol(s){for(;s.tagName!=="A";){const{parentNode:e}=s;if(!e)return null;s=e}return s}const $l="modulepreload",zl=function(s){return"/vike-docpress/"+s},Ae={},b=function(e,r,t){let o=Promise.resolve();if(r&&r.length>0){let E=function(k){return Promise.all(k.map(y=>Promise.resolve(y).then(B=>({status:"fulfilled",value:B}),B=>({status:"rejected",reason:B}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=h?.nonce||h?.getAttribute("nonce");o=E(r.map(k=>{if(k=zl(k),k in Ae)return;Ae[k]=!0;const y=k.endsWith(".css"),B=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${B}`))return;const m=document.createElement("link");if(m.rel=y?"stylesheet":$l,y||(m.as="script"),m.crossOrigin="",m.href=k,p&&m.setAttribute("nonce",p),document.head.appendChild(m),y)return new Promise((qe,Ue)=>{m.addEventListener("load",qe),m.addEventListener("error",()=>Ue(new Error(`Unable to preload CSS for ${k}`)))})}))}function d(h){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=h,window.dispatchEvent(p),!p.defaultPrevented)throw h}return o.then(h=>{for(const p of h||[])p.status==="rejected"&&d(p.reason);return e().catch(d)})},Hl=s=>{const e=ve(s.urlPathname).pathname,r=xe(e);return r===null||!Ie(r)?!1:{routeParams:{slug:r}}},Ce=Object.freeze(Object.defineProperty({__proto__:null,default:Hl},Symbol.toStringTag,{value:"Module"}));function Fe(s,e){return Object.fromEntries(Object.entries(s).filter(e))}function Xl(s,e){const r=we(s,"/"),t=e.pathname??r.pathnameOriginal;Je(t,"modify.pathname");let o=e.search===null?"":e.search?Wl(r,e.search):r.searchOriginal;o==="?"&&(o="");let d;return e.hash===null?d="":e.hash===void 0?d=r.hashOriginal??"":(d=e.hash,d.startsWith("#")||(d="#"+d)),Te(r.origin,t,o,d)}function Wl(s,e){let r;if(e instanceof URLSearchParams)r=e;else{const t=Fe({...s.search,...Fe(e,Vl)},Ze);r=new URLSearchParams(t)}return"?"+r.toString()}function Vl(s){return s[1]!==void 0}function N(s,e){s=Xl(s,e);const r=we(s,"/"),t=[e.protocol??r.protocol??"",e.hostname??r.hostname??""],o=e.port??r.port;(o||o===0)&&t.push(`:${o}`);const d=t.join("");return Te(d,r.pathname,r.searchOriginal,r.hashOriginal)}const Yl=s=>{const e=xe(s);return e!==null&&Ie(e)?e:null},Gl=s=>{const e=s.urlParsed.pathname,r=en(e),{locale:t,pathname:o}=ve(e),d=Yl(o),h=r?null:nn();if(r&&t!==u&&d&&!ge(d,t))throw I(N(s.urlOriginal,{pathname:v(o,u)}));if(typeof window<"u"&&!r&&h&&h!==u&&(!d||ge(d,h)))throw I(N(s.urlOriginal,{pathname:v(o,h)}));return{pageContext:{locale:t,urlPathnameLocalized:e,urlLogical:N(s.urlOriginal,{pathname:o})}}},Kl=Object.freeze(Object.defineProperty({__proto__:null,default:Gl},Symbol.toStringTag,{value:"Module"})),j={},Pe={},Ql={},F={},Jl=[],Me={},Zl=[{pageId:"/pages/(docs)/(config)/_error",isErrorPage:!0,routeFilesystem:void 0,loadVirtualFilePageEntry:()=>({moduleId:"virtual:vike:page-entry:client:/pages/(docs)/(config)/_error",moduleExportsPromise:b(()=>import("../entries/pages_-docs-_-config-_error.y5kts4LZ.js"),__vite__mapDeps([0,1,2,3,4]))}),configValuesSerialized:{hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!1}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{client:!0,server:!0}}},route:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/(docs)/(config)/+route.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Ce}},clientRouting:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedAtLocation:"/pages/index/"},loadVirtualFilePageEntry:()=>({moduleId:"virtual:vike:page-entry:client:/pages/index",moduleExportsPromise:b(()=>import("../entries/pages_index.B55_6f1L.js"),__vite__mapDeps([5,1,2,3]))}),configValuesSerialized:{hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!1}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},clientRouting:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:{type:"js-serialized",value:!0}}}},{pageId:"/pages/(docs)/(config)",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedAtLocation:"/pages/(docs)/(config)/"},loadVirtualFilePageEntry:()=>({moduleId:"virtual:vike:page-entry:client:/pages/(docs)/(config)",moduleExportsPromise:b(()=>import("../entries/pages_-docs-_-config-.Dx2g_Ogn.js"),__vite__mapDeps([6,1,2,3,4]))}),configValuesSerialized:{hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!1}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{client:!0,server:!0}}},route:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/(docs)/(config)/+route.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Ce}},clientRouting:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:{type:"js-serialized",value:!0}}}}],er={configValuesSerialized:{onBeforeRoute:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onBeforeRoute.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Kl}},telefunc:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+telefunc.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:sn}}}},nr=Object.assign({}),ir={...nr};j[".page"]=ir;const sr=Object.assign({}),lr={...sr};F[".page"]=lr;const rr=Object.assign({}),ar={...rr};F[".page.server"]=ar;const tr=Object.assign({}),or={...tr};Pe[".page.route"]=or;const cr=Object.assign({}),dr={...cr};j[".page.client"]=dr;const hr=Object.assign({}),kr={...hr};F[".page.client"]=kr;const pr=Object.assign({}),yr={...pr};Me[".page.server"]=yr;const ur=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Me,pageConfigGlobalSerialized:er,pageConfigsSerialized:Zl,pageFilesEager:Pe,pageFilesExportNamesEager:F,pageFilesExportNamesLazy:Ql,pageFilesLazy:j,pageFilesList:Jl},Symbol.toStringTag,{value:"Module"})),De=an("initClientRouter.ts",{});function Fr(){ln(ur),!De.done&&(De.done=!0,mr(),fr(),Ml(),rn())}function fr(){dn(hn()===0),T({scrollTarget:{preserveScroll:!0},isClientSideNavigation:!1})}function mr(){tn(),on(),cn(),Rl()}export{Nl as a,Er as b,El as c,Ar as d,Cr as g,Fr as i,gr as n};
