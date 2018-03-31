import React from 'react';
import { SectionContext } from '../App';
import { Section } from './Section'

export const Sections = (props) => {
  return (
    <SectionContext.Consumer>
      { sections => sections.map((section, i) => <Section key={i} id={i} {...props} {...section}/>) }
    </SectionContext.Consumer>
  );
};