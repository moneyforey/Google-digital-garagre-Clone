import {
    Box,
    Button,
    Flex,
    Img,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer
} from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom"
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css"

const linkstxt = [
    { path: "/onlinecourses", title: "Online Courses" },
    { path: "/certification", title: "Certification" }
]

const linksbtn = [
    { path: "/signin", title: "Sign in" },
    { path: "/register", title: "Register" }
]

const Navbar = () => {

    return (
        <Box p={4} className={styles.box}>
            <Flex align='center' gap={4}  >
                <Link to="/">
                    <Img height="25px" src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw"
                        alt="google digitalgarage" />
                </Link>



                {
                    linkstxt.map((link) => <NavLink className={({ isActive }) => isActive ? styles.active : styles.default} to={link.path}>{link.title}</NavLink>)
                }

                <Menu>
                    <MenuButton className={styles.btn} variant="unstyled" as={Button} rightIcon={<ChevronDownIcon />}>
                        More
                    </MenuButton>
                    <MenuList className={styles.menulist}>
                        <MenuItem m={0} p={2} >Live Training</MenuItem>
                        <MenuItem p={2} >Remote Working</MenuItem>
                        <MenuItem p={2} >Tools & Resources</MenuItem>
                        <MenuItem p={2} >Help & FAQ's</MenuItem>
                        <MenuItem p={2} >Feedback</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer />


                {
                    linksbtn.map((link) => <NavLink to={link.path}>
                        <Button size='lg'
                            borderRadius='1px'
                            colorScheme='blue'
                            color={link.title == "Register" ? "white" : 'blue'}
                            variant={link.title == "Register" ? "solid" : 'unstyled'}>
                            {link.title}
                        </Button>
                    </NavLink>)
                }

            </Flex>
        </Box>
    )

}

export default Navbar;