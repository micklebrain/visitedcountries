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
                var resyname = resturant['name'];                              
                const res = {
                    name: resyname,             
                }
                console.log("Res: " + res);    
                let resturants = this.state.resturantDetails;                 
                resturants.push(res);
                this.setState({ resturantDetails: resturants });     
            });               
        })
        .catch(error => console.log('error', error));
    }

    getResturantDetails2(number) {  
        fetch("https://api.documenu.com/v2/restaurants/search/fields?restaurant_phone=" + number + "&exact=true", {
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "x-api-key": "76dd73b2cef6c3c91c73fbaeb13c6c54",
            "x-rapidapi-key": "be380676a9mshdeecb525fe47253p191e60jsn61c1339cb24b",
        }
        })
        .then(response => {
            console.log("Response: " + response);
            response.json().then(data => {
                console.log("Data: " + data);                
                console.log(data['data']);
                // Add #1 dish 
                const res = {
                    name: data['data'][0]['restaurant_name'],
                    cuisines: data['data'][0]['cuisines']
                }
                console.log("Res: " + res);    
                let resturants = this.state.resturantDetails 
                resturants.push(res);
                this.setState({ resturantDetails: resturants });            
            });
        })
        .catch(err => {
            console.log('Error occured');
            console.error(err);
        });
    }

    async componentDidMount() {        
        // Obao - Manhattan, Piquant - Brooklyn, White Bear - Queens, Seis Vecinos - Bronx, Lacey's Bridge Tavern - Staten Island        
        // var phone_numbers = ['2123085588', '7184844114', '7189612322', '7186848604', '7182737514'];
        // phone_numbers.forEach( number => {
        //     this.getResturantDetails2(number); 
        // })          

        this.getResturantDetails();
        
    }

    render() {        
        const resturantDetails = this.state.resturantDetails
        console.log(this.state);
        const resturantsList = resturantDetails.map((resturant) => <li>{ resturant.name + " Cusines: " + resturant.cuisines }</li>);

        return (<div>             
            <h1> Top 5 Manhattan Resturants </h1>
            <ol>
                { resturantsList }
            </ol>
        </div>)
    }
}

export default TopNYCResturants