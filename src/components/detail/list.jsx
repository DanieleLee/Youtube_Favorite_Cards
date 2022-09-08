import React, { Component, memo, useCallback, useRef } from 'react';
import { useEffect } from 'react';
import styles from './list.module.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const List = memo (
  ({item,onVideoClick, display, FontAwesomeIcon}) => {
    const onClick = useCallback(() => {
      onVideoClick(item);
    },[onVideoClick, item])

    const [listOver, setListOver] = React.useState(false);
    const [overObj, setOverObj] = React.useState(null);

    if(item != undefined)
    {
      const img_src1 = item.snippet.thumbnails.default.url;
      const item_id = item.id;
      const title_src1 = item.snippet.title;
      const tags = item.snippet.tags;  

      return(
          <>
          <div className={styles.cards__item__div}>
            <a  href={'https://www.youtube.com/watch?v=' + item_id}>
              <li className={styles.cards__item} onClick={onClick} 
                onMouseEnter={(e) => setListOver(true)} 
              >
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

            <div className={listOver ? styles.cards__item__hoverbox__act : styles.cards__item__hoverbox} onMouseLeave={(e) => setListOver(false)}>
              <a href={'https://www.youtube.com/watch?v=' + item_id}>
                {
                  tags !== undefined ?
                    tags.map((item, idx) => (
                        <p key={item}>
                          {"#" +item}
                        </p>
                      ))
                  :
                  '#'
                }
              </a>
              <div className={styles.like_card_control}>
                <div className={"is-tooltip-warning is-tooltip-left course-card__button-like add_cart e-like"} data-tooltip="좋아요">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
          </div>
          </>
        );
      }   
    }
 );  



export default List;