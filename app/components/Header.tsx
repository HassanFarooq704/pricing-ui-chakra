import {
  Box,
  Heading,
  Text
}
  from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <>
      <Box textAlign={{ lg: 'center', base: 'left', md: 'left' }} bg='#6B46C1' pt={{ lg: '90px', base: '50px' }} px={{ lg: '0', base: '12px' }} pb='250px' color='white' >
        <Heading>Simple Pricing for your business</Heading>
        <Text pt='12px'>Plans that are carefully crafted to suit your business</Text>
      </Box>
    </>
  )
}
