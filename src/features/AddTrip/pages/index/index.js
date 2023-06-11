import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./index.scss";
import TripCard from "../../components/TripCard/TripCard";
import { useEffect, useState } from "react";
import DropContent from "../../components/DropContent/DropContent";

const AddExamples = ["範例1", "範例2", "範例3", "範例4", "範例5"];
const AddTripPageIndex = () => {
  const [tripPlans, setTripPlans] = useState([]);

  const [addPlans, setPlans] = useState([]);

  const handleDrop = (event) => {
    setTripPlans((prev) => [...prev, event]);
  };

  useEffect(() => {
    setPlans(AddExamples);
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="add-trip-page">
        <div className="row g-3">
          <div className="schedule-board col-7">
            <div className="column-item">
              <h3>行程規劃</h3>
              <DropContent items={tripPlans} onDrop={handleDrop} />
            </div>
          </div>

          <div className="add-board col-5">
            <div className="column-item">
              <h3>拖曳項目</h3>
              <div className="colum-content">
                {addPlans.map((plan, i) => (
                  <TripCard key={i} title={plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default AddTripPageIndex;
