# accordion
Accordion with jQuery [Preview](https://htmlpreview.github.io/?https://github.com/zecka/accordion/blob/master/index.html)


## Getting Started

### First link jquery in the end of body
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Next link accordion.js after jquery
```
<script src="assets/js/accordion.js"></script>
```

### Next link accordion.css in header
```
<link rel="stylesheet" type="text/css" href="assets/css/accordion.css">

```

### And then put html
remove "data-accordion" if you want to be able to open multiple items<br />
add class active to open an item on page load
```
<div class="toggles" data-accordion>

	<div class="toggle-item>
		<h2 class="toggle-header>
			<img src="assets/img/icon.svg">
			My first item
		</h2>
		<div class="toggle-content">
			PUT CONTENT HERE
		</div>
	</div>
	
	<div class="toggle-item active>
		<h2 class="toggle-header>
			<img src="assets/img/icon.svg">
			My second item
		</h2>
		<div class="toggle-content">
			PUT CONTENT HERE
		</div>
	</div>
	
	
	
<div>
```