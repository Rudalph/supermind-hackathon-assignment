import React from 'react'
import Insight from "@/Components/Insight"
import Metrics from '@/Components/Metrics'

const page = () => {
  return (
    <div>
      <div>
        <Metrics />
        <Insight />
      </div>
    </div>
  )
}

export default page