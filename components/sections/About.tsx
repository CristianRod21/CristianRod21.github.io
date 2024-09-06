import { Box, Container, Grid, Tab, Tabs, Typography, Paper, Chip, Avatar, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import theme from '../../theming/theme'
import {
    useTranslation,
} from "next-export-i18n";

function AvatarChips({ label, src, alt }: { label: string, src: string, alt: string }) {
    return (
        <Chip
            avatar={<Avatar alt={alt} src={src} />}
            label={label}
            variant='outlined'
            sx={{ p: 0.5, m: 0.5 }}
        />
    );
}

function TabContent({ localePrefix }: { localePrefix: string }) {

    const { t } = useTranslation('common');

    const technologies = t(`aboutSection.tabs.${localePrefix}.technologies`, {}, { returnObjects: true }) as Array<any>;

    return (
        <Paper sx={{ borderRadius: '0.875rem', display: 'flex', justifyContent: 'center', alignItems: 'center', p:0.5, background: theme.palette.secondary.main,
            boxShadow: '-6px 4px 7px -1px rgba(57,62,70,0.75)',
        }}>
            <Paper sx={{ borderRadius: '0.875rem', background: 'white',  padding: 2 }}>
                <Typography variant='h4' fontWeight={'bold'} color="primary" gutterBottom>
                    {t('aboutSection.tabs.content.title')}
                </Typography>
                <Typography variant='h6' fontWeight={'bold'} color='secondary' gutterBottom>
                    {t(`aboutSection.tabs.${localePrefix}.subtitle`)}
                </Typography>
                <Typography variant='body1' fontWeight={'normal'}  color='secondary' gutterBottom>
                {t(`aboutSection.tabs.${localePrefix}.description1`)}
                </Typography>
                <Typography variant='body1' fontWeight={'normal'}  color='secondary'gutterBottom>
                {t(`aboutSection.tabs.${localePrefix}.description2`)}
                </Typography>
                <Typography variant='body1' color='primary' fontWeight={'bold'} gutterBottom>
                    {t('aboutSection.tabs.content.technologyStack')}
                </Typography>
                <Box>
                    {technologies.map(item => {
                        return (
                            <AvatarChips key={`tab-{${item.label}}`} label={item.label} src={item.src} alt={item.alt} />
                        )
                    })}
                </Box>
            </Paper>
        </Paper>
    )
}


export default function About() {

    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const { t } = useTranslation('common');


    const [value, setValue] = useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box display='flex' flexDirection={'column'} alignItems='center' minHeight={'100vh'} justifyContent='center'  sx={{backgroundColor: theme.palette.background.default, p:0}} id="about" >
            <Grid container rowSpacing={0} columnSpacing={2}  maxWidth={'lg'} padding={2}>
                <Grid item xs={12}>
                    <Typography variant='body1' fontWeight={'bold'} gutterBottom>
                        {t('aboutSection.subtitle')}
                    </Typography>
                    <Typography variant='h4' color='primary' fontWeight={'bold'} gutterBottom>
                        {t('aboutSection.title')}
                    </Typography>
                    <Typography variant='body1' fontWeight={'regular'} gutterBottom>
                        {t('aboutSection.description')}
                    </Typography>
                    {/* <Trans
                        i18nKey="common:aboutSection.description"
                        components={{
                            bold: <Typography variant='body1' fontWeight={'bold'} display="inline" color='primary' />,
                            boldY: <Typography variant='body1' fontWeight={'bold'} display="inline" color='secondary' />,
                        }}
                    /> */}

                </Grid>
                <Grid item sm={12} md={5}>
                    <Tabs value={value} onChange={handleChange} aria-label="stacks" orientation={isMdUp ? 'vertical' : 'horizontal'}>
                        <Tab label={t('aboutSection.tabs.softwareEngineer.title')}/>
                        <Tab label={t('aboutSection.tabs.machineLearning.title')} />
                    </Tabs>
                </Grid>
                <Grid item xs={0} sm={0} md={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ minHeight: '60vh' }}>
                    {
                        value === 0 && (
                            <TabContent localePrefix='softwareEngineer' />)
                    }
                    {
                        value === 1 && (
                            <TabContent localePrefix='machineLearning' />
                            )
                    }
                </Grid>
            </Grid>
        </Box>
    )
}