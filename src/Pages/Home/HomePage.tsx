import { useNavigate } from "react-router-dom";
import AllDonationsGrid from "../../Components/AllDonationsGrid/AllDonationsGrid";
import Hero from "../../Components/Hero/Hero";
import { useGetDonationQuery } from "../../redux/features/Donation/DonationApi";
import DonationCarousal from "../../Components/DonationCarousal/DonationCarousal";
import DonorTestimonials from "../../Components/DonorTestimonials/DonorTestimonials";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
import VolunteerCard from "../../Components/VolunteerCard/VolunteerCard";
import Services from "../../Components/Services/Services";
import GratitudeWall from "../../Components/GratitudeWall/GratitudeWall";

const HomePage = () => {
  const { data } = useGetDonationQuery("");

  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <div className="py-16">
        <AllDonationsGrid donations={data?.slice(0, 6)} />
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate(`/donations`)}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-gray-50 font-bold btn-success"
          >
            View All
          </button>
        </div>
      </div>

      <DonorTestimonials />

      <DonationCarousal />

      <Services />

      <GratitudeWall />

      <VolunteerCard />

      <WhatWeDo />

      <AboutUs />

      <Footer />
    </div>
  );
};

export default HomePage;
