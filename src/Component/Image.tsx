
interface Props {
    image:string
    value:string
}

const Image = (props: Props) => {
    return (
        <div className="w-[390px] h-[390px]">

            <img src={props.image} alt={`${props.value} ` }/>
            
        </div>
    )
}

export default Image
