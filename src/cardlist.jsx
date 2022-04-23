import Card from "./card";
import './cardlist.style.css'



const Cardlist = ({users,handleDelete}) => {
    return (  
        <div className="cardlist">
         <Card data={users} handleDelete={handleDelete} />
        </div>
        
    );
}
 
export default Cardlist;
