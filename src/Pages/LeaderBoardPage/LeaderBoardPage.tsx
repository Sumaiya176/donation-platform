import { useEffect, useState } from "react";
import { useGetDonationQuery } from "../../redux/features/Donation/DonationApi";

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

const LeaderBoardPage = () => {
  const [category, setCategory] = useState("food");
  const [allData, setAllData] = useState<IFormInput[]>();
  const { data, error, isLoading } = useGetDonationQuery("");
  // const foodData = data?.filter(
  //   (donation: IFormInput) => donation.category === "food"
  // );

  //console.log(sorted);

  useEffect(() => {
    const foodData = data?.filter(
      (donation: IFormInput) => donation.category === category
    );

    const sorted = foodData?.sort(
      (a: IFormInput, b: IFormInput) => b.amount - a.amount
    );

    setAllData(sorted);
  }, [category, data]);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <p>Loading</p>
      ) : allData ? (
        <>
          <div className="overflow-x-auto">
            <p>Filter by Category:</p>
            <select
              className="mx-4 my-3 p-2 h-12 border w-1/2 rounded border-gray-500"
              onClick={(e) => setCategory((e.target as HTMLInputElement).value)}
            >
              <option value="food">Food</option>
              <option value="clothing">Clothing</option>
              <option value="shelter">Shelter</option>
              <option value="medical">medical</option>
            </select>

            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl text-center">Name </th>
                  <th className="text-xl text-center">Title </th>
                  <th className="text-xl text-center">Category</th>
                  <th className="text-xl text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                {allData?.map((donation: IFormInput, i: number) => {
                  return (
                    <tr key={donation._id}>
                      <th>{i + 1}</th>
                      <td className="text-lg text-center">{donation?.name}</td>
                      <td className="text-lg text-center">{donation?.title}</td>
                      <td className="text-lg text-center">
                        {donation?.category}
                      </td>
                      <td className="text-lg text-center">
                        {donation?.amount}
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

export default LeaderBoardPage;
