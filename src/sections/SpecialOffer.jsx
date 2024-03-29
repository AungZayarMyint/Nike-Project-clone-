import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1">
        <img 
        src={offer}
        width={773}
        height={687}
        className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-8xl capitalize font-bold lg:max-w-lg">
          <span 
          className="text-coral-red">
           Special
          </span> Offers
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos dolorum similique commodi dolor. Rem praesentium aut autem animi neque!</p>
        <p className=" mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, consectetur?</p>
        <div className="mt-11 flex flex-wrap gap-4 font-bold w-[200px]">
          <Button  label="View Details"/>
          <Button
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          /> 
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer