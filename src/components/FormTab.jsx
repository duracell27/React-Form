import React from 'react'

export default function FormTab({num, active}) {
  return (
    <div className={`form__tab ${active && 'form__tab--active'}`}>Крок {num}</div>
  )
}
