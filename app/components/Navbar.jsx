import Link from 'next/link'
import Image from 'next/image'
import Logo from './anilabs_logo.png'
import LogoutButton from './LogoutButton'

import { PiBookmarkSimpleBold } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";

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
        <Link href="/PageInProgress">
          <PiBookmarkSimpleBold
            className="object-contain shrink-0 self-stretch my-auto hover:text-gray-700"
            size={24}
          />
        </Link>
        <Link href="/PageInProgress">
          <FiUser
            className="object-contain shrink-0 self-stretch my-auto hover:text-gray-700"
            size={24}
          />
        </Link>
        <div className="shrink-0 self-stretch my-auto w-0 h-6 border border-solid bg-stone-900 border-stone-900" />
        <Link href="/PageInProgress">
          <IoFilterSharp
            className="object-contain shrink-0 self-stretch my-auto hover:text-gray-700"
            size={24}
          />
        </Link>
        {user && <span>Hewwo, {user.email}</span>}
        <LogoutButton />
      </div>
    </nav>
  )
}