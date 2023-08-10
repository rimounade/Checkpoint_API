import axios from "axios"
import { useEffect, useState } from "react"
import CardUsers from "./CardUsers"

const ListUsers =()=>{
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div className="liste">
            {
              loading? <h1>*****</h1> : user.map((user,i,t)=> <CardUsers user={user}/>)
            }
        </div>
    )
}
export default ListUsers