import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../components/Header';
import Supplier from '../components/Supplier';
import { Content, Section, Flex, Title5, CardContent } from '../styles/order';
import Card from '../components/Card';
import { IconCircleDown } from '../styles/order';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function App() {
  const [repo, setRepo] = useState([]);



  useEffect(() => {
    axios.get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
      .then((response) => {
        setRepo(response.data);

      });
  }, []);


  return (
    <>
      { repo.length === 0 ? '' :
        <>
          <Section>
            <Content>
              <Header serial={repo.header.serial}
                number={repo.header.number}
                buyer={repo.header.buyer}
                price={(repo.header.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                currency={repo.header.currency}
                createdAt={repo.header.createdAt}
                status={repo.header.status}
                companyName={repo.header.contact.name}
                companyEmail={repo.header.contact.email}
                companyPhone={repo.header.contact.phone}
                companyFax={repo.header.contact.fax}
              />
              <Supplier
                code={repo.supplier.code}
                name={repo.supplier.name}
                readAt={repo.supplier.readAt}
                lastReplyAt={(repo.supplier.lastReplyAt).replace('-', ' ')}
                typeDocument={repo.supplier.document.type}
                valueDocument={repo.supplier.document.value}
                address={repo.supplier.address}
                fullName={repo.supplier.contact.name}
                email={repo.supplier.contact.email}
                fax={repo.supplier.contact.fax}
                phone={repo.supplier.contact.phone}
              />
              <CardContent>
                <Title5>
                  <IconCircleDown><FontAwesomeIcon icon={faChevronCircleDown}></FontAwesomeIcon></IconCircleDown>
                 Addresses
              </Title5>
              </CardContent>
              <Flex>

                {repo.addresses.map((repo, index) => {
                  return <Card key={index}
                    label={repo.label}
                    name={repo.name}
                    code={repo.code}
                    address={repo.address}
                    contactName={repo.contact.name}
                    contactEmail={repo.contact.email}
                    contactPhone={repo.contact.phone}
                    contactFax={repo.contact.fax}

                  />
                })}
              </Flex>
            </Content>
          </Section>
        </>

      }

    </>

  );


}

