import { useState ,useEffect } from 'react'
import './App.css'
import Cardlist from './cardlist'
import './cardlist.style.css'
import Loader from './loading'
import SearchBox from './searchbox'



function App(){
  const[query , setQuery] = useState("")
  const[robots ,setRobot] = useState([])
  const[isPending ,setisPending] = useState(true)


  const url = `http://localhost:8080/robots/${query}`
  
  const fetchData = async () => {
    setisPending(true)
    const response = await fetch(url);
    const res = await response.json()
    setisPending(false)
    setRobot(res)
    
  } 

  useEffect(() => {
   setTimeout(() => {
    fetchData()
   },5000)
  }, []);
 

   const handleSearch = ({target})=> {
    setQuery(target.value)      
   }
   
   const filteredRobots = robots.filter((user) => {
    return (user.name.toLowerCase().includes(query.toLowerCase()))
    })
   
    const handleDelete = (id) => {
     const newRobots = robots.filter( user => user.id !== id )
      setRobot(newRobots)
   
    };


  return (
    <div>
      <h1>Monster Rolodex</h1>
      <SearchBox handleSearch={handleSearch} />
     {!isPending ? <Cardlist users={filteredRobots} handleDelete={handleDelete}  /> : <Loader type="cylon" color="brown" /> }
    </div>
  )
    
  
}

export default App
