import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Stories = [
    { name: 'Sylwia’s story', story: 'Meet Sylwia from icube.pl. After building her skills and getting certified, she was promoted to Content Marketing Manager and has since helped her agency expand into multiple markets.', url: 'https://lh3.googleusercontent.com/dIPoNCvQgsurSpqTfnnI7_yBZhgSwBHKmiCFpQLPWKtY7mHRSYlqID6fCkj25LMrjFcMMnuWyR6YATjjer25zLpxhm9O5tcmkNI0rw' },
    {name:'Darkos story' , story:'After completing the training courses, Darko Dujič, CEO of Slovenian e-commerce platform Ceneje.si, was so impressed that he encouraged everyone in the company to follow suit.',url:'https://lh3.googleusercontent.com/2NXTW3S8dOSmI9erFCcda8IzZiZBHMWsKJTJ8M-pZ7ycGxiGUGPHkmoDTZ0o2eeC74XFC0rj9B6oYXvQwSiRAEZnSJD9koVdDGzxow'}
]

const SuccessStorySection = () => {
    return (
        <Box>
            <Box>

            </Box>
            <Flex>
               <Box>
               {
                    Stories.map((el)=>
                    <Box>
                        <Heading>{el.name}</Heading>
                        <Text>{el.story}</Text>
                    </Box>)
                }
               </Box>

            </Flex>
        </Box>
    )
}

export default SuccessStorySection;