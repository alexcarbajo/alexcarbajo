import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <div className="o-Hero">
        <h1>UX Designer focused in travel industry and data-driven design.</h1>
        <h2>
          Hi, I'm Alex and I'm currently working at <a href="https://www.suntransfers.com" target="_blank" rel="noopener noreferrer">Suntransfers.com <span role="img" aria-label="Taxi in movement">🚕💨</span></a>, leading the UX and UI Development team.
        </h2>
        
        <div class="o-Hero__menu">
          <span className="c-Button c-Button--primary c-Button--margin-right">Resume</span>
          <a className="c-Link c-Link--highlight" href="mailto:alexcarbajo@gmail.com">Contact</a>
        </div>
      </div>
    )
  }
}

export default Hero
