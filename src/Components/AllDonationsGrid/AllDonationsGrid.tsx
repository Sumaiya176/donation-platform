import { useNavigate } from "react-router-dom";

enum CategoryEnum {
  food = "food",
  clothing = "clothing",
  shelter = "shelter",
}

interface IFormInput {
  _id: string;
  title: string;
  category: CategoryEnum;
  amount: number;
  description: string;
  image: string;
}

interface myResponse {
  donations: IFormInput[];
}

const AllDonationsGrid = ({ donations }: myResponse) => {
  const navigate = useNavigate();

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20">
        {donations?.map((donation) => {
          return (
            <div
              key={donation?._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={donation?.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{donation?.title}</h2>
                <p className="truncate text-ellipsis overflow-hidden ...">
                  {donation?.description}
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => navigate(`/donation/${donation?._id}`)}
                    className="btn btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllDonationsGrid;
