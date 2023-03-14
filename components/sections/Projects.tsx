import { Box, Container, Grid, Typography, Paper, Avatar } from '@mui/material'
import {
  useTranslation,
} from "next-export-i18n";
import theme from '../../theming/theme';

export default function Projects() {
  const { t } = useTranslation('common');

  const projects = t('projectsSection.projects', {}, { returnObjects: true }) as Array<any>;

  return (
    <Box display='flex' flexDirection={'column'} alignItems='center' minHeight={'100vh'} justifyContent='center' id="projects">
      <Grid container maxWidth={'lg'} padding={2}>
        <Grid item xs={12}>
          <Typography variant='body1' fontWeight={'bold'} gutterBottom>
            {t('projectsSection.subtitle')}
          </Typography>

          <Typography variant='h4' color='primary' fontWeight={'bold'} gutterBottom>
            {t('projectsSection.title')}
          </Typography>
          <Typography variant='body1' fontWeight={'normal'} gutterBottom>
            {t('projectsSection.description')}
          </Typography>
        </Grid>
        <Grid container spacing={2} >
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Paper elevation={3} sx={{ p: 0.5, background: theme.palette.secondary.main, height: '100%' }}>
                <Box sx={{ p: 2, background: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  <Typography color="primary" variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {project.description}
                  </Typography>
                  <Avatar alt={`Github link to ${project.githubLink}`} src="/icons/github.png" component="a" href={project.githubLink} target="_blank" />


                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}