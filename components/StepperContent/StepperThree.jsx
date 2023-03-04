import { Box, Card, Checkbox, Flex, Group, Stack, Text, Title } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

export const StepperThree = () => {
   const { addOns, handleAddOns, monthly } = useContext(Context)

   return (
      <>
         <Group sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
         }}>
            {/** form header */}
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Pick add-ons</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>Add-ons helps enchance your gaming experience.</Text>
            </Box>
            {/** content body */}
            <Group w={'100%'}>
               <Stack w={'100%'} spacing={10}>


                  <Card radius={'md'} withBorder display={'flex'} p={13} sx={{
                     borderColor: addOns.some(addOn => addOn === 1) && 'hsl(243, 100%, 62%)',
                     backgroundColor: addOns.some(addOn => addOn === 1) && 'hsl(231, 100%, 99%)',
                     transition: '0.05s ease-in-out',
                  }}>
                     <label style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                     }}>
                        <Checkbox
                           checked={addOns.some(addOn => addOn === 1)}
                           onChange={() => handleAddOns(1)}
                        />
                        <Flex w={'100%'} align={'center'} justify={'space-between'}>
                           <Stack spacing={0}>
                              <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Online service</Text>
                              <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'}>Access to multiplayer games.</Text>
                           </Stack>
                           <Text fz={13} color={'hsl(243, 100%, 62%)'}>{monthly ? '+1$/mo' : '+10$/yr'}</Text>
                        </Flex>
                     </label>
                  </Card>

                  <Card radius={'md'} withBorder display={'flex'} p={13} sx={{
                     borderColor: addOns.some(addOn => addOn === 2) && 'hsl(243, 100%, 62%)',
                     backgroundColor: addOns.some(addOn => addOn === 2) && 'hsl(231, 100%, 99%)',
                     transition: '0.05s ease-in-out',
                  }}>
                     <label style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                     }}>
                        <Checkbox
                           checked={addOns.some(addOn => addOn === 2)}
                           onChange={() => handleAddOns(2)}
                        />
                        <Flex w={'100%'} align={'center'} justify={'space-between'}>
                           <Stack spacing={0}>
                              <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Larger storage</Text>
                              <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'}>Extra 1 TB of cloud save.</Text>
                           </Stack>
                           <Text fz={13} color={'hsl(243, 100%, 62%)'}>{monthly ? '+2$/mo' : '+12$/yr'}</Text>
                        </Flex>
                     </label>
                  </Card>

                  <Card radius={'md'} withBorder display={'flex'} p={13} sx={{
                     borderColor: addOns.some(addOn => addOn === 3) && 'hsl(243, 100%, 62%)',
                     backgroundColor: addOns.some(addOn => addOn === 3) && 'hsl(231, 100%, 99%)',
                     transition: '0.05s ease-in-out',
                  }}>
                     <label style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                     }}>
                        <Checkbox
                           checked={addOns.some(addOn => addOn === 3)}
                           onChange={() => handleAddOns(3)}
                        />
                        <Flex w={'100%'} align={'center'} justify={'space-between'}>
                           <Stack spacing={0}>
                              <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Customizable profile</Text>
                              <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'}>Custom theme on your profile.</Text>
                           </Stack>
                           <Text fz={13} color={'hsl(243, 100%, 62%)'}>{monthly ? '+2$/mo' : '+12$/yr'}</Text>
                        </Flex>
                     </label>
                  </Card>


               </Stack>
            </Group>
         </Group>
      </>
   )
}
