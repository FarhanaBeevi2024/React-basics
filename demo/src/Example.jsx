// type rfc + enter

import React, {useState} from 'react'

function Example({sub,age}) {

  const [concept, setConcept] = useState("react.js")
  console.log(concept);

  console.log({sub,age});

  //function without argument
  const buttonclick = ()=>{
    alert('button clicked')
  }

  //function with argument

  const addUser = (uname)=>{
    alert(`${uname} added successfully`)
  }

  const getName = (e)=>{
    console.log(e.target.value);
  }

  return (
    <>  
    <div>Example</div>
    {sub=='REACT'?
    <p className='text-primary'>data shared is : {sub} </p>
    :
    <p className='text-danger fs-3 fw-bolder'>data shared is not react</p>
  }
  {age==27 &&
    <p className='text-success fs-3'>data shared is : {age} </p>
    }
   
   <p>concepts initial value is : {concept} </p>
   <button className='btn btn-dark' onClick={()=> setConcept('nest.js')} >Click</button>

    <button className='btn btn-success'onClick={buttonclick}>Click</button>
    <button className = 'btn btn-primary ms-2' onClick={() => addUser('kevin')}>add</button>

    <div className = "d-flex mt-4">
      <input type="text" placeholder='course' className='form-control w-25' onChange={(e)=>getName(e)} />
      
    </div>
    </>
    
  )
}

export default Example

