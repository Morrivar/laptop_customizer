import React from "react";
import slugify from "slugify";
import { USCurrencyFormat } from "./App";

export default function Options(props) {
  return props.features[props.featureKey].map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(props.featureKey)}
          checked={item.name === props.selected[props.featureKey].name}
          onChange={(e) => props.updateFeature(props.featureKey, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
}
