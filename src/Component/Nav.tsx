import Buttonnav from "./Buttonnav"


export const Nav=()=> {
    return (
        <div className='flex flex-around gap-[275px] mt-5 bg-white mb-10'>
            <ul className=' flex flex-between text-decoration-none text-[#37447E] text-sm gap-[30px] ml-8'>
                <li><a href='#'>Home </a></li>
                <li><a href='#'>About </a></li>
                <li><a href='#'>Contact </a></li>            
            </ul>

            <div>
                <h3 className='text-[#37447E] font-semibold text-lg'>Landing</h3>
            </div>
            <div>
                 
                 <Buttonnav value="Buy Now"/>
            </div>
            

        </div>
    )
}
