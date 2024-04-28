import {
  useDeleteDonationMutation,
  useGetDonationQuery,
} from "../../redux/features/Donation/DonationApi";
import EditDonation from "../../Components/EditDonation/EditDonation";

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

const AllDonation = () => {
  const { data, error, isLoading } = useGetDonationQuery("");
  const [deleteDonation, response] = useDeleteDonationMutation();

  console.log(response);

  console.log(error, data);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <p>Loading</p>
      ) : data ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl text-center">Title </th>
                  <th className="text-xl text-center">Category</th>
                  <th className="text-xl text-center">Amount</th>
                  <th className="text-xl text-center">Edition</th>
                  <th className="text-xl text-center">Deletion</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((donation: IFormInput, i: number) => {
                  return (
                    <tr key={donation._id}>
                      <th>{i + 1}</th>
                      <td className="text-lg text-center">{donation?.title}</td>
                      <td className="text-lg text-center">
                        {donation?.category}
                      </td>
                      <td className="text-lg text-center">
                        {donation?.amount}
                      </td>

                      <td className="flex justify-center">
                        <EditDonation data={donation} />
                      </td>

                      <td onClick={() => deleteDonation(donation._id)}>
                        <div className="flex justify-center cursor-pointer hover:text-red-500">
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
                              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AllDonation;
