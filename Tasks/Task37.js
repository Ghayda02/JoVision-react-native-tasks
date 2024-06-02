import React, {useState, useCallback} from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';


const Task37 = () => {

    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    function generateWords(){
        let data = []
        for(let i =0; i<100; i++){
            data.push(
                {
                    id: i,
                    word: generateRandomWord(6)
                }
            )
        }
        return data
    }

    let data = generateWords();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);
    


  return (
    <View style={styles.container}>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {
            data.map((item) =>{
                return(
                    <View key={item.id}>
                        <Text style={styles.item}>{item.word}</Text>
                    </View>
                )
            
            })
        }  
        </ScrollView>   
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item:{
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
});


export default Task37;

