import React, { PureComponent } from 'react';

import ViewHome from "./views/home";
import ViewARServices from "./views/ar_services";
import ViewAIServices from "./views/ai_services";
import ViewWebsiteApp from "./views/website_app";
// import ViewECommerce from "./views/e_commerce";
import ViewAbout from "./views/about";
import ViewCareers from "./views/careers";
import ViewContact from "./views/contact";
import ViewPrivacyPolicy from "./views/privacy_policy";
import ViewError from "./views/error";
import Navigation from "./views/navigation";
import SectionFooter from "./components/section_footer";

// {BrowserRouter, Route, Switch, Link, NavLink, Redirect, Prompt }
import {BrowserRouter, Route, Switch } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact={true} path='/' component={ViewHome} />
            <Route exact={true} path='/ar_services' component={ViewARServices} />
            <Route exact={true} path='/ai_services' component={ViewAIServices} />
            <Route exact={true} path='/website_app' component={ViewWebsiteApp} />
            <Route exact={true} path='/about' component={ViewAbout} />
            <Route exact={true} path='/careers' component={ViewCareers} />
            <Route exact={true} path='/contact' component={ViewContact} />
            <Route exact={true} path='/privacy_policy' component={ViewPrivacyPolicy} />
            <Route component={ViewError} />
          </Switch>
          <SectionFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
