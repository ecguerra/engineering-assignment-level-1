import { useState, useEffect } from "react"
import { getProductDetails } from "../services/detail.service"
import Typography from '@material-ui/core/Typography';
import { Spinner } from './Spinner'

const Details = id => {
    const [details, setDetails] = useState(undefined)

    useEffect(()=>{
        getProductDetails(id.id).then(res=>{
            setDetails(res.data[0])
        },
        (err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
            {details ? (
                <Typography variant="body2" component="div">
                    {details.features.length > 0 &&
                    <ul>
                        {details.features.map ((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    }
                </Typography>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export { Details }