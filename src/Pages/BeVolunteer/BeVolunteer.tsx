import { Button, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import countryList from "country-list";
import { useCreateVolunteerMutation } from "../../redux/features/volunteer/volunteerApi";

interface IFormInput {
  name: string;
  email: string;
  phoneNo: number;
  country: string;
  occupation: string;
  image: string;
}

interface country {
  id: number;
  name: string;
}

const BeVolunteer = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const [volunteer, { data, error }] = useCreateVolunteerMutation();
  console.log(data, error);

  const countries = countryList.getNames().map((name, index) => {
    return { id: index + 1, name };
  });

  //console.log(countries);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(
      "https://api.imgbb.com/1/upload?key=05fbc4fab725b315451139c5df8d0130",
      {
        method: "post",
        // headers: { "content-type": "multipart/form-data" },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const img = res.data.display_url;
        data.image = img;
        console.log(data);
        volunteer(data);
        reset();
      });
    //console.log(data);
  };

  return (
    <div className="flex items-center justify-center">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {/* <div> */}
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput
          id="name"
          className="mb-2"
          type="name"
          {...register("name")}
          required
        />
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          className="mb-4"
          id="email"
          type="email"
          placeholder="name@gmail.com"
          {...register("email")}
          required
        />
        <div className="mb-2 block">
          <Label htmlFor="phoneNo" value="Mobile Number" />
        </div>
        <TextInput
          id="name"
          className="mb-2"
          type="phoneNo"
          {...register("phoneNo")}
          required
        />
        <div className="mb-2 block">
          <Label htmlFor="phoneNo" value="Occupation" />
        </div>
        <TextInput
          id="name"
          className="mb-2"
          type="occupation"
          {...register("occupation")}
          required
        />
        <div className="mb-2 block">
          <Label htmlFor="country" value="Country" />
        </div>
        <select
          id="countries"
          {...register("country")}
          className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a country</option>
          {countries?.map((country: country, i: number) => {
            return (
              <option key={i} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Photo" />
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          {...register("image")}
        />

        {/* </div> */}

        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BeVolunteer;
