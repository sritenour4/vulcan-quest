import * as React from "react";
// import coverImage from "../../../public/assets/home_vulcan_image.jpeg";
// import tallImage from "../../../public/assets/tall_photo.jpeg";
import { IStatue } from "../utils/types";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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
    <div className="d-flex flex-row m-3">
      <main className="row justify-content-center">
        {/* {statues.map(statue => (
                    <div className="col-md-3 mx-1 mb-3 float-left" key={`statue-card-${statue.id}`}>
                        <div className="card shadow">
                            <img className="card-img-top img-fluid" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">{statue.title}</h5>
                                <div className="card-link btn btn-sm btn-outline-primary float-right">
                                    <Link to={`/details/${statue.id}`}>Read More!!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}

        <div>
          <div>
            <h1>Cover Img</h1>
          </div>
          <img
            className="smallImgMedia full-bg-img"
            id="picblock"
            src="/assets/home_vulcan_image.jpeg"
            alt="Vulcan Statue Image"
          />
          {/* <img className="tallImgMedia" src={tallImage} /> */}
          {/* <div className="boxMainImage">
                    </div> */}

          {/* <div className="App"> */}
          {/* <div className="box">
                        </div> */}
          {/* </div> */}
        </div>
      </main>
    </div>
  );
};

interface HomeProps {}

export default Home;
