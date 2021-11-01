import React from "react";

class NewYorkCity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resturantDetails: [],
            map: null
        }
    }

    getResturantDetails() {
        var requestOptions = {
            method: 'GET',
        };
          
        fetch("https://lostmindsbackend.vercel.app/resturants/newyorkcity", requestOptions)
        // fetch("http://localhost:3000/resturants/newyorkcity", requestOptions)
        .then(response => response.text())
        .then(response => {            
            var resyJson = JSON.parse(response);        
            
            resyJson['doc'].forEach(resturant => {                
                const res = {
                    region: resturant['region'],
                    name: resturant['name'],  
                    address: resturant['address'],
                    topDish: resturant['topDish']

                }                    
                let resturants = this.state.resturantDetails;                 
                resturants.push(res);
                this.setState({ resturantDetails: resturants });     
            });               
        })
        .catch(error => console.log('error', error));
    }

    async componentDidMount() {      
        
        const googleScript = document.getElementById('google-map-script')

        this.getResturantDetails();

        if (window.google) {
            this.initMap();        
        }

        googleScript.addEventListener('load', () => {
            this.initMap();   
        })
        
    }

    initMap() {        
        const newyork_coordinates = { lat: 40.730610, lng: -73.935242 };
        const obao_coordinates = { lat: 40.760791677448, lng: -73.99108110247444 };
        const kimoto_coordinates = { lat: 40.691767094535386, lng: -73.98417049147238 };
        const kyuramen_coordinates = { lat: 40.76068852504462, lng: -73.83318746086162 };
        const zero_otto_nove_coordinates = { lat: 40.865034316201864, lng: -73.88190799012268 };
        const bayou_coordinates = { lat: 40.61737143255008, lng: -74.06793410504413 };

        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: newyork_coordinates,
            zoom: 10,
            disableDefaultUI: true,
        });

          // The marker, positioned at Uluru
        const obao_marker = new window.google.maps.Marker({
            position: obao_coordinates,
            map: map,
        });

        const kimoto_marker = new window.google.maps.Marker({
            position: kimoto_coordinates,
            map: map,
        });

        const kyuramen_marker = new window.google.maps.Marker({
            position: kyuramen_coordinates,
            map: map,
        });

        const zero_otto_nove_marker = new window.google.maps.Marker({
            position: zero_otto_nove_coordinates,
            map: map,
        });

        const bayou_marker = new window.google.maps.Marker({
            position: bayou_coordinates,
            map: map,
        });


    }

    render() {            
        const resturantDetails = this.state.resturantDetails        
        const resturantsList = resturantDetails.map((resturant) => 
            <div style = { {textAlign: "center"} }  >        
                <h2> { resturant.name } </h2>                    
                <div> { resturant.address } </div>             
                {/* <div> { resturant.region } </div> */}
                {/* <div> Recommended dish : { resturant.topDish } </div> */}
            </div>
        );

        return (<div>       

            {/* <h1> Top Resturant lists </h1>
            <ul>                
                <li> Top resturants in each Manhattan neighborhood </li>            
            </ul>

            <h2>  Top attractions </h2>

            <ul>
                <li> https://www.hudsonyardsnewyork.com/discover/vessel </li>                
                <li> https://www.esbnyc.com/ </li>
            </ul>

            <h2> Top resturants by each New York train stop </h2>

            <h2> A Line </h2> 
            <ul> 
                <li> Inwood 207 Street </li>
            </ul> */}

            <h2> Uber eats promo code: eats-sxnvv </h2>
            <h2> Grubhub invite link: https://www.grubhub.com/referral/3c840580-6470-11e8-b9ea-43abd66f1334?utm_source=grubhub.com&utm_medium=content_owned&utm_campaign=growth_refer-a-friend_share-link&utm_content=promo_</h2>

            <h1> September, 2021 top resturant in each New York borough </h1>
                            
            { resturantsList }

            <div id="map"></div>

            <div>     
                <h1> Best food in every NYC neighborhood </h1>       
                <h2> Battery Park City - Dig </h2>
                <h2> Civic Center - Potbelly Sandwich Shop </h2>
                <h2> Financial District - </h2>
                <h2> Koreatown - </h2>
                <h2> SOHO - Fanelli’s Cafe </h2>
                <h2> Tribeca - </h2>
            </div>

            <div>     
                <h1> Best food by every subway stop </h1>     
                <h2> A Line </h2>  
                <h2> Inwood 207 St - </h2>
                <h2> Dyckman St - Potbelly Sandwich Shop </h2>
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

export default NewYorkCity