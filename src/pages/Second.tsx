import { Paper, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function SecondPage() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10, px: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardSection />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardSection />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <CardSection />
        </Grid>
      </Grid>
    </Box>
  );
}

function CardSection() {
  return (
    <Paper sx={{ minHeight: "150px", padding: 2 }}>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
        praesentium.
      </Typography>
    </Paper>
  );
}

export default SecondPage;
