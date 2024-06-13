import React, { FC, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './videopopup.css'
import { VideoThumbnail } from './VideoThumbnail/VideoThumbnail'
import vide from '../../Assets/videos/video.mp4'
interface myComponentProps {
    video : any 
} 
const  VideoPopup : FC<myComponentProps> = ({video}) => {
    const [show, setShow] = useState(false);
    const [sizes,setSizes] : any = useState('lg')
    useEffect(()=>{
setSizes('lg')
    },[])

    return (
        <>
        <VideoThumbnail show={show} video={video}  setShow={setShow}/>
            <Modal centered show={show} size={sizes} onHide={() => setShow(false)} backdrop="static" keyboard={false} >
                <Modal.Header  closeButton >
                    <div>

                    Video Player
                    </div>
                </Modal.Header>
                <Modal.Body style={{display: 'flex', justifyContent : 'center'}}>
                <ReactPlayer width={1080} url={video} controls />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoPopup