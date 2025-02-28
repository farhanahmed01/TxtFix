

import React from 'react'

export default function Box() {
  return (
    <div>
      <Box
      sx={{
        height: 200,
        width: 200,
        my: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        p: 2,
        border: '2px solid grey',
      }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
    </div>
  )
}

