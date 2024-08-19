import { ethers } from 'ethers';

export const formatWalletAddress = (address: string | undefined, length : number = 4) => {
    if (!address) return null;
    let prefix = 0;
    if (address.startsWith('0x'))
        prefix = 2;
    return address.substring(0, length + prefix) + "..." + address.substring(address.length - length);
}

export type ProjectType = {
    title: string,
    scope: string,
    token: string,
    wallet: string,
    address: string,
    amount: number,
    deliverable: string,
    deadline: string,
    id: string,
    status: string | null | undefined,
    payer: string | null | undefined,
    payee: string | null | undefined,
    payeeAddress: string | null | undefined
}

export const getSolanaProvider = () => {
    if ('phantom' in window) {
        const provider = window.phantom?.solana;
    
        if (provider?.isPhantom) {
            return provider;
        }
    }
    return null;
}

export const getEthereumProviderForPhantom = () => {
    if ('phantom' in window) {
        const provider = window.phantom?.ethereum;

        if (provider?.isPhantom) {
            return provider;
        }
    }
    return null;
}

export const connectPhantomETH = async () => {
    const provider = getEthereumProviderForPhantom();
    try {
        const accounts = await provider.request({method: 'eth_requestAccounts'});
        console.log("phantom accounts", accounts);
        return accounts;
    } catch (e) {
        console.log("User rejected the request!")
        return null;
    }
}

export const signinWithPhantom = async () => {
    const provider = getEthereumProviderForPhantom();
    try {
        const acc = await provider.request({method: 'personal_sign'});
        console.log("", acc);
    } catch (e) {
        console.log("User rejected the request!")
        return null;
    }
}