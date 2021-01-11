import React from 'react';
import { storiesOf } from '@storybook/react';
import ContributeComponent from '../components/comments/ContributeComponent.jsx'

storiesOf('Contribute component')
  .add('default', () => (
    <ContributeComponent 
        userId={'123123'} 
        contentId={'1231231'} 
        contributors={
            [{}, {}, {}, {}] 
        }
    />
  ));