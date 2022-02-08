import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Image, Text, Button} from 'react-native';
import {getId, getDatas} from '../../hooks/getDatas';

// import {getDataRequest} from '../../redux/action';

const Details = () => {
  const getUser = getId();
  const datas = getDatas();

  const newArr = datas.filter(val => val.id === getUser);

  console.log(newArr);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{uri: newArr[0].largeImageURL}} />
        <Text style={styles.tags}>{newArr[0].tags}</Text>
      </View>
      <View style={styles.info}>
        <Image style={styles.author} source={{uri: newArr[0].userImageURL}} />
        <View>
          <Text style={{alignSelf: 'center', fontSize: 30}}>
            {newArr[0].user}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  author: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
  },
  tags: {
    alignSelf: 'center',
    position: 'absolute',
    color: '#ffffff',
    bottom: 10,
    fontSize: 15,
  },
  imgContainer: {
    width: '100%',
    height: '60%',
    position: 'relative',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '40%',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 60,
  },
});

export default Details;
