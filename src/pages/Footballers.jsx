import React, { useEffect, useState } from 'react'
import data from '../data.json'
import { Card } from '../components'
import { useFootballers } from '../context/FootballerContext'

const Footballers = () => {
    const [footballers, setFootballers] = useState([])

    useEffect(() => {
        setFootballers(data.footballers)
    }, [])

    // let { footballers } = useFootballers()

    return (
        <div className="container p-5">
            <div className=" row col-12 d-flex justify-content-center align-items-center flex-row p-5 ">
                {footballers &&
                    footballers.map((footballer, key) => {
                        return (
                            <Card
                                key={footballer.id}
                                id={footballer.id}
                                image={footballer.front_image}
                                name={footballer.name}
                                team={footballer.team}
                                position={footballer.position_name}
                                number={footballer.number}
                                link={`${footballer.id}`}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default Footballers
