import * as React from "react";
import type { IStatue } from "../utils/types";
// import flipcard from '../components/flipcard'
// import ToggleImage from '../components/ToggleImage';

const Vulcandex: React.FC<VulcandexProps> = (props) => {
  const [statues, setStatues] = React.useState<IStatue[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/statues");
      const statues = await res.json();
      setStatues(statues);
    })();
  }, []);

  return (
    <>
    <main className="container" id="vulcandex-container">
      {/* 1 */}
      <main className="row flex-container" id="vulcandexRow">
        <div className="col-md-auto flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="./assets/CardPreview.PNG" className="Preview" />
            </div>
            <div className="flip-card-back">
              <img src="./assets/CardView_BJCC.PNG" className="BJCC" />
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
              <img
                src="./assets/CardView_Botanical.PNG"
                className="BotanicalGardens"
              />
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
              <img src="./assets/CardView_BhamZoo.PNG" className="BhamZoo" />
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
              <img src="./assets/CardView_BhamS.PNG" className="BhamSouthern" />
            </div>
          </div>
        </div>
        {/* <div className="details-container">
            <ToggleImage />            
        </div> */}
      </main>
      </main>
    </>
  );
};

interface VulcandexProps {}

export default Vulcandex;