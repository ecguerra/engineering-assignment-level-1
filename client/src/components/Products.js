import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField"
import { getProducts } from '../services/product.service'
import { Details } from './Details'
import { Spinner } from './Spinner'
import '../Products.css'

const useStyles = makeStyles({
    root: {
      minWidth: 500,
      display:'flex',
      flexDirection:'column',
      justifyContent: 'space-between',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 6,
    },
  });

const Products = () => {
    const classes = useStyles()
    const [products, setProducts] = useState(undefined)
    let [selected, setSelected] = useState(undefined)

    useEffect(()=>{
        getProducts().then(res=>{
            setProducts(res.data)
        },
        (err)=>{
            console.log(err)
        })
    },[])

    const changeSelected = (e) => {
        e.preventDefault()
        setSelected(e.target.productId.value)
    }

    const clearSelected = () => {
        setSelected(undefined)
    }

    return(
        <>
            {products ? (
                <div>
                    <Grid container spacing={3}>
                        {products.map(product =>(
                            <Grid item s={12} m={6} l={4}>
                                <Card className={classes.root} key={product.id}>
                                    <CardHeader
                                        title={product.label}
                                        subheader={product.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}
                                        className='card-top'
                                    />
                                    <CardContent>
                                        {product.id === selected &&
                                            <Details id={product.id}/>
                                        }
                                    </CardContent>
                                    <CardActions>
                                    {product.id === selected ? (
                                        <Button size="small" onClick={clearSelected}>See Less</Button>
                                    ):(
                                        <form onSubmit={changeSelected}>
                                        <TextField name="productId" value={product.id} type="hidden"/>
                                            <Button size="small" type="submit">See More</Button>
                                        </form>
                                    )}
                                        <Button size="small">Select this Plan</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) :(
                <Spinner />
            )}

        </>
    )
}

export { Products }