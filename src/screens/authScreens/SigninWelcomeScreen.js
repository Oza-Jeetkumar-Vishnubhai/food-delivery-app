import { View, Text, Image} from "native-base";
import { Button} from "@rneui/themed";
import { StyleSheet } from "react-native";
import { colors, parameters } from "../../global/styles";

// import Swiper from "react-native-swiper";

const SigninWelcomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{ fontsize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          DISCOVER RESTRAURANTS
        </Text>
        <Text
          style={{ fontsize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          IN YOUR AREA
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        {/* <Swiper>
          <View style={styles.slide1}>
            <Image source={{ uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=GOm7hFq2LnbWrM&vet=12ahUKEwiW1NaAuJX8AhWIktgFHaKiAcsQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&itg=1&q=images&ved=2ahUKEwiW1NaAuJX8AhWIktgFHaKiAcsQMygAegUIARDfAQ" }} style={{height:"100%",width:"100%"}}/>
          </View>
          <View style={styles.slide2}>
            <Image source={{ uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=GOm7hFq2LnbWrM&vet=12ahUKEwiW1NaAuJX8AhWIktgFHaKiAcsQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&itg=1&q=images&ved=2ahUKEwiW1NaAuJX8AhWIktgFHaKiAcsQMygAegUIARDfAQ" }} style={{height:"100%",width:"100%"}}/>
          </View>
          <View style={styles.slide3}>
            <Image source={{ uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=GOm7hFq2LnbWrM&vet=12ahUKEwiW1NaAuJX8AhWIktgFHaKiAcsQMygAegUIARDfAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&itg=1&q=images&ved=2ahUKEwiW1NaAuJX8AhWIktgFHaKiAcsQMygAegUIARDfAQ" }} style={{height:"100%",width:"100%"}}/>
          </View>
        </Swiper> */}
      </View>
      <View style={{ flex: 4,justifyContent:"flex-end",marginBottom:20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styleBtn}
            titleStyle={parameters.styleBtnTitle}
            onPress={()=>{navigation.navigate("SignInScreen")}}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createBtn}
            titleStyle={styles.createBtnTitle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
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

export default SigninWelcomeScreen;
