import PropTypes from 'prop-types'

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

Card.propTypes = {
  img: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;