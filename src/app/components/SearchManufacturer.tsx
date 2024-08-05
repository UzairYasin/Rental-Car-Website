"use client";
import { Combobox, Transition} from "@headlessui/react";
import { SearchManufacturerProps } from "../../../types"
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "../../../constants";

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {

  const [query, setQuery] = useState('');

  const filteredManufacrurers = query === "" ? manufacturers
  : manufacturers.filter((item) => (
    item.toLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase()
    .replace(/\s+/g, "")
    ))) 

  return (

<div className="search-manufacturer">
<Combobox value={manufacturer} onChange={setManufacturer}>

<div className="relative w-full">
<Combobox.Button className="absolute top-[14px]">
<Image
 src="/car-logo.svg"
 alt="Car Logo"
 width={20}
 height={20}
 className="ml-4"
 />
</Combobox.Button>
<Combobox.Input className="search-manufacturer__input"
placeholder="Manufacturer"
displayValue={(manufacturer:string) => manufacturer}
onChange={(e) => setQuery(e.target.value)}
 />
 <Transition
 as={Fragment}
 leave="transition ease-in duration-100"
 leaveFrom="opacity-100"
 leaveTo="opacity-0"
 afterLeave={() => setQuery('')}
 >
<Combobox.Options>
{
filteredManufacrurers.length === 0 && query !== "" ? (
  <Combobox.Option value={query} className="search-manufacturer__option">
    Create &quot;{query}&quot;
  </Combobox.Option>
):(
  filteredManufacrurers.map((item) => (
    <Combobox.Option
    key={item}
    value={item}
    className={({active}) => (
      `relative search-manufacturer___option ps-10 ${active ? 'bg-violet-800 text-white' : 'text-gray-900'} `
    ) } >
                   {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
  </Combobox.Option>
  ))
)}

</Combobox.Options>
 </Transition>
</div>  
</Combobox>
</div>
  )
}

export default SearchManufacturer
