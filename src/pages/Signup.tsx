import { IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import "./login.scss"
import { create, lockClosedOutline, mailOutline } from "ionicons/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/clientApp";

const Signup = ({setUser,setShowLogin}) => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then(
            (userCredential) =>{
                setUser(userCredential)
            }
        ).catch((error) =>{
            console.log(error)
        })
    }

    return (
        <IonContent>
            <div className="login-section ion-padding">
                <div className="heading ion-padding">
                    <h1>Welcome to BackgroundBgone</h1>
                    <p>Create a new account!</p>
                </div>
                <div className="login-form ion-padding">
                    <div className="form-input">
                        <IonIcon icon={mailOutline}/>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput value={email} onIonInput={(e)=>setEmail((e.target as HTMLIonInputElement).value as string)} type="email" />
                        </IonItem>
                    </div>

                    <div className="form-input">
                        <IonIcon icon={lockClosedOutline}/>
                        <IonItem>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput value={password} onIonInput={(e)=>setPassword((e.target as HTMLIonInputElement).value as string)} type="password" />
                        </IonItem>
                    </div>
                </div>
                <div className="action-buttons ion-padding">
                    <IonButton type="submit" onClick={signUp} size="large" className="login-button">Sign Up</IonButton>
                    <p>Already have an account? </p>
                    <IonButton className="signup-button" size="large" fill="outline" onClick={()=>setShowLogin(true)}>Login here</IonButton>
                </div>
            </div>
        </IonContent>

    )
}

export default Signup;

