import { Box, Checkbox, Group, Stack, Text, Title } from '@mantine/core'
import React from 'react'

export const StepperThree = () => {
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
            <Group>
               <Stack>
                  <Checkbox
                     sx={{

                     }}
                     label={
                       'asd'
                     }
                  />
               </Stack>
            </Group>
         </Group>
      </>
   )
}
