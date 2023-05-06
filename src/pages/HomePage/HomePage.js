import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../redux/feature/authSlice";
const HomePage = () => {
  const navigator = useNavigate();

  return (
    <>
      <Navbar />
      <Banner />
      <Feature />
    </>
  );
};

export default HomePage;
