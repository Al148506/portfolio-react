import React from "react";
import type { InfoData } from "../../data/experience.data";
import "./InfoCard.css";

export const InfoCard: React.FC<InfoData> = ({
  icon,
  title,
  subtitle,
  organization,
  period,
  listItems = [],
  badges = [],
}) => {
  return (
    <div className="info-card">

      {/* Header */}
      <div className="info-card__header">
        <div className="info-card__icon">
          <i className={`bi ${icon}`} />
        </div>
        <div className="info-card__heading">
          <h3 className="info-card__title">{title}</h3>
          {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
        </div>
      </div>

      {/* Organization + period */}
      {organization && (
        <div className="info-card__meta">
          <span className="info-card__org">{organization}</span>
          {period && <span className="info-card__period">{period}</span>}
        </div>
      )}

      {/* List */}
      {listItems.length > 0 && (
        <ul className="info-card__list">
          {listItems.map((item, index) => (
            <li key={index} className="info-card__list-item">{item}</li>
          ))}
        </ul>
      )}

      {/* Badges */}
      {badges.length > 0 && (
        <div className="info-card__badges">
          {badges.map((badge, index) => (
            <span key={index} className="info-card__badge">{badge}</span>
          ))}
        </div>
      )}

    </div>
  );
};