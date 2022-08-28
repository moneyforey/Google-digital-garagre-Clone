import {
    Box,
    Button,
    Divider,
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
import '../App.css';
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const [input, setInput] = useState('');
    const [placeholder, stePlaceholder] = useState('Email');
    const navigate = useNavigate()

    const handleClickInput = () => {
        stePlaceholder("example@gmail.com")
    }

    const handleClick =()=>{
       navigate("/")
    }

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    return (
        <Box mt="100px">
            <Stack>
            <Text className={styles.hdcrd} pl={20} pt={10} >Sign in</Text>
            <Text  pl={20} pb={10}>Access your online courses and track your progress</Text>
            </Stack>
            <Box pb={200} bg="#f8f9fa ">
            <Box bg="white" p={10} mx={250} className={styles.loginform}>
                <Flex align='center' gap={2} width='200px' p={3} className={styles.boxasbtn}>
                    <Img height='15px' src="https://cdn-icons-png.flaticon.com/512/300/300221.png" />
                    Sign in with Google
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

                    <Flex align='center' py={5} width='400px'>
                        <Text color='blue'>Forgotten Password?</Text>
                        <Spacer />
                        <Button onClick={handleClick} colorScheme='blue' borderRadius="1px" disabled={isError}>Sign in</Button>
                    </Flex>
                </FormControl>
                <Text py={5}>
                    By signing in you agree to the Google Terms of Service and Privacy Policy</Text>
                <Divider />
                <Text py={5}>
                    Need an account? <Link href="/register" color='blue'>Sign Up here.</Link></Text>
            </Box>
            </Box>
        </Box>
    )
}

export default SignIn;