const Card = ({data,handleDelete}) => {
    return ( 
      <>
      { data.length > 0 ?
          ( data.map((user , i) => {
              const {name , email ,id} = user
                return (
                    <div key={id} className="card">
                      <img src={`https://robohash.org/bgset_bg2/${name}.png`} alt="robot" />
                      <div className="text-align">
                       <p><strong>{name}</strong></p>
                       <p>{email}</p>
                       <button onClick={() => {handleDelete(id)}}>Delete</button>
                      </div> 
                    </div> 
                )
            })
          ):
          <h3>Ooops!!No Such Robot Found</h3>
       }
      
      </>
        
            )}
 
export default Card;