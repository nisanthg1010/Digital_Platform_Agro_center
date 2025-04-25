import React from 'react';
import { Carousel } from 'react-bootstrap';
import BSIA from './Frontpage/BSIA';
import BSPA from './Frontpage/BSPA';
import BSFA from './Frontpage/BSFA';
import BSCA from './Frontpage/BSCA';
import SPIC from './Frontpage/SPIC';
import MCF from './Frontpage/MCF';
import IFFCO from './Frontpage/IFFCO';


const Home = ({ fitcomponent }) => {

  const GoToWires = () => {
    fitcomponent("Products", "Pesticides");
  };

  return (
    <div>
      <section id="home">
        <div class="container">
          <h2> <span>Welcome to Ritika Agro Centre</span> <br /> Farm smarter, not harder—shop online at Ritika Agro Centre</h2>
          <p>Get your product delivered to your doorstep.</p>
          <button onClick={GoToWires}>Explore Now</button>
        </div>
      </section>


      <section id="Featured" className="my-5 pb-2">

        <div className="container text-center pt-5">
          <h3>Featured Bayer Products</h3>
          <hr className="mx-auto" />
          <h4 className='pb-2'>Best Selling Insecticides for Agriculture</h4>
          <BSIA />

          <h4>Best Selling Pesticides for Agriculture</h4>
          <hr className="mx-auto" />
          <BSPA />

          <h4>Best Selling Fungicide for Agriculture</h4>
          <hr className="mx-auto" />
          <BSFA />
        </div>

        <div className="container text-center py-2">
          <h3>Featured TATA PRODUCTS</h3>
          <hr className="mx-auto" />
          <p>Best Selling Contaf and Atrataf</p>
          <BSCA />
        </div>

        <div className="container text-center py-3">
          <h3>Featured SPIC Products</h3>
          <hr className="mx-auto" />
          <p>Best Selling Water Soluble Fertilizer</p>
          <p>Best Selling Micro Nutrients </p>
          <p>Best Selling OrganicFertilizer</p>
          <SPIC />
        </div>

        <div className="container text-center py-3">
          <h3>Featured Mangalore Chemicals and Fertilizers </h3>
          <hr className="mx-auto" />
          <p>Best Selling Plant Nutrients Products</p>
          <p>Mangala GT Booster</p>
          <MCF />
        </div>

        <div className="container text-center py-3">
          <h3>Featured IFFCO Product</h3>
          <hr className="mx-auto" />
          <p>Best Selling Primary and Secondary Nutrients</p>
          <p>Nano and Micro Nutrients</p>
          <IFFCO />
        </div>

      </section>

      <section id="about" className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
          <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height "
                    src="https://i.ytimg.com/vi/pCUmcv4cQEs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlmE29U5sAGVydhwOjq2HF3IwKBw"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height "
                    src="https://t3.ftcdn.net/jpg/03/68/43/08/360_F_368430854_tYpa5RNRReSruxIWEsjxk21FbXCJ2c0l.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
      
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height "
                    src="https://static.vecteezy.com/system/resources/thumbnails/049/684/291/small/spraying-pesticide-on-a-field-of-cabbage-photo.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height"
                    src="https://cl.usembassy.gov/wp-content/uploads/sites/104/Agriculture.jpg"
                    alt="Four slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height"
                    src="https://t4.ftcdn.net/jpg/00/75/57/59/360_F_75575940_QY2gSuvtaqF1zX4gnZS4W6ElwzGy0AoH.jpg"
                    alt="Five slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height"
                    src="https://5.imimg.com/data5/SELLER/Default/2022/10/TZ/YA/WE/52902335/cattle-feed-supplements-third-party-manufacturing-services-500x500.jpg"
                    alt="Six slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded same-height"
                    src="https://www.farmerp.com/wp-content/uploads/2021/05/Practicing-Agriculture-to.jpg"
                    alt="Seven slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="mb-4">About Us</h2>
                <p className="text-muted">

Welcome to Ritika Agro Centre, your one-stop destination for all agricultural needs! We are dedicated to empowering farmers and gardeners by providing a wide range of quality products, from fertilizers to livestock feed. Our mission is to enhance your shopping experience with an easy-to-navigate platform that showcases the best in agriculture. We believe that informed choices lead to better harvests, which is why each product comes with detailed descriptions and images. Our team is passionate about agriculture and committed to supporting your journey. Whether you’re a seasoned farmer or a gardening enthusiast, we’re here to help you thrive. Join us in cultivating a greener future!
                </p>
              {/*  <p className="text-muted">
                  Our mission is to provide high-quality products at competitive prices, delivered right to your doorstep. Whether you're a professional contractor or a DIY enthusiast, we have everything you need to get the job done.
                </p>
                <p className="text-muted">
                  Shop with confidence at Sivaraj & CO and join our growing community of satisfied customers.
                </p>*/}
                {/* <h3 className="mt-4">Why Choose Us?</h3>
                <ul className="text-muted">
                  <li>Wide selection of products</li>
                  <li>Competitive prices</li>
                  <li>Top-notch customer service</li>
                  <li>Convenient online shopping experience</li>
                  <li>Fast and reliable delivery</li>
                  <li>Customer satisfaction guarantee</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* <section id="Category" className="my-5 pb-5">
        <div className="container text-center mt-5">
          <h3>Shop By Categories</h3>
          <hr className="mx-auto" />

          <div className="row mt-5">
            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/wires1.png" alt="" onClick={GoToWires} />
                <div className="bottom mt-2">
                  <h2>Wires & Cables</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/pipes2.png" alt="" onClick={GoToPipes} />
                <div className="bottom mt-2">
                  <h2>Pipes</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/pvc-fittings.jpg" alt="" onClick={GoToFittings} />
                <div className="bottom mt-2">
                  <h2>PVC Fittings</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/bulbs.jpg" alt="" onClick={GoToBulbs} />
                <div className="bottom mt-2">
                  <h2>Lightings</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/drill.jpg" alt="" onClick={GoToDrillMachine} />
                <div className="bottom mt-2">
                  <h2>Drill Machine</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height w-150" src="Images/bosch2.webp" alt="" onClick={GoToBoschDrillMachine} />
                <div className="bottom mt-2">
                  <h2>Drill Machine</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height w-80" src="Images/heatgun.jpg" alt="" onClick={GoToHeat} />
                <div className="bottom mt-2">
                  <h2>Heat Gun And Air Bowlers</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/belts.webp" alt="" onClick={GoToBelts} />
                <div className="bottom mt-2">
                  <h2>Belts</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/chains.jpg" alt="" onClick={GoToChains} />
                <div className="bottom mt-2">
                  <h2>Chains</h2>
                </div>
              </div>
            </div>

            <div className="one col-lg-3 col-md-6 col-12">
              <div className="image-container position-relative">
                <img className="img-fluid same-height" src="Images/bearing.webp" alt="" onClick={GoToBearing} />
                <div className="bottom mt-2">
                  <h2>Bearings</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      </div>

    </div>
  )
}

export default Home