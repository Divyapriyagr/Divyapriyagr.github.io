# API Quick Reference

## Form Validation Component (`login_form.js`)

### Core Functions
```javascript
ValidateInputs()                    // Returns: boolean
SetError(element, message)          // Returns: void
SetSuccess(element)                 // Returns: void  
ValidateEmail(email)                // Returns: Array|null
```

### Global Variables
```javascript
let form = document.querySelector('#form')
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let cpassword = document.querySelector('#cpassword')
```

### Usage Pattern
```javascript
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (ValidateInputs()) {
        // Success - show SweetAlert
    } else {
        // Error - show SweetAlert
    }
});
```

---

## Calculator Component (`Calculator.js`)

### Core Functions
```javascript
display(num)                        // Append to screen
Clear()                             // Clear screen
Delete()                            // Remove last char
calc()                              // Evaluate expression
```

### Global Variables
```javascript
let screen = document.querySelector('#input_screen')
```

### HTML Integration
```html
<button onclick="display('7')">7</button>
<button onclick="Clear()">AC</button>
<button onclick="Delete()">Del</button>
<button onclick="calc()">=</button>
```

---

## Stopwatch Component (`Stopclock.html`)

### Core Functions
```javascript
watchStart()                        // Start/resume timer
watchStop()                         // Pause timer
watchReset()                        // Reset to 00:00:00
stopwatch()                         // Internal timer function
```

### Global Variables
```javascript
let [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.getElementById("displayTime")
let timer = null
```

### HTML Integration
```html
<img src="start.png" onclick="watchStart()">
<img src="stop.png" onclick="watchStop()">
<img src="reset.png" onclick="watchReset()">
```

---

## Error Handling Patterns

### Form Validation
```javascript
// Check empty fields
if (value === "") {
    SetError(element, "Field required")
    return false
}

// Email validation
if (ValidateEmail(email) === null) {
    SetError(element, "Invalid email")
    return false
}
```

### Calculator
```javascript
function calc() {
    try {
        screen.value = eval(screen.value)   
    } catch (error) {
        screen.value = "Invalid Input"
    }
}
```

### Stopwatch
```javascript
function watchStart() {
    if (timer !== null) {
        clearInterval(timer)  // Prevent multiple timers
    }
    timer = setInterval(stopwatch, 1000)
}
```

---

## CSS Class Patterns

### Form States
```css
.error    /* Red border, error message */
.success  /* Green border, success state */
```

### Calculator Layout
```css
.calculator           /* 4x4 grid container */
#input_screen         /* Full-width display */
```

### Stopwatch Design
```css
.stopwatch           /* Main container */
.stopwatch h1        /* Time display */
.buttons             /* Control buttons */
```

---

## Dependencies

- **SweetAlert2**: `https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.all.min.js`
- **Pure JavaScript**: No other external dependencies
- **Modern Browser**: ES6+ features used

---

## File Structure
```
project/
├── index.html              # Main entry point
├── login_form.html|js|css  # Form component
├── Calculator.html|js|css  # Calculator component  
├── Stopclock.html|css      # Stopwatch component
└── *.png                   # UI assets
```