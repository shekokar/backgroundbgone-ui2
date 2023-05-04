import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonCol, IonRow, IonButton, IonIcon } from '@ionic/react'
import { saveOutline } from 'ionicons/icons';
import {saveAs} from 'file-saver';

const Output = ({output,upload}) => {

    const ip_url = upload.img_url //'https://www.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg' //upload.img_url
    const op_url = output.img_url //'https://www.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg' //output.img_url

    return (
        <>
            <IonGrid>
                <IonRow class="ion-justify-content-center" >
                <IonCol size='auto' size-lg='4' offset='0'>
                    <IonCard>

                        <img alt="image" src={ip_url} />
                        <IonCardHeader>
                            <IonCardTitle>Input Image</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                </IonCol>

                <IonCol size='auto' size-lg='4'>
                    <IonCard>
                        <img alt="image" src={op_url} />
                        <IonCardHeader>
                            <IonCardTitle>Output Image</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                </IonCol>
                </IonRow>
                <IonRow class="ion-justify-content-center">
                <IonCol size='auto' size-lg='4' offset='0'>
                    <IonButton size='large' expand='block' onClick={() => {saveAs(op_url)}}>
                        <IonIcon slot='start' icon={saveOutline}/>
                        Save Sticker
                    </IonButton>
                </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default Output;