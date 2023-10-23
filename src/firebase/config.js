import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyB52EtGAoPzxwoPdasDdhQXbwPnOdUXut0',
	authDomain: 'chinese-5ae80.firebaseapp.com',
	projectId: 'chinese-5ae80',
	storageBucket: 'chinese-5ae80.appspot.com',
	messagingSenderId: '241604232797',
	appId: '1:241604232797:web:65747be36480cde38aafb4',
	measurementId: 'G-77MGMTD0TB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};
