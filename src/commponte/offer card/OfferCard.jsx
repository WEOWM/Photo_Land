import React from 'react'
import './OfferCard.css'
import { Button, Col, Row } from 'react-bootstrap'

const OfferCard = (props) => {
  return (
  <div className="card">
    <Row>
        <Col style={{paddingTop:'4rem',}} >
           <h3 className='ps-2' style={{textTransform:"uppercase",fontSize:'1.5rem',wordWrap:"break-word"}}>{props.title}</h3>
           <Button style={{marginLeft:'3rem',backgroundColor:'#ffc107',}} >SHOP NOW</Button>
        </Col>
        <Col style={{display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:0}} >
            <img className='w-100 m-3' src={props.image} alt="not found" />
        </Col>
    </Row>
  </div>
  )
}

export default OfferCard