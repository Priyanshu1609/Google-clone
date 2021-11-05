
import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon, } from '@heroicons/react/solid'
const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 text-sm justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-40 border-b-[1px]">
            <div className="flex space-x-6 mr-11 ">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images"  />
                <HeaderOption Icon={PlayIcon} title="Vidoes"  />
                <HeaderOption Icon={NewspaperIcon} title="News"  />
                <HeaderOption Icon={MapIcon} title="Maps"  />
                <HeaderOption Icon={DotsVerticalIcon} title="More"  />
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>

    )
}

export default HeaderOptions