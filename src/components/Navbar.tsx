import { useState } from "react"
import { Button } from "../shared"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { navLinks } from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <header className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <>
          <h1 className="text-primary-blue cursor-pointer">Defi</h1>
        </>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            {navLinks.map(({ id, name }) => (
              <li key={id} className='p-4 cursor-pointer'>{name}</li>
            ))}
            <Button className="m-4">Use Defi</Button>
          </ul>
        </div>

        <div onClick={() => setToggle(prev => !prev)} className="block md:hidden text-white">
          {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div className={toggle ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center duration-300' : 'absolute left-[-100%]'}>
          <ul>
            {navLinks.map(({ id, name }) => (
              <li key={id} className='p-4 text-2xl'>{name}</li>
            ))}
            <Button className="m-8">Use Defi</Button>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar