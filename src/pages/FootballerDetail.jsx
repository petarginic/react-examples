import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../data.json'

const FootballerDetail = () => {
    const { id } = useParams()

    const [footballers, setFootballers] = useState([])

    useEffect(() => {
        setFootballers(data.footballers)
    }, [])

    const footballerDetails = footballers.find((footballer) => footballer.id === Number(id))

    if (footballerDetails === undefined) {
        return <div>loading...</div>
    }

    return (
        <div className="container footballer-details">
            <img src={footballerDetails.back_image} alt={footballerDetails.name} />
            <p className="name"> {footballerDetails.name}</p>
            <p> {footballerDetails.bio}</p>
        </div>
    )
}

export default FootballerDetail
