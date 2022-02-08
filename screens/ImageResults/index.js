import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Image, Text, Button} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {getDatas, getId} from '../../hooks/getDatas';
import {getDataRequest, getDataID} from '../../redux/action';

const ImageResults = ({navigation}) => {
  const imgId = getId();
  const datas = getDatas();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getDataRequest());
    console.log(imgId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Search Image..."
          style={styles.searchInput}
          onChangeText={text => {
            dispatch(getDataRequest(text));
          }}
          defaultValue={search}
        />
      </View>
      <FlatList
        data={datas}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.largeImageURL}} />
            <View style={styles.footer}>
              <View style={styles.status}>
                <Text>Views: {item.views}</Text>
                <Text>Likes: {item.likes}</Text>
              </View>

              <Button
                title="View"
                style={styles.button}
                onPress={() => {
                  dispatch(getDataID(item.id));
                  navigation.navigate('Details');
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    display: 'flex',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  searchInput: {
    width: '100%',
    height: 50,
    margin: 5,
    paddingLeft: 8,
    fontSize: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  status: {
    flex: 1,
  },
  button: {
    flex: 1,
  },
});

export default ImageResults;
