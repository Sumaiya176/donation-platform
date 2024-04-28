import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateTestimonialMutation } from "../../redux/features/testimonial/testimonialApi";

interface ITestFormInput {
  name: string;
  description: string;
  image: string;
}

const PostTestimonial = () => {
  const { register, handleSubmit, reset } = useForm<ITestFormInput>();

  const [donation, { data, error }] = useCreateTestimonialMutation();
  console.log(data, error);

  const onSubmit: SubmitHandler<ITestFormInput> = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(
      "https://api.imgbb.com/1/upload?key=05fbc4fab725b315451139c5df8d0130",
      {
        method: "post",
        // headers: { "content-type": "multipart/form-data" },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const img = res.data.display_url;
        data.image = img;
        console.log(data);
        donation(data);
        reset();
      });

    // data.image = img;

    console.log(data);
  };
  return (
    <div className="lg:text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="font-semibold text-xl">Donar Name</p>
        <input
          className="mx-4 my-3 p-2 h-12 border w-1/2 rounded border-gray-500"
          {...register("name")}
        />{" "}
        <br />
        <p className="font-semibold text-xl">Description</p>
        <input
          className="mx-4 my-3 p-2 h-12 border w-1/2 rounded border-gray-500"
          {...register("description")}
        />{" "}
        <br />
        <p className="font-semibold mb-4 text-xl">Image</p>
        <input
          type="file"
          {...register("image")}
          className="file-input file-input-bordered file-input-info w-full max-w-xs"
        />
        <br />
        <input
          className="m-4 p-2 rounded bg-green-500 text-white bor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default PostTestimonial;
