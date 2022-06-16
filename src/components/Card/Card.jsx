import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Link to={props.link}>
                <img className="card-image" src={props.image} alt={props.name} />
            </Link>
            <div className="card-body">
                <h5 className="card-name">{props.name}</h5>
                <p className="card-team"> Club: {props.team} </p>
                <p className="card-position">Position: {props.position}</p>
                <p className="card-number"> Number: {props.number}</p>
            </div>
        </div>
    )
}

export default Card

// `/footballers/${props.id}`
