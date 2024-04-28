import "./Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface ITestimonials {
  image: string;
  name: string;
  description: string;
}

interface ITestimonialsData {
  testimonials: ITestimonials[];
}

const CardSlider = (props: ITestimonialsData) => {
  const slideLeft = () => {
    const slider: HTMLElement | null = document.getElementById("slider");
    (slider as HTMLElement).scrollLeft =
      (slider as HTMLElement).scrollLeft + 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    (slider as HTMLElement).scrollLeft =
      (slider as HTMLElement).scrollLeft - 500;
  };

  return (
    <div>
      <p className="text-5xl text-gray-500 text-center dark:text-white">
        Empathy in Action
      </p>
      <p className="my-12 text-center px-40 font-light dark:text-slate-300 text-gray-400">
        "In times of adversity, it's crucial to stand together and extend a
        helping hand to those in need. With heartfelt empathy and a deep sense
        of solidarity, I'm honored to contribute to post-disaster relief
        efforts. Every item donated represents a ray of hope and a gesture of
        support for individuals and families affected by the recent crisis. My
        hope is that these donations provide comfort, warmth, and nourishment to
        those who need it most. Let's continue to support one another and uplift
        those facing challenges, knowing that our collective acts of kindness
        can make a meaningful difference in rebuilding communities and restoring
        hope for a brighter tomorrow."
      </p>
      <div id="main-slider-container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
        <div id="slider">
          {props.testimonials.map((slide: ITestimonials, index) => {
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="slider-card-title">{slide.name}</p>
                <p className="slider-card-description">{slide.description}</p>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default CardSlider;
