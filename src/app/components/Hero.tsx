import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  return (
    <>
     <div className="hero overflow-hidden xl">
    <div className="flex-1 pt-32 padding-x">
      <h1 className="hero__title">
      Find, Book Or Rent A Car _ Quickly & Easily
      </h1>
      <p className="hero__subtitle">
        Streamline your car rental experience with our effortless booking process
      </p>
      <CustomButton title="Book Now" btnType="button" containerStyles="bg-gradient-to-r from-violet-700 to-violet-800 text-white rounded-full mt-10"  />
    </div>
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src='/hero.png' alt="Hero" fill className="object-contain " />
        </div>
        
        <div className="hero__image-overlay" />
      
    </div>
    </div> 
    </>
  )
}

export default Hero
