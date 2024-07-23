import * as React from "react";
import { Box, Button, Container, Flex, Image, Table, TableContainer, Tag, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { SearchInput } from "@saas-ui/react";

const projects = [
    {
        wallet: "phantom",
        name: "Token Launch (ICO)",
        status: "In escrow",
        role: "Payer",
        amount: 1200,
        token: "SOL",
        date: "2024-07-31"
    },
    {
        wallet: "metamask",
        name: "Smart Contract Deploy",
        status: "Complete",
        role: "Payer",
        amount: 3,
        token: "ETH",
        date: "2024-07-22"
    },
]

const Dashboard = () => {
    return (
        <Container px="8" py="32" maxW="container.2xl">
            <Flex direction="column" gap="8">
                <Flex direction="row" alignItems="center" justify="space-between">
                    <Flex direction="row" alignItems="center" gap="12">
                        <Text fontSize="2xl" fontWeight="600">My Escrow Project</Text>
                        <Tag size="sm" colorScheme="gray" borderRadius="12">Viewing 10 Projects</Tag>
                    </Flex>
                    <Flex direction="row" alignItems="center" gap="8">
                        <SearchInput />
                        <Button colorScheme="white" px="8">+ Create</Button>
                    </Flex>
                </Flex>
                <TableContainer border={`1px solid #343434`} borderRadius={'8'}>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Escrow Project</Th>
                                <Th borderInline={`1px solid #343434`}>Status</Th>
                                <Th>Role</Th>
                                <Th borderInline={`1px solid #343434`}>Amount</Th>
                                <Th>Date</Th>
                                <Th width={20}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {projects.map((project, index) => (
                                <Tr key={index}>
                                    <Td>
                                        <Flex align={'center'} gap={'4'}>
                                            <Image src={`/static/images/${project.wallet}.png`} alt={project.wallet} width={10}></Image>
                                            <Text>{project.name}</Text>
                                        </Flex>
                                    </Td>
                                    <Td borderInline={`1px solid #343434`}>{project.status}</Td>
                                    <Td>{project.role}</Td>
                                    <Td borderInline={`1px solid #343434`}>{project.amount} {project.token}</Td>
                                    <Td>{new Date(project.date).toLocaleDateString("en-GB")}</Td>
                                    <Td><Tag colorScheme="gray" size="lg" borderRadius={16}>View</Tag></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex direction="row" alignItems="center" justify="space-between">
                    <Flex direction="row" alignItems="center" gap="12">
                        <Text fontSize="md">Showing 1 to 10 of 42 results</Text>
                    </Flex>
                    <Flex direction="row" alignItems="center" gap="2">
                        <Button colorScheme="white" px="3" variant="outline">{`<`} Previous</Button>
                        <Button colorScheme="white" px="6" variant="outline">Next {`>`}</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Dashboard;