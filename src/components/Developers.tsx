import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <section className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h2>Superpowers for DEFI developers</h2>
          <p className='py-2'>
            Checkout the <span className="text-primary-blue">documentation</span>, the <span className="text-primary-blue">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <img
            className='max-w-[250px] shadow-lg shadow-cyan-500/50'
            src={terminal}
            alt="Terminal" />
        </div>
      </div>
    </section>
  )
}

export default Developers