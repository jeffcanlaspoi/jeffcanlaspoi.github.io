import Footer from "./Footer";
import CEO from "../assets/images/CEO.jpg";
import OBJECTIVES from "../assets/images/objectives.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-us w-[90%] mx-auto py-36">
        <div className="grid lg:grid-cols-2 p-5">
          <div className="flex items-start justify-center">
            <img
              src={CEO}
              alt="CEO"
              className="w-[80%] h-full object-contain rounded-3xl shadow-lg"
            />
          </div>
          <div className="border border-green-500 border-1 rounded-3xl p-5">
            <h1 className="text-5xl font-bold text-[#3c7e3a]">
              BRYAN JADE S. SAMBITAN
            </h1>
            <h3 className="text-2xl font-semibold text-gray-500 mb-10">
              CEO - Owner of Braice Prints & Apparel
            </h3>
            <blockquote className="italic">
              "Imagine a world where every t-shirt tells a story, where each
              design is a testament to individuality and creativity. That's the
              world we're striving to create as we aim to become the foremost
              provider of top-tier custom t-shirt printing services. Our vision
              extends beyond just printing shirts; it's about fostering a
              culture of self-expression and empowerment. We want to be known
              not just for our exceptional quality, but for our innovative
              designs and unwavering commitment to customer satisfaction.
              <br></br> <br></br>At our core, we're not just a printing company;
              we're a team of passionate creators dedicated to turning ideas
              into wearable art. From the initial spark of inspiration to the
              final product, we're there every step of the way, ensuring that
              each shirt is a reflection of our clients' unique vision.
              Innovation is our driving force, and we're constantly exploring
              new techniques and technologies to push the boundaries of what's
              possible in custom apparel. <br></br>
              <br></br>But perhaps what truly sets us apart is our relentless
              pursuit of excellence. We don't just aim to meet expectations; we
              strive to exceed them. With a combination of cutting-edge
              technology and unparalleled craftsmanship, we're committed to
              delivering nothing but the best. Join us on this journey as we
              redefine the world of custom t-shirt printing, one shirt at a
              time.""
            </blockquote>
          </div>
        </div>
        <hr className="mt-10" />
        <h2 className="font-bold text-center my-10 text-6xl text-[#3c7e3a]">
          OBJECTIVES
        </h2>
        <div className="grid lg:grid-cols-2 p-5">
          <img
            src={OBJECTIVES}
            alt="Objectives"
            className="w-full h-full object-contain lg:order-last"
          />
          <div className="border border-green-500 border-1 rounded-3xl p-5">
            <ul className="px-10 list-disc">
              <li>
                Expand market reach: Increase market penetration by targeting
                new customer segments and geographic regions through strategic
                marketing initiatives.
              </li>
              <li>
                Enhance product offerings: Continuously innovate and diversify
                product lines to meet evolving customer preferences and trends.
              </li>
              <li>
                Optimize operational efficiency: Implement streamlined processes
                and leverage technology to improve production efficiency and
                reduce turnaround times.
              </li>
              <li>
                Foster customer loyalty: Develop personalized customer
                experiences and loyalty programs to cultivate long-term
                relationships and repeat business.
              </li>
              <li>
                Promote sustainability: Integrate eco-friendly practices into
                operations, such as using organic materials and minimizing
                waste, to contribute positively to the environment and appeal to
                environmentally-conscious consumers.
              </li>
              <li>
                Strengthen brand awareness: Invest in branding efforts,
                including social media marketing, collaborations with
                influencers, and participation in industry events, to increase
                brand visibility and recognition.
              </li>
              <li>
                Ensure quality control: Establish rigorous quality control
                measures at every stage of production to uphold the highest
                standards and exceed customer expectations.
              </li>
              <li>
                Maximize profitability: Implement strategic pricing strategies,
                cost management techniques, and revenue optimization initiatives
                to drive profitability and sustainable growth.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
