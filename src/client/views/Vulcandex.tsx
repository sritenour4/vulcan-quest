import * as React from 'react';
import type { IStatue } from '../utils/types';
// import flipcard from '../components/flipcard'




const Vulcandex: React.FC<VulcandexProps> = (props) => {
    const [statues, setStatues] = React.useState<IStatue[]>([]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/statues')
            const statues = await res.json();
            setStatues(statues);
        })();

    }, []);


    return (
        <>

            <main className="row flex-container">
                <div className="col-md-3 flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./assets/CardPreview.PNG" className="Preview" />

                        </div>

                        <div className="flip-card-back">
                            <img src="./assets/BJCC.PNG" className="BJCC" />
                        </div>
                    </div>
                </div>
                {/* </main> */}

                {/* <main className="col-md flex-container"> */}
                <div className="col-md-3 flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./assets/CardPreview.PNG" className="Preview" />

                        </div>

                        <div className="flip-card-back">
                            <img src="./assets/BJCC.jpeg" className="BJCC" />
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
};

interface VulcandexProps { }

export default Vulcandex;