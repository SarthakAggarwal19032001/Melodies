export const Player=({fn,song})=>{
    return (
        <div>
            <div>
                <button className="btn btn-secondary" onClick={()=>{fn(false,null);}}>Back To Songs</button>
            </div>
            <div className="row p-5">
                <div className="col-4">
                    <img src={song.artworkUrl100}/>
                </div>
                <div className="col-4 tcolor">
                    {song?.artistName} | {song?.trackName}
                </div>
                <div className="col-4">
                    <audio controls>
                        <source src={song?.previewUrl} type="audio/mp4"/>
                        Your Browser Does Not Support Audio Element
                    </audio>
                </div>
            </div>
        </div>
    )
}
