import React from 'react'

const Module = () => {
  return (
    <div className='module'>
      {/*  shape  */}
      <div id='shape' className='module__shape'>
        <div className="module__shape-shadow-1"></div>
        <div className="module__shape-shadow-2"></div>
        <div className="module__shape-shadow-3"></div>

        <div className='module__shape-rec1'></div>
        <div className='module__shape-rec2'></div>
        <div className='module__shape-rec3'></div>
        <div className='module__shape-rec4'></div>

        <div className="module__shape-hover1"></div>
        <div className="module__shape-hover2"></div>
        <div className="module__shape-hover3"></div>
        <div className="module__shape-hover4"></div>
      </div>

      {/* Content */}
      <div className="module__content">

      </div>
    </div>
  )
}

export default Module