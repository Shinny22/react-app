

interface Props {
    
   title:string,
   content:string
}

export const Text = (props: Props) => {
   
    return (
    
        <div className="w-[495px] flex flex-col gap-2 items-start ml-5 pt-20 relative z-10 p-10">
            <h1 className='text-3xl text-justify'>{props.title}</h1>
             <p className='text-sm font-thin text-justify '>{props.content}</p>
             <div className="flex gap-3 mt-5 ">
             <button className='bg-[#111B47] text-white py-1/2 px-10' >Purchase UI Kit</button>
             <button className=' bg-white  border-2 border-[#111B47] text-[#111B47] py-1/2 px-10' >Lear More</button>

             </div>
            
            
            
        </div>

    )
   
}

export default Text;