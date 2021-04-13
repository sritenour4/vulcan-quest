import * as React from "react";

/* Functional component based on hooks that toggles image when button clicked */ 
// const ToggleImage: React.FC<ToggleImageProps> = (props) => {
    const ToggleImage = () => {

    /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled, setToggled] = React.useState(true);
  
    /* Define a function that toggles the visibility of the image */
    const ToggleImage = () => setToggled(!toggled);
  
    return (
      <div className = "toggle-div">
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button className="toggle-btn btn-sm" onClick={ToggleImage}>Toggle Image</button>
        
        {/* Render image if toggled is truthy */}
        {toggled && <img className="toggle-image" src={`/assets/vulcandex5.PNG`} alt="Rising Phoenix" />}
      </div>
    );
  };
  
  /* Usage 
  <ToggleImage />
  */

  interface ToggleImageProps {};

 export default ToggleImage;