import { footerLists } from "../constants"

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-16">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5">
        {footerLists.map(({ id, title, links }) => (
          <div key={id}>
            <h3 className="font-bold text-xl border-b-2 border-primary-blue inline-block my-4">
              {title}
            </h3>
            <ul>
              {links.map((link, index) => (
                <li
                  className="cursor-pointer hover:text-primary-blue duration-300"
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer