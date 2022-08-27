import React, { Component, useState } from 'react';
import List from './list';
import styles from './lists.module.css';

const Lists = ({youList, onVideoClick, display}) => {
        
    // if(loading) return <p>Loading....</p>

    if(youList == undefined)
        return false;
    // if(item[1] != undefined)
    // {
        return(
            // <tr>
            <ul className={styles.listsUl}>
                {youList.map((item,idx) => (
                    <List 
                        key={item.id}
                        item = {item}
                        onVideoClick = {onVideoClick}
                        display = {display}
                    />
                ))}
              
            </ul>
            // </tr>           
        ); 
    // }
    // else
    // {
    //     return(
    //         <ul>
    //             <List 
    //                 // item1 = {[item[0].snippet.title, item[0].snippet.channelTitle, item[0].snippet.thumbnails.default.url]}
    //                 item1 = {item[0]}
    //                 display = {display}
    //             />
    //         </ul>           
    //     );
    // }
}

// class Lists extends Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li>
//                     {this.lists.map(list => (
//                         <List key={list.id}
//                             snippet={list.snippet}
                        
//                         >


//                         </List>

//                     ))}
//                     </li>    
//                 </ul>
//             </div>
//         );
//     }
// }

export default Lists;