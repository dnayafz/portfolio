import React from "react";
import i1 from '../img/certif/1.png';
import i2 from '../img/certif/2.png';
import i3 from '../img/certif/3.png';



const Certificates = () => {
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i1} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Python Functions, Files, and Dictionaries</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: June 4, 2022</h6>
                            </div>
                        </div>
                    </div>
               
                
                  
                
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i2} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">Introduction to DevOps</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: Mar 19, 2023 </h6>
                            </div>
                        </div>
                    </div>
               
                    
                    </div>
              
                
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={i3} alt="cer" />
                            <div class="card-body">
                                <h5 class="card-title">DevOps, Cloud, and Agile Foundations</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Date: Mar 22, 2023</h6>
                            </div>
                        </div>
                    </div>
                
                   
                    </div>
                
           
        </>
    )
}
export default Certificates;
