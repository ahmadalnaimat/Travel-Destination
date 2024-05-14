import './Tours.css'
import Tour from './tour/Tour'
const data= require("../../data/db.json")
function Tours() {
    return(     
        <>
        <div className="superContainer">
            {data.map(city => (
                <Tour id={city.id} name={city.name} image={city.image} />
        ))}
        </div>
        </>    
    )
}
export default Tours