import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery
}

const DynamicHeading = ({gameQuery}: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={5} fontSize='50px'>{heading}</Heading>
  )
}

export default DynamicHeading