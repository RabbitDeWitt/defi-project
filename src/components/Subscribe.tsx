import { Button } from "../shared"

const Subscribe = () => {
  return (
    <section className="w-full bg-black text-white text-center px-4 py-16">
      <h2>Join Our DeFi Community</h2>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4 text-black"
          type="email"
          placeholder="Enter your email"
        />
        <Button>Sign Up</Button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input
          className="mr-2"
          type="checkbox"
        />
        <p>Yes, I agree to receive email communications from DeFi.</p>
      </div>
    </section>
  )
}

export default Subscribe