import React from 'react'
import './VideoContainer.css'
// import Youtube from './Youtube-video'
import YouTube from 'react-youtube';
import PropTypes from 'prop-types'
import img1 from '../overview/image/hqdefault.webp'
import img2 from './hqdefault2.webp'
import img3 from './hqdefault3.webp'
import img4 from './hqdefault4.webp'
import img5 from './hqdefault5.webp'





var opts = {
    height: '390',
    width: '740',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
};
class VideoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedid: '',
        }
    }

    updated = (evt) => {
        this.setState({
            updatedid: evt.target.id
        })
    }
    render() {
        console.log(this.state.updatedid);
        return (
            <div className='vidContainer-main-div'>

                <div className='video-container'>
                    <h1 className='animated fadeIn video-heading'>Videos</h1>
                    <div className='vidmain_div'>
                        <div className='videoplayer-div' style={{
                            marginLeft: '70px',
                            width: 'fit-content',
                            display: 'inline-block',

                        }}>
                            <div className='player'>

                                <YouTube className='youtube-player-div'
                                    videoId={this.state.updatedid}
                                    opts={opts}
                                    onReady={this._onReady}
                                />

                            </div>

                        </div>
                        <div className='PresidentSays-videos-list'>
                            <div className='thumnail-div'><div className='video-list-images-div'>
                                <img src={img1} alt="image" className='video-list-images' id='RuYbBHHF4VM' onClick={this.updated} />

                            </div>
                                <div className='classes-detail-div'>
                                    <h4 className='classes-detail-heading' id='RuYbBHHF4VM' onClick={this.updated}>PIAIC Classes are Coming Soon</h4>
                                    <p className='clases-detail-p'>


                                        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.
                            </p>

                                </div>



                            </div>




                            <div className='thumnail-div' >

                                <div className='video-list-images-div' >
                                    <img src={img2} alt="image" className='video-list-images' id='RuYbBHHF4VM' onClick={this.updated} />

                                </div>

                                <div className='classes-detail-div'>
                                    <h4 className='classes-detail-heading' id='RuYbBHHF4VM' onClick={this.updated} >Teaser 2: PIAIC Classes Coming Soon</h4>
                                    <p className='clases-detail-p'>


                                        The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.
                            </p>

                                </div>



                            </div>
                            <div className='thumnail-div'>

                                <div className='video-list-images-div'>
                                    <img src={img3} alt="image" className='video-list-images' id='sqtc7s1KZEg' onClick={this.updated} />

                                </div>

                                <div className='classes-detail-div'>
                                    <h4 className='classes-detail-heading' id='sqtc7s1KZEg' onClick={this.updated} style={{
                                        display: 'contents',

                                    }}>PIAIC Intro-Full Version</h4>
                                    <p className='clases-detail-p'
                                        style={{
                                            display: 'block'
                                        }}>


                                        Official intro video of the PIAIC. Messages from President Dr. Arif Alvi, Kazi Rahat Ali, Hunaid Lakhani, Sulaiman S. Mehdi, and Zia Ullah Khan.
                            </p>

                                </div>



                            </div>
                            <div className='thumnail-div'>

                                <div className='video-list-images-div'>
                                    <img src={img4} alt="image" className='video-list-images' id='5p8oJVVg2P4' onClick={this.updated} />

                                </div>

                                <div className='classes-detail-div'>
                                    <h4 className='classes-detail-heading' id='5p8oJVVg2P4' onClick={this.updated}
                                        style={{
                                            display: 'contents',

                                        }}>PTV Coverage of PIAIC
                                 Launch</h4>
                                    <p className='clases-detail-p'>


                                        PTV Coverage of PIAIC Launch Event on December 9, 2018</p>

                                </div>



                            </div>
                            <div className='thumnail-div'>

                                <div className='video-list-images-div'>
                                    <img src={img5} alt="image" className='video-list-images-last' id='hduZpoRBldc' onClick={this.updated}
                                        />

                                </div>

                                <div className='classes-detail-div'>
                                    <h4 className='classes-detail-heading' id='hduZpoRBldc' onClick={this.updated}
                                        style={{
                                            display: 'contents',

                                        }}>President On PIAIC</h4>
                                    <p className='clases-detail-p'>
                                        PIAIC is a new and bold venture into emerging tech to turn Pakistani youth into tech entrepreneurs and Pakistan into a global tech hub.

                                   </p>

                                </div>



                            </div>

                        </div>

                        <div className='video-down-detail'>
                            <h1 className='video-down-detail-h1'>PIAIC Classes are Coming Soon! </h1>
                            <p className='video-down-detail-p'>The mission
                            of PIAIC is to reshape Pakistan by revolutionizing
                            education, research, and business by adopting latest,
                         cutting-edge technologies.</p>

                        </div>


                    </div>


                </div>


            </div>
        )
    }


}
VideoContainer.propTypes = {

}

export default VideoContainer
