import  { useRef } from 'react'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import { XIcon, MicrophoneIcon, } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white ">
            <div className="flex w-full p-6 items-center ">
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    height={40}
                    width={120}
                    alt="img"
                    onClick={() => {
                        router.push('/')
                    }}
                />
                <form className="flex flex-grow border border-gray-300 rounded-full shadow-lg max-w-2xl px-6 py-2 ml-10 mr-5 items-center">
                    <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none" />
                    <XIcon onClick={() => (searchInputRef.current.value = "")} className="h-7 mr-2 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125" />
                    <MicrophoneIcon className="h-6 mr-3  cursor-pointer
                text-blue-500 border-l-2 pl-4 border-gray-300  hidden sm:inline-flex "/>
                    <SearchIcon className="h-6  cursor-pointer
                text-blue-500  hidden sm:inline-flex "/>
                    <button type="submit" hidden onClick={search}></button>
                </form>
                <Avatar className="ml-auto"url={'https://yt3.ggpht.com/yti/APfAmoFlAZQP8nq4GypRzLQMoACkXlO8VK_pJqGLyCKufQ=s88-c-k-c0x00ffffff-no-rj-mo'} />
            </div>
            <HeaderOptions/>
        </header>
    )
}

export default Header
