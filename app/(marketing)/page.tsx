'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import {
  FiBox,
  FiGrid,
  FiSearch,
  FiSmile,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import faq from '#data/faq'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Hero
            id="home"
            justifyContent="center"
            px="0"
            textAlign="center"
            titleAlign="center"
            fontSize={['3xl', '4xl', '5xl']}
            title={<FallInPlace>Sell solutions, not SKUs</FallInPlace>}
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Maximize revenue and margin by unlocking the full value of your
                offering for every customer. Product intelligence at your
                reps&apos; fingertips.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup
                spacing={4}
                alignItems="center"
                justifyContent="center"
                mt={8}
              >
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZPSP0Hrfia2UxPBPJdfpV7qmC1jGHrTVM9c7nrQYnKTASv7jMbiyqhay3JJqxxK9Vg3K8k9Vm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="5"
        features={[
          {
            title: 'Higher Revenue',
            icon: FiTrendingUp,
            description:
              'Reps close higher-value deals when they have product intelligence.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Better Margins',
            icon: FiThumbsUp,
            description:
              'Surface preferred and complementary products to maximize profit per sale.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Faster Sales',
            icon: FiSearch,
            description:
              'Reps find answers instantly instead of waiting on product experts.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Expert Time Freed',
            icon: FiSmile,
            description:
              'Product experts focus on strategy instead of answering the same questions.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  return (
    <Box>
      {/* The Problem Section */}
      <Container
        maxW="container.xl"
        minH={['auto', null, '90vh']}
        display="flex"
        alignItems="center"
        py={[10, 16]}
      >
        <VStack
          alignItems="center"
          spacing={[6, 8, 10]}
          textAlign="center"
          width="100%"
        >
          <Heading as="h2" fontSize={['3xl', null, '5xl']} fontWeight="bold">
            THE PROBLEM
          </Heading>
          <Text
            color="muted"
            fontSize={['2xl', '3xl', '4xl']}
            maxW="900px"
            fontWeight="medium"
          >
            You carry the products and expertise to win every sale — but without
            a way to scale it, customers only see a fraction of your value.
          </Text>
          <SimpleGrid columns={[1, null, 3]} spacing={8} width="100%" pt={8}>
            <Box
              p={10}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              minH={['200px', '250px', '300px']}
              display="flex"
              flexDirection="column"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={['xl', '2xl']}
                mb={4}
                color="primary.500"
              >
                Offerings evolve, but your systems do not
              </Text>
              <Text color="muted" fontSize={['md', 'lg']}>
                Spreadsheets, ERPs, and PIMs are limited to pre-configured
                categories. New product lines and strategies can't be
                accommodated.
              </Text>
            </Box>

            <Box
              p={10}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              minH={['200px', '250px', '300px']}
              display="flex"
              flexDirection="column"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={['xl', '2xl']}
                mb={4}
                color="primary.500"
              >
                Reps can't sell what they don't know
              </Text>
              <Text color="muted" fontSize={['md', 'lg']}>
                Without easy access to the whole offering, sellers spend hours
                searching or default to selling only what they know.
              </Text>
            </Box>

            <Box
              p={10}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              minH={['200px', '250px', '300px']}
              display="flex"
              flexDirection="column"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={['xl', '2xl']}
                mb={4}
                color="primary.500"
              >
                Product experts are swamped with requests
              </Text>
              <Text color="muted" fontSize={['md', 'lg']}>
                Answers buried in emails and calls resurface again and again.
                Experts field nonstop urgent asks.
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Our Solution Section */}
      <Container
        maxW="container.xl"
        minH={['auto', null, '90vh']}
        display="flex"
        alignItems="center"
        py={[10, 16]}
      >
        <VStack
          alignItems="center"
          spacing={[6, 8, 10]}
          textAlign="center"
          width="100%"
        >
          <Heading as="h2" fontSize={['3xl', null, '5xl']} fontWeight="bold">
            OUR SOLUTION
          </Heading>
          <Text
            color="muted"
            fontSize={['2xl', '3xl', '4xl']}
            maxW="900px"
            fontWeight="medium"
          >
            Maximize revenue and margin by unlocking the full value of your
            offering for every customer.
          </Text>
          <SimpleGrid columns={[1, null, 3]} spacing={8} width="100%" pt={8}>
            <Box
              p={10}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              minH={['200px', '250px', '300px']}
              display="flex"
              flexDirection="column"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={['xl', '2xl']}
                mb={4}
                color="primary.500"
              >
                Dynamic Offering Management
              </Text>
              <Text color="muted" fontSize={['md', 'lg']}>
                Automatically curate and maintain offerings for product
                categories and strategic accounts. Define relationships at
                scale.
              </Text>
            </Box>

            <Box
              p={10}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              minH={['200px', '250px', '300px']}
              display="flex"
              flexDirection="column"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={['xl', '2xl']}
                mb={4}
                color="primary.500"
              >
                Product Intelligence On-Demand
              </Text>
              <Text color="muted" fontSize={['md', 'lg']}>
                Help sellers close higher-value deals faster. Surface
                alternatives, preferred, and complementary products.
              </Text>
            </Box>

            <Box
              p={10}
              borderWidth="1px"
              borderRadius="2xl"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              minH={['200px', '250px', '300px']}
              display="flex"
              flexDirection="column"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'xl',
              }}
            >
              <Text
                fontWeight="bold"
                fontSize={['xl', '2xl']}
                mb={4}
                color="primary.500"
              >
                Real-Time Collaboration
              </Text>
              <Text color="muted" fontSize={['md', 'lg']}>
                Enable seamless collaboration between product experts and
                sellers. Answers embedded in product data so every rep benefits
                instantly.
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="center"
          as="p"
        >
          Key Capabilities of DimB
        </Heading>
      }
      description={
        <>
          DimB delivers everything your revenue team needs to maximize customer
          value. Unlock complete offering visibility and empower your reps to
          close higher-value deals.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Flexible Data Model',
          icon: FiGrid,
          description:
            'Capture product relationships and commercial attributes that evolve with your business. No limitations from pre-configured systems.',
        },
        {
          title: 'Smart Offering Curation',
          icon: FiSearch,
          description:
            'Automatically curate offerings for product categories, key industries, and strategic accounts at scale.',
        },
        {
          title: 'Rep Enablement',
          icon: FiUserPlus,
          description:
            'Surface alternatives, preferred, and complementary products to help sellers close higher-value deals faster.',
        },
        {
          title: 'Expert Collaboration',
          icon: FiBox,
          description:
            'Enable real-time collaboration between product experts and sellers. Answers embedded in product data.',
        },
        {
          title: 'Revenue Intelligence',
          icon: FiTrendingUp,
          description:
            'Maximize deal value and profit margin with intelligent product recommendations tailored to each customer.',
        },
        {
          title: 'Instant Updates',
          icon: FiToggleLeft,
          description:
            'Product experts update information once, and every rep benefits instantly. No more duplicate questions.',
        },
      ]}
    />
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
