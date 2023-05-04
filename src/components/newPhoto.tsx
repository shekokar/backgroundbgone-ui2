import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { camera } from "ionicons/icons";
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const NewPhoto = () => {
    const { takePhoto } = usePhotoGallery();
    return(
        <>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
        </>
    )

}

export default NewPhoto;