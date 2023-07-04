import { useEffect, useState } from "react"
import { Search } from "../Components/Search"
import { getSongs } from "../Services/api-client"
import { Songs } from "../Components/Songs"
import { Player } from "../Components/Player"

export const SearchPage=()=>{


  const [song,setPlayerSong]=useState(null);

  const [allSongs, setSongs]=useState([]);

  const [flag, setFlag]=useState(false);

  const loadSongs= async () => {
    setSongs(await getSongs('Latest Songs'));
  }

  useEffect(()=>{
    loadSongs();
  },[])

  const togglePlayer=(flag,songargs)=>{
    setPlayerSong(songargs);
    setFlag(flag);
  }

  const getArtistName=async(artistName)=>{
      setSongs(await getSongs(artistName));
  }

  const jsx= <>
    <Search fn={getArtistName}/>
    <Songs fn={togglePlayer} allsongs={allSongs}/>
  </>;

    return (
        <div className='container back text-white'>
          <div class="p-3 mb-2">
            <h1 className='p-3 mb-2 text-center'>Melodies</h1>
            {flag?<Player fn={togglePlayer} song={song}/>:jsx}
          </div>
        </div>
    );
}