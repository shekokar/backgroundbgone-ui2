import ExploreContainer from '../components/ExploreContainer';
import './PhotoGallery.css';
import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonLoading,
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { useState } from 'react';
// import { v4 as uuid } from 'uuid';

const Tab2: React.FC = ({user,setUpload}) => {
  const { photos, takePhoto } = usePhotoGallery(user,setUpload);
  const [formVis, setFormVis] = useState(true);

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    setFormVis(false);
    // Read the form data
  
    const img_id = uuid();
  
    //@ts-ignore
    var storageRef = firebase.storage().ref(`users/1/original/${img_id}`);
    let x = await storageRef.put(value.img[0]);
    console.log(`Sent ${x.bytesTransferred} bytes`);
    const img_url = await storageRef.getDownloadURL()
    setUpload({status:true,img_id:img_id,img_url:img_url})
  }

  const [value,setValue] = useState({img:[]});

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Stickers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Stickers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
