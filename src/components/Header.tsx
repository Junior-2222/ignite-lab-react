import { Logo } from "./Logo";

export function Header(){
    return(
        <header className='w-full py-[20rem] flex items-center justify-center bg-colorBars border-b-[1rem] border-colorBorder'>
            <Logo />
        </header>
    )
}