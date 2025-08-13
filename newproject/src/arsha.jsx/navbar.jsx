import'./navbar.css';
export default function Navbar()
{
    return(
        <>
        
    <section id="navbar">
        <div class="container">
      <div class="row">
        <div class="col-12-sm col-6-md col-6-lg">
            <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid col-12-sm col-6-md col-6-lg">
    <a class="navbar-brand nav1" href=""><h1>Arsha</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-12-sm col-6-md col-6-lg" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#abt1">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#abt2">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about3">protfolio</a>
        </li>
        
        </ul>
    </div>
  </div>
</nav>
</div>
        </div>
        </div>
        </section>
        
        
    

        
        </>
    )
}