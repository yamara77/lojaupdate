import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleEdit = () => {
    navigate(`/products/${product.id}`);
  };

  const handleDelete = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 364, height: 374 }}>
      <CardActionArea sx={{ height: 325 }} onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={product.imageUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Valor: R$ {product.value}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Marca: {product.brand}
          </Typography>
          <Typography
            noWrap
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleEdit} size="small" color="primary">
          Editar
          <ModeEditIcon color="primary" sx={{ ml: 1 }} />
        </Button>
        <Button onClick={handleDelete} size="small" color="error">
          Deletar
          <DeleteIcon color="error" sx={{ ml: 1 }} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
