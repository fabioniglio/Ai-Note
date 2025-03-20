import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header>
      <Link href="/">
      <Image src="/iconFabio.png" alt="Logo" height={60} width={60} className="rounded-full" priority/>
      </Link>
    </header>
  )
}

export default Header
