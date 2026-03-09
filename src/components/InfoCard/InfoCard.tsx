import React from "react";
import { useTranslation } from "react-i18next";
import type { InfoData } from "../../data/experience.data";
import "./InfoCard.css";

export const InfoCard: React.FC<InfoData> = ({
  icon,
  titleKey,
  subtitleKey,
  organization,
  period,
  listItemsKey,
  badges = [],
}) => {
  const { t } = useTranslation();
  
  // Resolve array lists using i18next configured to return Objects/Arrays
  const translatedListItems = listItemsKey 
    ? (t(listItemsKey, { returnObjects: true }) as string[])
    : [];

  return (
    <div className="info-card">

      {/* Header */}
      <div className="info-card__header">
        <div className="info-card__icon">
          <i className={`bi ${icon}`} />
        </div>
        <div className="info-card__heading">
          <h3 className="info-card__title">{t(titleKey)}</h3>
          {subtitleKey && <p className="info-card__subtitle">{t(subtitleKey)}</p>}
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
      {translatedListItems.length > 0 && (
        <ul className="info-card__list">
          {translatedListItems.map((item, index) => (
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