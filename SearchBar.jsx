import { useState } from "react"

export default function SearchBar({onSearch}){
   const[id, setId] = useState('');

   const handlechange = (event) => {
      setId(event.target.value)
   }

   return(
      <div>
         <input type="search"onChange={handlechange} value={id}/>
         <button onClick={()=> {onSearch(id), setId =('')}}>Agregar</button>
      </div>
   )
}
 