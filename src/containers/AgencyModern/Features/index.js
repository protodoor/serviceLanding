import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/ContainerTwo';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion';
import { Icon } from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import SectionWrapper, { ContentWrapper } from './features.style';
import data from 'common/data/AgencyModern';

const Features = () => {
  const Data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "image/agencyModern/features/feature.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      agencyModernJson {
        accordion {
          id
          title
          description
        }
      }
    }
  `);

  return (
    <SectionWrapper id="feature">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image
              fluid={
                (Data.image1 !== null) | undefined
                  ? Data.image1.childImageSharp.fluid
                  : {}
              }
              src={Data.image1.childImageSharp.fluid.src}
              objectFit="contain"
              alt="Feature Image 1"
            />
          </div>
          <div className="content">
            <Heading content="Meet our exciting features that make you wow 😮" />
            <Text content="Build an incredible workplace and grow your business with all-in-one platform with amazing contents." />
            <Accordion>
              <Fragment>
                {data.accordion.map((item, index) => (
                  <AccordionItem key={index}>
                    <Fragment>
                      <AccordionTitle>
                        <Fragment>
                          <Heading as="h4" content={item.title} />
                          <IconWrapper>
                            <OpenIcon>
                              <Icon icon={thinRight} size={18} />
                            </OpenIcon>
                            <CloseIcon>
                              <Icon icon={thinDown} size={18} />
                            </CloseIcon>
                          </IconWrapper>
                        </Fragment>
                      </AccordionTitle>
                      <AccordionBody>
                        <Text content={item.description} />
                      </AccordionBody>
                    </Fragment>
                  </AccordionItem>
                ))}
              </Fragment>
            </Accordion>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
