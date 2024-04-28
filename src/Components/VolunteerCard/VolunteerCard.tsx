import { UserCard } from "react-ui-cards";
import { useGetVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";

interface IVolunteer {
  name: string;
  email: string;
  phoneNo: number;
  country: string;
  occupation: string;
  image: string;
}

const VolunteerCard = () => {
  const { data } = useGetVolunteerQuery("");

  return (
    <div className="geid justify-center items-center">
      <p className="text-5xl font-medium dark:text-white text-center mt-32 mb-14">
        All of Our Heroic Volunteers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((vol: IVolunteer) => {
          return (
            <UserCard
              key={vol?.name}
              float
              header={`https://picsum.photos/${Math.floor(
                Math.random() * 10 + 1
              )}00`}
              avatar={vol?.image}
              name={vol?.name}
              positionName={vol.occupation}
              href={""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VolunteerCard;
