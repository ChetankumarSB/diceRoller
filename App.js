import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
  } from 'react-native'
import React, {useState} from 'react'

import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";

const App = () => {


  const [ uri, setUri ] = useState(DiceOne)

  const playButtonTapped = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1: 
        setUri(DiceOne);
        break;
      case 2: 
        setUri(DiceTwo);
        break;
      case 3: 
        setUri(DiceThree);
        break;
      case 4: 
        setUri(DiceFour);
        break;
      case 5: 
        setUri(DiceFive);
        break;
      case 6: 
        setUri(DiceSix);
        break;
      default:
        setUri(DiceOne);
    }
  }

  return(
    <>
    <View style={styles.container}>
    <Image style={styles.image} source={uri}/>
    <TouchableOpacity onPress={playButtonTapped}>
    <Text style={styles.gamePlayButton}> Play Game </Text>
    </TouchableOpacity>
    </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : "#222831",
    alignItems: "center",
    justifyContent: "center"
  },
  image:{
    width: 200,
    height: 200
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: "bold"
  }
})