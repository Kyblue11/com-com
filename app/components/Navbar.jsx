import Link from 'next/link'
import Image from 'next/image'
import Logo from './anilabs_logo.png'
import LogoutButton from './LogoutButton'

import { PiBookmarkSimpleBold } from "react-icons/pi";

export default function Navbar({ user }) {
return (
  <nav className="flex flex-wrap gap-5 justify-between w-full max-w-[1248px] max-md:max-w-full">
    <div className="flex flex-wrap gap-10 whitespace-nowrap max-md:max-w-full">
      <div className="text-2xl basis-auto text-stone-900">ComCom</div>
      <div className="flex flex-auto gap-10 items-start my-auto text-lg font-medium text-stone-900 text-opacity-50">
        <Link href="/" className="text-stone-900">Home</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/artists">Artists</Link>
      </div>
    </div>
    <div className="flex gap-10 items-center self-start mt-1">
      <PiBookmarkSimpleBold
          className="object-contain shrink-0 self-stretch my-auto"
          size={22}
        />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/97e04eece18ef753b843c79800bfca7ebd4a798b8b9c4f596fe361bf1a14ff56?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
        alt="User"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      <div className="shrink-0 self-stretch my-auto w-0 h-6 border border-solid bg-stone-900 border-stone-900" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5090d31901e37d651a37c88659decbcd3722fe0ec65a8a01567b8357be047f67?placeholderIfAbsent=true&apiKey=caa0fab17ad04eae8822654d11ffb6b0"
        alt="Filter"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
      {user && <span>Hewwo, {user.email}</span>}
      <LogoutButton />
    </div>
  </nav>
)
}