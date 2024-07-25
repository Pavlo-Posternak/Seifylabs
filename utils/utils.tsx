
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