import React from "react";
import { useState } from "react";

const Order = () => {
    const [names, setOrder] = useState([
        "Marcus Bennett",
        "Sofia Delgado",
        "Ethan Carter",
        "Priya Sharma",
        "Lucas Moretti",
        "Mei Lin",
        "Alejandro Cruz",
        "Hannah Wright",
        "Jamal Robinson",
        "Isabella Romano",
        "Arjun Patel",
        "Chloe Andersen", 
        "Dmitri Volkov",
        "Amina Hassan",
        "Gabriel Torres",
        "Yuki Tanaka",
        "Fatima Zahra",
        "Oliver Grant",
        "Leila Haddad",
        "Sebastian Fischer"
    ]);

    const shuffleorder = (array) => {
        let newarray = [...array]
        for(let i = newarray.length - 1; i >0; i-- ) {
            const j = Math.floor(Math.random() * (i+1));
            [newarray[i], newarray[j]] = [newarray[j], newarray[i]];
        }
        return newarray
    }

    const handleorder = () => {
        setOrder(shuffleorder(names))
    }
    return (
        <div>
            <ol>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ol>

            <button className="orderbtn" onClick={handleorder}>
                Shuffle Names
            </button>
        </div>
    )
}

export default Order;