import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMAGE = 'https://platzistaging.s3-us-west-2.amazonaws.com/commons/assets/image/isotipoPlatzi442ccc1186a9806e18c9889cc301ffe1.png';

export const Category = ({cover = DEFAULT_IMAGE, path = '#', emoji = '?'}) => (
    <Link to={path}>
        <Image src={cover}/>
        { emoji }
    </Link>
);
