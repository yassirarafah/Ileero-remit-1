import react from "react";
import { FaStar, FaRegStar } from "react-icons/fa";



const Testimonials = () => {
    return (
        <div className="container">
        <div className="row">
            <br /><br /><br /><br />
            <div className="col-md-12">
            <div className="text-center text-4xl font-bold">
                <h1>What our customers <br /> say about Ileero Remit</h1>
            </div><br /><br /><br />
                <div id="testimonial-slider" className="owl-carousel">
                    
                   <div className="testimonial">
                        <div className="pic">
                            <img src="./Mask Group 35.png" />
                        </div>
                        <div>
                        <p className="description">  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                            quia distinctio, provident iste rerum ab delectus dolore.
                            provident iste rerum ab dolore.
                                    </p>
                        </div>
                        <div id="about">
                            <div id="class" className="flex space-x-1 items-center justify-start">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div id="Gift_Name">
                        <h3 className="titlees" >Ajayi Joseph</h3>
                        <small className="post">Android Developer</small>
                        </div>
                        </div>
                        </div>

                    <div className="testimonial">
                        <div className="pic">
                            <img src="./Mask Group 35.png" />
                        </div>
                       <div>
                       <p className="description">
                            
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quia distinctio, provident iste rerum ab delectus dolore.
                provident iste rerum ab dolore..
                        </p>
                       </div>
                        
                        <div id="about">
                            <div id="class" className="flex space-x-1 items-center justify-start">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />

              </div>
                       <div id="Gift_Name">
                       <h3 className="titlees">Jessica Joseph</h3>
                        <small className="post">Android Developer</small>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default Testimonials;