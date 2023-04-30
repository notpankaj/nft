import React from "react";
import "./ThankYou.css";
import Navbar from "../../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
const w = window.innerWidth;
const h = window.innerHeight;

function ThankYou() {
  const [confettiVisible, setIsConfettiVisible] = React.useState(false);

  React.useEffect(() => {
    function init() {
      setIsConfettiVisible(true);
      setTimeout(() => {
        setIsConfettiVisible(false);
        // toast("ORDER PLACED SUCCESSFULLY! 👌");
      }, 5000);
    }
    init();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {confettiVisible ? <Confetti width={w} height={h} /> : null}
      <Navbar />
      <div className="ty-conatiner">
        <div className="ty-box">
          <h1 className="order-id">Order Number #{Date.now()}</h1>
          <h1 className="ty-text">Thank you for</h1>
          <h1 className="ty-text">your order!</h1>
          <p className="ty-des">
            While you are waiting for your order do not forget to subscribe to
            out newsletter
          </p>

          <div className="sub-box">
            <input type="email" placeholder="Enter Your E-mail" />
            <button
              onClick={() => {
                alert("Subscribed successfully! ");
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
