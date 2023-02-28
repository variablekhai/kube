import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: "50%" }}>
      <Box sx={{ display: "flex", flexDirection:"column", width: '100%' }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
        <LinearProgress variant="determinate" {...props} sx={{ borderRadius: 1}}/>
      </Box>
    </Box>
  );
}