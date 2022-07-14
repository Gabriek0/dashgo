import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            <Logo />
            {/*as=label -> because I'm going to add an icon and an input together */}

            <SearchBox />

            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />

                <Profile />
            </Flex>
        </Flex>
    );

};