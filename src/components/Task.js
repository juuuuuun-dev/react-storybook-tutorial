import React from 'react'

export default function Task({ task: {id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className="list-itme">
      <input type="text" value={title} readOnly={true} />
    </div>
  )
}