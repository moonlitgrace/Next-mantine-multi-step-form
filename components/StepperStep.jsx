import { Stepper, createStyles, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'

const useStyles = createStyles((theme, _params, getRef) => ({

   separator: {
      opacity: 0
   },

   separatorActive: {
      opacity: 0
   },

   stepIcon: {
      // margin: -4,
      ref: getRef('stepIcon'),
      borderColor: 'rgba(255, 255, 255, 0.7)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : 'transparent',
      borderWidth: 2,
      color: 'white',

      '&[data-completed]': {
         borderWidth: 2,
         borderColor: 'rgba(255, 255, 255, 0.3)',
         backgroundColor: 'rgba(255, 255, 255, 0.3)',
      },

      '&[data-progress]': {
         backgroundColor: 'rgba(255, 255, 255, 0.4)',
         borderWidth: 2,
         borderColor: 'rgba(255, 255, 255, 0.7)',
      },
   },
}))

export const StepperStep = ({ active, setActive }) => {
   const { classes } = useStyles()
   const largeScreen = useMediaQuery('(min-width: 900px)')

   return (
      <>
         <Stepper
            active={active}
            classNames={classes}
            onStepClick={setActive}
            orientation={largeScreen ? 'vertical' : 'horizontal'}
            size={largeScreen && 'sm'}
            allowNextStepsSelect={false}
         >
            <Stepper.Step label={largeScreen && <Text fz={12} color={'white'} opacity={0.8}>STEP 1</Text>} description={largeScreen && <Text color={'white'} fz={13} fw={600}>YOUR INFO</Text>} />
            <Stepper.Step label={largeScreen && <Text fz={12} color={'white'} opacity={0.8}>STEP 2</Text>} description={largeScreen && <Text color={'white'} fz={13} fw={600}>SELECT PLAN</Text>} />
            <Stepper.Step label={largeScreen && <Text fz={12} color={'white'} opacity={0.8}>STEP 3</Text>} description={largeScreen && <Text color={'white'} fz={13} fw={600}>ADD-ONS</Text>} />
            <Stepper.Step label={largeScreen && <Text fz={12} color={'white'} opacity={0.8}>STEP 4</Text>} description={largeScreen && <Text color={'white'} fz={13} fw={600}>SUMMARY</Text>} />
         </Stepper>
      </>
   )
}
