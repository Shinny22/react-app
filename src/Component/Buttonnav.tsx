

interface Props {
    
    value:string
}

const Buttonnav = (props: Props) => {
    return (
        <div>
            <button className='bg-[#111B47] font-thin text-white py-1/2 px-10' >{props.value}</button>

        </div>
    )
}

export default Buttonnav
