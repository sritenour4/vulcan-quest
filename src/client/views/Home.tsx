import * as React from 'react';
import { IStatue } from '../utils/types';
import { Link } from 'react-router-dom';

const Home: React.FC<HomeProps> = (props) => {

    const [statues, setstatues] = React.useState<IStatue[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/statues');
            const statues = await res.json();
            setstatues(statues);
        })();
    }, []);

    return (
        <>
            <header className="row d-flex justify-content-center align-items-center">               
                <img className="logo" src="/assets/vulcan-quest-logo.PNG" alt="vulcan-quest-logo" />               
            </header>

            <div className="d-flex flex-fill m-2">
                <main className="row justify-content-center">

                    {statues.map(statue => (
                        <div className="col-md-3 d-flex p-1 mx-1 mb-3" key={`statue-card-${statue.id}`}>
                            <div className="card shadow bg-danger">
                                <img className="card-img-top img-fluid" src={`/assets/vulcan-${statue.id}.PNG`} alt="vulcan"></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center text-warning font-weight-bold">{statue.title}</h5>
                                    <div className="card-link text-primary btn btn-sm btn-info float-right">
                                        <Link to={`/details/${statue.id}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
            //         ))}
            //     </main>
            // </div>
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

interface HomeProps { }

export default Home;
