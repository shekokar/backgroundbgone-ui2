import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuid } from 'uuid';

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}

export function usePhotoGallery(user,setUpload) {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const storage = getStorage();
    const takePhoto = async () => {
        console.log('here');
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Base64,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = new Date().getTime() + '.jpeg';
        console.log(photo)
        const img_id = uuid()
        const byteCharacters = atob(photo.base64String as string)
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        };
        const byteArray = new Uint8Array(byteNumbers);
        const storageRef = ref(storage, 'users/' + user.uid + '/original/' + img_id);
        const data = await base64FromPath(photo.webPath as string)
        
        await uploadBytes(storageRef, new Blob([byteArray], {type: 'image/jpeg'}))
        const img_url = await getDownloadURL(storageRef)
        console.log(img_url)
        setUpload({status:true,img_id:img_id,img_url:img_url})

        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];
        setPhotos(newPhotos);
    };

    return {
        photos,
        takePhoto,
    };
}

export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject('method did not return a string')
            }
        };
        reader.readAsDataURL(blob);
    });
}