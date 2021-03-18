import React from 'react'
import {connect} from 'react-redux'
import {useEffect} from 'react'

import styled from 'styled-components'
import {fetchData} from '../store/'



const PokeCard = (props) => {
    const { fetchData } = props;
    
    

    useEffect(() => {
        fetchData();
      }, [fetchData]);


    return(
        <div >
            {props.isLoading ? <h3>Loading data...</h3> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}   
            {props.data.map((card) => (
            // <img key = {card.data.id}  src={card.data.images.small} alt=" "/>
            <p>{card.data.pokemon.id.name}</p>
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      data: state.data,
      error: state.error
    };
  };

export default connect(mapStateToProps, { fetchData }) (PokeCard )