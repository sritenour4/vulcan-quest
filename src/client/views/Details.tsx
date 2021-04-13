import * as React from "react";
import { useParams, Link } from "react-router-dom";
import type { IStatue } from "../utils/types";

const Details: React.FC<DetailsProps> = (props) => {
  const { statueid } = useParams();
  const [statue, setStatue] = React.useState<IStatue>(null);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(`/api/statues/${statueid}`);
      const statue = await res.json();

      setStatue(statue);
      // console.log(statue)
    })();
  }, []);

  return (
    <>
      <main className="container">
        <header className="row d-flex flex-fill justify-content-center align-items-center">
          <img
            className="logo"
            src="/assets/vulcan-quest-logo.PNG"
            alt="vulcan-quest-logo"
          />
        </header>

        <section className="row justify-content-center align-items-center">
          <div className="col-md-6 d-flex flex-fill">
            <article className="card card-details shadow my-2 bg-danger">
              <img
                className="card-img-top img-fluid"
                src={`/assets/vulcan-${statue?.id}.PNG`}
                alt="vulcan"
              />
              <div className="card-body">
                <h1 className="card-text text-center text-warning font-weight-bold">
                  {statue?.title}
                </h1>
                <h6 className="card-text text-center text-success">
                  {statue?.location}
                </h6>
                <h6 className="card-text text-center text-warning font-italic">
                  Sponsor: {statue?.sponsor}
                </h6>
                <h6 className="card-text text-center text-success font-italic">
                  Artist: {statue?.artists}
                </h6>
                <p className="card-text text-center text-warning small">
                  {statue?.information}
                </p>
                <div className="mx-md-5 mt-4 d-flex justify-content-between align-items-center">
                  <Link className="btn btn-info btn-sm text-primary" to="/">
                    Back to Vulcans
                  </Link>
                  <Link className="btn btn-secondary btn-sm" to={`/vulcandex`}>
                    Add to Vulcandex
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

interface DetailsProps {}

export default Details;
