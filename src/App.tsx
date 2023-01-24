import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {Searchbar} from "./searchbar"
import {useState } from 'react'

export const App = () =>{
const [data, setData] = useState<any[]>([])


const updateValue = (newValue: React.SetStateAction<any[]>) => {
  setData(newValue);
}

return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Searchbar updater={updateValue} data={data} ></Searchbar>

        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
}
