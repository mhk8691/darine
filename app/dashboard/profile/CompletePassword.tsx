import PasswordField from '@/app/login/PasswordField'
import { InfoOutlined } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'

interface Props{
    password:string
setPassword:Dispatch<SetStateAction<string>>
repeatPassword:string
setRepeatPassword:Dispatch<SetStateAction<string>>
}

export default function CompletePassword({password,setPassword,setRepeatPassword,repeatPassword}:Props) {
  return (
      <>
            <PasswordField password={password} setPassword={setPassword} />
            <PasswordField
              password={repeatPassword}
              setPassword={setRepeatPassword}
              label="تایید رمز عبور"
            />

            <Stack direction={'column'} gap={0.5} mt={4}>
              <Stack direction={'row'} gap={1}>
                <InfoOutlined sx={{ color: 'text.muted' }} />
                <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
                  رمز عبور باید بین 6 تا 24 حرف باشد
                </Typography>
              </Stack>
              <Stack direction={'row'} gap={1}>
                <InfoOutlined sx={{ color: 'text.muted' }} />
                <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
                  رمز باید شامل اعداد باشد
                </Typography>
              </Stack>
              <Stack direction={'row'} gap={1}>
                <InfoOutlined sx={{ color: 'text.muted' }} />
                <Typography variant="body2" fontSize={14} sx={{ color: 'text.muted' }}>
                  رمز باید شامل حروف بزرگتر و کوچکتر باشد
                </Typography>
              </Stack>
            </Stack>
          </>
  )
}
