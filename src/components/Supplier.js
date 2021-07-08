import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardContent, Div, Title2, Title3, Flex, Code, Icon2, Marker } from '../styles/order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faReply, faEye, faPhone, faFax } from '@fortawesome/free-solid-svg-icons'


function Supplier(props) {

  return (
    <>
      <Div>
        <div className="card">
          <CardContent>
            <Title2>Suplier</Title2>
            <Flex>
              <Title3>
                {props.name}
              </Title3>
              <Code>
                Code#{props.code}
              </Code>
            </Flex>
            <div className="row">

              <div className="col-md-4 col-sm-12" >
                <p>
                  {props.valueDocument}
                </p>
                <p>
                  {props.address}
                </p>
              </div>


              <div className="col-md-5">
                <p>
                  <Icon2>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </Icon2>
                  {props.fullName} - <Marker>{props.email}</Marker>
                </p>
                <p>
                  <Icon2>
                    <FontAwesomeIcon icon={faPhone}>
                    </FontAwesomeIcon>
                  </Icon2>
                  {props.phone}
                  <Icon2>
                    <FontAwesomeIcon icon={faFax}>
                    </FontAwesomeIcon>
                  </Icon2>
                  {props.fax}
                </p>
              </div>

              <div className="col-md-3">
                <p>
                  <Icon2>
                    <FontAwesomeIcon icon={faEye}>
                    </FontAwesomeIcon>
                  </Icon2>
                  Read:{props.readAt}
                </p>
                <p>
                  <Icon2>
                    <FontAwesomeIcon icon={faReply}>
                    </FontAwesomeIcon>
                  </Icon2>
                  LastReply:{props.lastReplyAt}
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Div>
    </>
  )
}

export default Supplier
