<html>
  <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  </head>
    <body class="bg-dark">
      <nav class="navbar navbar-light bg-secondary">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 text-white">Sorting Visualizer</span>
            </div>
          </nav>
          <div class="row mt-2">
              <div class="col-2">
                <button id="generate" type="button" class="btn btn-outline-warning">Generate New Array</button>
              </div>
              <div class="col">
               <div class="text-white">Array Size </div>
              <input type="range" class="form-range w-75 mt-1" min="30" max="200" step="30" id="arraysize">
              </div>
              <div class="col">
                <div class="text-white my-0">Animation Delay </div>
          
               <input type="range" class="form-range w-75 mt-1" min="5" max="200" step="30" id="speed">
               </div>
              <div class="col-5 ml-0">
                <button id="merge" type="button" class="btn btn-outline-info">Merge sort</button>
                <button id="bubble" type="button" class="btn btn-outline-info">Bubble sort</button>
                <button id="insert" type="button" class="btn btn-outline-info">Insertion sort</button>
                <button id="select" type="button" class="btn btn-outline-info">Selection Sort</button>
                <button id="quick" type="button" class="btn btn-outline-info">Quick Sort</button>
              </div>
          </div>
        <br>
        <div class="container">
      <div class="row">
          <div class="col-5"></div>
          <div id="array" class="col-10">

          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <script src="scripts/merge.js"></script>
      <script src="scripts/insert.js"></script>
      <script src="scripts/quick.js"></script>
      <script src="scripts/selection.js"></script>
      <script src="scripts/animations.js"></script>
      <script src="scripts/bubble.js"></script>
          <script src="index.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </body>
</html>
