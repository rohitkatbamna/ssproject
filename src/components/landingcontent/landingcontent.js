import { faArrowCircleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState , useEffect} from "react";
import './landingcontent.css';
import axios from "axios";

import Notsurecomponent from "../notsurecomponent/notsurecomponent";

function Landingcontentmain(){
    const [search, setSearch] = useState('');
    const [destinationid, setDestinationid] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [results, setResults] = useState([]);

    function onChangefun(event){
        setSearch(event.target.value);
    }
    function onChangedate(event){
       setCheckin(event.target.value);
    }
    function onChangedate1(event){
        setCheckout(event.target.value);
    }
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: {query: search, locale: 'en_US', currency: 'USD'},
      headers: {
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': '23c356717fmshbb2f2d86d817f3ep1206efjsn97ab2f794ce4'
      }
    };
    const options1 = {
        method: 'GET',
        url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search',
        params: {
          checkin_date: checkin,
          checkout_date: checkout,
          sort_order: 'STAR_RATING_HIGHEST_FIRST',
          destination_id: destinationid,
          adults_number: '1',
          locale: 'en_US',
          currency: 'USD',
          children_ages: '4,0,15',
          price_min: '10',
          star_rating_ids: '3,4,5',
          accommodation_ids: '20,8,15,5,1',
          price_max: '500',
          page_number: '1',
          theme_ids: '14,27,25',
          amenity_ids: '527,2063',
          guest_rating_min: '3'
        },
        headers: {
          'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com',
          'x-rapidapi-key': '23c356717fmshbb2f2d86d817f3ep1206efjsn97ab2f794ce4'
        }
      };
    function onClick(){
        
        axios.request(options).then(function (response) {
            console.log(response.data.suggestions[0].entities[0].destinationId);
            setDestinationid(response.data.suggestions[0].entities[0].destinationId)
        }).catch(function (error) {
            console.error(error);
            
        });
        axios.request(options1).then(function (response) {
            console.log(response.data.searchResults.results);
            setResults(response.data.searchResults.results);
        }).catch(function (error) {
            console.error(error);
            
        });

    }
    useEffect(() => {
        onClick()
    }, [destinationid]);
    
    
        
    return(
        <div>        
            <div className="card shadow landing-content-main-all-of-it">
                <div className="card-body container-fluid "> 
                    <div className="row" style={{marginTop:'100px'}}>
                        <div className="col-xl-6 col-xxl-6 col-lg-7 col-md-9 ms-auto me-auto text-center">
                            <h1 className="fw-bold landing-content-main-world-wide">
                                Life is Short And the World is Wide 
                            </h1>
                            <p style={{fontWeight:'600'}}>
                                To get the best of adventure you just need to leave and go where you like. We are waiting for you
                            </p>
                            <button type="button" className="btn btn-lg" style={{backgroundColor:'#935B4F',borderRadius:'26px',color:'white',fontWeight:'600'}}>Plan A Trip <FontAwesomeIcon icon={faArrowCircleDown}/></button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex align-items-center flex-wrap justify-content-center">
                                <input type='text' placeholder="Visit Place" style={{height:'50px',borderRadius:'16px',border:'none'}}/>
                                <p className="fw-bold fs-3 mt-3 ms-3 me-3">Check In</p>
                                <input type='date' style={{height:'50px',borderRadius:'16px',border:'none'}}/>
                                <p className="fw-bold fs-3 mt-3 ms-3 me-3">Check Out</p>
                                <input type='date' style={{height:'50px',borderRadius:'16px',border:'none'}}/>
                                <button type="button" class="btn btn-secondary btn-lg" style={{borderRadius:'16px'}}><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <Notsurecomponent />
        </div>
    );
}
export default Landingcontentmain;