import Buttonnav from "./Buttonnav"

export const Nav = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-[275px] mt-5  mb-10 px-4 md:px-8'>
            <ul className='flex flex-col md:flex-row items-center text-decoration-none text-[#37447E] text-sm gap-5 md:gap-[30px]'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>            
            </ul>

            <div className='mt-3 md:mt-0'>
                <h3 className='text-[#37447E] font-semibold text-lg'>Landing</h3>
            </div>
            <div className='mt-3 md:mt-0'>
                <Buttonnav value="Buy Now"/>
            </div>
        </div>
    )
}

export default Nav;
