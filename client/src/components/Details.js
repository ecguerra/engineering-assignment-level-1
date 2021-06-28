import { useState, useEffect } from "react"
import { getProductDetails } from "../services/detail.service"

const Details = id => {
    const [details, setDetails] = useState(undefined)

    useEffect(()=>{
        getProductDetails(id.id).then(res=>{
            setDetails(res.data[0])
            // console.log(res.data[0])
        },
        (err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
            {details ? (
                <div>
                    <h2>{details.label}</h2>
                    {details.features.length > 0 &&
                    <ul>
                        {details.features.map (feature => (
                            <li>{feature}</li>
                        ))}
                    </ul>
                    }
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    )
}

export { Details }