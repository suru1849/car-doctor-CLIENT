import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section>
      <div className="space-y-4 text-center">
        <h3 className="text-[#FF3811] text-xl font-bold">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised
          <br />
          words which don&rsquo;t look even slightly believable.
        </p>
      </div>
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
