import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const parteners = [
    {
        title: 'google',
        url: 'https://lh3.googleusercontent.com/jJZnt3_ZEgqPLoDXv9OMtmvHQ13ExWDcg4TeOruamOAm1MLaLGmzj1qwz4VBveo0Q_LCph1Idy558gyl5KHp5HDEbTxRdkzD5sGjDOjBhte3eqvw8A=w160'
    },
    {
        title: 'The Open University',
        url: 'https://lh3.googleusercontent.com/Q3wBjzp1-TGEZWpdp-E6PSkc-nMEV66Jaokd4gUjyGh95KMqQyR1I7Gu1eSU7qifjLuiwVJrEmB92HPTa4Hr3e6Mh7JGk7zrQ8YmZ-1HQCWZpKHpzTU=w160'
    },
    {
        title: 'iab',
        url: 'https://lh3.googleusercontent.com/MVTsJCD1WJjExvucPvW4GWYHnJ6YLPgQEFijPCVpSyfIM1wAgVvW-AQghsLFZLoWgnBCYbqI3wOveQ1RdOeDf_2Sgo03A7zN8Pwd6NSsu_wBuITKdiE=w160'
    },
    {
        title: 'future learn',
        url: 'https://lh3.googleusercontent.com/oDBNKrOW0hYPsQgbz7v2BAUCjUoPfuyBBaqUFGg-oify2xKieu2OjW_6C_6smen-YNlOf_CR8M3-VN5pOy_3r4VQ1FPdOUk8mrO58abJNS0RwN9_YYY=w160'
    },
    {
        title: 'coursera',
        url: 'https://lh3.googleusercontent.com/KZYTEfg4wkORJscNEaj27bVFV83vzRB_6Kd7Fwpqnd5KipwGdqkkulHt9KPWr8oPQnHsh2zyw1tpPyKbB_HfzrG6XTeoy91EONnq9fRj6dV9p4HL_TA=w160'
    }
]

const Middlesection = () => {
    return (
        <Box>
            <Box >
                <Text mx='50px'>
                    We provide courses along with leading institutions and companies
                </Text>
                <Flex gap={7} mx='50px' >
                    {
                        parteners.map((img) => <Image height='20px' src={img.url} key={img.title} />)
                    }
                </Flex>
            </Box>
            <Box p='50px' color='white' bg="#1a73e8 ">
                <Flex gap={10}>
                    <Box alignItems='center' borderRadius='50%' bg='white'  w='5%'>
                    <Image m={5} src='https://lh3.googleusercontent.com/N9jW0_MdICcLbzV1L-JcfAXr5QaadNKtc8HgH-KPixv3J9XaSnjLkru3dZl0dfNYR12hEsDkQM_WMXtXqe_ohTSx96E7gmFHwzpXPubIJlfV3ybeTxks=-rw' />
                    </Box>

                    <Box>
                        <Text>
                        Did you know we also have webinars?
                        </Text>
                        <Text>
                        Online sessions designed to help you develop skills in less than an hour. You can watch webinars live or register to take part in what is coming up.
                        </Text>
                    </Box>

                    <Box>
                        <Text>
                        Explore our webinars   <ArrowForwardIcon/>
                       
                        </Text>
                    </Box>

                </Flex>
            </Box>
        </Box>
    )
}

export default Middlesection;