import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {RegularBoldText} from '../../components/Texts';
import {NormalButton} from '../../components/Buttons';
import EmptyCreatePost from '../../assets/images/assets/EmptyCreatePost.svg';
import {useDispatch} from 'react-redux';
import SucessLogo from '../../assets/images/assets/SucessLogo.svg';
import {NavigateToCreate} from '../../redux/actions';
import Post from '../../components/Utility/Post';
import AppHeader from '../../components/Utility/AppHeader';
function Explore() {
  const postCount = 1;
  const Postdata = {
    userName: 'Linda',
    title: "Linda's Hangout",
    description:
      'I’m at Nick’s Pub for happy hour, and would love to make some new friends while i’m here. Open to going anywhere nearby.',
  };
  if (postCount === 0) {
    return <NoPost />;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <AppHeader />
        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />

        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />
        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />
        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />
        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />
        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />
        <Post
          userName={Postdata.userName}
          title={Postdata.title}
          description={Postdata.description}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Explore;

function NoPost() {
  const dispatch = useDispatch();

  const postCount = 0;

  const NavigateToCreateInExplore = () => {
    dispatch(NavigateToCreate());
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          //height: 300,
          marginTop: 100,
          marginHorizontal: 16,

          flex: 1,
          alignItems: 'center',
        }}>
        <EmptyCreatePost witdth="100%" />
      </View>
      <View style={{flex: 1}}>
        <RegularBoldText
          content="No hangouts yet? Be the first to post!"
          moreStyles={{textAlign: 'center'}}
        />

        <View style={{flex: 0.3, marginHorizontal: 60, marginTop: -15}}>
          <NormalButton
            hollow={false}
            text="Create Hangout"
            onPress={() => NavigateToCreateInExplore()}
            inActive={true}
          />
        </View>
      </View>
    </View>
  );
}
