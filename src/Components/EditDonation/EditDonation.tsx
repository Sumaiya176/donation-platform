import { Modal } from "flowbite-react";
import { useUpdateDonationMutation } from "../../redux/features/Donation/DonationApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

enum CategoryEnum {
  food = "food",
  clothing = "clothing",
  shelter = "shelter",
  medical = "medical",
}

interface IFormInput {
  _id: string;
  name: string;
  title: string;
  category: CategoryEnum;
  amount: number;
  description: string;
  image: string;
}

interface IProps {
  data: IFormInput;
}

const EditModal = ({ data }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [updateDonation] = useUpdateDonationMutation();

  //  ---------------------  Edit Modal    ----------------------
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (donationInfo) => {
    updateDonation({ id: data?._id, donationInfo });
    console.log(donationInfo);
  };

  return (
    <div>
      <button
        className="bg-white text-black hover:bg-white hover:text-red-500"
        onClick={() => setOpenModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.1}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Donar Name</label>
              <input
                defaultValue={data?.name}
                className="m-4 p-2 border border-gray-500"
                {...register("name")}
              />{" "}
              <br />
              <label>Title</label>
              <input
                defaultValue={data?.title}
                className="m-4 p-2 border border-gray-500"
                {...register("title")}
              />{" "}
              <br />
              <label>Category</label>
              <select
                defaultValue={data?.category}
                className="m-4 p-2 border border-gray-500"
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
                defaultValue={data?.amount}
                className="m-4 p-2 border border-gray-500"
                type="number"
                {...register("amount")}
              />
              <br />
              <label>Description</label>
              <input
                defaultValue={data?.description}
                className="m-4 p-2 border border-gray-500"
                {...register("description")}
              />{" "}
              <br />
              <input
                className="m-4 p-2 rounded bg-green-500 text-white bor"
                type="submit"
              />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditModal;
