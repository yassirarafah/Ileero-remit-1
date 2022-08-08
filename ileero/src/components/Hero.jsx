import React from "react";

const Hero = () => {
  return (
    <section>
    <section className="Our_section">
      <main className="container main" >
      <div className="Home_page">
        <h2 className="heading_letter">Introducing The Easy & <br />
        Fast way To Send Money</h2>
        <p className="First_Paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br />
sed diam nonumy eirmod tempor Lorem ipsum dolor sit <br />
amet, consetetur</p>
<button className="First_btn">Get Started</button>
      </div>
      <div className="card">
        <div className="card-header">
          <h6>Exchange Rate</h6>
          <h2><strong>GBP 1 = 459 NGN</strong></h2>
        </div>
        <div className="card-body">
          <form action="">
            <div className="input-box">
              <input type="text" class="payment-input" placeholder="You send" />
              <div className="currency-select">
                <div className="select-box">
                  <div className="select-items">
                  <img src="/uk.png" className="svg-icon" alt />
                    <span>GBP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-box">
              <input
                type="text"
                class="payment-input"
                placeholder="Receipient gets"
              />
              <div className="currency-select">
                <div className="select-box">
                  <div className="select-items">
                  <img src="/ng.png" className="svg-icon" alt />
                    <span>NGN</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="just-div">
              <p>Delivery Method</p>
              <select name="" id="" class="" disabled="disabled">
                <option value="1">Bank Transfer</option>
              </select>
            </div>
            <div className="just-div">
              <p>Include Fees</p>
              <input type="checkbox" />
            </div>
            <div className="just-div">
              <p>Fee</p>
              <p>GBP 1.00</p>
            </div>
            <div className="just-div">
              <h3>Total to pay</h3>
              <h3>GBP 1,001.00</h3>
            </div>
            <button className="btn-block">Continue</button>
          </form>
          <div className="fees-notice">
            <p>&#8220;TRANSACTION FEES MAY APPLY&#8221;</p>
          </div>
        </div>
      </div>
    </main>
    </section>
   
    </section>   
  );
};

export default Hero;
