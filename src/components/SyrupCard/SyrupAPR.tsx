import React from 'react';
import { Box } from '@mui/material';
import { SyrupInfo } from 'types/index';
import { CurrencyLogo } from 'components';
import { getTokenAPRSyrup } from 'utils';
import { useTranslation } from 'next-i18next';
import { useActiveWeb3React } from 'hooks';
import { ChainId } from '@uniswap/sdk';
import { OLD_DQUICK, OLD_QUICK } from 'constants/v3/addresses';
import styles from 'styles/components/SyrupCard.module.scss';

const SyrupAPR: React.FC<{ syrup: SyrupInfo; dQUICKAPY: string }> = ({
  syrup,
  dQUICKAPY,
}) => {
  const { t } = useTranslation();
  const { chainId } = useActiveWeb3React();
  const chainIdToUse = chainId ? chainId : ChainId.MATIC;

  const isDQUICKStakingToken = syrup.stakingToken.equals(
    OLD_DQUICK[chainIdToUse],
  );

  return (
    <>
      <small className='text-success'>
        {getTokenAPRSyrup(syrup).toLocaleString('us')}%
      </small>
      {isDQUICKStakingToken && (
        <Box className={`${styles.syrupAPR} border-gray2`} gap='4px'>
          <CurrencyLogo currency={OLD_QUICK[chainIdToUse]} size={12} />
          <span>
            {dQUICKAPY}% <span className='text-hint'>{t('apy')}</span>
          </span>
        </Box>
      )}
    </>
  );
};

export default SyrupAPR;
