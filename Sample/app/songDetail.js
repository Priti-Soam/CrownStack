import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Linking, Dimensions, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer from 'react-native-track-player';
import axios from 'axios';

const SongDetail = (navigation) => {
    const [isPlaying, setPlaying] = React.useState(true);
    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
    const data = navigation.route.params.data

    //initialize the TrackPlayer when the App component is mounted
    useEffect(() => {
        const startPlayer = async () => {
            let isInit = await trackPlayerInit();
            setIsTrackPlayerInit(isInit);
        }
        startPlayer();
    }, []);

    //function to initialize the Track Player 
    const trackPlayerInit = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
            id: '1',
            url: data.previewUrl,
            type: 'default',
            title: 'My Title',
            album: 'My Album',
            artist: 'Rohan Bhatia',
            artwork: 'https://picsum.photos/100',
        });
        return true;
    };

    //start playing the TrackPlayer when the button is pressed 
    const onButtonPressed = () => {
        setPlaying(!isPlaying)
        TrackPlayer.play();
    };

    //stop playing the TrackPlayer when the button is pressed 
    const onButtonStopPressed = () => {
        setPlaying(!isPlaying)
        TrackPlayer.pause();
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: .5, }}>
                <View style={styles.container}>
                    <Image source={{ uri: data.artworkUrl100 }} style={{ height: 150, width: 150, borderRadius: 10, alignSelf: 'center', marginTop: 20 }} />
                    <View style={{ marginHorizontal: 100, alignItems: 'center', marginTop: 20 }}>
                        <Text style={styles.artist1}>{data.artistName}</Text>
                        <Text style={styles.artist1} numberOfLines={1}>{data.collectionName}</Text>
                        <Text style={styles.artist1}>{data.trackName}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: .5, }}>
                <View style={styles.controls} >
                    {isPlaying ? (
                        <TouchableOpacity onPress={onButtonPressed} style={styles.control}
                            disabled={!isTrackPlayerInit} >
                            <Text style={{ fontSize: 16, color: 'white', paddingRight: 10, textAlign: 'center', fontWeight: 'bold' }}>Play</Text>
                            <Icon name={"play"} size={16} color="white" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={onButtonStopPressed} style={styles.control}
                            disabled={!isTrackPlayerInit} >
                            <Text style={{ fontSize: 16, color: 'white', paddingRight: 10, textAlign: 'center', fontWeight: 'bold' }}>Pause</Text>
                            <Icon name={"pause"} size={16} color="white" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    )
};
export default SongDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 250,
        height: 250
    },
    controls: {
        flexDirection: 'row'
    },
    control: {
        margin: 20,
        flexDirection: 'row',
        backgroundColor: '#1565c0',
        padding: 10
    }
})