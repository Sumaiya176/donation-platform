import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateCommunityMutation } from "../../redux/features/community/community";

interface IFormInput {
  name: string;
  email: string;
  comment: string;
  image: string;
}

const CreateCommunity = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const [community, { data, error }] = useCreateCommunityMutation();
  console.log(data, error);

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
        community(data);
        reset();
      });

    // console.log(data);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <form
        className="grid gap-4 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            className="mb-2"
            type="name"
            {...register("name")}
            required
          />
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@gmail.com"
            {...register("email")}
            required
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your photo" />
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          {...register("image")}
        />
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your comment" />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          {...register("comment")}
          required
          rows={4}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreateCommunity;
