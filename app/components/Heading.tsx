"use client"
import React from 'react'

interface HeadingProps {
    title: string
    subtitle?: string
    center?: boolean
}

const Heading:React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-bold'>
            {title}
        </div>
        <div className='font-light mt-2 text-neutral-500'>
            {subtitle}
        </div>
    </div>
  )
}

export default Heading