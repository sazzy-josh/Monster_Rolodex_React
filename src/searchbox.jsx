
const SearchBox = ({handleSearch}) => {
     
    return (  
     <div className="Search">
        <input
          type="search" 
          name="text"
          placeholder="Search Robots...."
          onChange={handleSearch}
        />
     </div>
    );
}
 
export default SearchBox;