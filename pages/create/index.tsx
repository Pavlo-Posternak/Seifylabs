import { CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Heading, HStack, Image, Input, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, Textarea, Tooltip } from "@chakra-ui/react";
import { CalendarDate, DatePicker, DatePickerCalendar, DatePickerTimeField, DateRangePicker, DateRangePickerCalendar } from "@saas-ui/date-picker";
import * as React from "react";
import { useRouter } from "next/navigation";

const CreateProject = () => {
    const [ step, setStep ] = React.useState(1);
    const [ token, setToken ] = React.useState("USDC");
    const [ amount, setAmount ] = React.useState(0);
    const [ link, setLink ] = React.useState('');
    const [ tooltip, setTooltip ] = React.useState(false);
    const router = useRouter();

    return (
        <Container px="8" py="32" maxW="container.2xl">
            {step === 1 ? (
                    <Flex direction={`column`} alignItems={"center"} gap={16} textAlign={"center"} my={'40'}>
                        <Heading size={'xl'}>Select Role</Heading>
                        <Flex direction={'column'} alignItems={'center'} gap={8}>
                            <Text fontSize={'2xl'}>Are you the service provider (Payee) or the service requester (Payer)?</Text>
                            <Flex alignItems={"center"} justify={'center'} gap={8}>
                                <Button fontSize={'large'} p={5} colorScheme="purple" onClick={() => setStep(2)}>Payer</Button>
                                <Button fontSize={'large'} p={5} colorScheme="purple" isDisabled>Payee</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                ) : step === 2 ? (
                    <Flex direction={`column`} alignItems={"center"} gap={16} textAlign={"center"} mt={'36'}>
                        <Heading size={'xl'}>Project Details</Heading>
                        <Flex direction={'column'} alignItems={'start'} gap={2} minW={'640px'}>
                            <Text fontSize={'2xl'}>Scope of Work</Text>
                            <Text fontSize={'lg'} mt={'-2'}>Give details about the project</Text>
                            <Textarea h={'300px'}></Textarea>
                            <Flex alignItems={"center"} justify={'end'} gap={4} w={'full'} mt={'8'}>
                                <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => setStep(1)}>{`<`} Previous</Button>
                                <Button fontSize={'medium'} py={4} px={8} colorScheme="purple" onClick={() => setStep(3)}>Next {`>`}</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                ) : step === 3 ? (
                    <Flex direction={`column`} alignItems={"center"} gap={16} textAlign={"center"} mt={'16'}>
                        <Heading size={'xl'}>Project Details</Heading>
                        <Flex direction={'column'} alignItems={'start'} gap={4} minW={'640px'}>
                            <Flex direction={'column'} alignItems={'start'} gap={2}>
                                <Text fontSize={'2xl'}>Select Crypto Blockchain</Text>
                                <Text fontSize={'lg'} mt={'-2'}>Which cryptocurrency will you use to pay payee?</Text>
                                <HStack my={8}>
                                    <Button
                                        leftIcon={<Image src="/static/images/usdc.svg" h={6} alt="USDC"/>} 
                                        size={'lg'}
                                        p={2}
                                        colorScheme="whiteAlpha"
                                        variant="solid"
                                        isActive={token === "USDC"}
                                        onClick={() => setToken("USDC")}
                                    ><Text fontSize={'lg'} color={'black'}>USDC</Text></Button>
                                    <Button
                                        leftIcon={<Image src="/static/images/ethereum.svg" h={6} alt="Ethereum"/>} 
                                        size={'lg'}
                                        p={2}
                                        colorScheme="whiteAlpha"
                                        variant="solid"
                                        isActive={token === "ETH"}
                                        onClick={() => setToken("ETH")}
                                    ><Text fontSize={'lg'} color={'black'}>Ethereum</Text></Button>
                                    <Button
                                        leftIcon={<Image src="/static/images/solana.svg" h={6} alt="Solana"/>} 
                                        size={'lg'}
                                        p={2}
                                        colorScheme="whiteAlpha"
                                        variant="solid"
                                        isActive={token === "SOL"}
                                        onClick={() => setToken("SOL")}
                                    ><Text fontSize={'lg'} color={'black'}>Solana</Text></Button>
                                    <Button
                                        leftIcon={<Image src="/static/images/bitcoin.svg" h={6} alt="Bitcoin"/>} 
                                        size={'lg'}
                                        p={2}
                                        colorScheme="whiteAlpha"
                                        variant="solid"
                                        isActive={token === "BTC"}
                                        onClick={() => setToken("BTC")}
                                    ><Text fontSize={'lg'} color={'black'}>Bitcoin</Text></Button>
                                </HStack>
                            </Flex>
                            <Flex direction={'column'} alignItems={'start'} gap={2}>
                                <Text fontSize={'2xl'}>Connect Wallet</Text>
                                <Text fontSize={'lg'} mt={'-2'}>Connect wallet to assign payer wallet address</Text>
                                <HStack my={4} gap={6}>
                                    <Button
                                        leftIcon={<Image src="/static/images/phantom.png" h={8} alt="Phantom"/>} 
                                        size={'lg'}
                                        p={4}
                                        colorScheme="whiteAlpha"
                                        variant="solid"
                                        onClick={() => {}}
                                    ><Text fontSize={'lg'} color={'black'}>Phantom</Text></Button>
                                    <Button
                                        leftIcon={<Image src="/static/images/metamask.png" h={8} alt="MetaMask"/>} 
                                        size={'lg'}
                                        p={4}
                                        colorScheme="whiteAlpha"
                                        variant="solid"
                                        onClick={() => {}}
                                    ><Text fontSize={'lg'} color={'black'}>Metamask</Text></Button>
                                </HStack>
                                <Text fontSize={'md'}>Wallet Connected: 8Y1s...YQ1Y</Text>
                                <Text fontSize={'md'} color="#8952e0">{token} Balance: 145 {token}</Text>
                            </Flex>
                            <Flex direction={'column'} alignItems={'start'} gap={2}>
                                <Text fontSize={'2xl'}>Amount</Text>
                                <Text fontSize={'lg'} mt={'-2'}>How much will the payee receive (cost of project)?</Text>
                                <Flex border={`1px solid white`} borderRadius={8} p={2} gap={4} width={'max-content'}>
                                    <Input
                                        size={'md'} 
                                        variant={'unstyled'}
                                        width={9 * (isNaN(amount) ? 1 : amount.toString().length) + "px"} 
                                        p={0} 
                                        mt={'3px'} 
                                        textAlign={'right'}
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.valueAsNumber)}
                                    />
                                    <Text ml={-2}>{token}</Text>
                                    <Image
                                        src={`/static/images/${token === "USDC" ? "usdc": token === "ETH" ? "ethereum": token === "SOL" ? "solana" : "bitcoin"}.svg`}
                                        alt={token}
                                        h={6}
                                        w={6}
                                        borderRadius={`full`}
                                        border={`2px solid white`}
                                    />
                                </Flex>
                            </Flex>
                            <Flex alignItems={"center"} justify={'end'} gap={4} w={'full'} mt={'8'}>
                                <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => setStep(2)}>{`<`} Previous</Button>
                                <Button fontSize={'medium'} py={4} px={8} colorScheme="purple" onClick={() => setStep(4)}>Next {`>`}</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                ) : (
                    <Flex direction={`column`} alignItems={"center"} gap={10} textAlign={"center"} mt={'4'}>
                        <Heading size={'xl'}>Project Details</Heading>
                        <Flex direction={'column'} alignItems={'start'} gap={4} minW={'640px'}>
                            <Flex direction={'column'} alignItems={'start'} gap={2}>
                                <Text fontSize={'2xl'}>Deliverables</Text>
                                <Text fontSize={'lg'} mt={'-2'}>What should payee deliver</Text>
                                <Textarea h={'200px'} w={'640px'}></Textarea>
                            </Flex>
                            <Flex direction={'column'} alignItems={'start'} gap={2}>
                                <Text fontSize={'2xl'}>Timeline</Text>
                                <Text fontSize={'lg'} mt={'-2'}>By when should payee deliver the work?</Text>
                                <Box bg={'#171717'} p={4}>
                                    <DatePicker>
                                        <DatePickerCalendar />
                                        <DatePickerTimeField />
                                    </DatePicker>
                                </Box>
                            </Flex>
                            
                            <Flex alignItems={"center"} justify={'end'} gap={4} w={'full'} mt={'8'}>
                                <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => setStep(3)}>{`<`} Previous</Button>
                                <Button fontSize={'medium'} py={4} colorScheme="purple" onClick={() => {
                                    setLink("abcdefgh12345678")
                                }}>Invite Payee</Button>
                            </Flex>
                        </Flex>
                        <Modal isOpen={!!link} onClose={() => {
                            setLink('');
                            router.push("/dashboard");
                        }}>
                            <ModalOverlay />
                            <ModalContent maxW={'600px'} mt={64} borderRadius={16}>
                                <ModalCloseButton />
                                <Flex direction={'column'} alignItems={"center"} gap={2} m={10}>
                                    <Text fontSize={'2xl'}>Invite Payee</Text>
                                    <Text fontSize={'lg'} mt={'-2'}>Copy the link below and share with Payee</Text>
                                    <Flex alignItems={"center"} gap={2} border={`1px solid white`} borderRadius={'full'} py={1} px={5} my={6}>
                                        <Text>{`${window.location.origin}/project/${link}`}</Text>
                                        <Tooltip hasArrow label="Copied" isOpen={tooltip} bg={'black'} placement="top" borderRadius={6}>
                                            <CopyIcon color={'#8952e0'} cursor={'pointer'} onClick={() => {
                                                navigator.clipboard.writeText(`${window.location.origin}/project/${link}`);
                                                setTooltip(true);
                                                setTimeout(() => setTooltip(false), 2000);
                                            }}/>
                                        </Tooltip>
                                    </Flex>
                                    <hr style={{borderTop: "1px solid white", width: "100px", marginBottom: "12px"}}/>
                                    <Text textAlign={'center'} fontSize={'lg'} maxW={'360px'}>The payee will have to go over the project details and accept the deliverables and timeline for escrow and project to begin</Text>
                                </Flex>
                            </ModalContent>
                        </Modal>
                    </Flex>
                )}
        </Container>
    )
}

export default CreateProject;