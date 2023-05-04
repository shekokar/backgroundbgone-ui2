import { IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import "./login.scss"
import { lockClosedOutline, mailOutline } from "ionicons/icons";
import { useState } from "react";
import { auth } from "../../firebase/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({setUser,setShowLogin}) => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then(
            (userCredential) =>{
                console.log(userCredential)
                setUser({
                    uid:userCredential.user.uid,
                    email: userCredential.user.email,
                    displayName: userCredential.user.displayName,             
                })
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
                    <p>Log in to continue</p>
                </div>
                <div className="login-form ion-padding">
                    <div className="form-input">
                        <IonIcon icon={mailOutline}/>
                        <IonItem>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput value={email} onIonInput={(e)=>setEmail((e.target as HTMLIonInputElement).value as string)}  type="email" />
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
                    <IonButton type="submit" onClick={signIn} size="large" className="login-button">Log in</IonButton>
                    <br/>
                    <IonButton className="signup-button" size="large" fill="outline" onClick={()=>setShowLogin(false)}>Sign Up</IonButton>
                </div>
            </div>
        </IonContent>

        
    )
}

export default Login;

