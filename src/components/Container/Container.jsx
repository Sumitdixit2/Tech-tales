import React from 'react'

function Container({children}) { // a UI component for layout and spacing purpose.
  return <div className='w-full max-w-7xl mx-auto px-4 '>{children}</div>;
  
}

export default Container