import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <h1 style = {{display: "flex", alignItems: "center", gap: "5px"}}>
          <DescriptionIcon />
          Keeper
        </h1>
      </nav>
    </div>
  )
}
