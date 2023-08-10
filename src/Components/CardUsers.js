import { Card,ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
const CardUsers =({user})=>{
    
    return(
        <div className="card">
            <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{user.name}</ListGroup.Item>
        <ListGroup.Item><Link to={`/User/${user.id}`}>{user.username}</Link></ListGroup.Item>
        
      </ListGroup>
    </Card>
        </div>
    )
}
export default CardUsers