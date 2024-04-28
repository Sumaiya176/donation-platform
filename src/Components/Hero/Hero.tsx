const Hero = () => {
  return (
    <div className="grid gap-10 my-14 lg:grid-cols-2 grid-cols-1 justify-center items-center">
      <div className="text-2xl dark:text-white text-center lg:text-start md:text-4xl lg:text-6xl">
        Small acts, when multiplied by millions of people, can transform the
        world. Your donation is one of those acts
      </div>
      <img
        src="https://as2.ftcdn.net/v2/jpg/06/41/99/95/1000_F_641999530_sxBMdMgzT8XHN0mbYqQ7kMfPIj19xahO.jpg"
        alt=""
        className="rounded-tr-3xl rounded-bl-3xl"
      />
    </div>
  );
};

export default Hero;
