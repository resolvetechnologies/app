import Head from "next/head";
import Link from "next/link";
import { FaExternalLinkAlt, FaInfoCircle, FaArrowUp } from 'react-icons/fa'
// import Script from "next/script";
// import { NextScript } from "next/document";

export default function Staking() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
                <title>Pools | Kaiketsu.tech</title>
                <meta name="description" content="Stake your REMEDY and earn ongoing rewards" />
                <meta property="og:title" content="Kaiketsu.tech" />
                <meta property="og:description" content="Stake your REMEDY and earn ongoing rewards" />
                <meta property="og:type" content="website" />
                <link rel="icon" type="image/png" href="./assets/kaiketsu.png" style={{ width: "32px", height: "32px" }} />
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
                                    <span data-v-dd08c964="">Kaiketsu.tech</span>
                                </a>
                                <div data-v-dd08c964="" className="side-right">
                                    <div data-v-dd08c964="" className="header-nav menu">
                                        <a data-v-dd08c964="" href="./" className="active">Home</a>
                                        <a data-v-dd08c964="" aria-current="page" href="./pools" className="router-link-active router-link-exact-active">Pools</a>
                                        <a data-v-dd08c964="" href="" target="_blank">Docs</a>
                                    </div>
                                    <button data-v-58e1c1af="" data-v-dd08c964="" className="tw-button connect-btn connect-btn" loading="false">
                                        <span data-v-58e1c1af="" className="button-wrap">Connect Wallet</span>
                                    </button>
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
                                    <div data-v-6a3b02da="" className="connect-wallet">
                                        <div className="icon" data-v-6a3b02da="">
                                            <img src="./static/images/pools/wallet.svg" alt="Connect Wallet" data-v-6a3b02da="" />
                                        </div>
                                        <div className="text" data-v-6a3b02da="">
                                            <div className="big-text" data-v-6a3b02da="">Connect your wallet</div>
                                            <div className="small-text" data-v-6a3b02da="">to view balances and start staking</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-6a3b02da="" className="blockchains">
                                    <div data-v-6a3b02da="" className="blockchain">
                                        <div data-v-6a3b02da="" className="description">
                                            <img data-v-6a3b02da="" src="./static/images/pools/ethereum.svg" alt="Ethereum Network" />
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
                                                            <span data-v-58e1c1af="" className="button-wrap" style={{fontSize: "10px"}}>Get LP REMEDY-WETH</span>
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
                                2023 Kaiketsu.tech — All Rights Reserved
                            </div>
                            <div data-v-1b22e25c="" className="links">
                                <a data-v-1b22e25c="" href="./" className="">Home</a>
                                <a data-v-1b22e25c="" aria-current="page" href="./pools" className="router-link-active router-link-exact-active">Pools</a>
                                <a data-v-1b22e25c="" href="" target="_blank">Docs</a>
                            </div>
                        </div>
                    </div>
                    <div data-v-4e9c501c="" className="modal-stack"></div>
                </div>
            </div>
        </>
    )
}