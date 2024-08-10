import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const [products,setproduct]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res)
      setproduct(res.data.products)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  console.log(products,"productdetails")
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleSearch=(e)=>{
    let data=e.target.value;
    data=data.toLowerCase();
    console.log(data);
    axios.get(`https://dummyjson.com/products/search?q=${data}`)
    .then((res)=>{
      console.log(res);
      setproduct(res.data.products)

        })
      .catch((error)=> {
        console.log(error);

});
  }

  return (

    <> 
    <Typography gutterBottom variant="h5" component="div"    sx={{color:"black",textAlign:"center",margin:"10px"}}>
    Shop product categories
     </Typography>
     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Search for products"  variant="standard" 
        sx={{width:"500px"}}
        onChange={handleSearch}
        />

      </Box>
   
    <div style={{ display:"flex",alignItems:"center",
      justifyContent:"center",
      flexWrap:"wrap",
      gap:"20px",
      margin:"20px"
    }}>
   
    { products.length>0?products.map((item,index)=>{
      return(
        <Card sx={{ maxWidth: 345  }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{color:"#bd3376"}} />
          </IconButton>
        }
        title={item.title}
        subheader="feb 27, 2024"
        sx={{color:"#bd3376"}}
      />
      <CardMedia
        component="img"
        height="194"
       image={item.thumbnail}
        alt="nails art "
        sx={{color:"#bd3376"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {item.discription}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:"#bd3376"}}>
      <h1> Rs/{item.price}</h1>
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{color:"#bd3376"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{color:"#bd3376"}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>brand:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>shippingInformation:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>shippingInformation:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
      )
    })
  
    :"No data found"}
    </div>
    {/*<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={images}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        High-quality Red Rose Backdrop for Photography | Washable Polyester | Birthday Party Decorations | 5x7FT GF094
        95% of respondents would recommend this to a friend
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>*/}
    </>
  );
}
