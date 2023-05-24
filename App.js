import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, ImageBackground ,TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from "expo-app-loading";


export default function App() {
  return (
    
      <View style={styles.container}>   
        <StatusBar style="auto" />
        <View style={styles.title_container}>
          <ImageBackground style={styles.iotWeb_image} source={require('C:/Users/camil/OneDrive/Documentos/Projetos/Mobile Projects/Saturn_Dashboard_App/src/images/iot_purple.jpg')}>
          <LinearGradient
            colors={['#AE25EF','#5414EF','#060833',]}>
          </LinearGradient>
            <View style={styles.saturn_container}>       
              <Image style={styles.saturn_logo} source={require('C:/Users/camil/OneDrive/Documentos/Projetos/Mobile Projects/Saturn_Dashboard_App/src/images/satrunlagowhite.png')}/>      
              <Text style={styles.saturn_text}> Saturn  IOT</Text>
            </View>
            <View style={styles.login_container}>

              <View style={styles.login_container_title}>
                <Text style={styles.login_title_text}> Bem Vindo!</Text>                
              </View>

              <View style={styles.login_forget_password_container}>
                <Text style={styles.forget_password_text}>Esqueceu sua senha? Clique aqui</Text>
              </View>

              <View style={styles.email_container}>
                <Text style={styles.email_container_text}>Your Email: </Text>
              </View>

              <View style={styles.email_input_container}>
                <TextInput style={styles.email_input} placeholder="Email"/>
              </View>

              <View style={styles.password_container}>
                <Text style={styles.password_container_text}>Your Password: </Text>
              </View>

              <View style={styles.password_input_container}>
                <TextInput style={styles.password_input} placeholder="Password"/>
              </View>

              <TouchableOpacity style={styles.button_container}>
                <LinearGradient colors={['#5414EF','#AE25EF']} style={styles.signin_button}>
                  <Text style={styles.button_text}>Sign in</Text>
                </LinearGradient>
              </TouchableOpacity>


            </View>            
          </ImageBackground>
        </View>

        
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    marginTop: Constants.statusBarHeight,
  }, 
  title_container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'red',
  },
  iotWeb_image:{
    height: '100%',
    width: '100%',    
    justifyContent:'center',
  },
  saturn_container:{
    marginTop:'16%',
    alignItems:'center',
    //backgroundColor:'green',
  },
    saturn_logo:{
    width:80,
    height:80,
    borderRadius:40,
  },
    saturn_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:50,
    },
  login_container:{
    backgroundColor:'#f9f9f9',
    flex:1,
    marginTop:'20%',
    borderTopStartRadius:40,
    borderTopEndRadius:40,    
  },
  login_container_title:{
    marginTop:25,
    marginLeft:30

  },
  login_title_text:{
    fontWeight:'bold',
    color:'#AE25EF',
    fontSize:25
  },
  login_forget_password_container:{
    marginLeft:37,
  },
  forget_password_text:{
    fontWeight:'bold',

  },
  email_container: {
    marginHorizontal: 35,
    marginTop: 20,
    marginBottom: 10,
},
email_container_text: {
    fontSize: 16,
    fontWeight:'bold',
    color:'grey',
},
email_input_container: {
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 30,
},
email_input: {
    marginLeft: 20,
},
password_container: {
  marginHorizontal: 35,
  marginTop: 20,
  marginBottom: 10,
},
password_container_text: {
  color:'grey',
  fontSize: 16,
  fontWeight:'bold',
},
password_input_container: {
  justifyContent: 'center',
  height: 50,
  marginHorizontal: 15,
  borderWidth: 2,
  borderColor: 'grey',
  borderRadius: 30,
},
password_input: {
  marginLeft: 20,
},
button_container:{
  marginHorizontal:130,
  marginTop:20,
},
signin_button:{
  elevation:5,
  shadowColor:'#AE25EF',
  borderRadius:20,
  padding:15,
  justifyContent:'center',
  flexDirection:'row',
},
  button_text:{
    color:'white',
  }
  
});
