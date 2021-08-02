import React from "react";


class ClassComponent extends React.Component {
    render() {
        return(
            //herşey tek bir div içerisinde olmak zorunda
            <div className="wrapper"> 
                <h2>
                    Class Component
                </h2>
                <p>{this.props.y}</p>
            </div>
        );
    }
}
export default ClassComponent;