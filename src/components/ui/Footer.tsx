import Image from "next/image";
import Link from "next/link";
import {
  FaRegCopyright,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date();
  return (
    <footer className="footer flex flex-col">
      {/* contact banner */}
      <div className="py-16 bg-[#261859] flex md:flex-row sm:flex-col xs:flex-col justify-around md:gap-x-4 sm:gap-y-4 xs:gap-y-4">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-5xl text-[#389567]" />
          <span>
            <h1 className="text-2xl text-slate-400">Email</h1>
            <Link href="mail:contact@w3stackstudio.com" className="text-white">
              contact@w3stackstudio.com
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-5xl text-[#389567]" />
          <span>
            <h1 className="text-2xl text-slate-400">Phone</h1>
            <Link href="tel:7903473767" className="text-white">
              +91 7903473767
            </Link>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-5xl text-[#389567]" />
          <span>
            <h1 className="text-2xl text-slate-400">Address</h1>
            <Link href="mail:contact@w3stackstudio.com" className="text-white">
              VVIP Homes, Gaur City 2, Noida - 201301, U.P. India
            </Link>
          </span>
        </div>
      </div>
      {/* Bottom branding */}
      <div className="flex md:flex-row sm:flex-col xs:flex-col justify-center items-center gap-4 py-5">
        <span>
          <Image
            src="/images/logos/w3-text.png"
            width={330}
            height={40}
            alt={""}
          />
        </span>
        <span className="md:block sm:hidden xs:hidden">
          <h1 className="text-4xl">|</h1>
        </span>
        <span>
          <div>
            <h1 className="text-2xl">
              A Contract Software Development Company
            </h1>
            <small className="flex items-center gap-1">
              <span>Copyright</span>
              <FaRegCopyright />
              <span>2014 - {year.getFullYear()}</span>
            </small>
          </div>
        </span>
      </div>
    </footer>
  );
}
