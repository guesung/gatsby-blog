import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'
import { Guest } from '../menu/guest'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <GitHubIcon />
      <Guest />
    </div>
  )
}
