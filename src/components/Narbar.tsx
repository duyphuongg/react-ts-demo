import { AppBar, Box, FormControl, Toolbar, Typography } from '@mui/material'
import WelcomeMessage from './WelcomeMessage'
import { useState, ChangeEvent } from 'react'

const Narbar = () => {
  const [position, setPosition] = useState<string>("Frontend Developer")
  const onPositionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPosition(event.target.value)
  }

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Box display='flex' justifyContent={'space-between'} alignItems={'center'} width={1} py={2}>
          <Typography variant='h6'>My movies</Typography>
        </Box>
        <Box textAlign={'center'}>
          <WelcomeMessage position={position} />
          <Box mt={1}>
            <FormControl>
              <select value={position} onChange={onPositionChange}>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
              </select>
            </FormControl>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Narbar