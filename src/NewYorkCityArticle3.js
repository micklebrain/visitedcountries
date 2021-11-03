import React from "react";

class NewYorkCityArticle3 extends React.Component {

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
        return (
        <div>       
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

export default NewYorkCityArticle3