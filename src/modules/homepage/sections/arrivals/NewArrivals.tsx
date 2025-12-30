import ProductItem from "@/src/shared/components/common/ProductItem";
import { Product } from "@/src/shared/types/Common";

const newArrivals: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    image: "tshirt.svg",
    rating: 4.5,
    price: 240,
    oldPrice: 260,
    discount: "-20%",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    image: "jeans.svg",
    rating: 3.5,
    price: 240,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    image: "Shirt.svg",
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    image: "orangeShirt.svg",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discount: "-30%",
  },
];

const NewArrivals = () => {
  return <ProductItem title="NEW ARRIVALS" products={newArrivals} />;
};

export default NewArrivals;
