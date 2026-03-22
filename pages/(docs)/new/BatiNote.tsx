import React from 'react'
import batiLogo from './bati-logo.svg'

const batiLogoSize = 16

const BatiNote = () => {
  return (
    <p className='text-vike-grey-300'>
      Powered by{' '}
      <a href="https://github.com/vikejs/bati" className="inline-flex gap-2 items-center">
        Bati{' '}
        <img
          src={batiLogo}
          style={{
            width: batiLogoSize,
            height: batiLogoSize,
            display: 'inline-block',
            verticalAlign: 'text-top',
          }}
        />
      </a>
    </p>
  )
}

export default BatiNote
