const AboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center mt-16">
      <div>
        <p className="text-4xl text-gray-600 dark:text-white font-medium">
          About Us
        </p>

        <p className="my-6 text-slate-500 dark:text-white font-light text-2xl">
          UnityAid was born out of a recognition of the critical need for a
          coordinated, transparent, and efficient response to disasters of all
          scales. Our team comprises experts in disaster relief, technology, and
          community engagement, united by a shared vision of harnessing
          innovation for social good.
          <div className="py-4"></div>
          We believe that every individual has the power to make a difference,
          and by coming together as a global community, we can overcome even the
          most daunting challenges. With integrity, compassion, and resilience
          at the core of everything we do, we are committed to standing shoulder
          to shoulder with those affected by disasters, offering not just aid,
          but hope for a brighter future. Join us in our mission to make a
          meaningful impact and build a more resilient world for generations to
          come.
        </p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
