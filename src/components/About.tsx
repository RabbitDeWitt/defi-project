import { cards } from "../constants"
import { Button } from "../shared"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <section className="bg-black text-white w-full text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h2 className="py-4">A Growing Protocol Ecosystem</h2>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open and accessible to all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ id, icon, title, description }) => (
            <AboutCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
        <Button className="mt-8">Use Defi</Button>
      </div>
    </section>
  )
}

export default About