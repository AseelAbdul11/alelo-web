import React, { FC, useState } from 'react'
import ReactPlayer from 'react-player'
import playButton from '../../../Assets/play_button.svg'
import './videothumbnail.css'
interface myComponentProps {
    show: any
    setShow: any;
    video : any
}
export const VideoThumbnail: FC<myComponentProps> = ({ show, setShow,video }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div style={{ position: 'relative' }}>

            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className='thumbnail-section'>
                {
                    <ReactPlayer url={video} muted width='100%' height='auto' />
                }
            </div>
            <div onClick={() => { setShow(true) }} className='play-button-section'>
                <div className='play-button'>
                    <img src={playButton} alt='play' />
                </div>
            </div>
        </div>
    )
}
