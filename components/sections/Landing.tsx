import { Box, Button, Container, Link, Typography } from '@mui/material'
import theme from '../../theming/theme';
import {
    useTranslation,
} from "next-export-i18n";

export default function Landing() {
    const { t } = useTranslation('common');

    return (
        <Container maxWidth="lg" id="landing">
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: 'primary',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'left',
                    minHeight: '100vh',
                }}
            >
                <Box display="flex" flexDirection={'row'} gap={20}>
                    <Box>
                        <Typography variant='h4' color='secondary' fontWeight={'bold'}>
                            {t('landingSection.greeting')}
                        </Typography>
                        <Typography sx={{ pt: theme.spacing(1), pb: theme.spacing(1) }} variant='h2' color='primary' fontWeight={'bold'}>
                            {t('landingSection.name')}
                        </Typography>
                        <Typography variant='body1' fontWeight={'bold'} color="secondary" gutterBottom>
                            {t('landingSection.description')}
                        </Typography>
                        <Box sx={{ pt: 1 }}>
                            <Button variant='contained' size="large" sx={{ borderRadius: '0.875rem' }}>
                                <Link href={t('landingSection.link.ref')} color='secondary' underline={'none'}>
                                    {t('landingSection.link.title')}
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Container>
    )
}