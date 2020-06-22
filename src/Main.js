import React from 'react';
import MainForm from './MainForm';
import MainSummary from './MainSummary';

export default function Main(props) {
  return (
    <main>
      <MainForm
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
      <MainSummary selected={props.selected} />
    </main>
  );
}
