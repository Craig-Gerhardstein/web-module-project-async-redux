// import React from 'react'
// import {connect} from 'react-redux'
// import {useEffect} from 'react'
// import PokeCard from './PokeCard.js'
// import styled from 'styled-components'
// import {fetchData} from '../store'

// const ListWrapper = styled.div`
// display:grid;
// grid-template-columns: repeat(6,1fr);
// grid-template-rows: 1fr 1fr;`

// const CardList = (props) => {

//     const {fetchData,card} = props

//     useEffect(()=>{
//         fetchData()
//       },[fetchData])




//     return(
//         <div>
//             {props.loading ? <p>Loading...</p>: null}
//             {props.err ? <p>{props.err}</p> : null}
//              <ListWrapper>{card.map(item => <PokeCard key={item.index} class ={item}/> )}</ListWrapper> : null }
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return{
//         loading: state.isLoading,
//         classes: state.data,
//         err: state.error
//     }
// }


// export default connect (mapStateToProps,{fetchData})(CardList) 