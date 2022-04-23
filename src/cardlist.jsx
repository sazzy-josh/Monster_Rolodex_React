import Card from "./card";
import './cardlist.style.css'



const Cardlist = ({users,handleDelete}) => {
    return (  
        <div className="cardlist">
        {users && <>
            {users.length > 0 ?<Card data={users} handleDelete={handleDelete} /> :
         <h3>Ooops!! 😯 Couldn't Find Such Robot</h3>
         }
        </> }
        </div>
        
    );
}
 
export default Cardlist;
