import React from 'react';
import FeaturesList from './FeaturesList';

export default function MainForm(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <FeaturesList
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
    </form>
  );
}
