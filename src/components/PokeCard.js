import React from 'react'
import {connect} from 'react-redux'
import {useEffect} from 'react'

import styled from 'styled-components'
import {fetchData} from '../store/'



const PokeCard = (props) => {
    const {fetchData} = props;
    
    
    

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return(
        <ImgWrapper >
            {props.isLoading ? <h3>Loading data...</h3> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}   
            {props.data.map((card) => (
            <ImgDiv >
                <img key={card.index} src={card.imageUrl} alt=" "/>

            </ImgDiv> 
            
            
             ))}
        </ImgWrapper>
    )
}
const ImgDiv = styled.div `


display:flex;
margin: 1%;
justify-content: center;

`
const ImgWrapper = styled.div `
border: 2px solid black;
display:flex;
flex-wrap: wrap;
justify-content: center;
justify-content: space-around;
`
const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      data: state.data,
      error: state.error
    };
  };

export default connect(mapStateToProps, { fetchData }) (PokeCard )