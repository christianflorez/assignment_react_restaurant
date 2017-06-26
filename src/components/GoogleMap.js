import React from 'react';

const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162194.45115094582!2d-73.69473155931978!3d40.9421888628049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28a86e5097c33%3A0x9a831a9d7c8c0ab3!2sPuccini!5e0!3m2!1sen!2sus!4v1498519005923'

const GoogleMap = ({iframe}) => {
  const Iframe = iframe;

  return (
    <div>
      <Iframe src={src} height="300" width="100%" />
    </div>
  )
};

export default GoogleMap;