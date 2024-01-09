import { Flex, Text, Skeleton, ActionIcon, Title, Divider } from "@mantine/core";
import { IconError404, IconExclamationCircle, IconShoppingCart } from "@tabler/icons";
import { useRouter } from "next/router"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next";
import { OfferText } from "src/components/Offer/OfferText";
import { useOffer } from "src/hooks/offers/useOffer";
import { usePropertiesToken } from "src/hooks/usePropertiesToken";
import { PropertiesToken } from "src/types";
import { useModals } from '@mantine/modals';
import { useWeb3React } from "@web3-react/core";
import { Offer } from "src/types/offer";
import { useRefreshOffers } from "src/hooks/offers/useRefreshOffers";
import BigNumber from "bignumber.js";
import { PropertyCard } from "src/components/Offer/PropertyCard/PropertyCard";
import { ConnectedProvider } from "src/providers/ConnectProvider";
import classes from './Offer.module.css';

const ShowOfferPage: FC = () => {

    const router = useRouter();
    const { id } = router.query;

    const offerId: number = parseInt(id as string);

    const { account } = useWeb3React();
    const { offer, isLoading, hasError } = useOffer(offerId);

    const { refreshOffers } = useRefreshOffers(false);

    const { t } = useTranslation('modals', { keyPrefix: 'buy' });
    const { t: t2 } = useTranslation('modals');

    const modals = useModals();

    const [propertyTokens,setPropertyTokens] = useState<PropertiesToken[]>([]);
    const { getPropertyToken, propertiesIsloading } = usePropertiesToken();

    useEffect(() => {
        if(!offer || propertiesIsloading || propertyTokens.length > 0) return undefined;

        if(offer.buyerTokenType == 1){
            const token = getPropertyToken(offer.buyerTokenAddress);
            if(token) setPropertyTokens(prev => [...prev,token])
        }

        if(offer.offerTokenType == 1){
            const token = getPropertyToken(offer.offerTokenAddress);
            if(token) setPropertyTokens(prev => [...prev,token])
        }

    },[getPropertyToken, offer, propertiesIsloading, propertyTokens.length]);

    const onOpenWalletModal = useCallback(() => {
        modals.openContextModal('wallet', {
          title: <Title order={3}>{t2('wallet.title')}</Title>,
          innerProps: {},
        });
      }, [modals, t2]);
    
    const isAccountOffer: boolean = useMemo(() => {
    if(!offer || !account) return false;
        return offer.sellerAddress == account.toLowerCase()
    },[offer, account])

    const onOpenBuyModal = useCallback(
        (offer: Offer) => {
          modals.openContextModal('buyPermit', {
            title: <Title order={3}>{t2('buy.title')}</Title>,
            size: "lg",
            innerProps: {
              offer: offer,
              triggerTableRefresh: refreshOffers,
            },
        });
    },[modals, refreshOffers, t2]);

    return(
        <ConnectedProvider>
            <Flex direction={"column"} mt={"xl"} h={offer == undefined ? '100%': 'unset'}>
            { 
                isLoading || offer !== undefined ? (
                    <Flex gap={"md"}>
                        <Flex className={classes.container} direction={"column"} gap={"md"}>
                            <div className={classes.offerId}>
                                {offerId}
                            </div>
                            <Flex direction={"column"} gap={"md"}>
                                <OfferText
                                    title={t("offerTokenName")}
                                    value={offer?.offerTokenName}
                                />
                                <OfferText
                                    title={t("buyerTokenName")}
                                    value={offer?.buyerTokenName}
                                />
                                <OfferText
                                    title={t("sellerAddress")}
                                    value={offer?.sellerAddress}
                                />
                                <OfferText
                                    title={t("amount")}
                                    value={offer?.amount}
                                />
                                <Flex direction={"column"} gap={3}>
                                    <Text fw={700}>{"Price"}</Text>
                                    {   offer?.offerTokenName &&  offer.buyerTokenName && offer?.price ? 
                                            <Text>{`1 "${offer?.offerTokenName}" = ${offer?.price} "${offer.buyerTokenName}"`}</Text>
                                        : 
                                            <Skeleton height={25} width={400}/> 
                                    }
                                    {   offer?.offerTokenName &&  offer.buyerTokenName && offer?.price ? 
                                            <Text>{`1 "${offer.buyerTokenName}" = ${new BigNumber(1).dividedBy(offer?.price).toFixed(5)} ${offer?.offerTokenName}`}</Text>
                                        : 
                                            <Skeleton height={25} width={400}/> 
                                    }
                                </Flex>
                            </Flex>
                            <Divider />
                            <ActionIcon
                                color={'green'}
                                disabled={isAccountOffer || isLoading}
                                className={classes.buyButton}
                                onClick={() => account && offer ? onOpenBuyModal(offer) : onOpenWalletModal() }
                            >
                                { isAccountOffer ? 
                                    <Text fz={"sm"} style={{ textAlign: 'center' }} p={6}>{"Cannot buy your own offer"}</Text> 
                                    : 
                                    <IconShoppingCart size={24} aria-label={'Buy'} /> 
                                }
                            </ActionIcon>
                        </Flex>
                        <Flex direction={"column"} gap={"md"} align={"center"}>
                        { propertyTokens && offer && propertyTokens.length > 0 ? 
                            propertyTokens.map(token => <PropertyCard key={token.contractAddress} propertyToken={token} offer={offer}/>)
                            :
                            undefined
                        }
                        </Flex>
                    </Flex>
                )
                :
                (
                    <Flex
                        h={'100%'}
                        w={'100%'}
                        justify={'center'}
                        align={'center'}
                        direction={'column'}
                    >
                        {hasError ? (
                            <>
                            <IconExclamationCircle size={'200px'} color="#AE740A"/>
                            <Text size={'xl'}>{"An error hapenned while loading offer"}</Text>
                            </>
                        ):(
                            <>
                            <IconError404 size={'200px'} color="#AE740A"/>
                            <Text size={'xl'}>{"Offer don't exists"}</Text>
                            </>
                        )}
                        
                    </Flex>
                )
            }
            </Flex>
        </ConnectedProvider>
    )
}

export default ShowOfferPage;