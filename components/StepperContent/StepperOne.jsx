import { Box, Group, Input, Stack, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const StepperOne = () => {
   const { handleFormDataChange, formData } = useContext(Context)
   const largeScreen = useMediaQuery('(min-width: 900px)')
   return (
      <>
         <Group>
            {/** form header */}
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Personal info</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>Please provide your name, email, address, and phone number.</Text>
            </Box>

            {/** form */}
            <Stack w={'100%'}>
               <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',

                  '@media (min-width: 748px)': {
                     gap: '0.8rem'
                  }
               }}>
                  <Input.Wrapper>
                     <Text fz={'sm'} fw={largeScreen ? 400 : 500} color={'hsl(213, 96%, 18%)'}>Name</Text>
                     <Input
                        name='name'
                        value={formData.name}
                        onChange={handleFormDataChange}
                        size={'md'}
                        placeholder="e.g. Stephen King"
                     />
                  </Input.Wrapper>
                  <Input.Wrapper>
                     <Text fz={'sm'} fw={largeScreen ? 400 : 500} color={'hsl(213, 96%, 18%)'}>Email Address</Text>
                     <Input
                        name='email'
                        value={formData.email}
                        onChange={handleFormDataChange}
                        size={'md'}
                        placeholder="e.g. stephenking@lorem.com"
                     />
                  </Input.Wrapper>
                  <Input.Wrapper>
                     <Text fz={'sm'} fw={largeScreen ? 400 : 500} color={'hsl(213, 96%, 18%)'}>Phone Number</Text>
                     <Input
                        name='phone'
                        value={formData.phone}
                        onChange={handleFormDataChange}
                        size={'md'}
                        placeholder="e.g. +1 234 567 890"
                     />
                  </Input.Wrapper>
               </Box>
            </Stack>
         </Group>
      </>
   )
}
