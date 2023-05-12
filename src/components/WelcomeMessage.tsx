import { Box } from "@mui/material"

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({ position, country = "Viet Nam" }:
  WelcomeMessageProps
) => {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  )
}

export default WelcomeMessage