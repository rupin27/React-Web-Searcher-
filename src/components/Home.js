import Hero from "./hero";
const Home = () => {
  return (
    <>
      <Hero text="Home" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              <h1>This is the home screen </h1>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
