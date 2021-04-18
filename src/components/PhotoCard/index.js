import React, { Fragment } from 'react';
import { Article, ImgWrapper, Image } from './styles';
import { Link } from '@reach/router';
import { FavButton } from '../../components/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, liked, src = DEFAULT_IMAGE}) => {
    const [show, ref] = useNearScreen();

    return (
        <Article ref={ref}>
            { show && <Fragment>
                <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Image src={src} />
                    </ImgWrapper>
                </Link>
            </Fragment>}
            <ToggleLikeMutation>
                {
                    (toggleLike) => {
                        const handleFavClick = () => {
                            toggleLike({ variables: {input: { id }} });
                        }
                        return (<FavButton liked={liked} likes={likes} onClick={handleFavClick} />);
                    }
                }
            </ToggleLikeMutation>
        </Article>
        
    );
};