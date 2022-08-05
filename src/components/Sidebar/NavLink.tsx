import { ElementType } from "react";
import { Icon, Link as ChakraLink, Stack, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActiveLink } from "../ActiveLInk";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType; // Name/reference of component
    children: string;
    href: string;
};

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (

        <Stack
            spacing="4"
            mt="8"
            align="stretch"
        >
            <ActiveLink href={href} passHref>
                <ChakraLink display="flex" alignItems="center" {...rest}>
                    <Icon as={icon} fontSize="20" />
                    <Text ml="4" fontWeight="medium">{children}</Text>
                </ChakraLink>
            </ActiveLink>
        </Stack>
    )
};
