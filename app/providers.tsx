"use client"

import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { PioneerProvider as PP } from "@coinmasters/pioneer-react"
import { useEffect } from 'react';
import { theme } from '../styles/theme';

const ForceDarkMode = ({ children }: { children: React.ReactNode }) => {
    const { setColorMode } = useColorMode();

    useEffect(() => {
        setColorMode('dark');
    }, [setColorMode]);

    return <>{children}</>;
};

export function PioneerProvider({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}><ForceDarkMode><PP>{children}</PP></ForceDarkMode></ChakraProvider>
}
