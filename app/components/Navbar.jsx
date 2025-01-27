import Link from 'next/link'
import Image from 'next/image'
import Logo from './anilabs_logo.png'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt='ComCom is the new Anilabs logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <Link href="/">
        <h1>Com com</h1>
      </Link>
      <Link href="/">Discover</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && <span>Hewwo, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}