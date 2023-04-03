import heroVid from '../assets/video.mp4'
import { Button } from '../shared'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h2>Decentralized</h2>
        <h2 className='py-2'>
          <span className='text-primary-blue'>Trading</span> Protocol
        </h2>
        <p className='text-xl py-4'>
          Guaranteed liquidity trading for millions of users and top Ethereum applications.
        </p>
        <div>
          <Button className='m-2'>Use Defi</Button>
          <Button className='m-2 uppercase'>Faq</Button>
        </div>
      </div>

      <p className='text-center text-white text-2xl font-bold'>
        Total Volume Secured: $42,104,783,662.47
      </p>

    </div>
  )
}

export default Hero