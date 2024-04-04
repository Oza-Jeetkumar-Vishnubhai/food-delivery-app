import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Icon,Button,SocialIcon } from "@rneui/themed";

const SigninScreen = ({navigation}) => {
  const [inpFocused1, setInpFocused1] = useState(false);
  const [inpFocused2, setInpFocused2] = useState(false);
  const textInp1 = useRef(1);
  const textInp2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrowleft" />
      <View>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={[styles.TextInput1,{height:40}]}
            placeholder="Email"
            ref={textInp1}
          />
        </View>
        <View style={[styles.TextInput2,{height:40}]}>
          <Animatable.View animation={inpFocused2?"fadeInLeft":""} duration={400} style={{ width: "10%" }}>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
          <Animatable.View style={{ width: "80%" }}>
            <TextInput
              placeholder="Password"
              ref={textInp2}
              onFocus={() => {
                setInpFocused2(true);
              }}
              onBlur={() => {
                setInpFocused2(false);
              }}
              
            />
          </Animatable.View>
          <Animatable.View animation={inpFocused2?"fadeInLeft":""} duration={400} style={{ width: "10%" }}>
            <Icon
              name="visibility"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{marginHorizontal:20,marginVertical:20}}>
        <Button 
          title="SIGN IN"
          buttonStyle={parameters.styleBtn}
          titleStyle={parameters.styleBtnTitle}
          onPress={()=>{navigation.navigate("DrawerNavigator")}}
        />
      </View>

      <View style={styles.center}>
        <Text style={{...styles.text1,textDecorationLine:"underline"}}>
          Forgot Password ?
        </Text>
      </View>

      <View style={{...styles.center,marginTop:20,marginBottom:20}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>OR</Text>
      </View>

      <View style={{width:"100%",marginHorizontal:10}}>
        <SocialIcon 
          type="facebook"
          title="Sign In With Facebook"
          button={true}
          iconType="font-awesome"
          style={{width:"90%"}} 
          onPress={()=>{}}
        />
        <SocialIcon 
          type="google"
          title="Sign In With Google"
          button={true}
          iconType="font-awesome"
          style={{width:"90%"}} 
          onPress={()=>{}}
        />
      </View>

      <View style={{marginLeft:20,marginTop:25}}>
        <Text style={styles.text1}>
          New on ExpressFood?
        </Text>
      </View>

      <View style={{alignItems:"flex-end",marginHorizontal:20}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createBtn}
            titleStyle={styles.createBtnTitle}
          />
      </View>     

    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center:{
    alignItems:"center",
    justifyContent:"center"
  },
  text1: {
    color: colors.grey4,
    fintSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft: 15,
    paddingVertical: 5,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    borderRadius: 12,
    marginHorizontal: 20,
    paddingHorizontal: 7.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingVertical: 5,
  },
  createBtn:{
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1,
    borderColor:"#ff8c52",
    height:40,
    paddingHorizontal:20
  },
  createBtnTitle:{
    color:"#ff8c52",
    fontSize:16,
    fontWeight:"bold",
    justifyContent:"center",
    alignItems:"center",
    marginTop:-3
  }
});
