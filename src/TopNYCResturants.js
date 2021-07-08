import React from "react";

class TopNYCResturants extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resturantDetails: []
        }
    }

    getResturantDetails() {
        var requestOptions = {
            method: 'GET',
        };
          
        fetch("https://lostmindsbackend.vercel.app/resturants", requestOptions)
        .then(response => response.text())
        .then(response => {
            console.log("Response: " + response);   
            var resyJson = JSON.parse(response);        
            
            resyJson['doc'].forEach(resturant => {                
                const res = {
                    region: resturant['region'],
                    name: resturant['name'],  
                    address: resturant['address'],
                    topDish: resturant['topDish']

                }
                console.log("Res: " + res);    
                let resturants = this.state.resturantDetails;                 
                resturants.push(res);
                this.setState({ resturantDetails: resturants });     
            });               
        })
        .catch(error => console.log('error', error));
    }

    async componentDidMount() {        

        this.getResturantDetails();
        
    }

    render() {        
        const resturantDetails = this.state.resturantDetails        
        const resturantsList = resturantDetails.map((resturant) => 
            <div style = { {textAlign: "center"} }  >        
                <h2> { resturant.name } </h2>        
                {/* <div> { resturant.region } </div>           */}
                <div> { resturant.address } </div>             
                {/* <div> Recommended dish : { resturant.topDish } </div> */}
            </div>
        );

        return (<div>             
            <h1> July, 2020 top resturants in each New York borough </h1>
                 
            { resturantsList }
     
        </div>)
    }
}

export default TopNYCResturants