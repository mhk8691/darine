'use client'
import { Box, Link, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import QRCode from "react-qr-code"
import StarIcon from '@mui/icons-material/Star'

interface Props {
  url?: string
  image: string
  isSuggested?: boolean
  onClick?: () => void
}

export default function AppDownloadItem({ image, url, isSuggested = false, onClick }: Props) {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  const [isHover, setIsHover] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <Stack
      component={'div'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        position: 'relative',
        width: 'fit-content',
        zIndex: isHover ? 99 : 1,
      }}
    >
      {isSuggested && (
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            right: -8,
            display: 'flex',
            alignItems: 'center',
            gap: 0.4,
            background: 'linear-gradient(135deg, #FCD535 0%, #F0B90B 100%)',
            color: '#1a1a1a',
            fontSize: '0.65rem',
            fontWeight: 800,
            px: 1.1,
            py: 0.4,
            borderRadius: '20px',
            zIndex: 4,
            boxShadow: '0 2px 8px rgba(252, 213, 53, 0.5)',
            pointerEvents: 'none',
            border: '1.5px solid',
            borderColor: isDarkMode ? '#1a1a1a' : '#ffffff',
            whiteSpace: 'nowrap',
          }}
        >
          <StarIcon sx={{ fontSize: '0.75rem' }} />
          مناسب دستگاه شما
        </Box>
      )}

      <Link
        onClick={handleClick}
        sx={{
          display: 'block',
          borderColor:  isHover ? 'background.border' : 'transparent',
          borderWidth: 1,
          borderStyle: 'solid',
          bgcolor: isHover ? 'background.default' : 'transparent',
          borderRadius: 2,
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          zIndex: 3,
          cursor: 'pointer',
        
        }}
        href={url || '#'}
      >
        <Image
          src={`/images/application-download/application/${image}`}
          width={200}
          height={56}
          style={{
            border: isDarkMode ? 'none' : '1px solid black',
            borderRadius: 8,
            display: 'block',
          }}
          alt=''
        />
      </Link>

      {url && isHover && (
        <Stack
          p={1.5}
          pb={11}
          pt={2}
          borderRadius={2}
          position={'absolute'}
          bgcolor={'background.default'}
          bottom={'-5px'}
          left={'50%'}
          width={'105%'}
          border={1}
          borderColor={'background.border'}
          direction={'row'}
          justifyContent={'center'}
          sx={{
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}
        >
          <QRCode
            bgColor={isDarkMode ? "#ffffff" : '#000000'}
            fgColor={isDarkMode ? "#000000" : '#ffffff'}
            size={120}
            style={{ height: "auto", maxWidth: "100%", width: "80%" }}
            value={url}
          />
        </Stack>
      )}
    </Stack>
  )
}