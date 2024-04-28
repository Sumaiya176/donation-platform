import { useGetDonationQuery } from "../../redux/features/Donation/DonationApi";
import { Chart } from "react-google-charts";

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
}

const options = {
  title: "Goods percentage by category",
  is3D: true,
};

const PieChart = () => {
  const { data } = useGetDonationQuery("");

  const foodData = data?.filter(
    (donation: IFormInput) => donation.category === "food"
  );

  const foodNumber = foodData?.reduce(
    (a: number, b: IFormInput) => a + Number(b.amount),
    0
  );

  const shelterData = data?.filter(
    (donation: IFormInput) => donation.category === "shelter"
  );

  const shelterNumber = shelterData?.reduce(
    (a: number, b: IFormInput) => a + Number(b.amount),
    0
  );
  const clothsData = data?.filter(
    (donation: IFormInput) => donation.category === "clothing"
  );

  const clothingNumber = clothsData?.reduce(
    (a: number, b: IFormInput) => a + Number(b.amount),
    0
  );
  const medicalData = data?.filter(
    (donation: IFormInput) => donation.category === "medical"
  );

  const medicalNumber = medicalData?.reduce(
    (a: number, b: IFormInput) => a + Number(b.amount),
    0
  );

  const pieData = [
    ["Goods", "numbers per item"],
    ["Food", foodNumber],
    ["clothings", clothingNumber],
    ["Shelter", shelterNumber],
    ["Medical", medicalNumber],
  ];

  // console.log(data, foodNumber);

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={pieData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default PieChart;
