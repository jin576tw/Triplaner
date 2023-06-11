import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./index.scss";
import TripCard from "../../components/TripCard/TripCard";
const AddTripPageIndex = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="add-trip-page">
        <div className="row g-3">
          <div className="schedule-board col-7">
            <div className="column-item">
              <h3>行程規劃</h3>
              <div className="colum-content">
                <TripCard title="測試" />
                <TripCard title="測試" />
              </div>
            </div>
          </div>

          <div className="add-board col-5">
            <div className="column-item">
              <h3>拖曳項目</h3>
              <div className="colum-content"></div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default AddTripPageIndex;
