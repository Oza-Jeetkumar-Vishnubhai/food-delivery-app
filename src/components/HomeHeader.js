import { View, Text } from "native-base";
import { StyleSheet } from "react-native";
import {Icon,withBadge} from "@rneui/themed"
import {colors,parameters} from "../global/styles"

const HomeHeader = ({navigation}) => {

    const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
        <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
            <Icon 
                type="material-community"
                name="menu"
                color={colors.cardBackground}
                size={32}
                onPress={()=>{
                    navigation.toggleDrawer()
                }}
            />
        </View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:colors.cardBackground,fontSize:22,fontWeight:"bold"}}>ExpressFood</Text>
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginRight:10}}>
            <BadgeIcon 
                type="material-community"
                name="cart"
                size={35}
                color = {colors.cardBackground}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        flexDirection:"row",
        justifyContent:"space-between",
    },
  });

export default HomeHeader
