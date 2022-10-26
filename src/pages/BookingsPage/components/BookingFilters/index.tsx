import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiltersSection from "./components/FiltersSection";
const BookingFilters = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FiltersSection />
      </AccordionDetails>
    </Accordion>
  );
};

export default BookingFilters;
