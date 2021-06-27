import { handleShareTransfer } from './yVault';
import { Transfer } from '../../generated/nativeBadgerSett/V1Contract';
import { sgGetOrCreateAccount, sgGetOrCreateHarvest } from '../utils/helpers/SG_network_helpers';
import { BIGINT_ZERO } from '../utils/constants';


export function wrappedHandleShareTransfer(event: Transfer): void {

    // This is the main function of yVault, handle all the processing here
    
    let transactionId = event.address
        .toHexString()
        .concat('-')
        .concat(event.transaction.hash.toHexString())
        .concat('-')
        .concat(event.logIndex.toString());
    
    let vault = sgGetOrCreateHarvest(event.address.toHexString()); //getOrCreateVault(event.address);
    let fromAccount = sgGetOrCreateAccount(event.params.from.toHexString());
    let toAccount = sgGetOrCreateAccount(event.params.to.toHexString());
    //let underlyingToken = sgGetOrCreateToken(Address.fromString(vault.underlyingToken));
    //let shareToken = getOrCreateToken(Address.fromString(vault.shareToken));
    
    // let amount: BigInt;
    
    // if (vault.totalSupply != BIGINT_ZERO) {
    //     amount = vault.vaultBalance.times(event.params.value).div(vault.totalSupply);
    // } else {
    //     amount = event.params.value
    //     .times(vault.pricePerFullShareRaw)
    //     .div(BigInt.fromI32(10).pow(18));
    // }
    // let toAccountBalance = getOrCreateAccountVaultBalance(
    //     toAccount.id.concat('-').concat(vault.id),
    // );
    // let fromAccountBalance = getOrCreateAccountVaultBalance(
    //     fromAccount.id.concat('-').concat(vault.id),
    // );
    /*
    let transaction = getOrCreateTransaction(event.transaction.hash.toHexString());
    transaction.blockNumber = event.block.number;
    transaction.timestamp = event.block.timestamp;
    transaction.transactionHash = event.transaction.hash;
    transaction.save();
    
    vault.transaction = transaction.id;
    
    // Vault transfer between valid accounts
    if (
        event.params.from.toHexString() != ZERO_ADDRESS &&
        event.params.to.toHexString() != ZERO_ADDRESS
    ) {
        handleTransfer(event, amount, fromAccount.id, toAccount.id, vault, transactionId);
    
        // Update toAccount totals and balances
        toAccountBalance.account = toAccount.id;
        toAccountBalance.vault = vault.id;
        toAccountBalance.shareToken = vault.id;
        toAccountBalance.underlyingToken = vault.underlyingToken;
        toAccountBalance.netDepositsRaw = toAccountBalance.netDepositsRaw.plus(amount);
        toAccountBalance.shareBalanceRaw = toAccountBalance.shareBalanceRaw.plus(
        event.params.value,
        );
        toAccountBalance.totalReceivedRaw = toAccountBalance.totalReceivedRaw.plus(amount);
        toAccountBalance.totalSharesReceivedRaw = toAccountBalance.totalSharesReceivedRaw.plus(
        event.params.value,
        );
    
        toAccountBalance.netDeposits = toDecimal(
        toAccountBalance.netDepositsRaw,
        underlyingToken.decimals,
        );
        toAccountBalance.shareBalance = toDecimal(
        toAccountBalance.shareBalanceRaw,
        shareToken.decimals,
        );
        toAccountBalance.totalReceived = toDecimal(
        toAccountBalance.totalReceivedRaw,
        underlyingToken.decimals,
        );
        toAccountBalance.totalSharesReceived = toDecimal(
        toAccountBalance.totalSharesReceivedRaw,
        shareToken.decimals,
        );
    
        // Update fromAccount totals and balances
        fromAccountBalance.account = toAccount.id;
        fromAccountBalance.vault = vault.id;
        fromAccountBalance.shareToken = vault.id;
        fromAccountBalance.underlyingToken = vault.underlyingToken;
        fromAccountBalance.netDepositsRaw = fromAccountBalance.netDepositsRaw.minus(amount);
        fromAccountBalance.shareBalanceRaw = fromAccountBalance.shareBalanceRaw.minus(
        event.params.value,
        );
        fromAccountBalance.totalSentRaw = fromAccountBalance.totalSentRaw.plus(amount);
        fromAccountBalance.totalSharesSentRaw = fromAccountBalance.totalSharesSentRaw.plus(
        event.params.value,
        );
    
        fromAccountBalance.netDeposits = toDecimal(
        fromAccountBalance.netDepositsRaw,
        underlyingToken.decimals,
        );
        fromAccountBalance.shareBalance = toDecimal(
        fromAccountBalance.shareBalanceRaw,
        shareToken.decimals,
        );
        fromAccountBalance.totalSent = toDecimal(
        fromAccountBalance.totalSentRaw,
        underlyingToken.decimals,
        );
        fromAccountBalance.totalSharesSent = toDecimal(
        fromAccountBalance.totalSharesSentRaw,
        shareToken.decimals,
        );
    
        toAccountBalance.save();
        fromAccountBalance.save();
    }
    
    // Vault deposit
    if (event.params.from.toHexString() == ZERO_ADDRESS) {
        handleDeposit(event, amount, toAccount.id, vault, transactionId);
        // We should fact check that the amount deposited is exactly the same as calculated
        // If it's not, we should use a callHandler for deposit(_amount)
    
        toAccountBalance.account = toAccount.id;
        toAccountBalance.vault = vault.id;
        toAccountBalance.shareToken = vault.id;
        toAccountBalance.underlyingToken = vault.underlyingToken;
        toAccountBalance.totalDepositedRaw = toAccountBalance.totalDepositedRaw.plus(amount);
        toAccountBalance.totalSharesMintedRaw = toAccountBalance.totalSharesMintedRaw.plus(
        event.params.value,
        );
        toAccountBalance.netDepositsRaw = toAccountBalance.netDepositsRaw.plus(amount);
        toAccountBalance.shareBalanceRaw = toAccountBalance.shareBalanceRaw.plus(
        event.params.value,
        );
    
        toAccountBalance.totalDeposited = toDecimal(
        toAccountBalance.totalDepositedRaw,
        underlyingToken.decimals,
        );
        toAccountBalance.totalSharesMinted = toDecimal(
        toAccountBalance.totalSharesMintedRaw,
        shareToken.decimals,
        );
        toAccountBalance.netDeposits = toDecimal(
        toAccountBalance.netDepositsRaw,
        underlyingToken.decimals,
        );
        toAccountBalance.shareBalance = toDecimal(
        toAccountBalance.shareBalanceRaw,
        shareToken.decimals,
        );
    
        vault.totalDepositedRaw = vault.totalDepositedRaw.plus(amount);
        vault.totalSharesMintedRaw = vault.totalSharesMintedRaw.plus(event.params.value);
    
        vault.totalDeposited = toDecimal(vault.totalDepositedRaw, underlyingToken.decimals);
        vault.totalSharesMinted = toDecimal(vault.totalSharesMintedRaw, shareToken.decimals);
    
        toAccountBalance.save();
    }
    
    // Vault withdraw
    if (event.params.to.toHexString() == ZERO_ADDRESS) {
        handleWithdrawal(event, amount, fromAccount.id, vault, transactionId);
        // We should fact check that the amount withdrawn is exactly the same as calculated
        // If it's not, we should use a callHandler for withdraw(_amount)
    
        fromAccountBalance.account = fromAccount.id;
        fromAccountBalance.vault = vault.id;
        fromAccountBalance.shareToken = vault.id;
        fromAccountBalance.underlyingToken = vault.underlyingToken;
        fromAccountBalance.totalWithdrawnRaw = fromAccountBalance.totalWithdrawnRaw.plus(
        amount,
        );
        fromAccountBalance.totalSharesBurnedRaw = fromAccountBalance.totalSharesBurnedRaw.plus(
        event.params.value,
        );
        fromAccountBalance.netDepositsRaw = fromAccountBalance.netDepositsRaw.minus(amount);
        fromAccountBalance.shareBalanceRaw = fromAccountBalance.shareBalanceRaw.minus(
        event.params.value,
        );
    
        fromAccountBalance.totalWithdrawn = toDecimal(
        fromAccountBalance.totalWithdrawnRaw,
        underlyingToken.decimals,
        );
        fromAccountBalance.totalSharesBurned = toDecimal(
        fromAccountBalance.totalSharesBurnedRaw,
        shareToken.decimals,
        );
        fromAccountBalance.netDeposits = toDecimal(
        fromAccountBalance.netDepositsRaw,
        underlyingToken.decimals,
        );
        fromAccountBalance.shareBalance = toDecimal(
        fromAccountBalance.shareBalanceRaw,
        shareToken.decimals,
        );
    
        vault.totalWithdrawnRaw = vault.totalWithdrawnRaw.plus(amount);
        vault.totalSharesBurnedRaw = vault.totalSharesBurnedRaw.plus(event.params.value);
    
        vault.totalWithdrawn = toDecimal(vault.totalWithdrawnRaw, underlyingToken.decimals);
        vault.totalSharesBurned = toDecimal(vault.totalSharesBurnedRaw, shareToken.decimals);
    
        fromAccountBalance.save();
    }
    
    vault.netDepositsRaw = vault.totalDepositedRaw.minus(vault.totalWithdrawnRaw);
    vault.totalActiveSharesRaw = vault.totalSharesMintedRaw.minus(
        vault.totalSharesBurnedRaw,
    );
    
    vault.netDeposits = toDecimal(vault.netDepositsRaw, underlyingToken.decimals);
    vault.totalActiveShares = toDecimal(vault.totalActiveSharesRaw, shareToken.decimals);
    
    vault.save();
    fromAccount.save();
    toAccount.save();
    }
    */
    // this function is the original yVault Function
    // so that people used to the old system can still use it.
    handleShareTransfer(event);
}