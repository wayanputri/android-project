
import { useState } from 'react';
import { StyleSheet, Text, View,Image, ScrollView ,TouchableOpacity} from 'react-native';

export default function App() {
	const [bgButton,setBgButton]=useState(true)
	const [bgButton2,setBgButton2]=useState(true)
	const [bgButton3,setBgButton3]=useState(true)
	const [bgButton4,setBgButton4]=useState(true)
	const handlePress =()=>{
		setBgButton(!bgButton)
	};
	const handlePress2 =()=>{
		setBgButton2(!bgButton2)
	};
	const handlePress3 =()=>{
		setBgButton3(!bgButton3)
	};
	const handlePress4 =()=>{
		setBgButton4(!bgButton4)
	};

  return (
    <ScrollView style={styles.container}>
		<View style={styles.header}>
		<Image source={require('./assets/aku.jpg')} style={styles.image} />
		<Text style={styles.text2}>Wayan <Text style={styles.text1}>Putri</Text> Yanti</Text>
		<Text style={styles.text3}>Mobile Developer</Text>

		</View>		
		<Text style={styles.header1}>Portofolio</Text>
		<View style={styles.viewImage}>
			<Image source={require('./assets/iphone.png')} style={styles.image2}/>
			<Image source={require('./assets/iphone.png')} style={styles.image2}/>
		</View>
		<Text style={styles.header1}>Kontak Saya</Text>
		<TouchableOpacity style={[styles.bgButton,bgButton?styles.bgButtonColor:styles.bgButtonColor2]} onPress={handlePress}>
			<Image source={require('./assets/ig.png')} style={styles.image3}/>
			<Text style={styles.text4}>Instagram / @wayanputri</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.bgButton,bgButton2?styles.bgButtonColor:styles.bgButtonColor2]} onPress={handlePress2}>
			<Image source={require('./assets/browser.png')} style={styles.image3}/>
			<Text style={styles.text4}>Website / wayanputri.com</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.bgButton,bgButton3?styles.bgButtonColor:styles.bgButtonColor2]} onPress={handlePress3}>
			<Image source={require('./assets/fb.png')} style={styles.image3}/>
			<Text style={styles.text4}>Facebook / Wayan Putri</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.bgButton,bgButton4?styles.bgButtonColor:styles.bgButtonColor2]} onPress={handlePress4}>
			<Image source={require('./assets/email.png')} style={styles.image3}/>
			<Text style={styles.text4}>Email / wayanputri@gmail.com</Text>
		</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:30,
  },
  header:{
	alignItems:'center',
	justifyContent:'center',
  },
  image:{
	width:152,
	height:152,
	borderRadius:76,
  },

  text1:{
	fontWeight:700,
	fontFamily:'inter',
	fontSize:24,
	lineHeight:29.05,
  },
  text2:{
	fontWeight:400,
	fontFamily:'inter',
	fontSize:24,
	lineHeight:29.05,
	marginTop:23,
  },
  text3:{
	fontWeight:400,
	fontFamily:'inter',
	fontSize:14,
	lineHeight:16.94,
	marginTop:5,
  },
  header1:{
	fontFamily:'inter',
	fontWeight:400,
	fontSize:20,
	lineHeight:24.2,
	marginTop:30,
	
  },
  image2:{
	width:157,
	height:343,
	marginTop:13,
  },
  viewImage:{
	flexDirection:'row',
	justifyContent:'space-between'
  },
  image3:{
	width:34,
	height:34,
	marginLeft:8,

  },
  text4:{
	fontFamily:'inter',
	fontWeight:400,
	fontSize:16,
	lineHeight:19.36,
	marginLeft:10,
	marginTop:6,
  },
  bgButton:{
	flexDirection:'row',
	marginTop: 17,
	borderWidth:1,
	borderColor: '#000',
	borderRadius:10,
	overflow:'hidden',
	padding:15,
  },
  bgButtonColor:{
	backgroundColor:'white'
  },
  bgButtonColor2:{
	backgroundColor:'grey'
  }

});
