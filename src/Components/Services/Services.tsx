import donation from "../../../public/servicesIcons/donation.png";
import saving from "../../../public/servicesIcons/saving.png";
import feedback from "../../../public/servicesIcons/feedback.png";
import resource from "../../../public/servicesIcons/resource.png";
import impact from "../../../public/servicesIcons/impact.png";
import logistics from "../../../public/servicesIcons/logistics.png";

const services = [
  {
    id: 1,
    icon: donation,
    title: "Donation Collection",
    des: "Facilitate the collection of monetary donations, goods, and services from individuals, corporations, and organizations.",
  },
  {
    id: 2,
    icon: saving,
    title: "Financial Transparency",
    des: "Ensure transparency in financial transactions, allowing donors to track how their contributions are being utilized and providing accountability for the use of funds.",
  },
  {
    id: 3,
    icon: feedback,
    title: "Needs Assessment",
    des: "Conduct assessments to identify the specific needs of affected communities, which helps prioritize relief efforts and allocate resources effectively.",
  },
  {
    id: 4,
    icon: resource,
    title: "Resource Coordination",
    des: "Coordinate with local authorities, relief agencies, and NGOs to channel donations and resources where they are most needed, avoiding duplication of efforts.",
  },
  {
    id: 5,
    icon: impact,
    title: "Impact Assessment",
    des: "Conduct assessments to evaluate the impact of relief efforts on affected communities and identify areas for improvement or further assistance.",
  },
  {
    id: 6,
    icon: logistics,
    title: "Logistics Support",
    des: "Manage the logistics of transporting and distributing relief supplies, including inventory management, transportation coordination, and warehouse operations.",
  },
];

const Services = () => {
  return (
    <div className="py-16">
      <p className="text-center dark:text-white text-5xl font-medium">
        Services We Can <br />
        help you with
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 text-center mt-24">
        {services.map((service) => {
          return (
            <div key={service.id}>
              <div className="flex justify-center mb-8">
                <div className="h-20 w-20 rounded bg-pink-100 flex justify-center items-center">
                  <img className="h-10 w-10" src={service.icon} alt="" />
                </div>
              </div>
              <p className="text-2xl font-semibold mb-6 dark:text-slate-300">
                {service.title}
              </p>
              <p className="text-gray-500 font-thin dark:text-slate-100">
                {service.des}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
