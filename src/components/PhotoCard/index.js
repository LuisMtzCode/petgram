import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Article, ImgWrapper, Image } from './styles';
import { FavButton } from '../../components/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    const [show, ref] = useNearScreen();

    

    return (
        <Article ref={ref}>
            { show && <Fragment>
                <a href={`/?detail=${id}`}>
                    <ImgWrapper>
                        <Image src={src} />
                    </ImgWrapper>
                </a>
            </Fragment>}
            <ToggleLikeMutation>
                {
                    (toggleLike) => {
                        const handleFavClick = () => {
                            !liked && toggleLike({ variables: {input: { id }} });
                            setLiked(!liked);
                        }
                        return (<FavButton liked={liked} likes={likes} onClick={handleFavClick} />);
                    }
                }
            </ToggleLikeMutation>
        </Article>
        
    );
};