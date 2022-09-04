import React, { Component, memo, useCallback, useRef } from 'react';
import styles from './list.module.css';

const List = memo (
  ({item,onVideoClick, display}) => {
    const onClick = useCallback(() => {
      onVideoClick(item);
    },[onVideoClick, item])

    if(item != undefined)
    {
      const img_src1 = item.snippet.thumbnails.default.url;
      const item_id = item.id;
      const c_title_src1 = item.snippet.channelTitle;
      const title_src1 = item.snippet.title;    
    
      return(
          <>
          <div className={styles.cards__item__div}>
            <a  href={'https://www.youtube.com/watch?v=' + item_id}>
              <li className={styles.cards__item} onClick={onClick}>
                <figure className={styles.cards__item__pic_wrap}>
                  <img  src={img_src1} className={styles.cards__item__img}></img>
                </figure>
                <div className={styles.cards__item__info} id='box2'>
                  <p className={styles.cards__item__text}>
                  {title_src1}
                  {/* <br />
                  [{c_title_src1}] */}
                  </p>
                </div>
              </li>
              
            </a>

            <div className={styles.cards__item__hoverbox}>
              <a href={'https://www.youtube.com/watch?v=' + item_id}></a>
            </div>
          </div>
          </>
        );
      }   
    }
 );  



// class List extends Component {
//     componentDidMount(){
//         console.log(`list: ${this.props.snippet.title} mounted`);
//     }

//     componentWillUnmount(){
//         console.log(`list:${this.props.snippet.title} unmounted`);
//     }

//     render() {
//         const img_url = this.props.snippet.thumbnails.default.url;
//         return (
//             <table>
//                 <tbody>
//                     <td></td><img src={img_url}></img>
//                     <td></td>
//                 </tbody>
//             </table>
//         );
//     }
// }

export default List;