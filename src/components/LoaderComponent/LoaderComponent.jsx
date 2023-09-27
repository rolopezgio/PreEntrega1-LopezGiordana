import { DotWave } from '@uiball/loaders'
import "./LoaderComponent.css"


const LoaderComponent = () => {
  return (
    <div className="loader">
    <DotWave size={47} speed={1} color="black"/>
    </div>
  );
};
export default LoaderComponent;