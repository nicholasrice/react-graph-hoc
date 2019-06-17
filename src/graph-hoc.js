import React from "react";

const context = React.createContext({realDepth: 0});

const { Consumer, Provider } = context;

class Graph extends React.Component {
    render() {
        return (
            <Consumer>
                {(context) => {
                    return (
                        <Provider value={{depth: context.depth + 1}}>
                            <div style={{padding: "0 8px"}}>
                                Depth
                                {context.depth + 1}
                                {this.props.children}
                            </div>
                        </Provider>
                    )
                }}
            </Consumer>
        )
    }
}

Graph.contextType = context;

export default Graph;
