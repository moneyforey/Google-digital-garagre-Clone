import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Img,
    Input,
    Link,
    Spacer,
    Stack,
    Text
} from "@chakra-ui/react"
import { useState } from "react";
import styles from "./SignIn.module.css";



const Registeration = () => {
    const [input, setInput] = useState('');
    const [placeholder, stePlaceholder] = useState('Email');

    const handleClickInput = () => {
        stePlaceholder("example@gmail.com")
    }

    const handleClick = () => {

    }

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    return (
        <Box>
            <Stack>
                <Text className={styles.hdcrd} pl={20} pt={10} >
                    Create your account
                </Text>
                <Text pl={20} pb={10}>Sign up to access Google Digital Garage free online courses</Text>
            </Stack>
            <Box pb={200} bg="#f8f9fa ">
                <Box bg="white" p={10} mx={250} className={styles.loginform}>
                    <Flex align='center' gap={2} width='200px' p={3} className={styles.boxasbtn}>
                        <Img height='15px' src="https://cdn-icons-png.flaticon.com/512/300/300221.png" />
                        Register with Google
                    </Flex>
                    <Text py={5} className={styles.txor} >Or continue with email</Text>
                    <FormControl isInvalid={isError}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            onClick={handleClickInput}
                            placeholder={placeholder}
                            width='400px'
                            variant="flushed"
                            type='email'
                            value={input}
                            onChange={handleInputChange}
                        />
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}

                        <FormLabel>Password</FormLabel>
                        <Input
                            onClick={handleClickInput}
                            placeholder={placeholder}

                            width='400px'
                            variant="flushed"
                            type='password'
                            value={input}
                            onChange={handleInputChange}
                        />
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}


                    </FormControl>

                </Box>

                <Flex mx={250} align='center' py={5} width='400px'>
                    <Text py={5}>
                    Already have an account?  <Link href="/signin" color='blue'>Sign in.</Link></Text>
                    <Spacer />
                    <Button onClick={handleClick} colorScheme='blue' borderRadius="1px" disabled={isError}>Continue</Button>
                </Flex>



            </Box>
        </Box>
    )
}

export default Registeration;