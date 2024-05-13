import './Tours.css'
const data= require("../../data/db.json")
function Tours() {
    return(
        data.map(items=>{
            return(
            <div key={items.id}>
                <h3>{items.name}</h3>
                <img src={items.image} alt="something is wrong"/>
                <hr/>
            </div>
        )})
    )
}
export default Tours