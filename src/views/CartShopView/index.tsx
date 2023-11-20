import Nav from "@/components/molekul/nav";
import CheckOut from "@/components/organisme/checkout";

const CartShopView = () => {
  return (
    <div className=" w-full px-1 flex flex-col">
      <Nav>Keranjang</Nav>
      <CheckOut />
    </div>
  );
};

export default CartShopView;
