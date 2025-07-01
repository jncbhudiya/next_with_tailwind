import React from 'react'

function Fontstretch() {
  return (
    <div>Font Stretch
        <p className="font-normal">This is normal text.</p>
        <p className="font-stretch-normal">This is normal stretch text.</p>
        <p className="font-stretch-condensed">This is condensed stretch text.</p>
        <p className="font-stretch-expanded">This is expanded stretch text.</p> 
    </div>
  )
}

export default Fontstretch;