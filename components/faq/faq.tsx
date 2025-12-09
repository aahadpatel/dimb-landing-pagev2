import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently Asked Questions',
    description,
    items = [],
  } = props
  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} />

      <VStack spacing={4} align="stretch" maxW="900px" mx="auto">
        <Accordion allowToggle>
          {items?.map(({ q, a }, i) => {
            return <FaqItem key={i} question={q} answer={a} />
          })}
        </Accordion>
      </VStack>
    </Section>
  )
}

export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem
      border="1px"
      borderColor="gray.200"
      borderRadius="xl"
      mb={4}
      bg="white"
      boxShadow="md"
      _hover={{ boxShadow: 'lg' }}
      transition="all 0.2s"
    >
      <h2>
        <AccordionButton
          py={6}
          px={6}
          _hover={{ bg: 'gray.50' }}
          borderRadius="xl"
        >
          <Box
            flex="1"
            textAlign="left"
            fontWeight="bold"
            fontSize={['lg', 'xl']}
            color="#1c1e21"
          >
            {question}
          </Box>
          <AccordionIcon color="#1e3c72" boxSize={6} />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={6}
        px={6}
        pt={2}
        color="#1c1e21"
        fontSize={['md', 'lg']}
      >
        {answer}
      </AccordionPanel>
    </AccordionItem>
  )
}
