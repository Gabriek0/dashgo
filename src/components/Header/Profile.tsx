import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
};

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gabriel Henrique</Text>
                    <Text color="gray.300" fontSize="small">gabriel.sanches170@gmail.com</Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Gabriel Henrique"
                src="https://github.com/gabriek0.png"
            />
        </Flex>
    );
}