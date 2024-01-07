import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-8xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <br />
          <span 
          className="text-coral-red">
           Super
          </span>
          <span 
          className="text-coral-red">
           Quality
           <br />
          </span>
           Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos dolorum similique commodi dolor. Rem praesentium aut autem animi neque!</p>
        <p className=" mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quos soluta eius temporibus numquam distinctio. Numquam hic ab repellat magnam!</p>
        <div className="mt-11 flex flex-wrap gap-4 w-[200px]">
          <Button  label="Shop now"
          iconURL={arrowRight}/>
          <Button
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          />  
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className=" object-contain" />
      </div>
    </section>
    )
}

export default SuperQuality