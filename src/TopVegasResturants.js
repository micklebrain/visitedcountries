import React from "react";

class TopVegasResturants extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resturantDetails: []
        }
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
        var phone_numbers = ['7027317373', '7028894477'];
        phone_numbers.forEach( number => {
            this.getResturantDetails2(number); 
        })               
    }

    render() {        
        const resturantDetails = this.state.resturantDetails
        console.log(this.state);
        const resturantsList = resturantDetails.map((resturant) => <li>{ resturant.name + " Cusines: " + resturant.cuisines }</li>);

        return (<div>             
            <h1> Top 5 Manhattan Resturants </h1>
            <ul>
                { resturantsList }
            </ul>
        </div>)
    }
}

export default TopVegasResturants