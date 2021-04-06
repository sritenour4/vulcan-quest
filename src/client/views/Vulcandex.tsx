import * as React from 'react';
import type { IStatue } from '../utils/types';
import flipcard from '../components/flipcard'




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
        <main className="container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="./assets/BJCC.jpeg" className="BJCC"/>

                    </div>

                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect &amp; Engineer</p>
                        <p>We love that guy</p>
                    </div>

                </div>
            </div>
        </main>
    );
};

interface VulcandexProps { }

export default Vulcandex;