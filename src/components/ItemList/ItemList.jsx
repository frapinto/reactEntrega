//crea una card con los datos del producto
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const CombinedItemList = ({ productList }) => {
  const Item = ({ product }) => {
    const { id, img, name, description, price, stock } = product;
    const navegar = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, margin: '5rem' ,display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardMedia
        component="img"
        height="150"
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {stock} en stock
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button onClick={() => navegar(`/detail/${id}`)} variant="contained" color="primary">
              Ver mas
            </Button>
          </Box>
      </CardContent>
    </Card>
  );
};

return (
    <div className="cardContainer">
      <Grid container spacing={3}>
        {productList.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CombinedItemList;