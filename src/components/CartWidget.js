import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidad } = useContext(CartContext)
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={cantidad} style={{ color: 'brown' }}>
          <ShoppingCartIcon style={{ color: 'brown' }} />
        </Badge>
      </Link>
    </div >
  )
}
export default CartWidget

