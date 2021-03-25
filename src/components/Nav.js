import React from 'react';
import {connect} from 'react-redux'
import {useEffect} from 'react'

import styled from 'styled-components'
import {fetchData} from '../store/'

const Nav = (props) => {
    const {fetchData} = props;

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    

    return(
        <NavStyle>
            <form>
                <label />Search for Cards:
                <input type="text" value={props.inputValue}  />
                <button className="button" onClick=" ">Search</button>

                
            </form>
        </NavStyle>
    )
}

const NavStyle = styled.div `
border: 2px solid black;
background-color: #FFCB05;
padding-top: 1%;
padding-bottom: 1%;
display: flex;
flex-direction: column;
button{
   background-color: #3D7DCA;
   color: white;
    
    margin-left: 1%;

    
}
input{
    margin-left: .5rem;
}

`
const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading,
      data: state.data,
      error: state.error
    };
  };
export default connect(mapStateToProps, { fetchData }) (Nav)