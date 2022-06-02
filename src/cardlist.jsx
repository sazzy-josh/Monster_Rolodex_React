import Card from "./card";
import './cardlist.style.css'



const Cardlist = ({users,handleDelete}) => {
    return (  
        <div>
        {users && <>
            {users.length > 0 ? <div className="cardlist"><Card data={users} handleDelete={handleDelete} /></div> :
        <div className="error"> <h3 className="center-text">Ooops!! 😯 Couldn't Find Such Robot</h3></div>
         }
        </> }
        </div>
        
    );
}
 
export default Cardlist;
