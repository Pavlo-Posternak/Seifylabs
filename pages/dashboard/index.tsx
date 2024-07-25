import * as React from "react";
import { Button, Container, Flex, Image, Table, TableContainer, Tag, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { SearchInput } from "@saas-ui/react";
import { ButtonLink } from "components/button-link";
import db from "utils/firestore";
import { collection, doc, endBefore, getCountFromServer, getDocs, limit, orderBy, query, QueryDocumentSnapshot, QuerySnapshot, startAfter, startAt, where } from "firebase/firestore"; 
import { ProjectType } from "utils/utils";

const Dashboard = () => {
    const [projects, setProjects] = React.useState<ProjectType[]>([]);
    const [keyword, setKeyword] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const [count, setCount] = React.useState(0);
    const [wholeCount, setWholeCount] = React.useState(0);
    const [firstVisible, setFirstVisible] = React.useState<QueryDocumentSnapshot>();
    const [lastVisible, setLastVisible] = React.useState<QueryDocumentSnapshot>();
    const [q, setQuery] = React.useState(query(collection(db, 'projects'), orderBy("createdAt", 'desc'), limit(pageSize)));
    // const [titleList, setTitleList] = React.useState<string[]>([]);
    // const [filter, setFilter] = React.useState<string[]>([]);

    const fetch = async () => {
        getCountFromServer(collection(db, 'projects')).then(snapshot => setWholeCount(snapshot.data().count))
        getDocs(q).then(querySnapshot => {
            if (querySnapshot.empty) {
                setProjects([]);
            } else {
                setFirstVisible(querySnapshot.docs[0]);
                setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
                setCount(querySnapshot.docs.length);
                setProjects(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id} as ProjectType)))
            }
        });
    }

    React.useEffect(() => {
        fetch();
    }, [q])

    // React.useEffect(() => {
    //     getDocs(collection(db, "projects")).then(querySnapshot => {
    //         setWholeCount(querySnapshot.docs.length);
    //         setTitleList(querySnapshot.docs.map(doc => (doc.data()?.title)));
    //     });
    // }, [])

    // React.useEffect(() => {
    //     if (titleList.length === 0) return;
    //     const filter = titleList.filter(title => title.toLowerCase().includes(keyword.toLowerCase()));
    //     setWholeCount(filter.length);
    //     if (filter.length === 0) {
    //         setProjects([])
    //         return;
    //     }
    //     setQuery(query(collection(db, 'projects'), where('title', 'in', filter), orderBy('createdAt', 'desc'), limit(pageSize)));
    // }, [keyword])

    return (
        <Container px="8" py="32" maxW="container.2xl">
            <Flex direction="column" gap="8">
                <Flex direction="row" alignItems="center" justify="space-between">
                    <Flex direction="row" alignItems="center" gap="12">
                        <Text fontSize="2xl" fontWeight="600">My Escrow Project</Text>
                        <Tag size="sm" colorScheme="gray" borderRadius="12">Viewing {count} Projects</Tag>
                    </Flex>
                    <Flex direction="row" alignItems="center" gap="8">
                        <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                        <ButtonLink href={"/create"} colorScheme="white" px="8">+ Create</ButtonLink>
                    </Flex>
                </Flex>
                <TableContainer border={`1px solid #514f56`} borderRadius={'8'}>
                    <Table>
                        <Thead bg="#414048">
                            <Tr>
                                <Th>Escrow Project</Th>
                                <Th borderInline={`1px solid #514f56`}>Status</Th>
                                <Th>Role</Th>
                                <Th borderInline={`1px solid #514f56`}>Amount</Th>
                                <Th width={36}>Date</Th>
                                <Th width={24}></Th>
                            </Tr>
                        </Thead>
                        <Tbody bg="#292730">
                            {projects.map((project, index) => (
                                <Tr key={index} _hover={{
                                    bg: "#7854fb"
                                }}>
                                    <Td borderBottom={"1px solid #514f56"}>
                                        <Flex align={'center'} gap={'4'}>
                                            <Image src={`/static/images/${project.wallet.toLowerCase()}.png`} alt={project.wallet} width={10}></Image>
                                            <Text>{project.title}</Text>
                                        </Flex>
                                    </Td>
                                    <Td borderInline={`1px solid #514f56`} borderBottom={"1px solid #514f56"}>
                                        <Tag colorScheme={
                                                !project.status ? "gray"
                                                    : project.status.toLowerCase() == "complete"
                                                    ? "green"
                                                    : project.status.toLowerCase() == "in escrow"
                                                    ? "teal"
                                                    : project.status.toLowerCase() == "accepted"
                                                    ? "cyan"
                                                    : project.status.toLowerCase() == "rejected"
                                                    ? "pink"
                                                    : project.status.toLowerCase() == "failed"
                                                    ? "red"
                                                    : "gray"
                                            }
                                            variant={`solid`}
                                            size="lg" 
                                            borderRadius={`full`}
                                        >{project.status ?? "Pending"}</Tag>
                                    </Td>
                                    <Td borderBottom={"1px solid #514f56"}>{"Payer"}</Td>
                                    <Td borderInline={`1px solid #514f56`} borderBottom={"1px solid #514f56"}>{project.amount} {project.token}</Td>
                                    <Td borderBottom={"1px solid #514f56"}>{`${project.deadline}`.substring(0, 10)}</Td>
                                    <Td borderBottom={"1px solid #514f56"}><Tag colorScheme="gray" size="lg" borderRadius={16}>View</Tag></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex direction="row" alignItems="center" justify="space-between">
                    <Flex direction="row" alignItems="center" gap="12">
                        <Text fontSize="md">Showing {(page - 1) * pageSize + 1} to {(page - 1) * pageSize + count} of {wholeCount} results</Text>
                    </Flex>
                    <Flex direction="row" alignItems="center" gap="2">
                        <Button colorScheme="white" px="3" variant="outline" onClick={() => {
                            setPage(page - 1);
                            setQuery(query(collection(db, 'projects'), orderBy('createdAt', 'desc'), endBefore(firstVisible), limit(pageSize)));
                        }} isDisabled={page <= 1}>{`<`} Previous</Button>
                        <Button colorScheme="white" px="6" variant="outline" onClick={() => {
                            setPage(page + 1);
                            setQuery(query(collection(db, 'projects'), orderBy('createdAt', 'desc'), startAfter(lastVisible), limit(pageSize)));
                        }} isDisabled={page * pageSize >= wholeCount}>Next {`>`}</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Dashboard;