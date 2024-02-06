import { useEffect, useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("pizza");

    useEffect(() => {
      function demo() {
      console.log("Demo function executed")  
      }  
      demo();
    }, [query]);
     return (
        <div>
            <input value={query} 
            onChange={(e) =>setQuery(e.target.value)} type="text" 
            />
        </div>
     )
}