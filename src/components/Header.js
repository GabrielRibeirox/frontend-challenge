import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Ticket, Flex, Logo, Title1, Icon, Status, ContainerHeader } from '../styles/order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-9">
            <Flex>
              <div>
                <Ticket>
                  <div>
                    <h5>Purchase Order</h5>
                    <h3>{props.number}</h3>
                    <p><i>SerialME {props.serial}</i></p>
                  </div>
                  <Logo></Logo>
                </Ticket>

              </div>
              <div>
                <ContainerHeader>
                  <div className="Price">
                    <Title1>{props.buyer}</Title1>
                  </div>
                  <p>
                    <Icon><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></Icon>{props.companyName}
                  </p>
                  <p>
                    <Icon><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></Icon>{props.companyEmail}
                    <Icon><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></Icon>{props.companyPhone}
                    <Icon><FontAwesomeIcon icon={faFax}></FontAwesomeIcon></Icon>{props.companyFax}
                  </p>
                </ContainerHeader>
              </div>
            </Flex>



          </div>

          <div className="col-md-3">
            <ContainerHeader>
              <div className="Price">
                <Title1>USD {props.price}</Title1>
                <Status>{props.status}</Status>
              </div>
            </ContainerHeader>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header;
