import React from 'react';
import slugify from 'slugify';
import OptionsList from './OptionsList';

export default function Features(props) {
  console.log(props.selected);
  return Object.keys(props.features).map((feature, idx) => {
    console.log(feature);
    const featureHash = slugify(JSON.stringify(feature)) + '-' + idx;

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <OptionsList
          features={props.features}
          selected={props.selected}
          featureKey={feature}
          updateFeature={props.updateFeature}
        />
      </fieldset>
    );
  });
}
