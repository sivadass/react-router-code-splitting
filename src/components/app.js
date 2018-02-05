import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

class DynamicImport extends React.Component {
  constructor(props){
    this.state = {
      component: null
    }
  }
  componentWillMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Loading = () => {
  return(
    <div className="container loading">
      <img src={loaderIcon} alt="Loading..." />
    </div>
    )
}

const PageOne = (props) => (
  <DynamicImport load={() => import('./pages-one')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const PageTwo = (props) => (
  <DynamicImport load={() => import('./pages-two')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
)

const PageThree = (props) => (
  <DynamicImport load={() => import('./pages-three')}>
    {(Component) => Component === null
      ? <Loading/>
      : <Component {...props} />}
  </DynamicImport>
)

class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={PageOne}/>
          <Route path="/page-two" component={PageTwo}/>
          <Route path="/page-three" component={PageThree}/>
        </div>
      </Router>
    )
  }
}

export default App;