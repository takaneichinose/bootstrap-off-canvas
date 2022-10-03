# Bootstrap Off Canvas
Just a simple implementation of off canvas on Bootstrap.
# Basic Usage
Import these lines on your source code.
```html
<link rel="stylesheet" href="css/bootstrap-off-canvas.css">
<script src="js/bootstrap-off-canvas.js"></script>
```
Then wrap your usual Bootstrap code in these lines of HTML codes.
```html
<div class="off-canvas-wrapper">
  <div id="offcanvasid" class="off-canvas">
    <div class="off-canvas-nav">
      <div class="nav nav-pills nav-fill flex-column">
        <a href="#" class="text-left nav-item nav-link active">Link 1</a>
        <a href="#" class="text-left nav-item nav-link">Link 2</a>
        <a href="#" class="text-left nav-item nav-link disabled">Disabled Link</a>
      </div>
      <div class="off-canvas-content" data-target="#offcanvasid">
        <a href="#" class="off-canvas-toggler" type="button" data-target="#offcanvasid" aria-controls="offcanvasSupportedContent" aria-expanded="false" aria-label="Toggle off canvas menu">Toggle off canvas</a>
        <!-- Your usual Bootstrap code goes here -->
        <div class="container">
          ...
        </div>
      </div>
    </div>
  </div>
</div>
```
# Options

In ```off-canvas-nav``` class, you may use the Bootstrap's utility [Colors](https://getbootstrap.com/docs/4.3/utilities/colors/).\

In ```off-canvas-content``` class, you may add ```overlay``` to add overlay mask on the content part of your source code.

Example:
```HTML
<div class="off-canvas-content overlay" data-target="#offcanvasid">
  ...
</div>
```

In ```off-canvas-content``` class, you may add ```off-canvas-no-close``` to disable close event if the content is clicked when opened.

Example:
```HTML
<div class="off-canvas-content off-canvas-no-close" data-target="#offcanvasid">
  ...
</div>
```

If you want your off-canvas menu to be floating over the content, you should make your HTML structure the way below:

Example:
```HTML
<div id="off_canvas" class="off-canvas off-canvas-floating">
  <!-- Just use the default Bootstrap color utility here -->
  <div class="off-canvas-nav bg-dark">
    <!-- You may use any of the bootstrap components here -->
    <div class="nav nav-pills nav-fill flex-column">
      <a href="#" class="text-left nav-item nav-link active">Link 1</a>
        <a href="#" class="text-left nav-item nav-link">Link 2</a>
        <a href="#" class="text-left nav-item nav-link disabled">Disabled Link</a>
    </div>
  </div>
</div>
<!-- Your usual Bootstrap code goes here -->
<a href="#" class="off-canvas-toggler" type="button" data-target="#offcanvasid" aria-controls="offcanvasSupportedContent" aria-expanded="false" aria-label="Toggle off canvas menu">Toggle off canvas</a>
<div class="container">
  ...
</div>
```