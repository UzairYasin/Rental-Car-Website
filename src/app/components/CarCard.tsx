"use client";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { CarCardProps } from "../../../types";
import { calculateCarRent, generateCarImageUrl } from "../../../utils";
import CarDetails from "./CarDetails";

interface CarProps {
    car: CarCardProps
}

const CarCard = ({car}: CarProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    const carRent = calculateCarRent(city_mpg, year);

const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
        <div className="car-card__content">
        <h2 className="car-card__content-title">
            {make} {model}
        </h2>

    </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-medium">
                $
            </span>
            {carRent}
            <span className="self-end text-[14px] font-medium">
            /day
            </span>
        </p>
        
        

<div className="relative w-full h-40 my-3 object-contain">
    <Image 
    src={generateCarImageUrl(car)}
    fill priority
    className="object-contain"
    alt="car model"
    />
</div>

<div className="relative flex w-full mt-2">
    <div className="flex group-hover:invisible w-full justify-between text-gray">
        <div className="flex flex-col justify-center items-center gap-2">
            <Image
            src='/steering-wheel.svg'
            width={20}
            height={20}
            alt="Steering Wheel"
            />
            <p className="text-[14px] car-card__icon-text">
                {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
        </div>

<div className="car-card__icon">
<Image
            src='/tire.svg'
            width={20}
            height={20}
            alt="Tire"
            />
            <p className="car-card__icon-text text-[14px]">
                {drive.toUpperCase()}
            </p>
</div>

<div className="car-card__icon">
<Image
            src='/gas.svg'
            width={20}
            height={20}
            alt="gas"
            />
            <p className="text-[14px] car-card__icon-text">
                {city_mpg}MPG
            </p>
</div>

    </div>


<div className="car-card__btn-container">
    <CustomButton
    title="View More"
    btnType="button"
    containerStyles="w-full py-[16px] rounded-full bg-gradient-to-r from-violet-700 to-violet-800"
    textStyles = "text-white text-[14px] leading-[17px] font-semibold"
    rightIcon = "/right-arrow.svg"
    handleClick={ () => setIsOpen(true)}
    />
    
</div>
</div>

<CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard
