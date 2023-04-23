import styles from '../../styles/Footer.module.css';

function Footer() {

    return (
        <div className="container-xl">
            <div className="row px-2">
                <div className="col-md-3">
                    <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="ImgNotFound" width='120px' height='20px' />
                    <br />
                    <br />
                    <select className="p-1" style={{ width: '150px' }}>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Urdu">Urdu</option>
                    </select>
                    <h6 className="mt-3 text-muted">
                        @ 2023 Coinbase <br />
                        Blog Twitter Facebook
                    </h6>
                </div>
                <div className="col-6 col-md-3">
                    <h5>Company</h5>
                    <h6 className={styles.footerOptions}>About</h6>
                    <h6 className={styles.footerOptions}>Careers</h6>
                    <h6 className={styles.footerOptions}>Affliates</h6>
                    <h6 className={styles.footerOptions}>Blog</h6>
                    <h6 className={styles.footerOptions}>Press</h6>
                    <h6 className={styles.footerOptions}>Security</h6>
                    <h6 className={styles.footerOptions}>Investors</h6>
                    <h6 className={styles.footerOptions}>Vendors</h6>
                    <h6 className={styles.footerOptions}>Legal & privacy</h6>
                    <h6 className={styles.footerOptions}>Cookies policy</h6>
                    <h6 className={styles.footerOptions}>Digital Assest Disclosures</h6>

                    <h5 className="mt-3">Learn</h5>
                    <h6 className={styles.footerOptions}>Ethereum Merge</h6>
                    <h6 className={styles.footerOptions}>Browse crypto prices</h6>
                    <h6 className={styles.footerOptions}>Coinbase Bytes newsletter</h6>
                    <h6 className={styles.footerOptions}>Crypto basics</h6>
                    <h6 className={styles.footerOptions}>Tips & tutorials</h6>
                    <h6 className={styles.footerOptions}>Market updates</h6>
                    <h6 className={styles.footerOptions}>What is Bitcoin?</h6>
                    <h6 className={styles.footerOptions}>What is crypto?</h6>
                    <h6 className={styles.footerOptions}>What is a blockchain?</h6>
                    <h6 className={styles.footerOptions}>How to set up a crypto wallet</h6>
                    <h6 className={styles.footerOptions}>How to send crypto</h6>
                    <h6 className={styles.footerOptions}>Taxes</h6>
                </div>
                <div className="col-6 col-md-3">
                    <h5>Individuals</h5>
                    <h6 className={styles.footerOptions}>Buy & Sell</h6>
                    <h6 className={styles.footerOptions}>Wallet</h6>
                    <h6 className={styles.footerOptions}>NFT</h6>
                    <h5 className="mt-3">Businesses</h5>
                    <h6 className={styles.footerOptions}>Institutional</h6>
                    <h6 className={styles.footerOptions}>Prime</h6>
                    <h6 className={styles.footerOptions}>Asset Hub</h6>
                    <h6 className={styles.footerOptions}>Commerce</h6>
                    <h5 className="mt-3">Developers</h5>
                    <h6 className={styles.footerOptions}>Cloud</h6>
                    <h6 className={styles.footerOptions}>Wallet as a Service</h6>
                    <h6 className={styles.footerOptions}>Wallet SDK</h6>
                    <h6 className={styles.footerOptions}>Coinbase Wallet Faucet - Get testnet funds</h6>
                    <h6 className={styles.footerOptions}>Coinbase Pay SDK</h6>
                    <h6 className={styles.footerOptions}>Node</h6>
                    <h6 className={styles.footerOptions}>Commerce</h6>
                    <h6 className={styles.footerOptions}>Base</h6>
                    <h6 className={styles.footerOptions}>Sign in with Coinbase</h6>
                    <h6 className={styles.footerOptions}>Rosetta</h6>
                    <h6 className={styles.footerOptions}>Participate</h6>
                    <h6 className={styles.footerOptions}>Prime API</h6>
                </div>
                <div className="col-6 col-md-3">
                    <h5>Support</h5>
                    <h6 className={styles.footerOptions}>Help center</h6>
                    <h6 className={styles.footerOptions}>Contact us</h6>
                    <h6 className={styles.footerOptions}>Create account</h6>
                    <h6 className={styles.footerOptions}>ID verification</h6>
                    <h6 className={styles.footerOptions}>Account information</h6>
                    <h6 className={styles.footerOptions}>Payment methods</h6>
                    <h6 className={styles.footerOptions}>Account access</h6>
                    <h6 className={styles.footerOptions}>Supported crypto</h6>
                    <h6 className={styles.footerOptions}>Supported countries</h6>
                    <h6 className={styles.footerOptions}>Status</h6>
                </div>
            </div>
        </div>
    );
}

export default Footer;