import Link from "next/link";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Table from 'react-bootstrap/Table';
import styles from '../styles/App.module.css';

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="container-xl px-3" style={{ marginTop: '100px' }}>
        <div className="row py-5">
          <div className={`col-md-6 mt-xl-5 ${styles.leftContent}`}>
            <div className={styles.contentWidth}>
              <h5 className="text-primary">
                Jump start your portfolio <i class="fa fa-long-arrow-right"></i>
              </h5>
              <h1 style={{ fontSize: '52px' }}><b>Jump start your crypto portfolio</b></h1>
              <h5>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h5>
              <div class="input-group mt-4">
                <input type="email" class="form-control p-3" placeholder="Email Address" aria-label="Email Address" aria-describedby="button-addon2" style={{ borderRadius: '0' }} />
                <button class="btn btn-primary" type="button" id="button-addon2" style={{ borderRadius: '0' }}>Get Started</button>
              </div>
            </div>
          </div>
          <div className={`col-md-6 ${styles.rightContent} text-center`}>
            <img src="https://assets.coinbase.com/assets/b5becfc6535533ed.png" alt="ImgNotFound" className="img-fluid" style={{ width: '50%' }} />
          </div>
        </div>
      </div>

      <div style={{ background: '#0A0B0D' }}>
        <div className="container-xl px-3">
          <div className="row p-2">
            <div className="col-4 col-md-3" style={{ margin: 'auto' }}>
              <img src="https://images.ctfassets.net/c5bd0wqjc7v0/2nmdMe3zBL8fgv3Ltvk6JD/068793dfeb8744955ed8794b97e0f9c5/image_26.png?fm=webp&q=100&w=1180" alt="#ImgNotFound" className="w-100" />
            </div>
            <div className="col-8 col-md-9 text-white" style={{ margin: 'auto' }}>
              <h1>Explore web3 profiles, and claim one for free</h1>
              <h5>Create and customize your web3 profile, check out other profiles, and explore popular NFT collections and tokens.</h5>
              <button type="button" class="btn btn-primary px-md-5 py-md-3" style={{ borderRadius: '30px' }}>Learn More <i class="fa fa-long-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>


      <div className="container-xl px-3" style={{ marginTop: '100px' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><h6><img src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="ImgNotFound" style={{ width: '25px' }} /> Bitcoin BTC</h6></td>
              <td><h6>₹2,268,719.78</h6></td>
              <td><h6 className="text-danger">-0.14%</h6></td>
              <td><button type="button" class="btn btn-success">Buy</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td><h6><img src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="ImgNotFound" style={{ width: '25px' }} /> Bitcoin BTC</h6></td>
              <td><h6>₹2,268,719.78</h6></td>
              <td><h6 className="text-danger">-0.14%</h6></td>
              <td><button type="button" class="btn btn-success">Buy</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td><h6><img src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="ImgNotFound" style={{ width: '25px' }} /> Bitcoin BTC</h6></td>
              <td><h6>₹2,268,719.78</h6></td>
              <td><h6 className="text-danger">-0.14%</h6></td>
              <td><button type="button" class="btn btn-success">Buy</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td><h6><img src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="ImgNotFound" style={{ width: '25px' }} /> Bitcoin BTC</h6></td>
              <td><h6>₹2,268,719.78</h6></td>
              <td><h6 className="text-danger">-0.14%</h6></td>
              <td><button type="button" class="btn btn-success">Buy</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td><h6><img src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png" alt="ImgNotFound" style={{ width: '25px' }} /> Bitcoin BTC</h6></td>
              <td><h6>₹2,268,719.78</h6></td>
              <td><h6 className="text-danger">-0.14%</h6></td>
              <td><button type="button" class="btn btn-success">Buy</button></td>
            </tr>
          </tbody>
        </Table>

        <h1 className="text-center mt-5">
          Create your cryptocurrency portfolio today
        </h1>
        <h6 className="text-center">Coinbase has a variety of features that make it the best place to start trading</h6>

        <div className="row mt-3">
          <div className="col-lg-8 mt-3 order-lg-2 text-center">
            <img src="https://assets.coinbase.com/assets/1d3641c165a4bde5.jpg" alt="#ImgNotFound" style={{ maxWidth: '80%' }} />
          </div>
          <div className="col-lg-4">
            <h4 className="mt-5">Manage your portfolio</h4>
            <h6>Buy and sell popular digital currencies, keep track of them in the one place.</h6>
            <h4 className="mt-5">Manage your portfolio</h4>
            <h6>Buy and sell popular digital currencies, keep track of them in the one place.</h6>
            <h4 className="mt-5">Manage your portfolio</h4>
            <h6>Buy and sell popular digital currencies, keep track of them in the one place.</h6>
          </div>
        </div>

        <hr />

        <h1 className="text-center mt-5">
          The most trusted cryptocurrency platform
        </h1>
        <h6 className="text-center">Here are a few reasons why you should choose Coinbase</h6>
        <div className="row text-center mt-4">
          <div className="col-6">
            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1BLuXkIUmkuTI3VOoRrjh5/5d1ea54e078efd2f1f6e111fe8ddf8a9/Coinbase_Security_Shield.gif" alt="#ImgNotFound" style={{ width: '100px' }} />
            <h4>Secure storage</h4>
            <h6 className="mb-4" style={{ maxWidth: '400px', margin: 'auto' }}>We store the vast majority of the digital assets in secure offline storage.</h6>
            <Link href="/"><b>Learn more</b></Link>
          </div>
          <div className="col-6">
            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1BLuXkIUmkuTI3VOoRrjh5/5d1ea54e078efd2f1f6e111fe8ddf8a9/Coinbase_Security_Shield.gif" alt="#ImgNotFound" style={{ width: '100px' }} />
            <h4>Secure storage</h4>
            <h6 className="mb-4" style={{ maxWidth: '400px', margin: 'auto' }}>We store the vast majority of the digital assets in secure offline storage.</h6>
            <Link href="/"><b>Learn more</b></Link>
          </div>
        </div>

      </div>

      <div className="bg-primary mt-5">
        <div className="container-xl px-3 p-5">
          <div className="row text-light text-center">
            <div className="col-md-4 my-3">
              <h2>₹44,00,000 Cr</h2>
              <h4>Quarterly volume traded</h4>
            </div>
            <div className="col-md-4 my-3">
              <h2>₹44,00,000 Cr</h2>
              <h4>Quarterly volume traded</h4>
            </div>
            <div className="col-md-4 my-3">
              <h2>₹44,00,000 Cr</h2>
              <h4>Quarterly volume traded</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl px-3 mt-5">
        <h1 className="text-center mt-5">
        Get started in a few minutes
        </h1>
        <h6 className="text-center">Coinbase supports a variety of the most popular digital currencies.</h6>
        <div className="row my-5 text-center">
            <div className="col-md-4 my-3">
              <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1BLuXkIUmkuTI3VOoRrjh5/5d1ea54e078efd2f1f6e111fe8ddf8a9/Coinbase_Security_Shield.gif" alt="#ImgNotFound" style={{width:'100px'}} />
              <h4>Create an account</h4>
            </div>
            <div className="col-md-4 my-3">
              <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1BLuXkIUmkuTI3VOoRrjh5/5d1ea54e078efd2f1f6e111fe8ddf8a9/Coinbase_Security_Shield.gif" alt="#ImgNotFound" style={{width:'100px'}} />
              <h4>Link your bank account</h4>
            </div>
            <div className="col-md-4 my-3">
              <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1BLuXkIUmkuTI3VOoRrjh5/5d1ea54e078efd2f1f6e111fe8ddf8a9/Coinbase_Security_Shield.gif" alt="#ImgNotFound" style={{width:'100px'}} />
              <h4>Start buying & selling</h4>
            </div>
          </div>

          <p className="my-5">
          *Upon purchase of USDC, you will be automatically opted in to rewards. If you’d like to opt out or learn more about rewards, you can click here. The rewards rate is subject to change and can vary by region. Customers will be able to see the latest applicable rates directly within their accounts.
          </p>
          
          <hr />
      </div>
      <br />

      <Footer />
      <br />
    </div>
  )
}
