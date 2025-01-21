import React from 'react';
import { LiaShippingFastSolid, LiaMoneyBillWaveSolid, LiaGiftSolid } from 'react-icons/lia';
import { FiPhoneCall } from 'react-icons/fi';
import FeatureCard from './FeatureCard.jsx';

const data = [
  { title: "Free shipping", icon: <LiaShippingFastSolid /> },
  { title: "Best Price Guarantee", icon: <LiaMoneyBillWaveSolid /> },
  { title: "Free Curbside Pickup", icon: <LiaGiftSolid /> },
  { title: "Support 24/7", icon: <FiPhoneCall /> },
];

export default function EndT() {
  return (
    <div className='container pt-16'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {data.map((el, index) => (
          <FeatureCard key={index} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
}
