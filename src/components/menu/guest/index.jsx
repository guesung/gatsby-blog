import React from 'react'

import './index.scss'
import { Link } from 'gatsby'

export const Guest = () => {
  return (
    <Link to={'/guest'} className="guest">
      <span>Guest</span>
    </Link>
  )
}
