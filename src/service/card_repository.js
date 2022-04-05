import {firebaseApp} from './fBase';
import {getDatabase, ref, set} from 'firebase/database';

const dataBase = getDatabase();
class CardRepository{   
    saveCard(userId, card){
        // firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
        set(ref(dataBase, userId + '/cards' + card.id),{
            card: card
        });
    }
}

export default CardRepository;