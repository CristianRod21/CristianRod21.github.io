import { Box, Container, Grid, Typography, Paper, Avatar, Chip } from '@mui/material'
import { useTranslation } from "next-export-i18n";
import theme from '../../theming/theme';
import Image from 'next/image';

export default function Projects() {
  const { t } = useTranslation('common');

  const projects = t('projectsSection.projects', {}, { returnObjects: true }) as Array<any>;

  return (
    <Box display='flex' flexDirection={'column'} alignItems='center' minHeight={'100vh'} justifyContent='center' id="projects" sx={{ backgroundColor: theme.palette.background.light }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
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
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Paper elevation={3} sx={{ 
                p: 0, 
                height: '100%', 
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                }
              }}>
                <Box sx={{ 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  backgroundColor: theme.palette.background.default 
                }}>
                  {project.image && (
                    <Box sx={{ mb: 2, position: 'relative', height: 200 }}>
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        layout="fill" 
                        objectFit="cover"
                        style={{ borderRadius: '4px' }}
                      />
                    </Box>
                  )}
                  <Typography color="primary" variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      {project.technologies && project.technologies.map((tech: string, index: number) => (
                        <Chip 
                          key={`${project.id}-${tech}-${index}`} 
                          label={tech} 
                          size="small" 
                          sx={{ mr: 0.5, mb: 0.5 }} 
                        />
                      ))}
                    </Box>
                    {project.githubLink && (
                    <Avatar 
                      alt={`Github link to ${project.githubLink}`} 
                      src="/icons/github.png" 
                      component="a" 
                      href={project.githubLink} 
                      target="_blank"
                      sx={{ 
                        width: 32, 
                        height: 32, 
                        transition: 'transform 0.2s',
                        '&:hover': { transform: 'scale(1.1)' }
                      }}
                    />
                    )}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}