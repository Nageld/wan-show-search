import {
    Box,
    Text,
    Link,
    VStack,
    Card,
    CardBody,
    Heading,
    Stack,
    CardHeader,
    StackDivider,
  } from "@chakra-ui/react"

let temp:any[] =[]
export const dummy: any[] = [];
export const formatData = function prints(){
  temp = dummy
  for (const i in temp){
    temp[i].name = temp[i].metadata.title
  }
  
  
}


export const Videos = function a({test}: {test: any[]}) {

  function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

  return (
    <VStack spacing={8}>
      {temp.map((x) => (
        <Card key={generateUUID()}>
          <CardHeader>
            <Link href={"https://youtu.be/"+x.metadata.videoId + "?t="+ String(x.metadata.start).split(".")[0]} isExternal><Heading size='md' >{x.name}</Heading></Link>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Text pt='2' fontSize='sm'>
                  {x.metadata.text}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      ))}

    </VStack>

  )
}