import React from 'react'
import { Avatar } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'

function ItemAvatar({ item, className }) {
    return (
        <Avatar 
            src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath}
            className={className}
        >
            <ImageIcon/>
        </Avatar>
    )
}

export default ItemAvatar