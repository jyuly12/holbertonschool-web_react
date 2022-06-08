import React from "react";

function WithLogging(NAME_OF_THE_WRAPPED_COMPONENT) {
  const Item =
    NAME_OF_THE_WRAPPED_COMPONENT.displayName ||
    NAME_OF_THE_WRAPPED_COMPONENT.name ||
    "Component";

  class HOC extends React.Component {
    componentDidMount(){console.log(`Component ${Item} is mounted`);}

    componentWillUnmount(){console.log(`Component ${Item} is going to unmount`);}

    render() { return <NAME_OF_THE_WRAPPED_COMPONENT {...this.props} />;}
  }
  
  HOC.displayName = `WithLogging(${Item})`;
  return HOC;
}


export default WithLogging;