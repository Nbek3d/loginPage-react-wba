import React from 'react';
import LoginCard from './logCard';
import SignCard from './signCard';
import {PageCard} from './style.js'

const Card = () => {
  return (
    <PageCard>
        <LoginCard/>
        <SignCard/>
    </PageCard>
  )
}

export default Card
