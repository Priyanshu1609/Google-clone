import React from 'react'
import { GlobeIcon, GlobIcon } from '@heroicons/react/solid'

const Footer = () => {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
            <div className="flex px-8 py-3 justify-center">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 grid-flow-row-dense">
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
                    <GlobeIcon className="h-5 mr-1 text-green-700" /><p>Carbon neutral since 2007</p>
                </div>
                <div className="flex justify-center space-x-8 whietespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How search works</p>
                </div>
                <div className="flex justify-center space-x-8 whietespace-nowrap md:ml-auto">
                    <p>Privacy </p>
                    <p>terms </p>
                    <p>settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
