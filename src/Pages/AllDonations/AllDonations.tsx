import AllDonationsGrid from "../../Components/AllDonationsGrid/AllDonationsGrid";
import { useGetDonationQuery } from "../../redux/features/Donation/DonationApi";

const AllDonations = () => {
  const { data, error, isLoading } = useGetDonationQuery("");

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading</>
      ) : data ? (
        <AllDonationsGrid donations={data} />
      ) : null}
    </div>
  );
};

export default AllDonations;
