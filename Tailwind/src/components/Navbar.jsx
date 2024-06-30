import { useState } from "react"
import { navItems } from "../Constant/constant"
import hamburgerMenu from "../assets/images/hamburgerMenu.png"

const NavbarCaption = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className=" relative z-10 ">
            <nav className="container mx-auto md:px-20 py-6 px-4" >
                <div className="flex justify-between items-center">
                    <a className="text-[32px] font-bold text-amber-900" href="#">Collers</a>
                    <ul className="flex items-center gap-4 max-lg:hidden">
                        {navItems.map((item) => (
                            <li className="py-3 px-2 text-amber-900 text-base font-medium " key={item.label}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                        <button className="sign-up-button">Sign up now</button>
                    </ul>
                    <div className='block cursor-pointer lg:hidden'>
                        <img src={hamburgerMenu} alt='hamburger-icon' width={25} height={25} onClick={openMenu} />
                    </div>
                </div>
                {isOpen ? (
                    <div className="flex flex-col justify-center items-center text-center">
                        <ul className="hidden max-lg:block">
                            {navItems.map((item) => (
                                <li className="py-3 px-2 text-amber-900 text-base  font-medium " key={item.label}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                            <button className="sign-up-button">Sign up now</button>
                        </ul>
                    </div>
                ) : null}
            </nav>
        </header >
    )
}
export default NavbarCaption