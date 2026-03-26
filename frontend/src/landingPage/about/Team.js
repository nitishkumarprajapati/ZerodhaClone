function Team() {
  return (
    <>
      <div className="container">
        <div className="p-5">
          <h1 className="text-center fs-3 mb-5">People</h1>
        </div>
        <div className="row">
          <div className="col-6 text-center text-muted">
            <img
              src="media/assets/nithin-kamath.jpg"
              style={{ "border-radius": "100%" }}
            ></img>
            <h5 className="mt-4">Nithin Kamath</h5>
            <h6 className="mt-4">Founder,CEO</h6>
          </div>
          <div className="col-6 text-muted fs-5 p-5" style={{"line-height":30}}>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.</p>
             <p> He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC). </p>
              <p>Playing basketball is his zen.</p>
                 <p > <a href="/" style={{"text-decoration":"none"}}>Connect on Homepage</a> / <a href="/" style={{"text-decoration":"none"}}>TradingQnA </a>/<a href="/" style={{"text-decoration":"none"}}> Twitter</a> </p>
             
             
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
