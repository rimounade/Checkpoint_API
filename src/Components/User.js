import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card,ListGroup } from "react-bootstrap"

const User = ()=>{
    const{id}=useParams()
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            {
            loading? 
            <h1>*****</h1> 
            :
            <>
            <Card style={{ width: '18rem' }}>
             <ListGroup variant="flush">
            <ListGroup.Item>{user.name}</ListGroup.Item>
            <ListGroup.Item>{user.email}</ListGroup.Item>
        
            </ListGroup>
            </Card>
            </> 
            }
        </div>
    )
}
export default User