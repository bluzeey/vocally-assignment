import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
export default function Navbar(){
    return (
        <div className="flex justify-between bg-gray-900 text-white align-items p-4 font-Open-Sans">
            <img src="/logo.PNG" className="xs:m-auto"/>
            <div className="xs:hidden sm:hidden md:flex flex-grow justify-around items-center max-w-2xl m-auto">
                <p><PhoneIcon className="w-5 h-5 inline"/>+769 586 4558</p>
                <p><MailIcon className="w-5 h-5 inline"/>service@openauto.ca</p>
                <a className="buttons">Download the mobile app</a>
            </div>
        </div>
    )
}