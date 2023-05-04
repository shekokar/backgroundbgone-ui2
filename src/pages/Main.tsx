import { useState } from "react";
import AuthPage from "./Auth";

import PhotoGallery from './PhotoGallery';
import Output from "./Output";
import Loading from "./Loading";
import { IonLoading, IonSpinner } from "@ionic/react";

const Main = () => {
    const [user, setUser] = useState<any>(null)
    const [upload, setUpload] = useState({status:false,img_id:'',img_url:''})
    const [output, setOutput] = useState({status:false,img_url:''})

    if(!user){
        return(
         <AuthPage setUser={setUser} /> 
        )
    }
    else{
        if(!upload.status){
            return(
                <PhotoGallery user={user} setUpload={setUpload}/>
            )
        }
        else{
            if(!output.status)
            return(
               <Loading user={user} output={output} setOutput={setOutput} img_id = {upload.img_id}/>
            )
            else{
                return(
                    <Output upload={upload} output={output} />
                )
            }
        }
        
    }
}

export default Main;

/*
{upload.status && !output.status && <Loading output={output} setOutput={setOutput} img_id = {upload.img_id}/>}
*/