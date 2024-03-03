import React from 'react';

const TrainerCard = (props) => {
  return (
    <>
         <div className="box" id="andre">
          <img src={props.image} alt="" />
          <div className="info">
            <h3>{props.name}</h3>
          </div>
        </div>
    </>
  );
}

export default TrainerCard;
