import React, { FC } from 'react';

import { Group, Paper, Text, useMantineTheme } from '@mantine/core';

import { TransactionData } from 'src/components/Transactions/Types';

import { formatTimestamp, getTimestampRange } from '../Utils';
import DownloadButton from './DownloadButton';

interface TimeRangeProps {
  transactions: TransactionData[];
  createOffertransaction?: TransactionData[];
  children?: React.ReactNode;
}

export const TimeRange: FC<TimeRangeProps> = ({
  transactions,
  children,
  createOffertransaction,
}) => {
  const theme = useMantineTheme();

  return (
    <Group position={'left'}>
      <Paper
        shadow={'xs'}
        p={'xs'}
        withBorder={theme.colorScheme === 'dark' ? true : false}
        sx={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : undefined,
        }}
      >
        <Text fw={600} size={'sm'}>
          {formatTimestampRange(transactions)}
        </Text>
      </Paper>
      <Paper
        shadow={'xs'}
        p={'xs'}
        withBorder={theme.colorScheme === 'dark' ? true : false}
        sx={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : undefined,
        }}
      >
        <Text fw={600} size={'sm'}>
          {formatRange(transactions)}
        </Text>
      </Paper>
      {children}
      <DownloadButton transactions={transactions}></DownloadButton>
    </Group>
  );
};

function formatTimestampRange(transactions: TransactionData[]): string {
  if (transactions.length === 0) {
    return '';
  }

  const { firstTimestamp, lastTimestamp } = getTimestampRange(transactions);

  if (!firstTimestamp || !lastTimestamp) return '';

  return (
    'Du ' +
    formatTimestamp(firstTimestamp) +
    ' au ' +
    formatTimestamp(lastTimestamp)
  );
}

function formatRange(transactions: TransactionData[]): string {
  if (transactions.length === 0) {
    return '';
  }

  const { firstTimestamp, lastTimestamp } = getTimestampRange(transactions);

  if (!firstTimestamp || !lastTimestamp) return '';

  const duration = formatDuration(lastTimestamp - firstTimestamp);

  return duration;
}

function formatDuration(durationInSeconds: number): string {
  const days = Math.floor(durationInSeconds / 86400); // 1 jour = 86400 secondes
  const hours = Math.floor((durationInSeconds % 86400) / 3600); // 1 heure = 3600 secondes
  const minutes = Math.floor((durationInSeconds % 3600) / 60); // 1 minute = 60 secondes

  const daysText = days > 0 ? `${days} jour${days !== 1 ? 's ' : ' '}` : ' ';
  const hoursText = hours > 0 ? `${hours}h` : '';
  const minutesText = minutes > 0 ? `${minutes}m` : '';

  const formattedDuration = [daysText, hoursText, minutesText]
    .filter(Boolean)
    .join(' ');

  return formattedDuration || "Moins d'une minute";
}
