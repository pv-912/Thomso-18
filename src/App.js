import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// Beta route not being used currently
// const BetaIndex = Loadable({
//   loader: () => import('./components/beta/Index'),
//   loading: () => <div>Loading BetaIndex</div>,
// });

const CAIndex = Loadable({
  loader: () => import('./components/ca/Index'),
  loading: () => <div>Loading CAIndex</div>,
});

const Sponsors = Loadable({
  loader: () => import('./components/beta/sponsors/Index'),
  loading: () => <div>Loading Sponsors</div>,
});

const FAQIndex = Loadable({
  loader: () => import("./components/beta/faq/Index"),
  loading: () => <div>Loading FAQIndex</div>
});

const SponsorsIndex = Loadable({
  loader: () => import("./components/beta/sponsors/Index"),
  loading: () => <div>Loading SponsorsIndex</div>
});

const TeamIndex = Loadable({
  loader: () => import("./components/beta/team/Index"),
  loading: () => <div>Loading TeamIndex</div>
});

const HomeIndex = Loadable({
  loader: () => import("./components/beta/home/Index"),
  loading: () => <div>Loading HomeIndex</div>
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/beta" component={BetaIndex} /> */}
          <Route exact path="/" component={HomeIndex} />

          <Route path="/Sponsors/" component={Sponsors} />



          <Route exact path="/sponsors" component={SponsorsIndex} />
          <Route exact path="/team" component={TeamIndex} />
          <Route exact path="/faq" component={FAQIndex} />

          <Route path="/ca/" component={CAIndex} />

        

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
