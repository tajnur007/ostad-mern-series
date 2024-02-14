import React from 'react'

const SummaryCard = ({ name = 'Card', count = 0, color = 0 }) => {
  const colors = ['#ffffff', '#00ffff37', '#8a2be243', '#5f9ea02c', '#00640041'];

  return (
    <div className='rounded py-2 px-3 shadow' style={{ backgroundColor: colors[color] }}>
      <p className='text-black'>{name}</p>
      <div className='text-black text-center fw-medium' style={{ fontSize: '50px' }}>{count}</div>
    </div>
  )
}

export default SummaryCard;