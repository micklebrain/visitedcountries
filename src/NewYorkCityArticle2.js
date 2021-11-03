import React from "react";

class NewYorkCityArticle2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resturantDetails: [],
            map: null
        }
    }

    async componentDidMount() {      
                
    }

    render() {            
        return (<div>       
            <div>     
                <h1> Best food in every NYC neighborhood </h1>       
                <h2> Battery Park City - Dig </h2>
                <h2> Civic Center - Potbelly Sandwich Shop </h2>
                <h2> Financial District - Bao Bao </h2>
                <h2> Koreatown - Antoya KBBQ </h2>
                <h2> NOMAD - KazuNori </h2>
                <h2> SOHO - Fanelli’s Cafe </h2>
                <h2> Tribeca - </h2>
            </div>    
        </div>)
    }
}

export default NewYorkCityArticle2