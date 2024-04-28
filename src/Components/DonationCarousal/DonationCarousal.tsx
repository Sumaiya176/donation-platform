import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.module.css";
import { Pagination } from "swiper/modules";
import donation from "../../../public/images/feedTheFuture.jpg";

const DonationCarousal = () => {
  return (
    <div className="my-16">
      <p className="text-5xl my-16 text-gray-600 text-center dark:text-white">
        Sharing Kindness
      </p>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="" src={donation} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/little-girl-with-family-autumn-harvest_329181-15851.jpg?t=st=1710596267~exp=1710599867~hmac=cc31e4d50ba367dc7b0f85ed61189008e390dcda75e61e97db82284986e35717&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/premium-photo/creative-business-team-sorting-clothes-donation-box-office_107420-98284.jpg?w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/group-people-volunteering-foodbank_23-2149012190.jpg?t=st=1710596507~exp=1710600107~hmac=ff284a4cc83e4709b4eb2e04bd3397839f5f413cac045a5f92e4999069628033&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/group-people-volunteering-foodbank_23-2149012192.jpg?w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-volunteers-with-food-packs_23-2149182023.jpg?t=st=1710596592~exp=1710600192~hmac=fa0db0c6966162c0f51efe53bcebf40b808b9421cf39a2fc647caa98647883b4&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/sorting-point-volunteers-facial-masks-working-with-donations-sorting_259150-57366.jpg?w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-people-with-donations_23-2149142768.jpg?t=st=1710596698~exp=1710600298~hmac=a24cc76d07f33f9d77b2de72226e0c6d9b62d582f5d1d504ca8f880536b4026e&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-photo/medium-shot-people-with-food-donations_23-2149182009.jpg?t=st=1710596763~exp=1710600363~hmac=4785bd1636c75b1045667aa06bf74e8dfac963a7618f1dc168a54c8a47af47cc&w=996"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DonationCarousal;

{
  /* <img className="h-11 w-11" src={donation} alt="" /> */
}
