import React,{ useState } from "react";
import "../styles/ContentSection.css";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import DashboardBag from "./DashboardBag";



const products = [
  {
    name: "Apple Watch",
    description: "Series 5 SE",
    image: "assets/image16.png",
    price: "$529.99",
    alt: "Apple Watch"
  },
  {
    name: "Sony ZX330BT",
    description: "Light Grey",
    image: "assets/image1.png",
    price: "$39.99",
    alt: "Sony ZX330BT"
  },
  {
    name: "iPhone 11",
    description: "Serious Black",
    image: "assets/image13.png",
    price: "$619.99",
    alt: "iPhone 11"
  },
  {
    name: "iPhone 11",
    description: "Subway Blue",
    image: "assets/image11.png",
    price: "$619.99",
    alt: "iPhone 11 Subway Blue"
  },
  {
    name: "iPhone 11",
    description: "Product RED",
    image: "assets/image15.png",
    price: "$619.99",
    alt: "iPhone 11 Product RED"
  },
  {
    name: "iPhone 13",
    description: "Milky White",
    image: "assets/image9.png",
    price: "$619.99",
    alt: "iPhone 13 Product RED"
  },
  {
    name: "iPhone 14",
    description: "Product RED",
    image: "assets/image15.png",
    price: "$619.99",
    alt: "iPhone 14 Product RED"
  },
  {
    
    name: "iPhone 14",
    description: "Product RED",
    image: "assets/image15.png",
    price: "$619.99",
    alt: "iPhone 14 Product RED"
  }
];

function ContentSection(){
  // this function helps the search bar filter products too show the ones that fit the description
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearchChange = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // this function helps us show the product image on the dashboard bag when selected
  const [bagItems, setBagItems] = useState([]);
  const handleAddToBag = (product) => {
    setBagItems([...bagItems, product.image]); 
  };

  


  return (
    <>
    <SideBar/>
 
    <SearchBar onSearch={handleSearchChange} />
    <DashboardBag bagItems={bagItems} />


    <div className="content-area">
      
    {products.length> 0 ? (
          filteredProducts.map((product, index) =>  (
        <div className="item-card" key={index}>
          <div className="product-image">
            <img
              className="product-image-content"
              src={product.image}
              width={150}
              alt={product.alt}
            />
          </div>
          <div className="product-content">
            <div className="product-name">{product.name}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-action">
              <div className="product-price">{product.price}</div>
              <div className="action-button">
                <img
                  className="action-icon"
                  src="Assets/Vector3_x2.png"
                  alt="Buy Now"
                  onClick={() => handleAddToBag(product)} 
                />
              </div>
            </div>
          </div>
        </div>
      ))
    ):(
      <p>No Products match your search</p>
    )}            
  </div>
     </>
        );

}
export default ContentSection;
