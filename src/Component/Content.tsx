import React from 'react';


type Props={

image:string,
text:string,
content:string

}

const Content:React.FC<Props>=(props:Props)=>{


    return (

        
            <div className="flex flex-between mb-2 bg-[url('asset/Path.png')]">
                <div className="w-150 h-100 ">
                    <img src={props.image} alt="Menu item" />
                </div>

                <div className="text-black text-center font-thin w-[50%] pt-"> 
                    {props.text} 
                    {props.content} 
                </div>
                
            </div>
                    )
   
}






    
export default Content;
