import { logo } from "../assets";

const Sidebar = () =>{
    return(
        <div className="h-screen w-[224px] flex flex-col justify-between text-white bg-[#1E2640]">
            <div className="flex flex-row gap-3">
                <img src={logo}  className="w-12"/>
                <div className="flex flex-col gap-1">
                    <p className="md text-lg"> Nishyan</p>
                    <p className="text-xs">View Store</p>
                </div>
            </div>
            <div className="flex-1">
                top
            </div>
            <div>
                bottom
            </div>
        </div>
    )
}

export default Sidebar;