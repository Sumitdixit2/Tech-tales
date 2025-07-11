import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ref,
    ...props
}) {
    const Id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={Id} className=''></label>}
        <select name="" ref={ref} id={Id} {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Select