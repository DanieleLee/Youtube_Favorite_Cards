import {firebaseApp} from './fBase';
import {getDatabase, ref, set, remove, onValue, off} from 'firebase/database';

const dataBase = getDatabase();
class CardRepository{
    syncCards(userId, onUpdate){
        const reference = ref(dataBase, userId);
        onValue(reference, (snapshot) => {
            const value = snapshot.val();
            const objKeys = Object.keys(value);
            const objArray = new Array(); 
            // value && onUpdate(value);
            if(objKeys != undefined){
                for(let i =0; i< objKeys.length; i++){
                    objArray.push(value[objKeys[i]]);
                }
                console.log(objArray);
                onUpdate(objArray);
            }
        });
        return () => off(reference);
    }
    
    saveCard(userId, card){
        // firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
        set(ref(dataBase, userId + '/cards' + card.id),{
            card: card
        });
    }

    removeCard(userId, card){
        remove(ref(dataBase, userId + '/cards' + card.id),{
            card: card
        });
    }
}

export default CardRepository;