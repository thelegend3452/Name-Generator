import { useState } from "react";

const Namegen = () => {
  const [name, setName] = useState("______");
  const [previous, setPrevious] = useState("______")

    const handlenamegen = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
        
        const randomName = `${data.results[0].name.first} ${data.results[0].name.last}`;        
        setName(randomName)
        setPrevious(name)
            

        } catch (error) {
            console.log("Failed to load names", {error})
        };
        
        
    }
    return (
        <div>
            <h1>{name}</h1>
            <button className="genbtn" onClick={handlenamegen}>
                Generate Name
            </button>
            <div className="Pre">
                
                {previous && <p className="pre">Previous Name: <strong>{previous}</strong>
                            </p>}
            </div>
        </div>
       
        
        
        
    )
}   
   

export default Namegen;