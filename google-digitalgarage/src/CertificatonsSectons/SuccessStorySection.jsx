import styles from "./SuccessStorySection.module.css"
import { Box, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Stories = [
    {
        id: 0,
        name: 'Sylwia’s story',
        story: 'Meet Sylwia from icube.pl. After building her skills and getting certified, she was promoted to Content Marketing Manager and has since helped her agency expand into multiple markets.',
        url: 'https://lh3.googleusercontent.com/dIPoNCvQgsurSpqTfnnI7_yBZhgSwBHKmiCFpQLPWKtY7mHRSYlqID6fCkj25LMrjFcMMnuWyR6YATjjer25zLpxhm9O5tcmkNI0rw'
    },
    {
        id: 1,
        name: 'Darkos story',
        story: 'After completing the training courses, Darko Dujič, CEO of Slovenian e-commerce platform Ceneje.si, was so impressed that he encouraged everyone in the company to follow suit.',
        url: 'https://lh3.googleusercontent.com/2NXTW3S8dOSmI9erFCcda8IzZiZBHMWsKJTJ8M-pZ7ycGxiGUGPHkmoDTZ0o2eeC74XFC0rj9B6oYXvQwSiRAEZnSJD9koVdDGzxow'
    }
]

const SuccessStorySection = () => {
    const [banner, setBanner] = useState(Stories[0].url);

    
    const handleSetBanner = (id) => {
       
        const E = document.getElementById(id === 0 ? 0 : 1);
        const F = document.getElementById(id === 0 ? 1 : 0);
        F.style.borderLeft = null;
         setBanner(Stories[id].url)
        
         E.style.borderLeft = "2px solid blue";
    }
    return (
        <Box>
            <Divider mb={20}/>
            <Box>
                <Text mb={5} className={styles.hd}>Success stories</Text>
                <Text width="600px" m="auto" className={styles.tx1}>
                    Over 300,000 people have already gained this qualification, and are using it to develop and improve their careers.

                </Text>

            </Box>
            <Flex>

                <Image m={10} src={banner} />


                <Box>
                    {
                        Stories.map((el) =>

                            <Stack
                            p={5}
                            m={10}
                            id={el.id}
                             onClick={()=>handleSetBanner(el.id)}>
                                <Text className={styles.hd1}>{el.name}</Text>
                                <Text className={styles.tx2}>{el.story}</Text>
                            </Stack>)

                    }
                </Box>

            </Flex>
            <Divider mt={20}/>
        </Box>
    )
}

export default SuccessStorySection;