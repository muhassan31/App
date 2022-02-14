import { View , Text , StyleSheet} from 'react-native';
import Center from '../../components/Utility/Center';

export default function Interests(){

    return(
        <View style={styles.container}>
            
            <Text>Interests currently being worked on</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
    }
})