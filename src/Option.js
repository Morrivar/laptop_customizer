import React from 'react';
import { USCurrencyFormat } from './App';
import slugify from 'slugify';

export default function Option(props) {
  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.featureKey)}
        checked={props.item.name === props.selected[props.featureKey].name}
        onChange={(e) => props.updateFeature(props.featureKey, props.item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}
