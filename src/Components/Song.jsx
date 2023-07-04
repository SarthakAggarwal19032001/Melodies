export const Song=({fn,song})=>{ 

    const showPlayer=()=>{
          fn(true,song);  
    }
    
    return(
        <div className="p-2 row">
            <div className=" col-4">
                <img src={song.artworkUrl100}/>
            </div>
            <div className="col-4 tcolor" >
                {song.artistName} | {song.trackName}
            </div>
            <div className="col-4">
                <button class="btn btn-outline-danger" onClick={showPlayer}>Play Song</button>
            </div>
        </div>
        
    )
}