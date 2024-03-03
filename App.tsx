import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/color';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
const App = () => {
  return (
    <View style={styles.post}>
      {/* Header*/ }
      <View style={styles.header}>
        <Image source=
        {{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}} 
        style={styles.avatar}/>
        <Text style={styles.userName}>mrskg.33</Text>
        <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
      </View>
      {/* Content*/ }
      <Image source=
      {{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',}} 
      style={styles.image}/>
      {/* Footer */ }
      <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <AntDesign 
        name={'hearto'} 
        size={24} 
        style={styles.icon}
        color={colors.black}/>
        <Ionicons 
        name="chatbubble-outline"
        size={24}
        style={styles.icon}
        color={colors.black}/>
        <Feather 
        name="send"
        size={24}
        style={styles.icon}
        color={colors.black}/>
        <Feather 
        name="bookmark"
        size={24}
        style={{marginLeft:'auto'}}
        color={colors.black}/>
      </View>
      {/** Likes */}
      <Text style={styles.text}>Liked By
        <Text style={styles.bold}> anjal </Text>and 
        <Text style={{fontWeight: fonts.weight.bold}}> 65 others</Text>
      </Text>
      {/* Post Description*/}
      <Text style={styles.text}>
        <Text style={styles.bold}>mr.skg.33 </Text>
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. A molestias soluta 
        doloremque magnam quod delectus facilis libero! Culpa, 
        unde tempore laboriosam explicabo 
        aut saepe similique laudantium cum soluta omnis debitis!
      </Text>
      <Text>View all 16 comments</Text>
      <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>mr.skg.33 </Text>
        Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit.
        </Text>
        <AntDesign 
        name={'hearto'} 
        size={24} 
        style={styles.icon}
        color={colors.black}/>
      </View>
      {/** Posted date */}
      <Text>21 January, 2024 </Text>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  post: {
  },
  image:{
    width: '100%',
    aspectRatio: '1'  
  },
  header:{
    flexDirection: 'row',
    alignItems:'center',
    padding: 10
  },
  avatar:{
    width: 50,
    height:50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName:{
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots:{
    marginLeft:'auto'
  },
  footer:{
    padding: 10,
  },
  iconContainer:{
    flexDirection:'row',
    marginBottom:10,
  },
  icon:{
    marginHorizontal: 5,
  },
  text:{
    color: colors.black,
    lineHeight: 22
  },
  bold:{
    fontWeight: fonts.weight.bold,
  },
  commentText:{
    color:colors.black,
    flex:1, 
    lineHeight: 22,
  },
  comment:{
    flexDirection:'row',
    alignItems:'center'
  },

})

export default App;
