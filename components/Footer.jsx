import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { faFacebook,faTwitter,faYoutube,faLinkedIn,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar(){
    return (
        <div className="">
        <div className="flex flex-start justify-between bg-gray-900 text-white align-items p-2 font-Open-Sans">
            <img src="/logo.PNG"/>
            <div className="flex flex-grow justify-around max-w-md">
                <p><PhoneIcon className="w-5 h-5 inline"/>+769 586 4558</p>
                <p><MailIcon className="w-5 h-5 inline"/>service@openauto.ca</p>
            </div>
        </div>
        <div className="flex justify-between text-white bg-gray-900 p-2">
            <p>Open Auto @ all rights reserved</p>
            <div className="flex justify-around p-2 w-48">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faLinkedIn} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5"/>
            </div>
        </div>
        </div>
    )
}