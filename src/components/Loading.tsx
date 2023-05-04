import { IonLoading } from '@ionic/react';
import axios from 'axios';

const Loading = ({user,output,setOutput,img_id}) => {

    async function upload(){
        const x = await axios.get('http://127.0.0.1:5000/segment',{
            params:{
                img_id:img_id,
                user_id:user.uid
            },
        })
        console.log(x)
        setOutput({status:true, img_url:x.data.new_image_url})
    }


    upload()
    return (
        <>
          <IonLoading message="Removing Background" />
        </>
      );
}

export default Loading