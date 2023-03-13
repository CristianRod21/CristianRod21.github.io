import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import theme from '../../theming/theme'
import useTranslation from 'next-translate/useTranslation'

export default function About() {

    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const { t } = useTranslation('common');

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Container maxWidth="lg">
            <Grid container rowSpacing={1} columnSpacing={2} minHeight={'80vh'}>
                <Grid item xs={12}>
                    <Typography variant='body1' fontWeight={'bold'}>
                       {t('aboutSection.subtitle')}
                    </Typography>
                    <Typography variant='h4' color='primary' fontWeight={'bold'}>
                    {t('aboutSection.title')}
                    </Typography>
                    <Typography variant='body1' fontWeight={'light'} gutterBottom>
                    {t('aboutSection.description')}
                    </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation={isMdUp ? 'vertical' : 'horizontal'}>
                        <Tab label={t('aboutSection.tabs.softwareEngenieer.title')} />
                        <Tab label={t('aboutSection.tabs.machineLearning.title')} />
                    </Tabs>
                </Grid>
                <Grid item xs={0} sm={0} md={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ minHeight: '350px' }}>
                    {
                        value === 0 && <Box sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', borderRadius: '0.875rem', minHeight: '50%' }}>
                        </Box>
                    }
                    {
                        value === 1 && <Box sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 5%)', borderRadius: '0.875rem', minHeight: '50%' }}>
                        </Box>
                    }
                </Grid>
            </Grid>
        </Container>
    )
}