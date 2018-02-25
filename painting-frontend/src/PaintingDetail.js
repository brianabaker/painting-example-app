import React from "react";

const PaintingDetail = props => {
  return (
    <div className="ui centered grid container">
        <img alt={props.data.title} src={props.data.image}/>
        <div style={{float: "right"}}>
          <h4>Title: {props.data.title}</h4>
          <h4>Artist: {props.data.artist.name}</h4>
          <h4>Date: {props.data.date}</h4>
          <h4>Located: {props.data.museum.name}</h4>
          <button onClick={props.callback}>return to all images</button>
        </div>
    </div>
  );
};

export default PaintingDetail;

// <h3>Title: {props.data.title}</h3>
// <h4>Artist: {props.data.artist.name}</h4>
// h4>Title: {props.data.title}</h4>
// <h4>Artist: {props.data.artist}</h4>
// <p>Date: {props.data.date}</p>
// <p>Located: {props.data.museum.name}</p>
