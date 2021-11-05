

const HeaderOption = ({ Icon, title, selected }) => {
    return (
        <div className={`flex items-center space-x-1 bm-4 border-b-4 border-transparent hover:text-blue-500  hover:border-blue-500 cursor-pointer pb-2 ${selected && 'text-blue-500 border-blue-500' }`}>
            <Icon className="h-4 mt-1" />
            <p className="hidden sm:inline-flex">{title}</p>

        </div>
    )
}

export default HeaderOption
