import React from "react";
import loaderGif from "../../static/gif/loading.gif"
import style from './Preloader.module.css'

let Preloader = (props) => {
    return <div>
        <img className={style.preloader} src={loaderGif} style={{height: 50, width: 50}}/>
    </div>
}

export default Preloader;