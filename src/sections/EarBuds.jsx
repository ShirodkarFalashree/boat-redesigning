import React from 'react'
import earbuds1 from "../assets/earbuds1.png"
const EarBuds = () => {
  return (
    <div className='bg-[#151515] text-[#A9A9A9] h-screen w-screen font-figtree font-semibold flex items-center justify-center gap-20'>
      <div className='border w-fit'><img src={earbuds1} className='w-[400px]' /></div>
      <div className='broder'>
        <p className='text-5xl font-bold'>boAt Airdopes 141</p>
        <div className='border text-md'>
        <p>✓ 32db ANC ( Active Noise Cancellation )</p>
        <p>✓ Long Lasting - 42 Hours Playtime</p>
        <p>✓ Beast Mode - 50ms Low Latency</p>
        <p>✓ Quad Mics ENx<super>TM</super> Technology</p>
        <p>✓ boAt Signature Sound</p>
        </div>
      </div>  
    </div>
  )
}

export default EarBuds