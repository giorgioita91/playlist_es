import {useState} from 'react';
import playList from '../playlist';
import Comandi from './Comandi';



function Anteprima(props){
    
    function handleAnteprima(){
        setAnteprima(props.parametro)
        console.log(anteprima);
    }
    
    const [anteprima, setAnteprima] = useState(playList[0])
    
    const {title, artist, minutes, album, year, imgUrl} = anteprima
    return(
        <div className="containerAnteprima">
            <img id="imgAlbum" src={imgUrl} alt="" />
            <div className="textAlbum">
                <h2 id="title">{title} {year}</h2>
                <p id="artist">{artist}</p>
                <p id="album">{album}</p>
                <Comandi />
            </div>
            <button onClick={handleAnteprima}>ciaociaoaooaoaoaa</button>
        </div>
    )
}

export default Anteprima;


