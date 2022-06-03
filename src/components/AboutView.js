import Hero from "./hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              <h1>Learn more about the the website here.</h1>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutView;
