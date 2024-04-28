import { useNavigate, useParams } from "react-router-dom";
import {
  useAddDonationMutation,
  useGetSingleDonationQuery,
} from "../../redux/features/Donation/DonationApi";
import { SubmitHandler, useForm } from "react-hook-form";

enum CategoryEnum {
  food = "food",
  clothing = "clothing",
  shelter = "shelter",
  medical = "medical",
}

interface IFormInput {
  _id: string;
  title: string;
  category: CategoryEnum;
  amount: number;
  description: string;
  image: string;
  name: string;
  email: string;
  mobile: number;
}

const DonationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetSingleDonationQuery(id);

  const [donarInfo] = useAddDonationMutation();

  console.log(data, error, id);

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (donationInfo) => {
    console.log(donationInfo);
    donarInfo(donationInfo);
    navigate("/dashboard");
  };

  if (isLoading) {
    return <span className="loading loading-dots loading-md"></span>;
  }
  return (
    <div>
      <div className="flex justify-center ">
        <img src={data?.image} alt="" />
      </div>
      <div className="p-10">
        <h2 className="text-4xl font-bold">{data?.title}</h2>
        <p className="text-3xl font-normal my-2">Category : {data?.category}</p>
        <p className="text-3xl font-normal my-2">
          Donation Amount : {data?.amount}
        </p>
        <p className="text-2xl font-light my-2">{data?.description}</p>
      </div>

      {/* -----------  Donate now Modal  -------------- */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="grid items-center justify-center">
        <button
          className="btn text-2xl bg-[tomato] text-white"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_5") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          Donate Now
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Donar Name</label>
            <input
              className="m-4 p-2 border border-gray-500 rounded"
              {...register("name")}
            />{" "}
            <br />
            <label>Donar Email</label>
            <input
              className="m-4 p-2 border border-gray-500 rounded"
              {...register("email")}
            />{" "}
            <br />
            <label>Mobile</label>
            <input
              className="m-4 p-2 border border-gray-500 rounded"
              {...register("mobile")}
            />{" "}
            <br />
            <label>Title</label>
            <input
              className="m-4 p-2 border border-gray-500 rounded"
              {...register("title")}
            />{" "}
            <br />
            <label>Category</label>
            <select
              className="m-4 p-2 border border-gray-500 rounded"
              {...register("category")}
            >
              <option value="food">Food</option>
              <option value="clothing">Clothing</option>
              <option value="shelter">Shelter</option>
              <option value="medical">medical</option>
            </select>
            <br />
            <label>Amount</label>
            <input
              className="m-4 p-2 border border-gray-500 rounded"
              type="number"
              {...register("amount")}
            />
            <br />
            <label>Description</label>
            <input
              className="m-4 p-2 border border-gray-500 rounded"
              {...register("description")}
            />{" "}
            <br />
            <input
              className="m-4 text-center p-2 rounded bg-green-500 text-white bor"
              type="submit"
            />
          </form>
          <div className="modal-action">
            <form method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DonationDetails;
