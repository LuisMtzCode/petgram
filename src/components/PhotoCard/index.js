import React, { Fragment } from 'react';
import { Article, ImgWrapper, Image } from './styles';
import { Link } from '@reach/router';
import { FavButton } from '../../components/FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { useNearScreen } from '../../hooks/useNearScreen';
import PropTypes from 'prop-types';

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
                        };
                        return (<FavButton liked={liked} likes={likes} onClick={handleFavClick} />);
                    }
                }
            </ToggleLikeMutation>
        </Article>
        
    );
};

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function(props, propName, componentName){
        const propValue = props[propName];
        if(propValue === undefined){
            return new Error(`${propValue} value must be defined`);
        }

        if(propValue < 0){
            return new Error(`${propValue} value must be greater`);
        }
    },
};