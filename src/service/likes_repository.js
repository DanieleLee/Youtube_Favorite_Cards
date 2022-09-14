import {getDatabase, ref, set, remove, onValue, off} from 'firebase/database';

const database = getDatabase();
class LikesRepository{
    syncLikes(userId, onUpdate){
        const reference = ref(database, userId);
        onValue(reference, (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value); 
        });
        return () => off(reference);
    }

    addLikes(userId, cardId, likeVideos){
        set(ref(database, userId + '/cards' + cardId),{
            likeVideos : likeVideos
        })
    }

}

export default LikesRepository;