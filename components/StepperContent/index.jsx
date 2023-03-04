import { Box, Button, Group, UnstyledButton } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React from 'react'
import { StepperFour } from './StepperFour'
import { StepperOne } from './StepperOne'
import { StepperThree } from './StepperThree'
import { StepperTwo } from './StepperTwo'

export const StepperContent = ({ active, nextStep, prevStep }) => {
   const largeScreen = useMediaQuery('(min-width: 900px)')
   return (
      <>
         <Group sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 220,

            '@media (min-width: 748px)': {
               position: 'static',
               justifyContent: 'end',
               paddingInline: 40,
               height: '100%',
               marginTop: 0,
               width: '67%',
            }
         }}>
            <Box
               sx={{
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 30,
                  width: '90%',
                  height: '90%',
                  marginTop: '-6.7rem',
                  borderRadius: '0.7rem',
                  padding: '1.7rem',
                  paddingBlock: '2rem',
                  boxShadow: '0px 15px 29px -8px rgba(0,0,0,0.1)',


                  '@media (min-width: 748px)': {
                     position: 'static',
                     boxShadow: 'none',
                     padding: 0,
                     margin: 0,
                  }
               }}
            >
               {active === 0 ? <StepperOne /> : active === 1 ? <StepperTwo /> : active === 2 ? <StepperThree /> : active === 3 ? <StepperFour /> : null}
               {/** next / prev step button */}
               <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: active === 0 ? 'end' : 'space-between'
               }}>
                  <UnstyledButton
                     display={active === 0 && 'none'}
                     onClick={prevStep}
                     disabled={active === 0}
                     sx={{
                        fontWeight: 500,
                        color: 'hsl(213, 96%, 18%, 0.5)',
                        padding: 13,
                        paddingInline: 15,
                        borderRadius: 5,
                        width: 'max-content',
                        transition: '0.1s',

                        '&:hover': {
                           backgroundColor: 'hsl(213, 96%, 18%, 0.05)'
                        },
                        '&:active': {
                           transform: 'translateY(1px)'
                        },
                        '&:disabled': {
                           opacity: 0.5,
                           cursor: 'not-allowed'
                        },

                        '@media (min-width: 748px)': {
                           fontSize: 15,
                           padding: 13,
                           paddingInline: 20,
                           borderRadius: 7,
                        }
                     }}
                     radius={largeScreen && 7}
                  >Go Back</UnstyledButton>
                  {
                     active === 3 ?
                        <UnstyledButton
                           onClick={nextStep}
                           sx={{
                              backgroundColor: 'hsl(243, 100%, 62%)',
                              fontWeight: 500,
                              color: 'white',
                              padding: 13,
                              paddingInline: 15,
                              borderRadius: 5,
                              width: 'max-content',
                              transition: '0.1s',

                              '&:hover': {
                                 backgroundColor: 'hsl(243, 100%, 50%)'
                              },
                              '&:active': {
                                 transform: 'translateY(1px)'
                              },

                              '@media (min-width: 748px)': {
                                 fontSize: 15,
                                 padding: 13,
                                 paddingInline: 20,
                                 borderRadius: 7,
                              }
                           }}
                           radius={largeScreen && 7}
                        >Confirm</UnstyledButton>
                        :
                        <UnstyledButton
                           onClick={nextStep}
                           sx={{
                              backgroundColor: 'hsl(213, 96%, 18%)',
                              fontWeight: 500,
                              color: 'white',
                              padding: 13,
                              paddingInline: 15,
                              borderRadius: 5,
                              width: 'max-content',
                              transition: '0.1s',

                              '&:hover': {
                                 backgroundColor: 'hsl(213, 96%, 18%, 0.9)'
                              },
                              '&:active': {
                                 transform: 'translateY(1px)'
                              },

                              '@media (min-width: 748px)': {
                                 fontSize: 15,
                                 padding: 13,
                                 paddingInline: 20,
                                 borderRadius: 7,
                              }
                           }}
                           radius={largeScreen && 7}
                        >Next step</UnstyledButton>
                  }
               </Box>
            </Box>
         </Group>
      </>
   )
}
