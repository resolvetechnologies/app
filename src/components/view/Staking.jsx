import Head from "next/head";
import { useState } from "react";
import { FaExternalLinkAlt, FaInfoCircle, FaArrowUp } from 'react-icons/fa'

export default function Staking() {
    const [showAccount, setShowAccount] = useState(false);
    const [showWalletConnect, setShowWalletConnect] = useState(false);
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
                <title>Pools | Resolve Technologies</title>
                <meta name="description" content="Stake your REMEDY and earn ongoing rewards" />
                <meta property="og:title" content="Resolve Technologies" />
                <meta property="og:description" content="Stake your REMEDY and earn ongoing rewards" />
                <meta property="og:type" content="website" />
                <link rel="icon" type="image/png" href="./assets/resolve.png" width="32" height="32" />
                <meta name="theme-color" content="#ffffff" />
                <link href="./js/@walletconnect/universal-provider.c2d3314e.js" rel="prefetch" />
                <link href="./js/timewarp-sc-artifacts.4d22dcfa.js" rel="prefetch" />
                <link href="./js/web3.a7a30909.js" rel="prefetch" />
                <link href="./css/app.510bac54.css" rel="preload" as="style" />
                <link href="./css/chunk-vendors.87364841.css" rel="preload" as="style" />
                <link href="./js/app.bec6661b.js" rel="modulepreload" as="script" />
                <link href="./js/chunk-vendors.f97c0358.js" rel="modulepreload" as="script" />
                <link href="./css/chunk-vendors.87364841.css" rel="stylesheet" />
                <link href="./css/app.510bac54.css" rel="stylesheet" />
                <link href="./css/pools.css" rel="stylesheet" type="text/css" />
            </Head>

            <div>
                <div id="app" data-v-app="">
                    <div data-v-6a3b02da="" className="page-private page-pools">
                        <nav data-v-dd08c964="" data-v-6a3b02da="" className="header">
                            <div data-v-dd08c964="" className="top-panel">
                                <a data-v-dd08c964="" href="./pools" className="logo">
                                    <span data-v-dd08c964="">Resolve Technologies</span>
                                </a>
                                <div data-v-dd08c964="" className="side-right">
                                    <div data-v-dd08c964="" className="header-nav menu">
                                        <a data-v-dd08c964="" href="./" className="active">Home</a>
                                        <a data-v-dd08c964="" aria-current="page" href="./pools" className="router-link-active router-link-exact-active">Pools</a>
                                        <a data-v-dd08c964="" href="" target="_blank">Docs</a>
                                    </div>
                                    {isWalletConnected ? (
                                        <div data-v-dd08c964="" className="address">
                                            <span data-v-4f50b036="" data-v-dd08c964="" className="tw-icon icon eth-icon icon eth-icon">
                                                <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.6" d="M8.19674 9.69342L0.400391 13.2366L8.19674 17.8509L15.9993 13.2366L8.19674 9.69342Z" fill="white"></path>
                                                    <path opacity="0.45" d="M0.400391 13.2366L8.19674 17.8509V0.296692L0.400391 13.2366Z" fill="white"></path>
                                                    <path opacity="0.8" d="M8.19727 0.296692V17.8509L15.9936 13.2366L8.19727 0.296692Z" fill="white"></path>
                                                    <path opacity="0.45" d="M0.400391 14.7187L8.19674 25.7033V19.3268L0.400391 14.7187Z" fill="white"></path>
                                                    <path opacity="0.8" d="M8.19727 19.3268V25.7033L15.9998 14.7187L8.19727 19.3268Z" fill="white"></path>
                                                </svg>
                                            </span>
                                            <span data-v-dd08c964="">0x389E...572C</span></div>
                                    ) : (
                                        <button data-v-58e1c1af="" data-v-dd08c964="" className="tw-button connect-btn connect-btn" loading="false" onClick={() => { setShowWalletConnect(true) }} >
                                            <span data-v-58e1c1af="" className="button-wrap">Connect Wallet</span>
                                        </button>
                                    )}
                                </div>
                                <button data-v-dd08c964="" className="mobile-menu-btn open-btn"></button>
                            </div>
                        </nav>
                        <div data-v-6a3b02da="" className="page-content">
                            <div data-v-6a3b02da="" className="container">
                                <h1 data-v-6a3b02da="">Pools</h1>
                                <div data-v-6a3b02da="" className="top-info">
                                    <div data-v-6a3b02da="" className="pool-filter">
                                        <div data-v-70bf3db1="" data-v-6a3b02da="" className="root tw-switch switch">
                                            <input data-v-70bf3db1="" role="checkbox" type="checkbox" />
                                        </div>
                                        <span data-v-6a3b02da="">View pools with already staked balances only</span>
                                    </div>
                                    {isWalletConnected ? (
                                        <div data-v-6a3b02da="" className="connect-wallet"></div>
                                    ) : (
                                        <div data-v-6a3b02da="" className="connect-wallet" onClick={() => { setShowWalletConnect(true) }}>
                                            <div className="icon" data-v-6a3b02da="">
                                                <img src="./static/images/pools/wallet.svg" alt="Connect Wallet" data-v-6a3b02da="" />
                                            </div>
                                            <div className="text" data-v-6a3b02da="">
                                                <div className="big-text" data-v-6a3b02da="">Connect your wallet</div>
                                                <div className="small-text" data-v-6a3b02da="">to view balances and start staking</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div data-v-6a3b02da="" className="blockchains">
                                    <div data-v-6a3b02da="" className="blockchain">
                                        <div data-v-6a3b02da="" className="description">
                                            <img data-v-6a3b02da="" src="./static/images/pools/gnosis.png" alt="Gnosis Chiado Network" />
                                            <span data-v-6a3b02da="">List of pools on the Gnosis Chiado Testnet</span>
                                        </div>
                                        {/* REMEDY */}
                                        <div data-v-25ed44a5="" data-v-6a3b02da="" className="pool">
                                            <div data-v-25ed44a5="" className="top-block">
                                                <div data-v-25ed44a5="" className="pool-icon">
                                                    <img data-v-25ed44a5="" src="./static/images/pools/remedy.png" alt="Pool Icon" />
                                                </div>
                                                <div data-v-25ed44a5="" className="pools-info">
                                                    <div data-v-25ed44a5="" className="stat pool-name">
                                                        <div data-v-25ed44a5="" className="label">Pool</div>
                                                        <div data-v-25ed44a5="" className="value">REMEDY
                                                            <a data-v-25ed44a5="" className="contract" href="https://gnosis-chiado.blockscout.com/address/0x035892f4eCc243D473d27a163BACbD3Abd067EE8" target="_blank" rel="noopener">
                                                                <span data-v-25ed44a5="">Contract</span>
                                                                <span data-v-4f50b036="" data-v-25ed44a5="" className="tw-icon blank blank">
                                                                    <FaExternalLinkAlt />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5="" className="stat pool-apy">
                                                        <div data-v-25ed44a5="" className="label">
                                                            <span data-v-25ed44a5="">APY</span>
                                                            <span data-v-4f50b036="" data-v-25ed44a5="" className="tw-icon icon icon has-tooltip" data-original-title="null">
                                                                <FaInfoCircle />
                                                            </span>
                                                        </div>
                                                        <div data-v-25ed44a5="" className="value">{14.11}%</div>
                                                    </div>
                                                    <div data-v-25ed44a5="" className="stat pool-tvl">
                                                        <div data-v-25ed44a5="" className="label">TVL</div>
                                                        <div data-v-25ed44a5="" className="value">{0} REMEDY
                                                            <span data-v-25ed44a5="" className="usd">${0}</span>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5="" className="stat pool-actions">
                                                        <div data-v-25ed44a5="" className="calculator-empty"></div>
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button active button active" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">
                                                                <div data-v-25ed44a5="" className="icon-btn"> Staking
                                                                    <span data-v-4f50b036="" data-v-25ed44a5="" className="tw-icon arrow arrow">
                                                                        <FaArrowUp />
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-25ed44a5="" className="bottom-block">
                                                <div data-v-25ed44a5="" className="action">
                                                    <div data-v-25ed44a5="" className="label">Wallet Balance</div>
                                                    <div data-v-25ed44a5="" className="value">{0.00} REMEDY</div>
                                                    <div data-v-25ed44a5="" className="buttons two">
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">Deposit</span>
                                                        </button>
                                                        <a data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button" href="#" target="_blank" rel="noopener" loading="false"><span data-v-58e1c1af="" className="button-wrap">Get REMEDY</span></a>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5="" className="action">
                                                    <div data-v-25ed44a5="" className="label">Already Staked</div>
                                                    <div data-v-25ed44a5="" className="value">{0.00} REMEDY</div>
                                                    <div data-v-25ed44a5="" className="buttons">
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">Withdraw</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5="" className="action">
                                                    <div data-v-25ed44a5="" className="label">Rewards</div>
                                                    <div data-v-25ed44a5="" className="value">{0.00} REMEDY</div>
                                                    <div data-v-25ed44a5="" className="buttons two">
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">Harvest</span>
                                                        </button>
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap"> Compound </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5="" className="action"></div>
                                            </div>
                                        </div>
                                        {/* REMEDY-WETH */}
                                        <div data-v-25ed44a5="" data-v-6a3b02da="" className="pool">
                                            <div data-v-25ed44a5="" className="top-block">
                                                <div data-v-25ed44a5="" className="pool-icon">
                                                    <img data-v-25ed44a5="" src="./static/images/pools/sushi-32x32.png" alt="Pool Icon" />
                                                </div>
                                                <div data-v-25ed44a5="" className="pools-info">
                                                    <div data-v-25ed44a5="" className="stat pool-name">
                                                        <div data-v-25ed44a5="" className="label">Pool</div>
                                                        <div data-v-25ed44a5="" className="value">REMEDY-WETH
                                                            <a data-v-25ed44a5="" className="contract" href="#" target="_blank" rel="noopener">
                                                                <span data-v-25ed44a5="">Contract</span>
                                                                <span data-v-4f50b036="" data-v-25ed44a5="" className="tw-icon blank blank">
                                                                    <FaExternalLinkAlt />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5="" className="stat pool-apy">
                                                        <div data-v-25ed44a5="" className="label">
                                                            <span data-v-25ed44a5="">APY</span>
                                                            <span data-v-4f50b036="" data-v-25ed44a5="" className="tw-icon icon icon has-tooltip" data-original-title="null">
                                                                <FaInfoCircle />
                                                            </span>
                                                        </div>
                                                        <div data-v-25ed44a5="" className="value">{16.93}%</div>
                                                    </div>
                                                    <div data-v-25ed44a5="" className="stat pool-tvl">
                                                        <div data-v-25ed44a5="" className="label">TVL</div>
                                                        <div data-v-25ed44a5="" className="value">
                                                            <div data-v-25ed44a5="">{0} REMEDY
                                                                <span data-v-25ed44a5="" className="usd">${0}</span>
                                                            </div>
                                                            <div data-v-25ed44a5="">{0.00} ETH
                                                                <span data-v-25ed44a5="" className="usd">${0}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5="" className="stat pool-actions">
                                                        <div data-v-25ed44a5="" className="calculator-empty"></div>
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button active button active" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">
                                                                <div data-v-25ed44a5="" className="icon-btn"> Staking
                                                                    <span data-v-4f50b036="" data-v-25ed44a5="" className="tw-icon arrow arrow">
                                                                        <FaArrowUp />
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-25ed44a5="" className="bottom-block">
                                                <div data-v-25ed44a5="" className="action">
                                                    <div data-v-25ed44a5="" className="label">Wallet Balance</div>
                                                    <div data-v-25ed44a5="" className="value">{0.00000000} LP REMEDY-WETH</div>
                                                    <div data-v-25ed44a5="" className="buttons two">
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">Deposit</span>
                                                        </button>
                                                        <a data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button" href="#" target="_blank" rel="noopener" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap" style={{ fontSize: "10px" }}>Get LP REMEDY-WETH</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5="" className="action">
                                                    <div data-v-25ed44a5="" className="label">Already Staked</div>
                                                    <div data-v-25ed44a5="" className="value">{0.00000000} LP REMEDY-WETH</div>
                                                    <div data-v-25ed44a5="" className="buttons">
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">Withdraw</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5="" className="action">
                                                    <div data-v-25ed44a5="" className="label">Rewards</div>
                                                    <div data-v-25ed44a5="" className="value">{0.00} REMEDY</div>
                                                    <div data-v-25ed44a5="" className="buttons two">
                                                        <button data-v-58e1c1af="" data-v-25ed44a5="" className="tw-button button button-transparent button button-transparent" disabled="" loading="false">
                                                            <span data-v-58e1c1af="" className="button-wrap">Harvest</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5="" className="action"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-1b22e25c="" data-v-6a3b02da="" className="footer">
                            <div data-v-1b22e25c="" className="copyright">
                                <span data-v-1b22e25c="">© </span>
                                2023 Resolve Technologies — All Rights Reserved
                            </div>
                            <div data-v-1b22e25c="" className="links">
                                <a data-v-1b22e25c="" href="./" className="">Home</a>
                                <a data-v-1b22e25c="" aria-current="page" href="./pools" className="router-link-active router-link-exact-active">Pools</a>
                                <a data-v-1b22e25c="" href="" target="_blank">Docs</a>
                            </div>
                        </div>
                    </div>
                    {isWalletConnected ? (
                        <>
                            {showAccount ? (
                                <div data-v-4e9c501c="" className="modal-stack">
                                    <div data-v-4e9c501c="" className="modal-container">
                                        <section data-v-26bfa802="" data-v-4e9c501c="" className="root tw-modal root account-details modal">
                                            <span data-v-4f50b036="" className="tw-icon modal-close-icon modal-close-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0007 10.586L16.9507 5.636L18.3647 7.05L13.4147 12L18.3647 16.95L16.9507 18.364L12.0007 13.414L7.05072 18.364L5.63672 16.95L10.5867 12L5.63672 7.05L7.05072 5.636L12.0007 10.586Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            <h3 data-v-26bfa802="" className="modal-title">Account details</h3>
                                            <section data-v-26bfa802="" className="section account-section">
                                                <div data-v-26bfa802="" className="block-wallet-connection">
                                                    <div data-v-26bfa802="" className="connect-wallet-text">
                                                        <span data-v-4f50b036="" data-v-26bfa802="" className="tw-icon icon metamask-icon icon metamask-icon">
                                                            <img data-v-4f50b036="" width="32" height="32" src="./static/images/pools/metamask.svg" alt="metamask icon" />
                                                        </span>
                                                        <span data-v-26bfa802="">Metamask Connected</span>
                                                    </div>
                                                    <div data-v-26bfa802="" className="disconnect-btn"> Disconnect </div>
                                                </div>
                                                <div data-v-26bfa802="" className="block-wallet-info">
                                                    <span data-v-4f50b036="" data-v-26bfa802="" className="tw-icon icon eth-icon icon eth-icon">
                                                        <img data-v-4f50b036="" width="32" height="32" src="./static/images/pools/eth.svg" alt="eth icon" />
                                                    </span>
                                                    <span data-v-4f50b036="" data-v-26bfa802="" className="tw-icon icon bsc-icon icon bsc-icon">
                                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 1.50482C13.14 1.50482 16.5 4.86482 16.5 9.00482C16.5 13.1448 13.14 16.5048 9 16.5048C4.86 16.5048 1.5 13.1448 1.5 9.00482C1.5 4.86482 4.86 1.50482 9 1.50482ZM4.51725 11.5668C5.61825 13.2093 7.27125 14.2548 9.12 14.2548C10.968 14.2548 12.6217 13.2101 13.722 11.5668C12.4738 10.4003 10.8285 9.75243 9.12 9.75482C7.41128 9.75224 5.76563 10.4001 4.51725 11.5668ZM9 8.25482C9.59674 8.25482 10.169 8.01777 10.591 7.59581C11.0129 7.17386 11.25 6.60156 11.25 6.00482C11.25 5.40808 11.0129 4.83579 10.591 4.41383C10.169 3.99187 9.59674 3.75482 9 3.75482C8.40326 3.75482 7.83097 3.99187 7.40901 4.41383C6.98705 4.83579 6.75 5.40808 6.75 6.00482C6.75 6.60156 6.98705 7.17386 7.40901 7.59581C7.83097 8.01777 8.40326 8.25482 9 8.25482Z" fill="white"></path>
                                                        </svg>
                                                    </span>
                                                    <span data-v-26bfa802="" className="address-text">0x389E...572C</span>
                                                </div>
                                                <div data-v-26bfa802="" className="block-actions">
                                                    <div data-v-26bfa802="" className="item">
                                                        <span data-v-4f50b036="" data-v-26bfa802="" className="tw-icon">
                                                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.66667 2.99992V0.999919C2.66667 0.823108 2.7369 0.653538 2.86193 0.528514C2.98695 0.40349 3.15652 0.333252 3.33333 0.333252H11.3333C11.5101 0.333252 11.6797 0.40349 11.8047 0.528514C11.9298 0.653538 12 0.823108 12 0.999919V10.3333C12 10.5101 11.9298 10.6796 11.8047 10.8047C11.6797 10.9297 11.5101 10.9999 11.3333 10.9999H9.33333V12.9999C9.33333 13.3679 9.03333 13.6666 8.662 13.6666H0.671333C0.583418 13.6671 0.496265 13.6503 0.414882 13.617C0.333498 13.5837 0.259489 13.5347 0.197106 13.4728C0.134723 13.4108 0.0851953 13.3372 0.0513695 13.256C0.0175437 13.1749 8.62495e-05 13.0878 0 12.9999L0.00200001 3.66659C0.00200001 3.29859 0.302 2.99992 0.673334 2.99992H2.66667ZM1.33533 4.33325L1.33333 12.3333H8V4.33325H1.33533ZM4 2.99992H9.33333V9.66659H10.6667V1.66659H4V2.99992Z" fill="#6A50FD"></path>
                                                            </svg>
                                                        </span>
                                                        <span data-v-26bfa802="">COPY ADDRESS</span>
                                                    </div>
                                                    <a data-v-26bfa802="" className="item btn btn-scan-link" href="https://etherscan.io/address/0x389E5fcf97865c5E74772B4D574199231515572C" target="_blank" rel="noopener">
                                                        <span data-v-4f50b036="" data-v-26bfa802="" className="tw-icon">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.66667 2V3.33333H1.33333V10.6667H8.66667V7.33333H10V11.3333C10 11.5101 9.92976 11.6797 9.80474 11.8047C9.67971 11.9298 9.51014 12 9.33333 12H0.666667C0.489856 12 0.320286 11.9298 0.195262 11.8047C0.0702379 11.6797 0 11.5101 0 11.3333V2.66667C0 2.48986 0.0702379 2.32029 0.195262 2.19526C0.320286 2.07024 0.489856 2 0.666667 2H4.66667ZM12 0V6L9.47067 3.47133L5.47133 7.47133L4.52867 6.52867L8.528 2.52867L6 0H12Z" fill="#6A50FD"></path>
                                                            </svg>
                                                        </span>
                                                        <span data-v-26bfa802="">VIEW ON ETHERSCAN</span>
                                                    </a>
                                                </div>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            ) : (
                                <div data-v-4e9c501c="" className="modal-stack"></div>
                            )}
                        </>
                    ) : (
                        <>
                            {showWalletConnect ? (
                                <div data-v-4e9c501c="" className="modal-stack">
                                    <div data-v-4e9c501c="" className="modal-container">
                                        <section data-v-7732574a="" data-v-4e9c501c="" className="root tw-modal root connect-wallet modal">
                                            <span data-v-4f50b036="" className="tw-icon modal-close-icon modal-close-icon" onClick={() => { setShowWalletConnect(false) }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0007 10.586L16.9507 5.636L18.3647 7.05L13.4147 12L18.3647 16.95L16.9507 18.364L12.0007 13.414L7.05072 18.364L5.63672 16.95L10.5867 12L5.63672 7.05L7.05072 5.636L12.0007 10.586Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                            <h3 data-v-7732574a="" className="modal-title">Connect wallet</h3>
                                            <div data-v-7732574a="" className="wrapper-sections">
                                                <section data-v-7732574a="" className="section wallet-section">
                                                    <ul data-v-7732574a="">
                                                        <li data-v-7732574a="">
                                                            <span data-v-4f50b036="" data-v-7732574a="" className="tw-icon icon metamask-icon icon metamask-icon">
                                                                <img data-v-4f50b036="" width="32" height="32" src="./static/images/pools/metamask.svg" alt="metamask icon" />
                                                            </span>
                                                            <span data-v-7732574a="">Metamask</span>
                                                        </li>
                                                        <li data-v-7732574a="">
                                                            <span data-v-4f50b036="" data-v-7732574a="" className="tw-icon icon wallet-connect-icon icon wallet-connect-icon">
                                                                <img data-v-4f50b036="" width="32" height="32" src="./static/images/pools/walletconnect.svg" alt="wallet connect icon" />
                                                            </span>
                                                            <span data-v-7732574a="">WalletConnect</span>
                                                        </li>
                                                    </ul>
                                                </section>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            ) : (
                                <div data-v-4e9c501c="" className="modal-stack"></div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}