import { Box, Card, Grid, Group, Image, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'
import Switch from 'react-switch'

export const StepperTwo = () => {
   const largeScreen = useMediaQuery('(min-width: 748px)')
   const [plan, setPlan] = useState(1)
   const [monthly, setMonthly] = useState(true)

   const handlePlanSelect = (index) => {
      setPlan(index)
   }
   const togglePlanTimeChange = () => {
      setMonthly(!monthly)
   }

   return (
      <>
         <Group w={'100%'}>
            {/** form header */}
            <Box>
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Select your plan</Title>
               <Text mt={7} fz={{ base: 17, md: 15 }} w={'100%'} color={'hsl(231, 11%, 63%)'} fw={400}>You have the option of monthly or yearly billing.</Text>
            </Box>
            {/** stepper two content */}
            <Grid w={'-webkit-fill-available'}>
               <Grid.Col span={largeScreen ? 4 : 12} p={largeScreen ? 8 : 5}>
                  <Card withBorder radius={'md'} p={!largeScreen && 13} sx={{
                     cursor: 'pointer',
                     backgroundColor: plan === 1 && 'hsl(231, 100%, 99%)',
                     border: plan === 1 && '1px solid hsl(243, 100%, 62%)',
                     transition: '0.05s ease-in-out',
                     display: 'flex',
                     gap: '1rem',
                     alignItems: 'center',

                     '@media (min-width: 748px)': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 0
                     }
                  }}
                     onClick={() => handlePlanSelect(1)}
                  >
                     <Image width={35} src={'/icon-arcade.svg'} />
                     <Box pt={largeScreen ? 25 : 0}>
                        <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Aracde</Text>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'} fw={500}>
                           {monthly ? '$9/mo' : '$19/yr'}
                        </Text>
                        {!monthly && <Text fz={12} mt={3} color={'hsl(213, 96%, 18%)'}>2months free</Text>}
                     </Box>
                  </Card>
               </Grid.Col>
               <Grid.Col span={largeScreen ? 4 : 12} p={largeScreen ? 8 : 5}>
                  <Card withBorder radius={'md'} p={!largeScreen && 13} sx={{
                     cursor: 'pointer',
                     backgroundColor: plan === 2 && 'hsl(231, 100%, 99%)',
                     border: plan === 2 && '1px solid hsl(243, 100%, 62%)',
                     transition: '0.05s ease-in-out',
                     display: 'flex',
                     gap: '1rem',
                     alignItems: 'center',

                     '@media (min-width: 748px)': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 0
                     }
                  }}
                     onClick={() => handlePlanSelect(2)}
                  >
                     <Image width={35} src={'/icon-advanced.svg'} />
                     <Box pt={largeScreen ? 25 : 0}>
                        <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Advanced</Text>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'} fw={500}>
                           {monthly ? '$12/mo' : '$120/yr'}
                        </Text>
                        {!monthly && <Text fz={12} mt={3} color={'hsl(213, 96%, 18%)'}>2months free</Text>}
                     </Box>
                  </Card>
               </Grid.Col>
               <Grid.Col span={largeScreen ? 4 : 12} p={largeScreen ? 8 : 5}>
                  <Card withBorder radius={'md'} p={!largeScreen && 13} sx={{
                     cursor: 'pointer',
                     backgroundColor: plan === 3 && 'hsl(231, 100%, 99%)',
                     border: plan === 3 && '1px solid hsl(243, 100%, 62%)',
                     transition: '0.05s ease-in-out',
                     display: 'flex',
                     gap: '1rem',
                     alignItems: 'center',

                     '@media (min-width: 748px)': {
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 0
                     }
                  }}
                     onClick={() => handlePlanSelect(3)}
                  >
                     <Image width={35} src={'/icon-pro.svg'} />
                     <Box pt={largeScreen ? 25 : 0}>
                        <Text fz={15} fw={500} color={'hsl(213, 96%, 18%)'}>Pro</Text>
                        <Text fz={13} color={'hsl(213, 96%, 18%, 0.5)'} fw={500}>
                           {monthly ? '$15/mo' : '$150/yr'}
                        </Text>
                        {!monthly && <Text fz={12} mt={3} color={'hsl(213, 96%, 18%)'}>2months free</Text>}
                     </Box>
                  </Card>
               </Grid.Col>
            </Grid>
            {/** plan toggler */}
            <Box sx={{
               backgroundColor: 'hsl(231, 100%, 99%)',
               borderRadius: '7px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '100%',
               marginTop: largeScreen ? 20 : 5,
               padding: 8,
               gap: 18
            }}>
               <Text fz={13} fw={500} color={monthly ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%, 0.5)'}>Monthly</Text>
               <Switch
                  checked={!monthly}
                  onChange={togglePlanTimeChange}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  activeBoxShadow=""
                  onColor={'#01285B'}
                  offColor={'#01285B'}
                  height={20}
                  width={40}
                  handleDiameter={13}
               />
               <Text fz={13} fw={500} color={!monthly ? 'hsl(213, 96%, 18%)' : 'hsl(213, 96%, 18%, 0.5)'}>Yearly</Text>
            </Box>
         </Group>
      </>
   )
}
