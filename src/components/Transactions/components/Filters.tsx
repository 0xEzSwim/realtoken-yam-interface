import React, { FC } from 'react';

import { Button, Group, NativeSelect, Space, Text } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { PRICE_PERIOD } from 'src/components/Transactions/Types';
import { PropertiesToken } from 'src/types/PropertiesToken';

interface FiltersProps {
  propertiesToken: PropertiesToken[];
  tokenFilterStates: Map<string, boolean>;
  startDate: Date | null;
  endDate: Date | null;
  pricePeriod: string;
  handlePricePeriodFilter: (period: string) => void;
  handleTokenFilter: (contractAddress: string) => void;
  handleStartDateFilter: (newDate: Date | null) => void;
  handleEndDateFilter: (newDate: Date | null) => void;
}

export const Filters: FC<FiltersProps> = ({
  propertiesToken,
  tokenFilterStates,
  startDate,
  endDate,
  pricePeriod,
  handleTokenFilter,
  handleStartDateFilter,
  handleEndDateFilter,
  handlePricePeriodFilter,
}) => {
  const onPeriodChange = (period: string) => {
    console.log(period);
    handlePricePeriodFilter(period);
  };

  return (
    <>
      <Group position={'left'}>
        <Text color={'dimmed'}>{'Du'}</Text>
        <DateInput
          value={startDate}
          onChange={handleStartDateFilter}
          minDate={new Date(1693526400000)}
          maxDate={endDate ?? new Date()}
          placeholder={'Date début'}
          clearable={true}
        />
        <Text color={'dimmed'}>{'à'}</Text>
        <DateInput
          value={endDate}
          onChange={handleEndDateFilter}
          minDate={startDate ?? new Date(1693526400000)}
          maxDate={new Date()}
          placeholder={'Date fin'}
          clearable={true}
        />
        <Text fz={'sm'} color={'dimmed'}>
          {'Evolution des prix'}
        </Text>
        <NativeSelect
          value={pricePeriod}
          onChange={(event) => onPeriodChange(event.currentTarget.value)}
          data={[
            { value: PRICE_PERIOD['24h'], label: '24h %' },
            { value: PRICE_PERIOD['7d'], label: '7d %' },
            { value: PRICE_PERIOD['30d'], label: '30d %' },
          ]}
        />
      </Group>
      <Space h={'xs'}></Space>
      <Group position={'left'}>
        {propertiesToken.map((token) => (
          <Button
            key={token.contractAddress}
            onClick={() => handleTokenFilter(token.contractAddress)}
            color={
              tokenFilterStates.get(token.contractAddress) ? 'blue' : 'gray'
            }
          >
            {token.shortName}
          </Button>
        ))}
      </Group>
    </>
  );
};
