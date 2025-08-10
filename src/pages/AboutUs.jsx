import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import Seo from "../components/Seo";

const AboutUs = () => {
  return (
    <>
      <Seo
        title="About Us | Keene Krib"
        description="Keene Krib is a family-owned Wellington business with over 30 years of experience specialising in retaining walls, piling, anchors, and landscaping."
        url="https://keenekrib.co.nz/about-us"
        image="https://keenekrib.co.nz/img/assets/workers.jpg"
      />
      <div className="body">
        <HeroCarousel
          image="/img/assets/workers.jpg"
          alt="Keene Krib team working on a retaining wall project"
          heading={
            <>
              About <span className="highlight">Us</span>
            </>
          }
          description="Family-owned and operated with over 30 years of experience serving Wellington and surrounding regions."
          showButtons={false}
          small={true}
        />

        <div className="split-container">
          <img
            className="split-container-img"
            src="/img/assets/workers.jpg"
            alt="Keene Krib team working on a retaining wall project in Wellington"
          />
          <div className="split-container-p">
            <h3>Over 160 Years of combined Local Experience</h3>
            <p>
              Keene Krib is a proud family-owned and operated business located
              in the heart of Brooklyn, Wellington. For over 30 years, we have
              been committed to serving Wellington and the surrounding regions
              with unwavering dedication. Throughout this time, we’ve built a
              reputation grounded in quality workmanship, dependable service,
              and honest, transparent relationships with our clients.
            </p>
            <p>
              Equipped with a comprehensive fleet of modern machinery and tools,
              alongside a team of highly skilled, passionate professionals, we
              are capable of managing projects of all sizes and complexities.
              From challenging hillside retaining walls to extensive commercial
              developments, no task is too large or too intricate. Every project
              receives our full attention, meticulous planning, and hands-on
              commitment to ensure exceptional results.
            </p>
            <p>
              At the core of our company is a strong family ethos. We deeply
              value the people who make Keene Krib what it is — from our loyal,
              experienced workers who have grown with us over many years, to the
              clients who trust us to bring their visions to life. We pride
              ourselves on fostering a respectful and supportive workplace
              culture, emphasizing fair pricing, integrity in all we do, and
              consistently delivering on our promises — on time, every time.
            </p>
            <p>
              We understand that every project is unique and personal. Whether
              you are planning a small residential job or a large-scale civil
              contract, we take the time to listen carefully, provide expert
              advice, and tailor solutions that meet your specific needs and
              budget. Your satisfaction and peace of mind are our highest
              priorities.
            </p>
            <p>
              If you’re ready to start your project or simply want to explore
              your options, please don’t hesitate to reach out. Send your plans
              and project details to{" "}
              <a href="mailto:qs@keenekrib.co.nz">qs@keenekrib.co.nz</a> for a
              free, no-obligation quote. We’re always eager to help and look
              forward to partnering with you to build strong, lasting
              foundations for your property.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
