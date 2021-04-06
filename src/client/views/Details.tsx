import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { IStatue } from '../utils/types';

const Details: React.FC<DetailsProps> = props => {

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
        // <h1>asdfasdfasdf</h1>
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <article className="card shadow my-2">
                        <img className="card-img-top img-fluid" src="..." alt="Card image cap"/>
                        {/* <img className="card-img-top .img-fluid" src={`../assets/vulcan-${statue.id}`} alt="Card image cap"></img> */}
                        <div className="card-body">
                            <h1 className="card-text text-center">{statue?.title}</h1>
                            <h6 className="card-text text-center">{statue?.location}</h6>
                            <h6 className="card-text text-center">Sponsor: {statue?.sponsor}</h6>
                            <h6 className="card-text text-center">Artist: {statue?.artists}</h6>
                            <p className="card-text text-center text-muted">{statue?.information}</p>
                            <div className="mx-md-5 mt-5 d-flex justify-content-between align-items-center">
                                <Link className="btn btn-outline-primary" to="/">Back to Vulcans</Link>
                                <Link className="btn btn-outline-secondary" to={`/vulcandex/`}>Vulcandex</Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

interface DetailsProps { }

export default Details;