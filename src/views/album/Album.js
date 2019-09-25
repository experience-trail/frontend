import React, { Component } from 'react'
import './Album.scss'
import one from "../../assets/img1.jpg"
import two from "../../assets/img2.jpg"
import three from "../../assets/img3.jpg"
import four from "../../assets/img4.jpg"
import five from "../../assets/img5.jpg"
import six from "../../assets/img6.jpg"
import seven from "../../assets/img7.jpg"

const albums = ["Album 1","Album 2","Album 3","Album 4"]
const images = [one,two,three,four,five,six,seven]

export class Album extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedAlbum: null
        }
    }
    
    allAlbums = (albums) => {
        let newAlbum = albums.map((item) => {
            return <h3 onClick={(e) => {this.setState({selectedAlbum: item})}}>{item}</h3>
        })
        return newAlbum
    }

    allImages = (images) => {
        let newImage = images.map((item) => {
            return <div className="img_box"><img src={item}/></div>
        })
        return newImage
    }

    render() {
        return (
            <div className="album_container">
                <div className="album_create_select">
                    <div className="album_create">
                        <div className="album_form">
                            <h3>Album Name: </h3>
                            <form>
                                <input />
                            </form>
                        </div>
                        <button>Submit</button>
                    </div>
                    <div className="album_select">
                        {this.allAlbums(albums)}
                    </div>
                </div>
                <div className="album_selected_images">
                    <h2>{this.state.selectedAlbum}</h2>
                    <div className="album_images">
                            {this.allImages(images)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Album
