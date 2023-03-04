import { Box, Divider, Flex, Group, Stack, Text, Title } from '@mantine/core'
import React from 'react'

export const StepperFour = () => {
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
                        <Flex align={'center'} justify={'space-between'}>
                           <Text fw={500} fz={14} color={'hsl(213, 96%, 18%)'}>Arcade (Monthly)</Text>
                           <Text fw={600} fz={14} color={'hsl(213, 96%, 18%)'}>$9/mo</Text>
                        </Flex>
                     </Box>
                     <Divider />
                     <Box>
                        <Flex align={'center'} justify={'space-between'}>
                           <Text fz={12} color={'hsl(213, 96%, 18%, 0.5)'}>Online service</Text>
                           <Text fz={12} color={'hsl(213, 96%, 18%)'}>$1/mo</Text>
                        </Flex>
                     </Box>
                     <Box>
                        <Flex align={'center'} justify={'space-between'}>
                           <Text fz={12} color={'hsl(213, 96%, 18%, 0.5)'}>Larger storage</Text>
                           <Text fz={12} color={'hsl(213, 96%, 18%)'}>$2/mo</Text>
                        </Flex>
                     </Box>
                  </Stack>
                  <Box p={15}>
                     <Flex align={'center'} justify={'space-between'}>
                        <Text fz={12} color={'hsl(213, 96%, 18%, 0.5)'}>Total (per month)</Text>
                        <Text fz={17} fw={600} color={'hsl(243, 100%, 62%)'}>$12/mo</Text>
                     </Flex>
                  </Box>
               </Stack>
            </Group>
         </Group>
      </>
   )
}
