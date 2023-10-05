import React, { useState } from "react";

function Question1() {
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

  const handleCheckboxChange = (event, pointsKey) => {
    const { name, checked } = event.target;

    // Calculate points based on the selected checkbox
    const updatedPoints = { ...points };
    updatedPoints[pointsKey] = checked ? calculatePoints(name) : 0;

    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });

    setPoints(updatedPoints);
  };

  const calculatePoints = (checkboxName) => {
    switch (checkboxName) {
      case "option1":
        return 5;
      case "option2":
        return 4;
      case "option3":
        return 3;
      case "option4":
        return 2;
      case "option5":
        return 1;
      default:
        return 0;
    }
    let total1 = points.option1Points + points.option2Points + points.option3Points + points.option4Points + points.option5Points;
  };

  return (
    <div>
      <p className="d-inline-flex gap-1">
        <a
          className="btn btn-info"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          Question 1
        </a>
        <button
          className="btn btn-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          Close
        </button>
      </p>
      <div className="collapse" id="collapseExample1">
        <div className="card card-body">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1, marginRight: "20px" }}>
              <label>Question 1</label>
              <div className="mb-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    Contribution in projects, meetings of employee in picture: <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        checked={checkboxes.option1}
                        onChange={(e) => handleCheckboxChange(e, "option1Points")}
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
                        onChange={(e) => handleCheckboxChange(e, "option2Points")}
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
                        onChange={(e) => handleCheckboxChange(e, "option3Points")}
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
                        onChange={(e) => handleCheckboxChange(e, "option4Points")}
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
                        onChange={(e) => handleCheckboxChange(e, "option5Points")}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Horrible
                      </label>
                    </div>
                  </li>
                </ul>
                <p>Points: {points.option1Points + points.option2Points + points.option3Points + points.option4Points + points.option5Points}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question1;
