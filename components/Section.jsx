export default function Section(){
    return (
        <div className="xs:flex flex-col xs:text-center md:flex-row md:text-left justify-around items-center bg-gray-900 text-white font-Open-Sans p-4">
           <img className="p-2 max-w-md" src="pickuservice.png"/>
           <div className="p-2 max-w-lg">
            <h1 className="text-4xl font-bold mb-8">Focused on Time Saving</h1>
            <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="buttons">Download the mobile app</button>
           </div>
           <hr/>
        </div>
    )
}