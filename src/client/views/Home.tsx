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
            <main className="container">
                <header className="row d-flex justify-content-center align-items-center">
                    <img className="logo" src="/assets/vulcan-quest-logo.PNG" alt="vulcan-quest-logo" />
                </header>

                {/* <div className="row d-flex w-75 mx-auto text-custom-blue">
                    <div className="card-body">
                        <p>The Vulcans on Parade community art project began in August 2015. Since then, 13 miniature replicas of Vulcan,
                        have been adopted, painted, and given their own name. Each Vulcan on Parade is an individually painted fiberglass replica of Birmingham’s giant Vulcan statue.
                        Host sites work with local artists to give each replica a theme that fits the location. The goal of the project is to highlight area visitor attractions.</p>
                        <p>Join us on a VULCAN QUEST to FIND ALL 13 VULCANS ON PARADE!</p>
                    </div>
                </div> */}

                <div className="row cards-home d-flex flex-fill justify-content-center m-2">
                    {statues.map(statue => (
                        <div className="col-md-3 d-flex p-1 mx-1 mb-1" key={`statue-card-${statue.id}`}>
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
                    ))}

                </div>
                <div className="row">
                    <div className="d-flex flex-fill justify-content-center">
                        <img className="vulcan-map img-fluid" src={`/assets/vulcan-map.PNG`} alt="vulcan-map" />
                    </div>
                </div>
            </main>
        </>
    );
};

interface HomeProps { }

export default Home;