import React, { BackHandler } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderText, RegularText, SmallerText} from '../../components/Texts';

import SucessLogo from '../../assets/images/assets/SucessLogo.svg';
import {NormalButton} from '../../components/Buttons';

export default function Sucess() {

    const buttonActive = true
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 18, marginTop: 90}}>
        <HeaderText content="Approached!" />
        <SmallerText content="Planet Approachable is excited to have you onboard. We will let you know once your pod is ready. Stay tuned by enabling notifications." />
        <View>
          <SmallerText content="Already done? Sit tight and we will approach you! " />
        </View>

        <View
          style={{
            height: 300,
            alignItems: 'center',
            marginRight: 18,
          }}>
          <SucessLogo witdth="100%" />
        </View>

        <View style={{marginTop: 100}}>
          <NormalButton
            text="OK"
            onPress={() => (buttonActive ? BackHandler.exitApp() : null)} //clode app
            inActive={true}
            hollow
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
