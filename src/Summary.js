import React from "react";
import slugify from "slugify";
import { USCurrencyFormat } from "./App";

export default function Summary(props) {
  return Object.keys(props.selected).map((feature, idx) => {
    const featureHash = slugify(JSON.stringify(feature)) + "-" + idx,
      selectedOption = props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
}
