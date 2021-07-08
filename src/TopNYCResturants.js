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
        console.log(this.state);
        const resturantsList = resturantDetails.map((resturant) => 
            <div style = { {textAlign: "center"} }  >
                <h2> { resturant.region } </h2>             
                <h1> { resturant.name } </h1>             
                <div> { resturant.address } </div>             
                <div> { resturant.topDish } </div>
            </div>
        );

        return (<div>             
            <h1> Top 5 Manhattan Resturants </h1>
                 
            { resturantsList }
     
        </div>)
    }
}

export default TopNYCResturants