import img1 from "../images/Group575.png";
import img2 from "../images/Group583.png";
import img3 from "../images/Group589.png";
import img4 from "../images/Group597.png";
import brand346 from "../images/Group346.svg";
import  previewImage1  from "../images/img1.png"; 
import  previewImage2  from "../images/img2.png"; 
import  previewImage3  from "../images/img3.png"; 
import  previewImage4  from "../images/img4.png"; 
import icon1 from "../images/Group1432.svg"
import icon2 from "../images/Group1435.svg"
import icon3 from "../images/Group1434.svg"
import icon4 from "../images/Group1433.svg"
import iconPay1 from "../images/Rectangle586.png"
import iconPay2 from "../images/Group1437.png"
import iconPay3 from "../images/Group1438.png"
import { v4 as uuid } from "uuid";

export const products_data = [
  {
    id: uuid(),
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    img: img1,
    price: "9,999",
    discount: "50%",
    before_discount: "9,999",
    brand: brand346,
  },
  {
    id: uuid(),
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    img: img2,
    price: "9,999",
    discount: null,
    before_discount: null,
    brand: brand346,
  },
  {
    id: uuid(),
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    img: img3,
    price: "9,999",
    discount: "30%",
    before_discount: "9,999",
    brand: brand346,
  },
  {
    id: uuid(),
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    img: img4,
    price: "9,999",
    discount: "70%",
    before_discount: "9,999",
    brand: brand346,
  },
];
export const categories = [
  { id: uuid(), name: "Men"},
  { id: uuid(), name: "Women"},
  { id: uuid(), name: "Unisex"},
  { id: uuid(), name: "Kids"},
  { id: uuid(), name: "Best Sellers"},
  { id: uuid(), name: "New Arrivals"},
  { id: uuid(), name: "Offers"},
];
export const paths = [
  { id: uuid(), name: "Men" },
  { id: uuid(), name: "Clothing" },
  { id: uuid(), name: "Tops" },
  { id: uuid(), name: "Adidas" },
  { id: uuid(), name: "Adidas Black T-Shirt" }
]

export const previewImage = [previewImage1, previewImage2, previewImage3, previewImage4];

export const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
];

export const iconsPayment = [
  iconPay1,
  iconPay2,
  iconPay3,
]