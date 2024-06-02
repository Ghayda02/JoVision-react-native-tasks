import react, { useEffect, useState } from 'react';
import { Text, View, Button, SafeAreaView, Alert } from 'react-native';


const Task26=() => {
  const [content, setContent] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(()=>{
    fetchBlockingRequest();
  }, [])


  function fetchNonBlockingRequest() {
    fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then(data => setContent(data))
      .then(()=> setisLoaded(true))
      .catch(() => setisLoaded(false))
  }


  async function fetchBlockingRequest(){
    try
    {
        const result = await fetch('https://api.ipify.org/')
        const data = await result.text()
        setContent(data)
        setisLoaded(true)
    }
    catch(error)
    {
        console.log(error)
        setisLoaded(false)
    }
  }

  
  return(
    <View >
    <Text style={{fontSize:30}}>RN Task26</Text>
    <Button title='non-blocking request' onPress={() => fetchNonBlockingRequest()}/>
    <Button title='blocking request' onPress={() => fetchBlockingRequest()}/>
    {
     isLoaded?
      <Text style={{fontSize:20}}>{content}</Text>
     :
      <Text style={{fontSize:20}}>Loading Failed</Text>
    }

  </View> 
  )
}

export default Task26;