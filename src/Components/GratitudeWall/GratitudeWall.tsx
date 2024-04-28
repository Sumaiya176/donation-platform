import "./wallStyle.module.css";
import { useGetCommunityQuery } from "../../redux/features/community/community";
import { UserCard } from "react-ui-cards";

interface ISlide {
  _id: string;
  image: string;
  name: string;
  email: string;
  comment: string;
}

const GratitudeWall = () => {
  const { data } = useGetCommunityQuery("");

  return (
    <div className="gap-4 mt-24">
      <h1 className="text-5xl dark:text-white font-semibold text-center mb-12">
        Gratitude Wall
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((slide: ISlide) => {
          return (
            <UserCard
              key={slide?.name}
              float
              header={`https://picsum.photos/${Math.floor(
                Math.random() * 10 + 1
              )}00`}
              avatar={slide?.image}
              name={slide?.name}
              positionName={slide.comment}
              href={""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GratitudeWall;
