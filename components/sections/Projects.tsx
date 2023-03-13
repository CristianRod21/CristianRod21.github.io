import { Box, Container, Grid, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation';

export default function Projects() {
    const { t } = useTranslation('common');
    
    const projects = t('projectsSection.projects', {}, { returnObjects: true }) as Array<any>;
    
    return (
        <Container maxWidth="lg">
        <Grid container columnSpacing={5} minHeight='80vh'>
            <Grid item xs={12}>
              <Typography variant='body1' fontWeight={'bold'}>
                {t('projectsSection.subtitle')}
              </Typography>
              <Typography variant='h4' color='primary' fontWeight={'bold'}>
              {t('projectsSection.title')}
              </Typography>
              <Typography variant='body1' fontWeight={'light'} gutterBottom>
              {t('projectsSection.description')}
              </Typography>
            </Grid>
  
            {projects.map((project: any) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', borderRadius: '0.875rem', p: 10}}>
                    <Typography variant='h5' fontWeight={'bold'}>
                      {project.title}
                    </Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Container>
    )
}