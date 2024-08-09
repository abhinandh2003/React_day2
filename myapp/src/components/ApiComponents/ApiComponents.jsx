import React,{useEffect, useState} from 'react' //use ettect can be used for 
import axios from 'axios' //import axios for api
const ApiComponents = () => {
    const [count,setCount]=useState(0)
    const [state,setstate]=useState(false)
    const [array,setArray]=useState('')
    const [text,setText]=useState('')
    const [clear,setClear]=useState('')
    useEffect(()=>{
    seen()
        
    },[count]) //if the empty array given the content in use case will work during loading the page
    const seen=async()=>{
        const names= await axios.get('https://jsonplaceholder.typicode.com/comments')
        console.log(names.data)
        setClear(names.data)

    }
    const come =async()=>{
        const adress = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(adress.data)
        setText(adress.data)
        
    }
    const call =  async() =>{

      const data =await  axios.get('https://jsonplaceholder.typicode.com/user')
    console.log(data.data)
    setArray(data.data)
}
    const add =() =>{
    setCount(count+1)
    setstate(!state)
   }
    return ( 
    <div class="zero">
    <div class="first">GOOD BOY       <br/>
    {count}<br/><br/>

   <button class="button"  onClick={add}>ADD</button>
   {clear?clear.map((item,index)=>{
    return(
        <div>{item.username }</div>
    )
   }):""} </div></div>
  )
}

export default ApiComponents