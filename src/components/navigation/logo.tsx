import Image from "next/image"

const Logo = () => {
  return (
    <a href='/'>
        <Image src="/logo.svg" alt="" width={160} height={40}/>
      
    </a>
  )
}

export default Logo
