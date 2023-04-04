import { IconType } from "react-icons"

type Props = {
  icon: IconType,
  title: string,
  description: string
}

const AboutCard = ({ icon, title, description }: Props) => {
  const cardIcon = (Icon: IconType) => <Icon className="text-black" size={25} />
  return (
    <article className="border text-left rounded-2xl py-12 px-8">
      <div className="bg-primary-blue inline-flex p-3 rounded-full">
        {cardIcon(icon)}
      </div>
      <h3 className="text-xl font-bold py-4">{title}</h3>
      <p>
        {description}
      </p>
    </article>
  )
}

export default AboutCard