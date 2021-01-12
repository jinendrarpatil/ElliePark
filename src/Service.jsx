import React from 'react';
import Card from './Card';
import Sdata from './Sdata'

function Service() {
  return (
    <>
      <div className='my-1'>
        <h1 className='text-center font-weight-bold text-capitalize text-uppercase mt-3'>-------- We offer -------- </h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'> </div>
          <div className='row gy-4'>
            {
              Sdata.map((val, ind) => {
                return <Card
                  src={val.src}
                  title={val.title}
                  msg={val.msg}
                />
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Service
