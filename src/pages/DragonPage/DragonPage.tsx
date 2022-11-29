import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, useMediaQuery } from '@material-ui/core';
import DragonBg1 from 'assets/images/DragonBg1.svg';
import DragonBg2 from 'assets/images/DragonBg2.svg';
import DragonLairMask from 'assets/images/DragonLairMask.svg';
import DragonAlert from './DragonAlert';
import DragonsLair from './DragonsLair';
import DragonsSyrup from './DragonsSyrup';
import 'pages/styles/dragon.scss';
import { useTranslation } from 'react-i18next';
import AdsSlider from 'components/AdsSlider';

const DragonPage: React.FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('xs'));
  const { t } = useTranslation();
  //showing old dragons lair until we're ready to deploy
  const showOld = true;
  const showNew = true;

  return (
    <Box width='100%' mb={3}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          {showNew && (
            <Box className='dragonWrapper'>
              <Box className='dragonBg'>
                <img src={DragonBg2} alt='Dragon Lair' />
              </Box>
              <img
                src={DragonLairMask}
                alt='Dragon Mask'
                className='dragonMask'
              />
              <Box className='dragonTitle'>
                <h5>{t('newDragonLair')}</h5>
                <small>{t('dragonLairTitle')}</small>
              </Box>
              <DragonsLair isNew={true} />
            </Box>
          )}
          {showOld && (
            <Box className='dragonWrapper' mt='10px'>
              <Box className='dragonBg' style={{ maxHeight: 170 }}>
                <img src={DragonBg2} alt='Dragon Lair' />
              </Box>
              <img
                src={DragonLairMask}
                alt='Dragon Mask'
                className='dragonMask'
              />
              <Box className='dragonTitle' width='85%'>
                <h5>{t('dragonLair')}</h5>
                <small>{t('oldDragonLairTitle')}</small>
              </Box>
              <DragonsLair isNew={false} />
            </Box>
          )}
          <Box maxWidth={isMobile ? '320px' : '352px'} margin='16px auto 0'>
            <AdsSlider sort='dragons' />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box className='dragonWrapper'>
            <Box className='dragonBg'>
              <img src={isMobile ? DragonBg2 : DragonBg1} alt='Dragon Syrup' />
            </Box>
            <Box className='dragonTitle'>
              <h5>{t('dragonSyrup')}</h5>
              <small>{t('dragonSyrupTitle')}</small>
            </Box>
            <DragonsSyrup />
          </Box>
        </Grid>
      </Grid>
      {isMobile ? (
        <Box className='flex justify-center' mt={2}>
          <div
            className='_0cbf1c3d417e250a'
            data-zone='568de4b313b74ec694986be82e600aa6'
            style={{
              width: 320,
              height: 50,
              display: 'inline-block',
              margin: '0 auto',
            }}
          />
        </Box>
      ) : (
        <>
          <Box className='flex justify-center' mt={2}>
            <div
              className='_0cbf1c3d417e250a'
              data-zone='5545e36b39a24be28cb2ca0095bb4ce1'
              style={{
                width: 728,
                height: 90,
                display: 'inline-block',
                margin: '0 auto',
              }}
            />
          </Box>
          <Box className='flex justify-center' mt={2}>
            <div
              className='_0cbf1c3d417e250a'
              data-zone='906ff59e07f044ecb8fbf6f8237e1d2e'
              style={{
                width: 970,
                height: 90,
                display: 'inline-block',
                margin: '0 auto',
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default DragonPage;
