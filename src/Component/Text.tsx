

interface Props {
    
   title:string,
   content:string
}

export const Text = (props: Props) => {
   
    return (
    
        <div className='flex flex-col gap-2 items-center text-wrap'>
            <h1 className='text-3xl text-center'>{props.title}</h1>
             <p className='text-sm font-thin text-center '>{props.content}</p>
            
        </div>

    )
   
}

export default Text;