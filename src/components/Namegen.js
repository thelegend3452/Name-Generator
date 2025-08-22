import { useState } from "react";

const Namegen = () => {
  const [name, setName] = useState("______");

    const handlenamegen = () => {
        const namelist = ["Marcus Bennett", "Sofia Delgado", "Ethan Carter", "Priya Sharma", "Lucas Moretti", "Mei Lin", "Alejandro Cruz","Hannah Wright", "Jamal Robinson", "Isabella Romano", "Arjun Patel", "Chloe Andersen","Dmitri Volkov", "Amina Hassan", "Gabriel Torres", "Yuki Tanaka", "Fatima Zahra", "Oliver Grant", "Leila Haddad", "Sebastian Fischer"]
        const random = Math.floor(Math.random()* namelist.length)
        setName(namelist[random])
    }
    return (
        <div>
            <h1>{name}</h1>
            <button className="genbtn" onClick={handlenamegen}>
                Generate Name
            </button>
        </div>
    )
}   
   

export default Namegen;