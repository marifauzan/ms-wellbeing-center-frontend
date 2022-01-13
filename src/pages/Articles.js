import React from "react";

export default function Article() {
  return (
    <div class="container">
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna">
        <div class="card-img-overlay">
          <a href="#" class="btn btn-light btn-sm">Cooking</a>
        </div>
        <div class="card-body">
          <h4 class="card-title">Pasta with Prosciutto</h4>
          <small class="text-muted cat">
            <i class="far fa-clock text-info"></i> 30 minutes
            <i class="fas fa-users text-info"></i> 4 portions
          </small>
          <p class="card-text">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <a href="#" class="btn btn-info">Read Recipe</a>
        </div>
        <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div class="views">Oct 20, 12:45PM
          </div>
          <div class="stats">
           	<i class="far fa-eye"></i> 1347
            <i class="far fa-comment"></i> 12
          </div>
           
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
