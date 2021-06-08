import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Div, Title2, Title4, Icon2 } from '../styles/order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faFax, faMapMarked } from '@fortawesome/free-solid-svg-icons'


function Card(props) {

  return (
    <>
      <Div>
        <div className="col-md-12 card">
          <Title2>{props.label}</Title2>

          <Title4> {props.name}  {props.code && <i> - {props.code} </i>} </Title4>

          <p>
            <Icon2><FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon></Icon2>
            {props.address}
          </p>
          <p>
            <Icon2><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Icon2>
            {props.contactName}
          </p>
          <p>
            <Icon2><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></Icon2>
            {props.contactEmail}
          </p>
          <p>
            <Icon2><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></Icon2>
            {props.contactPhone}
            <Icon2><FontAwesomeIcon icon={faFax}></FontAwesomeIcon></Icon2>
            {props.contactFax}
          </p>
        </div>
      </Div>
    </>
  )
}
export default Card
