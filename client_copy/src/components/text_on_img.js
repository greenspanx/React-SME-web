import React from 'react';

const TextOnImg = (props) => {

    return (
      <div className="card col-12 col-md-6 p-5 m-3 align-center" style={{paddingTop:"20px"}}>
        <div className="card-img" style={{paddingTop:"10px", paddingBottom: "10px", }}>
          <img src={props.item.src} alt="WestApps" title="" style={{opacity:0.6, }}/>
        </div>
        <h4 className="card-title py-2 mbr-fonts-style display-4" style={{color:'#ff6666',fontSize: 28,fontWeight: 'bold',}}>
          {props.item.subtitle}
        </h4>
        <p className="card-text mbr-fonts-style display-6" style={{color:'#f4b030',fontSize:20,fontWeight: 'bold',}}>
          {props.item.content}
        </p>
      </div>
    );

}

export default TextOnImg;
