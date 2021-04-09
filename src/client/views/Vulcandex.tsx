import * as React from 'react';
import type { IStatue } from '../utils/types';





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
            {/* 1 */}
            <main className="row flex-container">
                <div className="col-md-auto flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./assets/CardPreview.PNG" className="Preview" />

                        </div>
                        <div className="flip-card-back">
                            <img src="./assets/BJCC.PNG" className="BJCC" />
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="col-md-auto flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./assets/CardPreview.PNG" className="Preview" />

                        </div>

                        <div className="flip-card-back">
                            <img src="./assets/BotanicalGardens.PNG" className="BotanicalGardens" />
                        </div>

                    </div>
                </div>
                {/* 3 */}
                <div className="col-md-auto flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./assets/CardPreview.PNG" className="Preview" />

                        </div>

                        <div className="flip-card-back">
                            <img src="./assets/BhamZoo.PNG" className="BhamZoo" />
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="col-md-auto flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src="./assets/CardPreview.PNG" className="Preview" />

                        </div>
                        <div className="flip-card-back">
                            <img src="./assets/BhamSouthern.PNG" className="BhamSouthern" />
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

interface VulcandexProps { }

export default Vulcandex;