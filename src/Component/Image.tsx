
interface Props {
    image:string
    value:string
}

const Image = (props: Props) => {
    return (
        <div>

            <img src={props.image} alt={`${props.value} ` }/>
            
        </div>
    )
}

export default Image
