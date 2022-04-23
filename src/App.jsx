import { useState ,useEffect } from 'react'
import './App.css'
import Cardlist from './cardlist'
import './cardlist.style.css'
import SearchBox from './searchbox'


function App(){
  const[query , setQuery] = useState("")
  const[robots ,setRobot] = useState([])
  const[isPending ,setisPending] = useState(true)
  const[error ,setError] = useState(null)


  const url = `http://localhost:8080/robots/${query}`
  
   useEffect(() => {
   fetch(url)
   .then(res => {
     return res.json() 
   })
   .then(data => {
     if(data.length < 0){
       throw Error('Data not Found')
     }
     setRobot(data)
   }).catch(e => {
    setError(e.response)

   })
    
  }, []);

   const handleSearch = ({target})=> {
    setQuery(target.value)      
   }
   
   const filteredRobots = robots.filter((user)=>{
    return (user.name.toLowerCase().includes(query.toLowerCase()))
    })
   
    const handleDelete = (id) => {
     const newRobots = robots.filter( user => user.id !== id )
      setRobot(newRobots)
   
    };


  return (
    <div>
      <h1>Monster Rolodex</h1>
      {error && <div className='Error'><h3>{error}</h3></div>}
      <SearchBox handleSearch={handleSearch} />
      {robots && <Cardlist users={filteredRobots} handleDelete={handleDelete}  />}
    </div>
  )
    
  
}

export default App
