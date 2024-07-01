@extends("frontend.welcomepage")
@section('content')

       
  <!-- content -->
  <section class="py-5">
  <div class="container">
    <div class="row gx-4">
      <!-- Image slider -->
      <aside class="col-lg-5">
    <div id="imageSlider" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <!-- Carousel items -->
            @foreach($product_sub_images as $key => $sub_image)
            <div class="carousel-item {{$key == 0 ? 'active' : '' }}">
                <img src="{{ URL::asset($sub_image->sub_images) }}" class="d-block mx-auto rounded" style="max-width: 400px;" alt="...">
            </div>
            @endforeach
        </div>
        <!-- Carousel controls -->
        <a class="carousel-control-prev" href="#imageSlider" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#imageSlider" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>
    <!-- Thumbnail navigation -->
    <div class="d-flex justify-content-center mb-3 pt-4">
        @foreach($product_sub_images as $key => $sub_image)
        <a data-fslightbox="mygalley" class="border mx-1 rounded-2" onclick="showImage(event, {{ $key }})" data-type="image" href="{{ $sub_image->image }}" class="item-thumb">
            <img id="thumb-{{ $key }}" width="60" height="60" class="rounded-2" src="{{ URL::asset($sub_image->sub_images) }}" />
        </a>
        @endforeach
    </div>
</aside>

     

     <main class="col-lg-6 pt-6">
      
        <div class="ps-lg-7">
        <p>Home > product > details >  <strong>{{ $product->name }}</strong></p>
        <hr />
          <h2 class="title text-dark mt-4">
            {{ $product->name}}
          </h2>
          <div class="d-flex flex-row my-2">
            <div class="text-warning mb-1 me-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span class="ms-1">
                4.5
              </span>
            </div>
            <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154+ orders</span>
            <span class="text-success ms-2"> Limited Stock ! ({{$product->stock}})</span>
          </div>
          
          <div class="price"><i class="fa fa-gift" aria-hidden="true"></i> Special price </div>
          <!-- Limited Stock alert -->
    <!-- <div style="font-size: smaller; font-weight: bold;">
        <i class="	fa fa-exclamation-triangle" style="color: red;"></i>
        <span class="Alert" style="color: red;">Limited Stock! ({{$product->stock}})</span>
    </div> -->

          
 <div class="mb-3">
    <!-- Discounted price -->
    <span style="font-size: xx-large; font-weight: normal;">₹ {{$product->price}}/- </span>
    <span class="mrp" style="font-size: smaller;">MRP:</span> 
    <!-- Original price with discount (strikethrough) -->
    <span class="original-price" style="text-decoration: line-through; color: #888; font-size: smaller;">₹{{$product->price * 25}} /-</span>
    
  <!-- Tax information -->
  <div style="font-size: smaller; ">
        <span class="text-success">  inclusive of all taxes.</span>
    </div>
    </div>
  

          <!-- <div class="row">
            <dt class="col-3">Type:</dt>
            <dd class="col-9">Regular</dd>

            <dt class="col-3">Color</dt>
            <dd class="col-9">Brown</dd>

            <dt class="col-3">Material</dt>
            <dd class="col-9">Cotton, Jeans</dd>

            <dt class="col-3">Brand</dt>
            <dd class="col-9">Reebook</dd>
          </div> -->
          <form action="{{ url('addcart', $product->id) }}" method="post">
        @csrf
        <input type="number" value="1" min="1" class="form-control" style="width: 100px" name="quantity" hidden>
        <input class="btn btn-primary" type="submit" value="Add Cart" id="addToCartBtn">
        <a href="{{ url('showcart') }}" class="btn btn-primary">Go to Cart</a>    
    </form>

    <hr />
          <div class="mb-3 mt-5">
    <!-- add to cart -->
 

    <p style="font-size: larger; font-weight: bold;">PRODUCT DETAILS  <i class="fa-solid fa-file-waveform"></i></p>
          <p>
          {{$product->description}}
          </p>
          <!-- <input type="hidden" class="product_id" value="3"> Your Product ID 
          <input type="text" class="qty-input" value="1">  Your Number of Quantity 
          <button type="button" class="add-to-cart-btn btn btn-primary">Add to Cart</button> -->
        </div>
      </main>
    </div>
 <!-- similar -->
 <br>
 <div class="card">


    <div class="card-body" style="margin-left:30px;"> 
     <h5 class="card-title"><u>Similar items</u> :</h5>
     <div class="d-flex flex-row flex-wrap" >
        @foreach($related_products as $sub_image)
        <div class="mr-3 mb-3 d-flex align-items-center">
            <a href="{{ url('/product/details',$sub_image->id)}}" style="text-decoration: none; color: inherit;" class="d-flex">
            <img src="{{ URL::asset($sub_image->image) }}" style="width: 96px; height: 96px; object-fit: cover; margin: 0 10px;" class="img-md img-thumbnail" />
                <div class="d-flex flex-column justify-content-between">
                    <div>
                    <p class="mb-1">{{ implode(' ', array_slice(explode(' ', $sub_image->name), 0,3 )) }}</p>                    
                        <p class="text-dark mb-0">₹ {{ $sub_image->price }}/-</p>
                    </div>
                </div>
            </a>
        </div>
        @endforeach
     </div>
    </div>
        <!-- demo --
        @foreach($product_sub_images as $sub_image)
         <a data-fslightbox="mygallery" target="_blank" data-type="image" href="{{ URL::asset('frontend/images/'.$sub_image->sub_image) }}">
         <img style="max-width: 90%; max-height: 90vh; margin: auto;" class="rounded-4 fit" src="{{ URL::asset('frontend/images/'.$sub_image->sub_image) }}" />
          </a>
        @endforeach -->


  </div>
</section>
<!-- content -->

<script>
    function showImage(event, index) {
        event.preventDefault(); // Prevent the default action of clicking
        
        // Activate the corresponding carousel item
        $('#imageSlider').carousel(index);
    }
</script>

@endsection('content')
        
