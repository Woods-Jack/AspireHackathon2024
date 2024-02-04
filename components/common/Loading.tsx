import { Flex, Heading, HStack, VStack, Text, Image} from '@chakra-ui/react'


export const LoadingPage: React.FC = () => {
    return (
        <Flex bgColor='#000' alignItems='center' justifyContent='center' zIndex={50} position='fixed' width='100%' height='100%' top={0} left={0}>
            <HStack gap={20} justifyContent='center' alignItems='center' width='100%'>
            <Image
              src="/loading.svg"
              alt="loading logo"
              width="150"
              height="150"
              css={{
                animation: 'rotate 3s linear infinite', // Adjust the duration and timing function as needed
                '@keyframes rotate': {
                  from: {
                    transform: 'rotate(0deg)',
                  },
                  to: {
                    transform: 'rotate(360deg)',
                  },
                },
              }}
            />
                <VStack gap={4} alignItems={'left'}>
                    <Heading color='white'>
                        Loading...
                    </Heading>
                        <Text color='white' width={400}>
                            We are using your Marcel data and current trends to generate your learning path with AI!
                        </Text>
                  
                </VStack>
            </HStack>
        </Flex>
    );
};
