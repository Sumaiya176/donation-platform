import { useGetTestimonialQuery } from "../../redux/features/testimonial/testimonialApi";
import CardSlider from "./CardSlider";

const DonorTestimonials = () => {
  const { data, error, isLoading } = useGetTestimonialQuery("");
  /* The `slides` constant in the code snippet is an array of objects, where each object represents a
 testimonial slide with properties like `image`, `title`, and `description`. These testimonial
 slides are typically used in a carousel or slider component to display multiple testimonials in a
 visually appealing way. Each object in the `slides` array contains information about a specific
 testimonial, including the image associated with the testimonial, the name of the person giving the
 testimonial (title), and the actual testimonial message (description). */
  // const slides = [
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/girl-with-sweaters_169016-1455.jpg?size=626&ext=jpg&ga=GA1.1.1927289415.1659558207&semt=ais",
  //     title: "Sarah Smith",
  //     description:
  //       "I hope this jacket helps someone stay warm during these difficult times. - Sarah",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/cozy-house-shoes-floor-near-human-legs_23-2147955946.jpg?t=st=1710594355~exp=1710597955~hmac=62ea09063e7b8525e0cb746431afea9bd6e6478d5ae1c99aff019aa60efaa33d&w=996",
  //     title: "John Doe",
  //     description:
  //       "Happy to contribute! Socks may seem small, but they make a big difference. - John",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/volunteers-with-gloves-handing-boxes-with-food-donation_23-2148733764.jpg?t=st=1710594527~exp=1710598127~hmac=3cae78b710a85e9b956961dac92be3508d73f0054710c623b4e913e77a6d340e&w=996",
  //     title: "Emily Johnson",
  //     description: "Sending love and warm meals to those in need. - Emily",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/flat-lay-hands-holding-bowl-with-rice_23-2149359435.jpg?t=st=1710594687~exp=1710598287~hmac=b5c524a9a554315e463b4157b24c9801bbe0c6ea4570721274c2a6ba3a00d2cd&w=996",
  //     title: "Michael Brown",
  //     description:
  //       "Rice is a symbol of hope and sustenance. Hope this helps. - Michael",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/full-shot-campers-working-together_23-2148456492.jpg?t=st=1710594809~exp=1710598409~hmac=f8f79551a247f4cef87910ac4074c357e3d8ccf55103c67b3a042ccdf0864212&w=996",
  //     title: "David Williams",
  //     description:
  //       "Every family deserves a safe place to sleep. Hope this tent provides comfort. - David",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/happy-young-woman-sitting-tent_23-2147617486.jpg?t=st=1710595191~exp=1710598791~hmac=a261c50381349692dcb33f30ddb4b479dd25ee0b37240f86beeb6ed774c0de07&w=996",
  //     title: "Emma Garcia",
  //     description:
  //       "Warmth and shelter are basic needs. Happy to contribute. - Emma",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/couple-shopping-clothes-shop_107420-94819.jpg?t=st=1710595375~exp=1710598975~hmac=bad86a8f31c00aed457dbacb8dc20ce03080f5975a0992cedebded04bbf10f4f&w=996",
  //     title: "Alexandra Nguyen",
  //     description:
  //       "Hoodies are cozy and comforting. Sending love and warmth to those affected",
  //   },
  //   {
  //     image:
  //       "https://img.freepik.com/free-photo/noodle-pasta-varieties-rustic-baskets-marble-table_114579-66685.jpg?t=st=1710595462~exp=1710599062~hmac=0a2cbcc8e5d8ab4c718dadb925c0cdbfc92e0c9ab8e8c1502add67071127f611&w=996",
  //     title: "Daniel Martinez",
  //     description:
  //       "Pasta is versatile and filling. Sending warm wishes with this donation. - Daniel",
  //   },
  // ];

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <p>Loading</p>
      ) : data ? (
        <CardSlider testimonials={data} />
      ) : null}
    </div>
  );
};

export default DonorTestimonials;
