import './aboutus2.css';
export default function Aboutus2()
{
    return(
        <>
        <section id="abt2">
        <div className="container">
            <div className="row">
                <div className="col-6 col-sm-12 col-md-12 col-lg-6">
                    <span className='span'>Eum ipsam laborum deleniti </span>
                    <strong className='strong'>velit pariatur architecto aut nihil</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header header">
      <button class="accordion-button button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <bold>01</bold><span className='span2'>Non consectetur a erat nam at lectus urna duis?</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div><br></br>
  <div class="accordion-item">
    <h2 class="accordion-header header">
      <button class="accordion-button collapsed button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <bold>02</bold><span className='span3'>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div><br></br>
  <div class="accordion-item padd">
    <h2 class="accordion-header header">
      <button class="accordion-button collapsed button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <bold>03</bold><span className='span3'>Dolor sit amet consectetur adipiscing elit pellentesque?</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
      <div class="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
                    
                </div>
                <div className="col-6 col-sm-8 col-lg-5 ">
                    <img src="https://bootstrapmade.com/content/demo/Arsha/assets/img/why-us.png" alt="" className='img-fluid'></img>
                </div>

            </div>

        </div>
        </section>
        
        </>
    )
}