import { TFunction } from 'react-i18next';

import { Offer } from 'src/types/offer';
import { OFFER_TYPE } from 'src/types/offer/OfferType';

import { OfferData } from './Types';

export function mapOfferToOfferData(offer: Offer): OfferData {
  return {
    id: offer.offerId,
    forSaleToken: offer.offerTokenName,
    forSaleTokenAddress: offer.offerTokenAddress,
    purchaseToken: offer.buyerTokenName,
    purchaseTokenAddress: offer.buyerTokenAddress,
    launchDate: offer.sellDate,
    creatorName: offer.sellerName,
    creatorAddress: offer.sellerAddress,
    siteLocation: offer.miningSite,
    electricityPrice: offer.electricityPrice,
    initialSellingPrice: offer.officialPrice,
    requestedSellingPrice: offer.offerPrice,
    quantityAvailable: parseFloat(offer.amount),
    balanceWallet: offer.balanceWallet
      ? parseFloat(offer.balanceWallet)
      : undefined,
    image: '', // Vous devrez spécifier l'image appropriée ici
    type:
      offer.offerTokenType === 1 || offer.offerTokenType === 0
        ? OFFER_TYPE.SELL
        : offer.offerTokenType === 2
        ? OFFER_TYPE.BUY
        : OFFER_TYPE.EXCHANGE,
  };
}

export function mapColumnLabels(
  offerType: OFFER_TYPE,
  t: TFunction<'buy', 'list'>
): { [key: string]: string } {
  return {
    creatorName:
      offerType === OFFER_TYPE.SELL
        ? t('sellerName')
        : offerType === OFFER_TYPE.BUY
        ? t('buyerName')
        : t('TraderName'),
    requestedSellingPrice:
      offerType === OFFER_TYPE.SELL
        ? t('sellerPrice')
        : offerType === OFFER_TYPE.BUY
        ? t('buyerPrice')
        : t('exchangePrice'),
    purchaseToken:
      offerType === OFFER_TYPE.SELL
        ? t('sellForToken')
        : offerType === OFFER_TYPE.BUY
        ? t('buyForToken')
        : t('exchangeForToken'),
    quantityAvailable:
      offerType === OFFER_TYPE.SELL
        ? t('sellerAmount')
        : offerType === OFFER_TYPE.BUY
        ? t('buyerAmount')
        : t('exchangeAmount'),
  };
}

export function columnLabel(
  key: string,
  offerType: OFFER_TYPE,
  t: TFunction<'buy', 'list'>
): string {
  const columnLabels: { [key: string]: string } = mapColumnLabels(offerType, t);

  return columnLabels[key];
}

export function getOfferColor(offer: OfferData) {
  return offer.type === OFFER_TYPE.BUY
    ? 'green'
    : offer.type === OFFER_TYPE.EXCHANGE
    ? 'orange'
    : 'red';
}

export function truncateInMiddle(inputString: string): string {
  if (inputString.length <= 7) {
    return inputString; // No need to truncate
  }

  const startLength = 4;
  const endLength = 3;
  const beginning = inputString.slice(0, startLength);
  const end = inputString.slice(-endLength);

  return beginning + '...' + end;
}
