import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import Card from './Card';
import fakeData from '../../fakeData';
import Searchbar from './Searchbar';
import { ScrollView } from 'react-native-gesture-handler';


const Postlists = ({navigation}) => {
    return(
        <ScrollView >
            <Searchbar/>
            {fakeData.map((post) => (
          <TouchableOpacity key={post.id} onPress={() => navigation.navigate("Fullpost", {postid: post.id})}>
            <Card post={post} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
}


export default Postlists;