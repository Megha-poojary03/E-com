import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useEffect,useState } from 'react';
import { Grid } from '@mui/material';
import {Link} from 'react-router-dom'


export default function Category() {
    const [Category,setCategory]=useState([])
     useEffect(()=>{
        axios.get(`https://dummyjson.com/products/categories`).then((res)=>{
            console.log(res);
            setCategory(res.data);
      
              })
            .catch((error)=> {
              console.log(error);
      
     });
      
      

    },[]);
    console.log(Category,"categories")

   return(
    <>
    <Typography gutterBottom variant="h5" component="div"    sx={{color:"black",textAlign:"center",margin:"10px"}}>
       Browse product categories
        </Typography>

   <Grid container spacing={2} sx={{ marginTop:"10px",padding:"10px",display:"flex",alignment:"center",justifyContent:"center",flexWrap:"wrap"}}> 
    {Category.map((item,i)=>{


  return (
    <Grid item xs={12} sm={6} md={4} >
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"aqua"}}>
      <CardContent>
        <Link to={`/cat-product/${item.name}`}>  <Typography gutterBottom variant="h5" component="div" style={{justifyContent:"center"}} >
          
          {item.name}
        </Typography></Link> 
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

  

)}
    )}
    </Grid>
    </>
    
  );
}