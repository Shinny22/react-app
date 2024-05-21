

interface Props {
    
    icon:string,
    // title:string,
    // content:string

}

export const Icon = (props: Props) => {
    return (
        <div >
            <div>< img src={props.icon}/></div>
            {/* <div>{props.title}</div>
            <div>{props.content}</div> */}
            
        </div>
    )
}
