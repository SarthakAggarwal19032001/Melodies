import { useRef } from "react";

export const Search = ({fn}) => {
    const artist=useRef();
    return (
        <div className="p-2 row g-3 align-items-center">
            <div class="col-auto">
                <label for="aName" className="form-label" >Artist Name</label>
            </div>
            <div class="col-4">
                <input ref={artist} type="text"  className="form-control form-control-sm" placeholder="Search artist and their songs here" id="aName"/>
            </div>
            <div class="col-4">
                <button className="btn btn-success btn-sm" onClick={
                    ()=>{
                        fn(artist.current.value);
                    }
                }>Search It</button>
            </div>
        </div>
    );
    
}