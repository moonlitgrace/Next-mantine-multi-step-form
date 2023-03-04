import { Flex, Image, Stack, Text, Title } from '@mantine/core'
import React from 'react'

export const StepperFive = () => {
   return (
      <>
         <Flex align={'center'} justify={'center'} h={'100%'}>
            <Stack align={'center'}>
               <Image width={70} src={'/icon-thank-you.svg'} />
               <Title order={2} color={'hsl(213, 96%, 18%)'}>Thank you!</Title>
               <Text align='center' color={'hsl(231, 11%, 63%)'} fz={{base: 16, md: 13.5}}>
                  Thanks for confirming your subsription! We hope you have fun using our platform. If you ever nedd support. Please feel free to email us at support@loremgaming.com.
               </Text>
            </Stack>
         </Flex>
      </>
   )
}
