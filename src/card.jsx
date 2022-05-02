const Card = ({data,handleDelete}) => {
    return ( 
           data.map((user , i) => {
              const {name , email ,id} = user
                return (
                    <div key={id} className="card">
                      <img src={`https://robohash.org/bgset_bg2/${name}.png`} alt={`robot_${name}`} />
                      <div className="text-align">
                       <p><strong>{name}</strong></p>
                       <p>{email}</p>
                       <button onClick={() => {handleDelete(id)}}>Delete</button>
                      </div> 
                    </div> 
              )
        })
    )}
 
export default Card;