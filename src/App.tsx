import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, personOutline, square, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
import PhotoGallery from './pages/PhotoGallery';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Output from './pages/Output';
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
//import firebase from "../firebase/clientApp";
import Loading from './components/Loading';
import Auth from './components/Auth';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthPage from './pages/Auth';
import Main from './pages/Main';

setupIonicReact();

const App: React.FC = () => {

    // Firestore
    //const db = firebase.firestore();

    // User Authentication
    //const [user, loading, error] = useAuthState(firebase.auth());

  // const [upload, setUpload] = useState({status:false,img_id:'',img_url:''})
  // const [output, setOutput] = useState({status:false,img_url:''})
  return(  
  <IonApp>
    <IonReactRouter>
    <Route exact path="/output">
            <Output/>
          </Route>
          <Route exact path = "/login">
            <Login/>
          </Route>
          <Route exact path = "/signup">
            <Signup/>
          </Route>
          <Route exact path="/test">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
    </IonReactRouter>
    {/* {!user && <Auth/>}
    {user && !upload.status && <PhotoGallery setUpload = {setUpload}/>}
    {user && upload.status && !output.status && <Loading output={output} setOutput={setOutput} img_id = {upload.img_id}/>}
    {user && output.status && <Output upload={upload} output={output}/>} */}
  </IonApp>
);
  }

export default App;
