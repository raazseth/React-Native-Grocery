import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './Header';

const Layout = ({children, isHeader, navigation, showOverlay}) => {
  return (
    <ScrollView
      style={styles.Body}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {showOverlay ? (
        <View>
          <ImageBackground
            source={require('../Assets/Simple-Overlay.png')}
            imageStyle={{
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
            }}
            style={styles.ImageBackground}>
            {isHeader && <Header navigation={navigation} />}
          </ImageBackground>
          <View>{children}</View>
        </View>
      ) : (
        <View>
          {isHeader && <Header navigation={navigation} />}
          <View style={styles.NormalBox}>{children}</View>
        </View>
      )}
    </ScrollView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  Body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageBackground: {
    width: '100%',
    height: 260,
    resizeMode: 'contain',
  },
  NormalBox: {
    height: '100%',
    padding: 12,
    position:"relative"

  },
});
