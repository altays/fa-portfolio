import React from 'react';
import { musicData } from "./music";
import ReactHtmlParser from 'react-html-parser';

function Sound() {
    return (
        <>
        <div className="album-container">
          {musicData.map((data, key) => {
            return (
              <div key={key}>
                <Album
                  key={key}
                  AlbumName={data.AlbumName}
                  Embed={data.Embed}
                  URL = {data.URL}
                />
              </div>
            );
          })}
        </div>
      </>
    );
}

export default Sound;

const Album = ({ AlbumName, Embed, URL }) => {

    if (!AlbumName) return <div>"nothing here lol"</div> ;
    return (
        <div className="album">
            <a href={URL}>{ReactHtmlParser(Embed)}</a>
        </div>
    )
};

