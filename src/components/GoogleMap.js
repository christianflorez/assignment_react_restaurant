import React from 'react';

const GoogleMap = ({iframe, src}) => {
  const Iframe = iframe;

  return (
    <div>
      <Iframe src={src} frameBorder="0" height="300" width="100%" />
    </div>
  )
};

export default GoogleMap;