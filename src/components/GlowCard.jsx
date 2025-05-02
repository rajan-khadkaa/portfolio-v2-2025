import React from "react";

const GlowCard = ({ card }) => {
  return (
    <div className="card card-bordr timeline-card rounded-xl p-10">
      <div className="glow">
        <div className="mb-5">
          <p className="text-white-50 text-lg">{card.content}</p>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
