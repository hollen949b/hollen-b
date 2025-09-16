export const Template = ({
    name,
    message
}:{
    name: string; 
    message:string;  
}) => {
    return(
        <div>
            <strong>From:</strong> {name}<br />
            <strong>Message:</strong><br /> 
            {message}
        </div>
    )
}