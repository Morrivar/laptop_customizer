import React from 'react';
import slugify from 'slugify';
import Option from './Option';

export default function Options(props) {
  return props.features[props.featureKey].map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <Option
        itemHash={itemHash}
        item={item}
        featureKey={props.featureKey}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
    );
  });
}
