import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// essa implementação funcionará apenas para a aula:
// 1. o acesso ao banco irá expirar em poucos dias

// 2. a implementação funcionar apenas pelo uso do postman, 
// ela foi feita usando o firebase para o frontend e não o firebase admin (backend)
// então não funcionará corretamente ao receber requisições de um frontend 

export class FirestoreDatabase {
    
    private static firebaseConfig = {
        apiKey: "AIzaSyDtnqVPwidgJZayGkLP2P51cPReEtWibAQ",
        authDomain: "aula-arquitetura.firebaseapp.com",
        projectId: "aula-arquitetura",
        storageBucket: "aula-arquitetura.appspot.com",
        messagingSenderId: "561826461307",
        appId: "1:561826461307:web:4633d1b89fdb4644bb14de"
      };
      
    private static app = initializeApp(FirestoreDatabase.firebaseConfig);

    protected static database = getFirestore(FirestoreDatabase.app)
}