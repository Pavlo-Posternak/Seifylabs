import { Box, Button, Flex, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { connectPhantomETH } from "utils/utils";

const Profile = () => {
    const [ open, setOpen ] = useState(false);

    return (
        <Box>
            <Button onClick={() => {
                setOpen(true);
            }} colorScheme="purple">
                Connect wallet
            </Button>
            <Modal isOpen={open} onClose={() => {
                setOpen(false);
            }}>
                <ModalOverlay />
                <ModalContent mt={'10%'}>
                    <ModalCloseButton />
                    <Flex direction={'column'} alignItems={"center"} gap={2} m={10}>
                        <Text fontSize={'3xl'}>Connect your wallet</Text>
                        <Text fontSize={'lg'} mt={'-2'}>Connect wallet to assign payee address</Text>
                        <HStack my={4} gap={12}>
                            <VStack cursor={'pointer'} p={4} borderRadius={8} transition={'0.2s ease'} _hover={{bg: "#646464"}} onClick={() => {
                                connectPhantomETH();
                            }}>
                                <Image src="/static/images/phantom.png" h={20} alt="Phantom"/>
                                <Text fontSize={'lg'}>Phantom</Text>
                            </VStack>
                            <VStack cursor={'pointer'} p={4} borderRadius={8} transition={'0.2s ease'} _hover={{bg: "#646464"}} onClick={() => {

                            }}>
                                <Image src="/static/images/metamask.png" h={20} alt="Metamask"/>
                                <Text fontSize={'lg'}>Metamask</Text>
                            </VStack>
                        </HStack>
                    </Flex>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Profile;