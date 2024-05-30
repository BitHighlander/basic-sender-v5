'use client';
import { LP_GRID_ITEMS } from "lp-items";
import Header from "../components/Header";
import { Button, Box, Container, Flex, Heading, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { useOnStartApp } from "../utils/onStart";
import { useState, useEffect } from 'react';
import { usePioneer } from "@coinmasters/pioneer-react";
import {
    Pioneer,
    Basic,
    Portfolio,
    Transfer,
    Assets,
    Classic,
    Asset,
    Amount,
    Swap,
} from '@coinmasters/pioneer-lib';
import { FaBriefcase, FaCoins } from 'react-icons/fa';

export default function App() {
    const onStartApp = useOnStartApp();
    const { state } = usePioneer();
    const { app } = state;
    const [selectedAsset, setSelectedAsset] = useState({});
    const [activeTab, setActiveTab] = useState('portfolio');

    useEffect(() => {
        onStartApp();
    }, []);

    useEffect(() => {
        if (app && app.assetContext) setSelectedAsset(app.assetContext);
    }, [app, app?.assetContext]);

    const onClose = () => {
        //console.log("onClose")
    };

    const onSelect = (asset: any) => {
        //console.log("onSelect: ", asset)
    }

    return (
        <>
            <Classic usePioneer={usePioneer}></Classic>
        </>
    );
}
