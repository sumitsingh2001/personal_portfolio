import React from 'react'
import { Dna } from 'react-loader-spinner';
const Loader = () => {
  return (

    <div className="loader">
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}

export default Loader