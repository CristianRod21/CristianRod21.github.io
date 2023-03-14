import { Box, Container, Grid, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation';
import theme from '../../theming/theme';

export default function Projects() {
  const { t } = useTranslation('common');

  const projects = t('projectsSection.projects', {}, { returnObjects: true }) as Array<any>;

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={0} columnSpacing={2} maxWidth={'lg'} padding={2}>
        <Grid item xs={12}>
          <Typography variant='body1' fontWeight={'bold'} gutterBottom>
            {t('projectsSection.subtitle')}
          </Typography>
          <Typography variant='h4' color='primary' fontWeight={'bold'} gutterBottom>
            {t('projectsSection.title')}
          </Typography>
          <Typography variant='body1' fontWeight={'normal'}>
            {t('projectsSection.description')}
          </Typography>
        </Grid>
        {/* {projects.map((project: any) => {
          return (
            <Grid item xs={12} sm={6} md={4} sx={{
              borderRadius: '0.875rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: theme.palette.secondary.main,
              boxShadow: '-6px 4px 7px -1px rgba(57,62,70,0.75)'
            }}>
                <Box sx={{ borderRadius: '0.875rem', background: 'white' }}>
                  <Typography variant='h4' fontWeight={'bold'} color="primary" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant='h6' fontWeight={'bold'} color='secondary' gutterBottom>
                    {/* {t(`aboutSection.tabs.${localePrefix}.subtitle`)} }
                  </Typography>
                  <Typography variant='body1' fontWeight={'normal'} color='secondary' gutterBottom>
                    {/* {t(`aboutSection.tabs.${localePrefix}.description1`)} }
                  </Typography>
                  <Typography variant='body1' fontWeight={'normal'} color='secondary' gutterBottom>
                    {/* {t(`aboutSection.tabs.${localePrefix}.description2`)} }
                  </Typography>
                  <Typography variant='body1' color='primary' fontWeight={'bold'} gutterBottom>
                    {/* {t('aboutSection.tabs.content.technologyStack')} }
                  </Typography>
                  {/* <Box>
                    {technologies.map(item => {
                      return (
                        <AvatarChips label={item.label} src={item.src} alt={item.alt} />
                      )
                    })}
                  </Box> }
                </Box>
            </Grid>
          )
        })} */}
      </Grid>
    </Container>
  )
}