import Image from "next/image"
import { footerLinks } from "../../../constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>

      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 md:ms-5">
          <Image
            src="/car-logo.png"
            alt="Car Logo"
            width={118}
            height={20}
            // style={{"width":"150px", "height":"80px"}}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Hub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">

          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>{item.title}</Link>
              ))}
            </div>
          ))}

        </div>

      </div>

      <div className="flex justify-between item-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="footer__copyrights-link">
          <p> @2024 CarHub. All Rights Reserved</p>
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>

        </div>
      </div>

    </footer>
  )
}

export default Footer
