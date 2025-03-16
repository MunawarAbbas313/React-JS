
function btn(props){
    // styeling using props
    const sty = {
        backgroundColor: props.bgColor,
        color: props.color,
        padding: props.padding,
        border: props.border,
        borderRadius: props.borderRadius,
        cursor: props.cursor
    }
    // here we have used arrow function 
    

     // Now 
     let DarkMode = false;
     const heading = "Dark mode Is ON";
     const heading2 = "Light Mode is ON ";

     const handleClick = ()=> {console.log( 'Button clicked')
        DarkMode = !DarkMode;

        DarkMode ? console.log(heading) : console.log(heading2);

        
     };
     
    return (
        <div>
            <button onClick={handleClick} style={sty}> {props.tit}</button>
        </div>
    )
}
export default btn;
