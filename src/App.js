import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card-container d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row justify-content-center p-1">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-optics-img.png"
                className="img1"
                alt="img1"
              />
            </div>
            <div className="d-flex flex-row justify-content-center p-1">
              <div>
                <h1 className="cardheading">Improved Optics</h1>
                <p className="cardpara">
                  A virtual reality headset is a head-mounted device that
                  provides virtual reality for the wearer.
                </p>
                <button className="butn btn btn-dark">Read more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card-container d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row justify-content-center p-1 order-md-2">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-controllers-img.png"
                className="img1"
                alt="img2"
              />
            </div>
            <div className="d-flex flex-row justify-content-center p-1 oeder-md-1">
              <div>
                <h1 className="cardheading">Two Touch Controllers</h1>
                <p className="cardpara">
                  Your Oculus Touch controllers are a pair of tracked
                  controllers that give you a hand.
                </p>
                <button className="butn btn btn-dark">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
