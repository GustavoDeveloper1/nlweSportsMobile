import { useEffect, useState } from 'react';

import { FlatList, Image, Text, View } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../Components/GameCard';
import { Heading } from '../../Components/Heading';
import { GAMES } from '../../utils/games';

import { styles } from './style';

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.6:4900/games')
            .then(res => res.json())
            .then(data => setGames(data))
    }, []);


    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />

            <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

            <FlatList data={games}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }) => (
                    <GameCard data={item} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.constenList} />


        </View>
    );
}