import { Icon, Link, Stack, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType; // Name/reference of component
    children: string;
}


export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (

        <Stack
            spacing="4"
            mt="8"
            align="stretch"
        >
            <Link display="flex" alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </Link>

        </Stack>
    )
};
