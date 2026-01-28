export const CardFront = () => (
  <div className="front">
    <img 
      src="/vendata-venn-logo-full-text.svg" 
      className="logoImg"
      alt="Vendata Logo" 
    />
  </div>
);

// --- Card Back Segment ---
export const CardBack = () => (
    <div className="back">
      <div className="left">
        <div className="topCta">Stop working for your business.</div>
        <div className="bottomCta">Start making IT work for you.</div>
      </div>
    
      <div className="divider"></div>
    
      <div className="right">
        <div className="name">Patrick Conrad</div>
        <div className="info">
          <div className="innerInfo">
            <span className="title">Founder | Principal Consultant</span>
          </div>
          <div className="innerInfo">Patrick@vendata.solutions</div>
          <div className="title">(410) 212-9196</div>
        </div>
        <img 
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://vendata.solutions" 
          className="qr"
          alt="QR Code" 
        />
      </div>
    </div>
);