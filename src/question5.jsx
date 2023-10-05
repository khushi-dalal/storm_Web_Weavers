import React, { useState } from "react";

function Question5() {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const [points, setPoints] = useState({
    option1Points: 0,
    option2Points: 0,
    option3Points: 0,
    option4Points: 0,
    option5Points: 0,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });

    // Calculate points based on the selected checkbox
    const updatedPoints = { ...points };
    switch (name) {
      case "option1":
        updatedPoints.option1Points = checked ? 5 : 0;
        break;
      case "option2":
        updatedPoints.option2Points = checked ? 4 : 0;
        break;
      case "option3":
        updatedPoints.option3Points = checked ? 3 : 0;
        break;
      case "option4":
        updatedPoints.option4Points = checked ? 2 : 0;
        break;
      case "option5":
        updatedPoints.option5Points = checked ? 1 : 0;
        break;
      default:
        break;
    }
    setPoints(updatedPoints);
    let total5 = points.option1Points + points.option2Points + points.option3Points + points.option4Points + points.option5Points;
  };

  return (
    <div>
      <p className="d-inline-flex gap-1">
        <a
          className="btn btn-info"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Question 5
        </a>
        <button
          className="btn btn-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Close
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1, marginRight: "20px" }}>
              <label>Questionnaire</label>
              <div className="mb-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    Communication skills: <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        checked={checkboxes.option1}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Excellent
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option2"
                        checked={checkboxes.option2}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Good
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option3"
                        checked={checkboxes.option3}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Fair
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option4"
                        checked={checkboxes.option4}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Bad
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option5"
                        checked={checkboxes.option5}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Horrible
                      </label>
                    </div>
                  </li>
                </ul>
                <p>
                  Points: {points.option1Points + points.option2Points + points.option3Points + points.option4Points + points.option5Points}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question5;
