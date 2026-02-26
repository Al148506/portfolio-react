import React from "react";
import type { InfoData } from "../../data/InfoData";
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
    <div className="col-12 col-md-4">
      <div className="info-card">
        
        <div className="info-card-header">
          <div className="info-card-icon">
            <i className={`bi ${icon}`} />
          </div>
          <h3 className="info-card-title">{title}</h3>
        </div>

        {(subtitle || organization) && (
          <div className="info-card-meta">
            {subtitle && <strong>{subtitle}</strong>}
            {organization && (
              <span className="info-card-organization">
                {organization} {period && `• ${period}`}
              </span>
            )}
          </div>
        )}

        {listItems.length > 0 && (
          <ul className="info-card-list">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {badges.length > 0 && (
          <div className="info-card-badges">
            {badges.map((badge, index) => (
              <span key={index} className="info-card-badge">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};