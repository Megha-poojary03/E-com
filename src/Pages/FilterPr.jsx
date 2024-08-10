import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@mui/material';


export default function FilterPr() {
    const {catname}=useParams()
    console.log(catname,"catname")
    const[product,setProduct]=useState([])
    useEffect(()=> {
        axios.get(`https://dummyjson.com/products/category/${catname}`)
        .then((res)=>{
            console.log(res,"res");
            setProduct(res.data.products)
      
              })
            .catch((error)=> {
              console.log(error);
      
          });

    }
    )



console.log(product,"productdetails")





  return (
    <>
       <Typography gutterBottom variant="h5" component="div"    sx={{color:"black",textAlign:"center",margin:"10px"}}>
       {catname}Products
        </Typography>

    
    <Grid container spacing={2} sx={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"20px",margin:"20px",
      justifyContent:"center"}}> 
    
    
        { product.length>0?
        product?.map((item,i)=>{
            return(

              <Grid item xs={12} sm={6} md={4} >

    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        sx={{ height: 140 }}
        image={item.thumbnail}
        title="green iguana"
      />
      <CardContent>
 
    
        <Typography gutterBottom variant="h5" component="div"    sx={{color:"black",textAlign:"center",margin:"10px"}}>
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ background:"#bd3376",color:"#ffffff"}}>Share </Button>
        <Button size="small" sx={{ background:"#bd3376",color:"#ffffff"}}>Learn More </Button>
      </CardActions>
    </Card>
    </Grid>
)
        
})
:"No data is found for this category"
}  
    
    </Grid>
    </>
  );
}