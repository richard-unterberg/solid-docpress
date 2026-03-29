import baseAssets from '@/lib/baseAssets'

export function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 m-auto">
      <div>
        <h2 className="flex items-center gap-x-1 text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">
          <div className="w-5.5">
            <img src={`${baseAssets}brands` + '/typescript.svg'} alt="TypeScript" />
            <span className="sr-only">TypeScript</span>
          </div>
          Type-Safe by definition
        </h2>
        <>
          <p className="leading-8">
            Telefunc <b>automatically generates runtime shields</b> from argument types. Inference and autocompletion
            are default.
          </p>
        </>
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">💎 Schemaless by design</h2>
        <>
          <p className="leading-8">
            <b>The types are the contract.</b> Just import and call telefunctions like any other function. Telefunc does
            the rest.
          </p>
        </>
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">💫 Full-stack development</h2>
        <>
          <p className="leading-8">
            Iterate flexibly and rapidly. <b>Add telefunctions as you go,</b> instead of getting bogged down with a
            back-end API schema.
          </p>
        </>
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">⚡ Minimal footprint</h2>
        <>
          <p className="leading-8">
            Telefunc isn't just small, it lets you write small. <b>Send only the data you need</b> for optimal
            performance and security.
          </p>
        </>
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">🛡️ Separation of concerns</h2>
        <>
          <p className="leading-8">
            <b>Couple code, not environments.</b> Telefunctions let you call server-side tools like databases or
            third-party clients without worrying about the boilerplate.
          </p>
        </>
      </div>
      <div>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4">🔌 Framework agnostic</h2>
        <>
          <p className="leading-8">
            It works out-of-box with <b>Next.js, Nuxt, SvelteKit, Vike, and React Native</b>, as well as bundlers like
            Vite, Webpack, Babel, or Parcel.
          </p>
        </>
      </div>
    </div>
  )
}
