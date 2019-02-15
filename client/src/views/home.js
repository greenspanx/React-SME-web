import React, { Component, PureComponent } from 'react';
import axios from 'axios';

// import components
import FullScreenIntro from "../components/full_screen_intro";
import Section2Col2Img from "../components/section_2col_2img";
import Section2Col1Img from "../components/section_2col_1img";
import SectionCountersMedia from "../components/section_counters_media";
import SectionImgButtonOn from "../components/section_imgfeature_buttonon";
import SectionClients from "../components/section_clients";
import ContactForm from "../components/section_contact_form";

// import data
// import {FullScreenIntroData} from "../data/json_data.js";
import {DataServicesData} from "../data/json_data.js";
import {ECommerceData} from "../data/json_data.js";
import {CountersAndMediaData} from "../data/json_data.js";
import {ImgButtonsOnData} from "../data/json_data.js";
import {ClientCarouselData} from "../data/json_data.js";

// create component
class ViewHome extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      fullscreenintro: [],
    }
  }

  async componentDidMount(){
    const data1 = await this.getData('/frontenddata?target=fullscreenintro');
    this.setState(() => {
      return {fullscreenintro: data1,};
    });

  }

  async getData(dataTarget){
    try {
      const response = await axios.get(dataTarget);
      const data = response.data;
      console.log(data);
      return data;
    } catch(err){
      console.error(err);
      let data = [{
        title: err.title || "error",
        content: err.message || "cannot fetch data.",
      }];
      return data;
    }
  }


  render() {
    return (
      <div>
        <FullScreenIntro data={this.state.fullscreenintro}/>
        <Section2Col2Img data={DataServicesData}/>
        <Section2Col1Img data={ECommerceData}/>
        <SectionCountersMedia data={CountersAndMediaData}/>
        <SectionImgButtonOn data={ImgButtonsOnData}/>
        <SectionClients data={ClientCarouselData}/>
        <ContactForm />
      </div>
    );
  }
}

export default ViewHome;
