import { useEffect, useState } from "react";
import { Button, Text , View} from "react-native";

const useCurrentTime = (d) =>{
    const [date, setDate] = useState(d);
    useEffect(() => {
        const intervalId = setInterval(() => {
          console.log(`Current time: ${new Date().toLocaleString()}`);
          setDate(new Date().toLocaleString());
        }, 1000);
        return () => {
          clearInterval(intervalId);

        };
      }, []);

    return date;
};


function Task34() {
  
  const date = useCurrentTime();
  const [show, setShow] = useState(true);    

  return (
      <View>
        <Button title="Show Time" onPress={()=> setShow(!show)}/>
        {
          show?
            <Text style={{fontSize:20}}>{date}</Text>
          : 
            null

        }
      </View> 
    );
  }

  export default Task34;