import React from 'react'
import './OfferCard.css'
import { Button, Col, Row } from 'react-bootstrap'

const OfferCard = ({item}) => {
  return (
    <div className="card2">
    <Row>
        <Col style={{paddingTop:'4rem',}} >
           <h3 className='ps-2' style={{textTransform:"uppercase",fontSize:'1.5rem',wordWrap:"break-word"}}>{item.title}</h3>
           <Button style={{marginLeft:'3rem',backgroundColor:'#ffc107',}} >SHOP NOW</Button>
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:0}} >
            <img className='w-100 m-3' src={item.image} alt="not found" />
        </Col>
    </Row>
  </div>
  )
}

export default OfferCard