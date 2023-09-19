

import Head from "next/head";
import Link from "next/link";
// import Script from "next/script";
// import { NextScript } from "next/document";

export default function Staking() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
                <title>Pools | Kaiketsu</title>
                <meta name="description" content="Stake your KT and earn ongoing rewards" />
                <meta property="og:title" content="Kaiketsu" />
                <meta property="og:description" content="Stake your KT and earn ongoing rewards" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./static/images/landing/illustration-2x.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="./static/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./static/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./static/favicon/favicon-16x16.png" />
                <link rel="mask-icon" href="./static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="./static/favicon/favicon.ico" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&amp;display=swap" rel="stylesheet" />
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
                <div id="app" data-v-app>
                    <div data-v-6a3b02da classname="page-private page-pools">
                        <nav data-v-dd08c964 data-v-6a3b02da classname="header">
                            <div data-v-dd08c964 classname="top-panel">
                                <a data-v-dd08c964 href="./pools.html" classname="logo">
                                    <img data-v-dd08c964 src="./static/images/logo/timewarp-1x.png" srcSet="./static/images/logo/timewarp-2x.png 2x" alt="Logo" />
                                    <span data-v-dd08c964>Kaiketsu</span>
                                </a>
                                <div data-v-dd08c964 classname="side-right">
                                    <div data-v-dd08c964 classname="header-nav menu">
                                        <a data-v-dd08c964 href="./pools.html" classname="active">Home</a>
                                        <a data-v-dd08c964 aria-current="page" href="./pools.html" classname="router-link-active router-link-exact-active">Pools</a>
                                    </div>
                                    <button data-v-58e1c1af data-v-dd08c964 classname="tw-button connect-btn connect-btn" loading="false">
                                        <span data-v-58e1c1af classname="button-wrap">Connect Wallet</span>
                                    </button>
                                </div>
                                <button data-v-dd08c964 classname="mobile-menu-btn open-btn" />
                            </div>
                        </nav>
                        <div data-v-6a3b02da classname="page-content">
                            <div data-v-6a3b02da classname="container">
                                <h1 data-v-6a3b02da>Pools</h1>
                                <div data-v-6a3b02da classname="top-info">
                                    <div data-v-6a3b02da classname="pool-filter">
                                        <div data-v-70bf3db1 data-v-6a3b02da classname="root tw-switch switch">
                                            <input data-v-70bf3db1 role="checkbox" type="checkbox" />
                                        </div>
                                        <span data-v-6a3b02da>View pools with already staked balances only</span>
                                    </div>
                                    <div data-v-6a3b02da classname="connect-wallet">
                                        <div classname="icon" data-v-6a3b02da>
                                            <img src="./static/images/pools/wallet.svg" alt="Connect Wallet" data-v-6a3b02da />
                                        </div>
                                        <div classname="text" data-v-6a3b02da>
                                            <div classname="big-text" data-v-6a3b02da>Connect your wallet</div>
                                            <div classname="small-text" data-v-6a3b02da>to view balances and start staking</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-6a3b02da classname="blockchains">
                                    <div data-v-6a3b02da classname="blockchain">
                                        <div data-v-6a3b02da classname="description">
                                            <img data-v-6a3b02da src="./static/images/pools/ethereum.svg" alt="Ethereum Network" />
                                            <span data-v-6a3b02da>List of pools on the Ethereum Network</span>
                                        </div>
                                        <div data-v-25ed44a5 data-v-6a3b02da classname="pool">
                                            <div data-v-25ed44a5 classname="top-block">
                                                <div data-v-25ed44a5 classname="pool-icon">
                                                    <img data-v-25ed44a5 src="./static/images/pools/time-purple.svg" alt="Pool Icon" />
                                                </div>
                                                <div data-v-25ed44a5 classname="pools-info">
                                                    <div data-v-25ed44a5 classname="stat pool-name">
                                                        <div data-v-25ed44a5 classname="label">Pool</div>
                                                        <div data-v-25ed44a5 classname="value">KT
                                                            <a data-v-25ed44a5 classname="contract" href="https://etherscan.io/address/0xa106dd3Bc6C42B3f28616FfAB615c7d494Eb629D" target="_blank" rel="noopener">
                                                                <span data-v-25ed44a5>Contract</span>
                                                                <span data-v-4f50b036 data-v-25ed44a5 classname="tw-icon blank blank">
                                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xml: space="preserve">
                                                                        <g fill="currentColor">
                                                                            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                                                                <path d="M1652.8,4975.8c-375-80.5-699.3-260-980-538.3c-207-209.3-342.8-411.8-437.1-657.9C95.4,3416.1,100,3586.3,100,110.3S95.4-3195.5,235.7-3559c232.3-605,819-1085.8,1463.1-1205.4c188.6-34.5,6413.7-34.5,6602.3,0c361.2,66.7,784.4,292.1,1039.8,554.4c257.7,266.9,450.9,625.7,526.8,984.6c25.3,119.6,32.2,510.7,32.2,1985.3V593.4h-483.1h-483.1v-1718.5c0-996.1-9.2-1778.3-23-1856.5c-69-421-398-749.9-819-818.9c-181.7-29.9-6001.9-29.9-6183.7,0c-414.1,66.7-740.8,386.5-819,802.9c-29.9,163.3-32.2,6011.1,0,6199.7c69,421,398,750,819,819c78.2,13.8,860.4,23,1856.5,23h1718.4v483.1v483.1l-1845-2.3C2207.3,5008,1758.7,4998.8,1652.8,4975.8z">
                                                                                </path>
                                                                                <path d="M6472.3,4527.2v-483.1h878.8h881.1L6971.5,2783.4L5713.2,1525.1l340.5-340.5c186.3-186.3,349.7-338.2,361.2-338.2c13.8,0,584.3,561.3,1269.9,1246.9l1249.2,1249.1v-881.1v-878.8h483.1H9900v1713.8v1713.8H8186.2H6472.3V4527.2z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5 classname="stat pool-apy">
                                                        <div data-v-25ed44a5 classname="label">
                                                            <span data-v-25ed44a5>APY</span>
                                                            <span data-v-4f50b036 data-v-25ed44a5 classname="tw-icon icon icon has-tooltip" data-original-title="null">
                                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6.49967 11.9167C3.50805 11.9167 1.08301 9.49164 1.08301 6.50001C1.08301 3.50839 3.50805 1.08334 6.49967 1.08334C9.4913 1.08334 11.9163 3.50839 11.9163 6.50001C11.9163 9.49164 9.4913 11.9167 6.49967 11.9167ZM6.49967 10.8333C7.64895 10.8333 8.75115 10.3768 9.5638 9.56414C10.3765 8.75148 10.833 7.64928 10.833 6.50001C10.833 5.35074 10.3765 4.24854 9.5638 3.43588C8.75115 2.62322 7.64895 2.16668 6.49967 2.16668C5.3504 2.16668 4.2482 2.62322 3.43555 3.43588C2.62289 4.24854 2.16634 5.35074 2.16634 6.50001C2.16634 7.64928 2.62289 8.75148 3.43555 9.56414C4.2482 10.3768 5.3504 10.8333 6.49967 10.8333ZM5.95801 3.79168H7.04134V4.87501H5.95801V3.79168ZM5.95801 5.95834H7.04134V9.20834H5.95801V5.95834Z" fill="currentColor">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div data-v-25ed44a5 classname="value">14.11%</div>
                                                    </div>
                                                    <div data-v-25ed44a5 classname="stat pool-tvl">
                                                        <div data-v-25ed44a5 classname="label">TVL</div>
                                                        <div data-v-25ed44a5 classname="value">119,791 KT
                                                            <span data-v-25ed44a5 classname="usd">$1,794,478</span>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5 classname="stat pool-actions">
                                                        <div data-v-25ed44a5 classname="calculator-empty" />
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button active button active" loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">
                                                                <div data-v-25ed44a5 classname="icon-btn"> Staking
                                                                    <span data-v-4f50b036 data-v-25ed44a5 classname="tw-icon arrow arrow">
                                                                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-25ed44a5 classname="bottom-block">
                                                <div data-v-25ed44a5 classname="action">
                                                    <div data-v-25ed44a5 classname="label">Wallet Balance</div>
                                                    <div data-v-25ed44a5 classname="value">0.00 KT</div>
                                                    <div data-v-25ed44a5 classname="buttons two">
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Deposit</span>
                                                        </button>
                                                        <a data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button" href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x485d17a6f1b8780392d53d64751824253011a260&use=V2" target="_blank" rel="noopener" loading="false"><span data-v-58e1c1af classname="button-wrap">Get KT</span></a>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5 classname="action">
                                                    <div data-v-25ed44a5 classname="label">Already Staked</div>
                                                    <div data-v-25ed44a5 classname="value">0.00 KT</div>
                                                    <div data-v-25ed44a5 classname="buttons">
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Withdraw</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5 classname="action">
                                                    <div data-v-25ed44a5 classname="label">Rewards</div>
                                                    <div data-v-25ed44a5 classname="value">0.00 KT</div>
                                                    <div data-v-25ed44a5 classname="buttons two">
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Harvest</span>
                                                        </button>
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap"> Compound </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5 classname="action" />
                                            </div>
                                        </div>
                                        <div data-v-25ed44a5 data-v-6a3b02da classname="pool">
                                            <div data-v-25ed44a5 classname="top-block">
                                                <div data-v-25ed44a5 classname="pool-icon">
                                                    <img data-v-25ed44a5 src="./static/images/pools/uniswap.svg" alt="Pool Icon" />
                                                </div>
                                                <div data-v-25ed44a5 classname="pools-info">
                                                    <div data-v-25ed44a5 classname="stat pool-name">
                                                        <div data-v-25ed44a5 classname="label">Pool</div>
                                                        <div data-v-25ed44a5 classname="value">KT-ETH
                                                            <a data-v-25ed44a5 classname="contract" href="https://etherscan.io/address/0x55c825983783c984890bA89F7d7C9575814D83F2" target="_blank" rel="noopener">
                                                                <span data-v-25ed44a5>Contract</span>
                                                                <span data-v-4f50b036 data-v-25ed44a5 classname="tw-icon blank blank">
                                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xml: space="preserve">
                                                                        <g fill="currentColor">
                                                                            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                                                                <path d="M1652.8,4975.8c-375-80.5-699.3-260-980-538.3c-207-209.3-342.8-411.8-437.1-657.9C95.4,3416.1,100,3586.3,100,110.3S95.4-3195.5,235.7-3559c232.3-605,819-1085.8,1463.1-1205.4c188.6-34.5,6413.7-34.5,6602.3,0c361.2,66.7,784.4,292.1,1039.8,554.4c257.7,266.9,450.9,625.7,526.8,984.6c25.3,119.6,32.2,510.7,32.2,1985.3V593.4h-483.1h-483.1v-1718.5c0-996.1-9.2-1778.3-23-1856.5c-69-421-398-749.9-819-818.9c-181.7-29.9-6001.9-29.9-6183.7,0c-414.1,66.7-740.8,386.5-819,802.9c-29.9,163.3-32.2,6011.1,0,6199.7c69,421,398,750,819,819c78.2,13.8,860.4,23,1856.5,23h1718.4v483.1v483.1l-1845-2.3C2207.3,5008,1758.7,4998.8,1652.8,4975.8z">
                                                                                </path>
                                                                                <path d="M6472.3,4527.2v-483.1h878.8h881.1L6971.5,2783.4L5713.2,1525.1l340.5-340.5c186.3-186.3,349.7-338.2,361.2-338.2c13.8,0,584.3,561.3,1269.9,1246.9l1249.2,1249.1v-881.1v-878.8h483.1H9900v1713.8v1713.8H8186.2H6472.3V4527.2z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5 classname="stat pool-apy">
                                                        <div data-v-25ed44a5 classname="label">
                                                            <span data-v-25ed44a5>APY</span>
                                                            <span data-v-4f50b036 data-v-25ed44a5 classname="tw-icon icon icon has-tooltip" data-original-title="null">
                                                                <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6.49967 11.9167C3.50805 11.9167 1.08301 9.49164 1.08301 6.50001C1.08301 3.50839 3.50805 1.08334 6.49967 1.08334C9.4913 1.08334 11.9163 3.50839 11.9163 6.50001C11.9163 9.49164 9.4913 11.9167 6.49967 11.9167ZM6.49967 10.8333C7.64895 10.8333 8.75115 10.3768 9.5638 9.56414C10.3765 8.75148 10.833 7.64928 10.833 6.50001C10.833 5.35074 10.3765 4.24854 9.5638 3.43588C8.75115 2.62322 7.64895 2.16668 6.49967 2.16668C5.3504 2.16668 4.2482 2.62322 3.43555 3.43588C2.62289 4.24854 2.16634 5.35074 2.16634 6.50001C2.16634 7.64928 2.62289 8.75148 3.43555 9.56414C4.2482 10.3768 5.3504 10.8333 6.49967 10.8333ZM5.95801 3.79168H7.04134V4.87501H5.95801V3.79168ZM5.95801 5.95834H7.04134V9.20834H5.95801V5.95834Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div data-v-25ed44a5 classname="value">16.93%</div>
                                                    </div>
                                                    <div data-v-25ed44a5 classname="stat pool-tvl">
                                                        <div data-v-25ed44a5 classname="label">TVL</div>
                                                        <div data-v-25ed44a5 classname="value">
                                                            <div data-v-25ed44a5>16 KT
                                                                <span data-v-25ed44a5 classname="usd">$245</span>
                                                            </div>
                                                            <div data-v-25ed44a5>0.13 ETH
                                                                <span data-v-25ed44a5 classname="usd">$223</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-25ed44a5 classname="stat pool-actions">
                                                        <div data-v-25ed44a5 classname="calculator-empty" />
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button active button active" loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">
                                                                <div data-v-25ed44a5 classname="icon-btn"> Staking
                                                                    <span data-v-4f50b036 data-v-25ed44a5 classname="tw-icon arrow arrow">
                                                                        <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-25ed44a5 classname="bottom-block">
                                                <div data-v-25ed44a5 classname="action">
                                                    <div data-v-25ed44a5 classname="label">Wallet Balance</div>
                                                    <div data-v-25ed44a5 classname="value">0.00000000 LP KT-ETH</div>
                                                    <div data-v-25ed44a5 classname="buttons two">
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Deposit</span>
                                                        </button>
                                                        <a data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button" href="https://app.uniswap.org/#/add/v2/ETH/0x485d17A6f1B8780392d53D64751824253011A260" target="_blank" rel="noopener" loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Get LP KT-ETH</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5 classname="action">
                                                    <div data-v-25ed44a5 classname="label">Already Staked</div>
                                                    <div data-v-25ed44a5 classname="value">0.00000000 LP KT-ETH</div>
                                                    <div data-v-25ed44a5 classname="buttons">
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Withdraw</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5 classname="action">
                                                    <div data-v-25ed44a5 classname="label">Rewards</div>
                                                    <div data-v-25ed44a5 classname="value">0.00 KT</div>
                                                    <div data-v-25ed44a5 classname="buttons two">
                                                        <button data-v-58e1c1af data-v-25ed44a5 classname="tw-button button button-transparent button button-transparent" disabled loading="false">
                                                            <span data-v-58e1c1af classname="button-wrap">Harvest</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-v-25ed44a5 classname="action" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-1b22e25c data-v-6a3b02da classname="footer">
                            <div data-v-1b22e25c classname="copyright">
                                <span data-v-1b22e25c>©</span>
                                2023 Kaiketsu — All Rights Reserved
                            </div>
                            <div data-v-1b22e25c classname="links">
                                <a data-v-1b22e25c href="./pools.html" classname>Home</a>
                                <a data-v-1b22e25c aria-current="page" href="./pools.html" classname="router-link-active router-link-exact-active">Pools</a>
                                <a data-v-1b22e25c href target="_blank">Docs</a>
                            </div>
                        </div>
                    </div>
                    <div data-v-4e9c501c classname="modal-stack" />
                </div>
            </div>
        </>
    )
}