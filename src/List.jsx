import React,{useState,useEffect} from 'react'
import CitiesList from './CitiesList'

const List = () => {
    const [statesList,setStatesList] = useState(null)
  const[stateId,setStateId] = useState(null)
  const [stateName,setStateName] = useState("")
  const [displayCitiesList, setDisplayCitiesList] = useState(false)

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('http://api.minebrat.com/api/v1/states')
      const data = await response.json()
      console.log(data)
      setStatesList(data)
    }
    fetchData()
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault()
    let temp
    if(setStateName){
        temp = statesList.filter((item)=>{
           return item.stateName=== stateName
        })
        setStateId(temp[0].stateId)   
        setDisplayCitiesList(true) 
    }
    
  }
  return (
    <div>
         <form>
          <select onChange={(e)=>{console.log(e);
          console.log(e.target.value);
          setStateName(e.target.value)
        }}>

{statesList && statesList.map((state)=>{
    return(
        <option key={state.stateId}>{state.stateName}</option>
    )
})}
          
          </select>
          <button onClick={handleSubmit}>
            submit
          </button>
        </form>
        <div>
        {displayCitiesList && <CitiesList stateName={stateName} stateId={stateId}/>}
        </div>
    </div>
  )
}

export default List