const Card = (props) =>{
    return(
        <div className="card">

            <div className="img">
                <img src={props.img} alt="card"/>
            </div>

            <div className="text">
                <p>{props.volume}</p>
                <h3>{props.heading}</h3>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

export default Card;