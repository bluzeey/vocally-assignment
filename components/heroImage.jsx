export default function HeroImage(){
    return (
        <div classname="flex flex-row">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold">
                    {`Vehicle Maintainance 
                    From the Comfort of 
                    Your Home`}
                </h1>
                <p className="text-gray-600">Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry free.</p>
                <form className="flex flex-col max-w-md">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="text" placeholder="Enter Your Email"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <img className="max-w-lg" src="/pi.png" alt="The image"/>
        </div>
    )
}