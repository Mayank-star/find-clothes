import ProductItem from "@/src/shared/components/common/ProductItem";
import { Product } from "@/src/shared/types/Common";

const topSelling: Product[] = [
  {
    id: 1,
    title: "Vertical Striped Shirt",
    image: "stripedShirt.svg",
    rating: 5.0,
    price: 212,
    oldPrice: 232,
    discount: "-20%",
  },
  {
    id: 2,
    title: "Courage Graphic T-shirt",
    image: "graphicTshirt.svg",
    rating: 4.0,
    price: 145,
  },
  {
    id: 3,
    title: "Loose Fit Bermuda Shorts",
    image: "shorts.svg",
    rating: 3.0,
    price: 80,
  },
  {
    id: 4,
    title: "Faded Skinny Jeans",
    image: "skinnyJeans.svg",
    rating: 4.5,
    price: 210,
  },
];


const TopSelling = () => {
  return <ProductItem title="TOP SELLING" products={topSelling} />;
};

export default TopSelling