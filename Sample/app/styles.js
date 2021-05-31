import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flexView: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        paddingHorizontal: 18,
        paddingTop: 5,
        backgroundColor: "rgb(239, 121, 34)",
        height: 70,

      
    },
    container: {
        justifyContent: 'center', alignItems: 'center', flex: 1
    },
    splashText: {
        alignItems: 'center', fontSize: 26, color: 'green', fontWeight: 'bold'
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    GridViewBlockStyle: {
        flex: 1,
        // height: 10,
        // backgroundColor: '#5f9ea0',
        // borderRadius: 8,
        flex: 0.5,
        marginHorizontal:15,
        marginTop:20,
        
        
    },
    iconView: {
        flexDirection: 'row', justifyContent: 'flex-end', margin: 5
    },
    date: {
        right: 0, fontSize: 12, color: 'white', alignSelf: 'flex-end', padding: 5
    },
    GridViewInsideTextItemStyle: {
        color: 'black',
        // paddingLeft: 5,
        fontSize: 16,
        fontWeight:"bold",
        marginTop: 5
    },
});

export default styles;