const Works = () => {
    return (
        <div className="container h-screen bg-slate-500">
            <div>
                <div className="text-center pt-36 bg-orange-500 w-3/6 m-auto">
                    <h1 className="text-[45px] text-gradient font-Sora-bold w-full">My Recents Works</h1>
                    <p className="pt-9 font-Sora-medium size-4 content-center w-full text-[#dddddd]">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                </div>
                <nav className="mt-20 bg-[#050709] w-80 m-auto  rounded-full px-[6px] py-[8px]">
                    <ul className="flex justify-between text-center items-center  text-[#dddddd] font-Sora-medium text-[15px] ">
                        <li className="">
                            <button className=" px-4 py-[6px] bg-slate-500  rounded-full ">All</button>
                        </li>
                        <li><button className=" px-4 py-[6px] bg-slate-500  rounded-full ">Branding</button></li>
                        <li><button className=" px-4 py-[6px] bg-slate-500  rounded-full ">Apps</button></li>

                    </ul>
                </nav>
            </div>


        </div>
    );
}

export default Works;