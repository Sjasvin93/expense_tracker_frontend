import React from 'react'

function InfoCard({ icon, label, value, color }) {
  return (
    <div className='flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-200/50'>
      <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div className='min-w-0'> {/* Allows child text to truncate properly */}
        <h6 className='text-sm text-gray-500 mb-1 truncate max-w-xs' title={label}>{label}</h6>
        <span className='text-[22px] truncate block max-w-xs' title={value}>{value}</span>
      </div>
    </div>
  )
}

export default InfoCard
