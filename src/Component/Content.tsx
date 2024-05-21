import React from 'react';


type Props={

image:string,
text:string,
content:string

}

const Content:React.FC<Props>=(props:Props)=>{


    return (

        
            <div className="flex flex-between mb-2 gap-[75px] pt-10">
                <div className="w-[350px] h-[300px] gap-5 ml-10 mt-10 ">
                    <img className='hover:shadow-lg hover:shadow-[#37447E] rounded-lg' src={props.image} alt="Menu item" />
                </div>

                <div className="text-black text-center font-thin w-[50%] pl-[100px] pt-20 mt-10"> 
                   <h1 className='text-2xl font-semibold text-[#091133] mb-5'>{props.text} </h1>
                    <p>{props.content}</p> 
                </div>
                
            </div>
                    )
   
}






    
export default Content;
