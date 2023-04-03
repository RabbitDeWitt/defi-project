
type Props = {
  children: React.ReactNode,
  className?: string
}

const Button = ({ children, className }: Props) => {
  return (
    <button className={`bg-gradient-to-r from-primary-purple to-primary-blue py-2 px-7 rounded-3xl ${className}`}>
      {children}
    </button>
  )
}

export default Button