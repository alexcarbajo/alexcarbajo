import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <div className="o-Hero">
        <h1><span className="u-Highlight">Product Designer</span> specialized in Design Systems, Design Strategy and Product Management.</h1>
        <h2>
          Hi, I'm Alex and I'm currently working at <a href="https://www.crealogix.com" target="_blank" rel="noopener noreferrer">Suntransfers.com</a> <span role="img" aria-label="Taxi in movement" className="u-Nowrap">💸</span>, leading the UX and UI Development team.
        </h2>
        
        <div class="o-Hero__menu">
          <!--<a href="https://drive.google.com/open?id=1K9mZ6EUh6TqICtcslGFnLwZMKPnptBfu" target="_blank" rel="noopener noreferrer" className="c-Button c-Button--primary c-Button--margin-right">Resume</a>-->
          <a className="c-Link c-Link--highlight" href="mailto:alexcarbajo@gmail.com">Contact</a>
        </div>
      </div>
    )
  }
}

export default Hero
