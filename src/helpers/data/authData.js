import firebase from 'firebase/app';
import 'firebase/auth';

const getMyUid = () => firebase.auth().currentUser.uid;

export default { getMyUid };
