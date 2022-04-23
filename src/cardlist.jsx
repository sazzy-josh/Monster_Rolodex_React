import Card from "./card";
import './cardlist.style.css'



const Cardlist = ({users,handleDelete}) => {
    return (  
        <div className="cardlist">
         {data.length > 0 ?<Card data={users} handleDelete={handleDelete} /> :
         <h3>No data</h3>
         }
        </div>
        
    );
}
 
export default Cardlist;
