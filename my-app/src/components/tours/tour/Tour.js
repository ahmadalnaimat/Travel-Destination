import { Link } from 'react-router-dom';
import './Tour.css';

export default function Tour(props) {
    return(
        <div key={props.id} >
            <Link to={`/city/${props.id}` }style={{ textDecoration: 'none' }}>
                <div className='container-card'>
                    <h3 className='tour-name'>{props.name}</h3>
                    <img src={props.image} alt={props.name} className="tour-image" />
                </div>
            </Link>
        </div>
    )
}