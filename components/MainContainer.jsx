import { Box, Group } from '@mantine/core'
import React, { useState } from 'react'
import { StepperContent } from './StepperContent'
import { StepperStep } from './StepperStep'
0
export const MainContainer = () => {
   const [active, setActive] = useState(0)

   const nextStep = () => setActive((active) => (active < 4 ? active + 1 : active))
   const prevStep = () => setActive((active) => (active > 0 ? active - 1 : active))

   return (
      <>
         <Box sx={{
            height: '100vh',
            backgroundColor: 'hsl(217, 100%, 97%)',
            position: 'relative',

            '@media (min-width: 748px)': {
               display: 'grid',
               placeItems: 'center',
               width: '100%'
            }
         }} >
            <Group sx={{
               '@media (min-width: 748px)': {
                  width: '55%'
               }
            }}>
               <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',

                  '@media (min-width: 748px)': {
                     flexDirection: 'row',
                     backgroundColor: 'white',
                     padding: 13,
                     boxShadow: '0px 15px 29px -8px rgba(0,0,0,0.1)',
                     borderRadius: '0.7rem',
                     height: '30rem',
                  }
               }}
               >
                  {/** stepper step */}
                  <Box sx={{
                     height: '12rem',
                     width: '100vw',
                     backgroundImage: `url(/bg-sidebar-mobile.svg)`,
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     display: 'flex',
                     paddingTop: '2.3rem',
                     justifyContent: 'center',

                     '@media (min-width: 748px)': {
                        width: '30%',
                        borderRadius: '0.5rem',
                        height: '100%',
                        padding: '1.5rem',
                        backgroundImage: `url(/bg-sidebar-desktop.svg)`,
                        justifyContent: 'start'
                     }
                  }}>
                     <StepperStep active={active} setActive={setActive} />
                  </Box>

                  {/** stepper content */}
                  <StepperContent active={active} nextStep={nextStep} prevStep={prevStep}  />
               </Box>
            </Group>
         </Box>
      </>
   )
}
