import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    View,
    Image,
} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { movieList } from "../../App/Services/getMovies";

export const PopularMoviesScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearched, setIsSearched] = useState(false);

    useFocusEffect(
        useCallback(() => {
            movieList(searchQuery, movies).then((data) => {
                setMovies(data);
            })
        }, [isSearched]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 16 }}>
                <View>
                    <Text style={{ fontSize: 18, color: 'white' }}>Search for a</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Box Office Movie</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('Go to Profile');
                            navigation.navigate('AboutScreen')
                        }}>
                        <EvilIcons
                            name='user'
                            size={48}
                            color="white"
                            style={{ justifyContent: 'center' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        placeholder={'search movies'}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            console.log(`Sebelum ditekan: ${isSearched}`);
                            setIsSearched(!isSearched);
                            console.log(`Sesudah ditekan: ${isSearched}`);
                        }}>
                        <EvilIcons
                            name={searchQuery ? 'search' : 'refresh'}
                            size={20}
                            color="#FEBD00"
                            style={{ alignSelf: 'center', marginHorizontal: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20, paddingBottom: 60 }}>
                    <FlatList
                        ItemSeparatorComponent={
                            () => <View style={{ width: 16, backgroundColor: 'pink' }} />
                        }
                        data={movies}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (<View style={styles.content}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('DetailMovieScreen', { movie: item })}>
                                    <Image
                                        source={{
                                            uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                                        }}
                                        style={styles.card}
                                    />
                                </TouchableOpacity>
                            </View>)
                        }
                        }
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
const colors = {
    primary: "#160622",
    secondary: "#FEBD00",
    grey: '#E5E5E5'
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    content: {
        width: windowWidth / 2 - 15,
        paddingHorizontal: 5,
        height: windowHeight / 3 - 10,
        margin: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: colors.grey
    },
    image: {
        width: windowWidth / 2 - 15,
        aspectRatio: 2,
        height: 90,
        marginBottom: 12,
        borderRadius: 5
    },
    text: {
        alignSelf: "flex-start",
        fontSize: 12
    },
    card: {
        width: windowWidth / 2 - 15,
        height: windowHeight / 3 - 10,
    },
    search: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: colors.secondary,
        borderWidth: 2
    },
    input: {
        padding: 10,
        flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
})