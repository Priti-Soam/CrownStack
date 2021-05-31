import React from 'react';
import { StyleSheet, View, Image, Text, Linking, Dimensions, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const AppComponent = ({ navigation }) => {
    const [posts, setPost] = React.useState([]);
    const [loader, setLoader] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState(null);

    const fetchPosts = () => {
        setLoader(true);
        setTimeout(async () => {
            const response = await axios.get(`https://itunes.apple.com/search?term=Michael+jackson`);
            setPost(response.data.results);
            setLoader(false)
        }, 2000)
    }
    React.useEffect(() => {
        fetchPosts();
    }, []);


    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <View style={{ flex: .3, }}>
                <Image source={{ uri: item.artworkUrl100 }} style={{ height: 100, width: 100 }} />
            </View>
            <View style={{ flex: .7, paddingHorizontal: 10 }}>
                <Text style={[styles.title, textColor]} numberOfLines={2}>{item.collectionName}</Text>
                <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between' }}>
                    <Text style={[styles.artist, textColor]} onPress={() => Linking.openURL(item.artistViewUrl)}>{item.artistName}</Text>
                    <Text style={[styles.artist1, textColor]}>{item.country}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = "white"
        const color = '#1565c0'
        const gotoDetails = () => {
            navigation.navigate('Detail', { data: item })
        }
        return (
            <Item
                item={item}
                onPress={() => gotoDetails(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    return (
        <View style={styles.root}>
            {loader ?
                <View style={styles.container}>
                    <ActivityIndicator size="small" color="#0000ff" style={styles.loader} />
                    <Text style={styles.artist1}>Please Wait</Text>
                </View>
                :
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />}
        </View>
    )
};
export default AppComponent;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 16,
    },
    artist: {
        fontSize: 14,
    },
    artist1: {
        fontSize: 12,
        color: '#1565c0'
    },
    list: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.86,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 0,
    },
    root: {
        marginBottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    heading: {
        textAlign: 'center',
        marginTop: 24
    },
    header: {
        padding: 10,
        backgroundColor: '#FDA085',
        width: Dimensions.get('window').width
    },
})