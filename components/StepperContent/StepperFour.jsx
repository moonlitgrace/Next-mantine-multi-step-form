import { Box, Divider, Flex, Group, Stack, Text, Title } from '@mantine/core'
import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const StepperFour = () => {
   const { monthly, addOns, plan, getTotal } = useContext(Context)
   const total = getTotal()

   return (
      <>
         <Group>
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Finishing up</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>Double-check everything looks OK before confirming.</Text>
            </Box>
            <Group w={'100%'}>
               <Stack w={'100%'}>
                  <Stack spacing={15} p={'1rem'} sx={{
                     backgroundColor: 'hsl(217, 100%, 97%)',
                     borderRadius: '10px',
                  }}>
                     <Box>
                        {
                           plan === 1 ?
                              <Flex align={'center'} justify={'space-between'}>
                                 <Text fw={500} fz={14} color={'hsl(213, 96%, 18%)'}>Arcade ({monthly ? 'Monthly' : 'Yearly'})</Text>
                                 <Text fw={600} fz={14} color={'hsl(213, 96%, 18%)'}>{monthly ? '$9/mo' : '$19/yr'}</Text>
                              </Flex>
                              : plan === 2 ?
                                 <Flex align={'center'} justify={'space-between'}>
                                    <Text fw={500} fz={14} color={'hsl(213, 96%, 18%)'}>Advanced ({monthly ? 'Monthly' : 'Yearly'})</Text>
                                    <Text fw={600} fz={14} color={'hsl(213, 96%, 18%)'}>{monthly ? '$12/mo' : '$120/yr'}</Text>
                                 </Flex>
                                 :
                                 <Flex align={'center'} justify={'space-between'}>
                                    <Text fw={500} fz={14} color={'hsl(213, 96%, 18%)'}>Pro ({monthly ? 'Monthly' : 'Yearly'})</Text>
                                    <Text fw={600} fz={14} color={'hsl(213, 96%, 18%)'}>{monthly ? '$15/mo' : '$150/yr'}</Text>
                                 </Flex>
                        }
                     </Box>
                     <Divider />
                     {
                        addOns.some(addOn => addOn === 1) &&
                        <Box>
                           <Flex align={'center'} justify={'space-between'}>
                              <Text fz={12} color={'hsl(213, 96%, 18%, 0.5)'}>Online service</Text>
                              <Text fz={12} color={'hsl(213, 96%, 18%)'}>{monthly ? '$1/mo' : '$10/yr'}</Text>
                           </Flex>
                        </Box>
                     }
                     {
                        addOns.some(addOn => addOn === 2) &&
                        <Box>
                           <Flex align={'center'} justify={'space-between'}>
                              <Text fz={12} color={'hsl(213, 96%, 18%, 0.5)'}>Larger storage</Text>
                              <Text fz={12} color={'hsl(213, 96%, 18%)'}>{monthly ? '$2/mo' : '$12/yr'}</Text>
                           </Flex>
                        </Box>
                     }
                     {
                        addOns.some(addOn => addOn === 3) &&
                        <Box>
                           <Flex align={'center'} justify={'space-between'}>
                              <Text fz={12} color={'hsl(213, 96%, 18%, 0.5)'}>Customizable profile</Text>
                              <Text fz={12} color={'hsl(213, 96%, 18%)'}>{monthly ? '$2/mo' : '$12/yr'}</Text>
                           </Flex>
                        </Box>
                     }
                  </Stack>
                  <Box p={15}>
                     <Flex align={'center'} justify={'space-between'}>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'}>Total (per {monthly ? 'month' : 'year'})</Text>
                        <Text fz={17} fw={600} color={'hsl(243, 100%, 62%)'}>${total}/{monthly ? 'mo' : 'yr'}</Text>
                     </Flex>
                  </Box>
               </Stack>
            </Group>
         </Group>
      </>
   )
}
