import React from "react";
import "../styles/ContentSection.css";
import Dashboard from "../Components/Dashboard";

function ContentSection(){
    return(
      <div className="dashboard">
        <div className="content-area">
          <div className="row-01">
            <div className="item-card-2">
              <div className="product-image-2">
                <div className="image-2">
                  <img src="/Assets/image16.png" alt="contentImages" width={150} />
                </div>
            
              </div>
              <div className="content-2">
                <div className="item-name-2">
                  Apple Watch
                </div>
                <div className="small-description-2">
                  Series 5 SE
                </div>
                <div className="action-2">
                  <div className="container-2">
                    $ 529.99
                  </div>
                  <div className="button-3">
                    <img className="vector-6" src="/Assets/Vector3_x2.png" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-1">
              <div className="item-card-3">
                <div className="product-image-3">
                  <div className="image-3">
                  <img src="/Assets/image1.png" alt="contentImages" width={150}  />
                  </div>
                </div>
                <div className="content-3">
                  <div className="item-name-3">
                    Sony ZX330BT
                  </div>
                  <div className="small-description-3">
                    Light Grey
                  </div>
                  <div className="action-3">
                    <div className="container-3">
                      $ 39.99
                    </div>
                    <div className="button-4">
                      <img className="vector-7" src="Assets/Vector3_x2.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-card-4">
                <div className="product-image-4">
                  <div className="image-4">
                  <img src="/Assets/image13.png" alt="contentImages" width={150} />
                  </div>
                </div>
                <div className="content-4">
                  <div className="item-name-4">
                    Iphone 11
                  </div>
                  <div className="small-description-4">
                    Serious Black
                  </div>
                  <div className="action-4">
                    <div className="container-4">
                      $ 619.99
                    </div>
                    <div className="button-5">
                      <img className="vector-8" src="Assets/Vector3_x2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-card-6">
              <div className="product-image-6">
                <div className="image-6">
                <img src="/Assets/image11.png" alt="contentImages" width={150} />
                </div>
              </div>
              <div className="content-6">
                <div className="item-name-6">
                  Iphone 11
                </div>
                <div className="small-description-6">
                  Subway Blue
                </div>
                <div className="action-6">
                  <div className="container-6">
                    $ 619.99
                  </div>
                  <div className="button-7">
                    <img className="vector-10" src="Assets/Vector3_x2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-02">
            <div className="item-card-5">
              <div className="product-image-5">
                <div className="image-5">
                <img src="/Assets/image15.png" alt="contentImages" width={150} />
                </div>
              </div>
              <div className="content-5">
                <div className="item-name-5">
                  Iphone 11
                </div>
                <div className="small-description-5">
                  Product RED
                </div>
                <div className="action-5">
                  <div className="container-5">
                    $ 619.99
                  </div>
                  <div className="button-6">
                    <img className="vector-9" src="Assets/Vector3_x2.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="item-card-7">
                <div className="product-image-7">
                  <div className="image-7">
                  <img src="/Assets/image9.png" alt="contentImages" width={150} />
                  </div>
                </div>
                <div className="content-7">
                  <div className="item-name-7">
                    Iphone 11
                  </div>
                  <div className="small-description-7">
                    Milky White
                  </div>
                  <div className="action-7">
                    <div className="container-7">
                      $ 619.99
                    </div>
                    <div className="button-8">
                      <img className="vector-11" src="Assets/Vector3_x2.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-card">
                <div className="product-image">
                  <div className="image">
                  <img src="/Assets/image15.png" alt="contentImages" width={150} />
                  </div>
                </div>
                <div className="content">
                  <div className="item-name">
                    Iphone 13
                  </div>
                  <div className="small-description">
                    Product RED
                  </div>
                  <div className="action">
                    <div className="container">
                      $ 619.99
                    </div>
                    <div className="button-1">
                      <img className="vector"src="Assets/Vector3_x2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-card-1">
              <div className="product-image-1">
                <div className="image-1">
                <img src="/Assets/image15.png" alt="contentImages" width={150} />
                </div>
              </div>
              <div className="content-1">
                <div className="item-name-1">
                  Iphone 14
                </div>
                <div className="small-description-1">
                  Product RED
                </div>
                <div className="action-1">
                  <div className="container-1">
                    $ 619.99
                  </div>
                  <div className="button-2">
                    <img className="vector-1" src="Assets/Vector3_x2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}


export default ContentSection;