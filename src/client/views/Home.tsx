import * as React from "react";
import { IStatue } from "../utils/types";
import { Link } from "react-router-dom";

const Home: React.FC<HomeProps> = (props) => {
  const [statues, setstatues] = React.useState<IStatue[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/statues");
      const statues = await res.json();
      setstatues(statues);
    })();
  }, []);

  return (
    <>
      <header className="row">
        <img
          className="logo"
          src="/assets/vulcan-quest-logo.PNG"
          alt="vulcan-quest-logo"
        />
      </header>
      <div className="d-flex flex-row m-3">
        <main className="row justify-content-center">
          {statues.map((statue) => (
            <div
              className="col-md-3 mx-1 mb-3 float-left"
              key={`statue-card-${statue.id}`}
            >
              <div className="card shadow">
                <img
                  className="card-img-top img-fluid"
                  src={`/assets/vulcan-${statue.id}.PNG`}
                  alt="vulcan"
                ></img>
                <div className="card-body">
                  <h5 className="card-title text-center">{statue.title}</h5>
                  <div className="card-link btn btn-sm btn-outline-primary float-right">
                    <Link to={`/details/${statue.id}`}>Read More!</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="coverImgContainer">
            <img
              className="fullBgCoverImg"
              src="/assets/home_vulcan_image.jpeg"
              alt="Vulcan Statue Image"
            />
          </div>
        </main>
      </div>
    </>
  );
};

interface HomeProps {}

export default Home;
