import { faFacebook,faTwitter,faYoutube,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase'
export default function HeroImage(){
    const [login,setLogin]=useState({name:'',email:''})
    const onSubmit=async(e)=>{
        e.preventDefault()
        const collectionRef=collection(db, "login")
        console.log(collectionRef)
        const docRef=await addDoc(collectionRef,{...login})
        console.log(docRef)
        setLogin({name:'',email:''})
        alert('Your details are saved')
    }
    return (
        <>
        <div className="xs:flex flex-col m-auto md:flex-row  justify-around items-center bg-gray-900 text-white font-Open-Sans p-4">
            <div className="flex flex-col m-2">
                <h1 className="text-4xl font-bold mb-8">
                    Vehicle Maintainance <br/>
                    From the Comfort of <br/>
                    Your Home
                </h1>
                <p className="text-gray-600 mb-8">Open Auto Soothes the hassle of maintaining your vehicle and <br/>helps you deal with unexpected repairs worry-free.</p>
                <form className="xs:flex flex-col w-full md:w-2/3" onSubmit={onSubmit}>
                    <input type="text" className="fields" placeholder="Enter Your Name" value={login.name} onChange={(e)=>setLogin({...login,name:e.target.value})}/>
                    <input type="text" className="fields" placeholder="Enter Your Email" value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})}/>
                    <button className="buttons hover:bg-purple-700" type="submit">Submit</button>
                </form>
            </div>
            <img className="xs:w-3/4 md:w-full max-w-lg" src="/pi.png" alt="The image"/>
        </div>
        <div className="bg-gray-900 flex justify-between items-center p-2 text-white">
            <p className="text-gray-900 xs:hidden md:inline">a</p>
            <img src="./arrow.PNG" className="hover:rotate-180 duration-300 cursor-pointer xs:hidden md:inline m-auto"/>
            <div className="flex flex-end justify-around p-2 w-48 xs:m-auto md:m-0">
                <FontAwesomeIcon icon={faFacebook} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faYoutube} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5"/>
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5"/>
            </div>
        </div>
        </>
    )
}