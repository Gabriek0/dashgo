// Chakra UI
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

// React-icons
import { RiAddLine, RiPencilLine } from "react-icons/ri";

// Components
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" >
                <Sidebar />

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    py="8"
                    px={["4", "8"]}
                    w={["100%"]}
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                {isWideVersion &&
                                    (
                                        <>
                                            <Th>
                                                Data de cadastro
                                            </Th>

                                            <Th w="8">

                                            </Th>
                                        </>
                                    )}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Gabriel Henrique</Text>
                                        <Text fontSize="small" color="gray.300">gabriel.sanches170@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (<Td>04 de Junho, 2022</Td>)}
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Button
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="purple"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                            >
                                                Editar
                                            </Button>
                                        </Td>
                                    )
                                }
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </ Flex>
        </Box>
    );
};