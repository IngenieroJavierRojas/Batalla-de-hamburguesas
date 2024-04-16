import React from 'react'
import { useForm } from 'react-hook-form'
export const input = ( { label, register, required} ) => {

  return (
    <>
        <label>{label}</label>
        <input {...register(label,{ required })}></input>
    </>
  )
}

