import React from "react";

class NewYorkCityArticle extends React.Component {

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
                <h1> Best food by every subway stop </h1>     
                <h2> A Line </h2>  
                <h2> Inwood 207 St - Guadalupe </h2>
                <h2> Dyckman St - International Food House </h2>
                <h2> 190 St - </h2>
                <h2> 181 St - </h2>
                <h2> 175 St - Fanelli’s Cafe </h2>
                <h2> 168 St - </h2>
                <h2> 145 St - </h2>
                <h2> 168 St - </h2>
                <h2> 125 St - </h2>
                <h2> 59 St Columbus Circle - </h2>
                <h2> 42 St/Port Authority Bus Terminal - </h2>
                <h2> 34 St Penn Station - </h2>
                <h2> 14 St </h2>
                <h2> W 4 St Wash Sq - </h2>
                <h2> Canal St - </h2>
                <h2> Chambers St - </h2>
                <h2> Fulton St - </h2>
                <h2> High St - </h2>
                <h2> Jay St- MetroTech - </h2>
                <h2> Hoyt Schermerhorn - </h2>
                <h2> Nostrand Av - </h2>
                <h2> Hoyt Schermerhorn - </h2>
                <h2> Nostrand Av - </h2>
                <h2> Utica Av - </h2>
                <h2> Broadway Junction - </h2>
                <h2> Euclid Av - </h2>
                <h2> Grant Av - </h2>                
                <h2> 80 St - </h2>
                <h2> 88 St - </h2>
                <h2> Rockaway Blvd - </h2>
            </div>

            <div>
                <h2> Where to eat? </h2>
                <h2> Which borough are you in </h2>
                <button> Brooklyn </button>
                <button> Bronx </button>
                <button> Manhattan </button>            
                <button> Queens </button>
                <button> Staten Island </button>                
            </div>     
        </div>)
    }
}

export default NewYorkCityArticle