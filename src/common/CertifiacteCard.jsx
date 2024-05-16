import React from 'react';

function CertificateCard({ src, link, h3}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} style={{ borderRadius: "none" }} />
    </a>
  );
}

export default CertificateCard;
