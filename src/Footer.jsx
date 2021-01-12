import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="Footer">
        <p>  © {year} ElliePark. All Rights Reserved  </p>
      </footer>
    </>
  )
}

export default Footer
