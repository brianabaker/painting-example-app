import React from "react";

const Painting = props => {
  return (
    <div className="ui centered grid container">
      <div className="ui link cards">
        {props.data.map(painting => (
          <div key={painting.id} className="card" onClick={() => props.callback(painting)}>
            <div className="image">
              <img src={painting.image} alt={painting.title} height="500" width="600" />
            </div>

            <div className="content">{painting.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Painting;
