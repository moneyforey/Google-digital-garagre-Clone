import {
    Box,
    Divider,
    Flex,
    Image,
    Img,
    Select,
    Spacer,
    Text
} from "@chakra-ui/react";

const options = [
    'United Kingdon',
    'Turkce',
    'Svizzera',
    'Suisse',
    'Suomi',
    'Schwei',
    'Slovensko',
    'Sverige',
    'Romania',
    'Portugal',
    'Polska',
    'Osterriech',
    'Nederland',
    'MENA',
    'Malta',
    'Magyaroszag',
    'Africa',
    'Austrelia'

]

const Footer = () => {
    return (

        <Box gap={4}>
            <Flex gap={4} mx={10} p={10}>
                <Img src="https://lh3.googleusercontent.com/7NabP8N3VdnHYt17iVcUvF_Hr2lFg-ayg1YnYIrvtWCtt-RtrnwVUzLZRUT3DSg3IkZHGqEte1v-_E590aB_AC0uCA-xthGO0d1YAA=-rw" />
                <Spacer />
                <Text>Privacy & Terms</Text>
                <select width={40}>
                    {options.map((option) =>
                        <option value={option}>
                            {option}
                        </option>)}
                </select>
            </Flex>
            <Divider />
            <Flex align='center' mx={10} gap={4} p={10}>
                <Spacer />

                <Text>Share</Text>

                <Image height='30px' src="https://lh3.googleusercontent.com/sw4rOkreSopt2DcXlOCH9HPwHm7pPgeBsO8DFqWnnVPifC4473ztUcLCT49kDnDj5c-ClaRCOQKmBvbrzqICFq7yNgcqq8-byBV0aw=-rw" />
                <Image height='30px' src="https://lh3.googleusercontent.com/O73TcAUC463DfCnA87ap5gw7uWPW2R6owA8p-jcmHYJuysd2BVT_W-1PzUdxk_kbzjQ-OHuTt4W1i3N4hi_KtCkBifUtpZFPlz4R=-rw" />
                <Image height='30px' src="https://lh3.googleusercontent.com/2PFoqNpZ5xu9JK1u_CRR0aiYqGb0K6cOKkzmS2Ux0rucddJgNeMwsniGFMzQWopCdNK9rBzq73N0188sAtK_UFpgUHPPgz2XyDG5=-rw" />

            </Flex>




        </Box >

    )
}

export default Footer;