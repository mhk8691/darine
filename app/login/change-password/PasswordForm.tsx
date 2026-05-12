'use client'
import React, { useState } from 'react'
import PasswordField from '../PasswordField'

export default function PasswordForm() {
    const [password,setPassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')

  return (
   <>
     <PasswordField password={password} setPassword={setPassword} />
        <PasswordField password={repeatPassword} setPassword={setRepeatPassword} label="تایید رمز عبور" />
   </>
  )
}
