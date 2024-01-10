import React from 'react'
import {Data} from './data'
import { Data2 } from './data'

const HomePage = () => {
  return (
    <div className='bg-[#FFF7F4] flex items-center justify-between px-10 pt-40'>
      <div className=''>{
        Data.map((product,index)=>{
          return(
            <div key={index} className=''>
              <h1 className='Hero text-6xl text-[#373737] leading-12'>{product.h1}</h1>
        {/* <img src={Data.img} alt="" /> */}
        <p className='leading-12'>{product.p}</p>

        <div className='py-2' >
          <button className='px-2 py-2  bg-[#FF5300] text-white rounded-md'>Get Start Now </button>
          </div>

            </div>
          )

        })
        
        }



      </div>
      <div className=''>{
        Data2.map((product,index)=>{
          return(
            <div key={index} className='w-[400px] h-[400px]' >
              <img src={product.img}/>
            </div>
          )
        })
      }
        


      </div>
    </div>
  )
}

export default HomePage