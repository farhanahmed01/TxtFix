import React from 'react'

function Alert(props) 
{
  const capitalize = (word) => 
    {
    const str = word.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  
    }
  return (

        props.alert && <div className="alert alert-success"  role="alert">
         {capitalize(props.alert.type)} : {props.alert.msg}
        
        </div>
    
  )
}

export default Alert