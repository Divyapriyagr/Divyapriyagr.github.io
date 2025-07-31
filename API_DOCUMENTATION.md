# Frontend Project API Documentation

## Project Overview

This is a comprehensive frontend project consisting of three main components:
1. **Form Validation System** - A user registration form with validation
2. **Calculator** - A fully functional calculator with basic arithmetic operations
3. **Stopwatch/Timer** - A precision timer with start, stop, and reset functionality

---

## Table of Contents

1. [Form Validation Component](#form-validation-component)
2. [Calculator Component](#calculator-component)
3. [Stopwatch Component](#stopwatch-component)
4. [CSS Styling Components](#css-styling-components)
5. [Usage Examples](#usage-examples)
6. [Installation and Setup](#installation-and-setup)

---

## Form Validation Component

### Overview
A complete user registration form with client-side validation, error handling, and success notifications using SweetAlert2.

### Files
- `login_form.html` - Form structure and UI
- `login_form.js` - Validation logic and event handlers
- `login_form.css` - Styling and visual feedback

### Public Functions

#### `ValidateInputs()`
**Description**: Main validation function that checks all form inputs.

**Returns**: `boolean` - `true` if all validations pass, `false` otherwise

**Validation Rules**:
- Username: Required (non-empty)
- Email: Required and must match email regex pattern
- Password: Required, minimum 8 characters
- Confirm Password: Required, must match password

**Example**:
```javascript
// Called automatically on form submission
if (ValidateInputs()) {
    // Form is valid, proceed with submission
} else {
    // Show error alert
}
```

#### `SetError(element, message)`
**Description**: Displays error message and applies error styling to form field.

**Parameters**:
- `element` (HTMLElement) - The input element to mark as invalid
- `message` (string) - Error message to display

**Example**:
```javascript
SetError(username, "User name required");
```

#### `SetSuccess(element)`
**Description**: Removes error styling and applies success styling to form field.

**Parameters**:
- `element` (HTMLElement) - The input element to mark as valid

**Example**:
```javascript
SetSuccess(username);
```

#### `ValidateEmail(email)`
**Description**: Validates email format using regex pattern.

**Parameters**:
- `email` (string) - Email address to validate

**Returns**: `Array|null` - Match array if valid, `null` if invalid

**Regex Pattern**: `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

**Example**:
```javascript
const isValid = ValidateEmail("user@example.com"); // Returns match array
const isInvalid = ValidateEmail("invalid-email"); // Returns null
```

### Event Handlers

#### Form Submit Event
**Trigger**: Form submission
**Behavior**: 
- Prevents default submission
- Validates all inputs
- Shows success/error alert using SweetAlert2
- Resets form and reloads page on success

### Dependencies
- **SweetAlert2**: For modal alerts and notifications
- **External CDN**: `https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.all.min.js`

---

## Calculator Component

### Overview
A fully functional calculator with a clean grid-based interface supporting basic arithmetic operations.

### Files
- `Calculator.html` - Calculator structure and button layout
- `Calculator.js` - Calculator logic and operations
- `Calculator.css` - Grid-based styling and visual design

### Public Functions

#### `display(num)`
**Description**: Adds numbers and operators to the calculator screen.

**Parameters**:
- `num` (string|number) - The value to append to the display

**Behavior**:
- Clears screen if previous result was "NaN", "Invalid Input", or "Infinity"
- Appends the new value to the current display

**Example**:
```javascript
display('7');    // Displays "7"
display('+');    // Displays "7+"
display('3');    // Displays "7+3"
```

#### `Clear()`
**Description**: Clears the calculator screen completely.

**Parameters**: None

**Returns**: void

**Example**:
```javascript
Clear(); // Screen becomes empty
```

#### `Delete()`
**Description**: Removes the last character from the calculator screen.

**Parameters**: None

**Returns**: void

**Example**:
```javascript
// Screen shows "123"
Delete(); // Screen now shows "12"
```

#### `calc()`
**Description**: Evaluates the mathematical expression on the screen.

**Parameters**: None

**Returns**: void

**Error Handling**: 
- Catches evaluation errors
- Displays "Invalid Input" for malformed expressions

**Example**:
```javascript
// Screen shows "7+3"
calc(); // Screen shows "10"

// Screen shows "7/0"
calc(); // Screen shows "Infinity"

// Screen shows "7++"
calc(); // Screen shows "Invalid Input"
```

### UI Components

#### Calculator Grid Layout
- **4x4 Grid**: Organized button layout
- **Input Screen**: Full-width display spanning 4 columns
- **Buttons**: Numbers (0-9), operators (+, -, *, /, %), and functions (AC, Del, =)

#### Button Functions
```html
<!-- Numbers -->
<button onclick="display('0')">0</button>
<button onclick="display('1')">1</button>
<!-- ... (all digits 0-9) -->

<!-- Operators -->
<button onclick="display('+')">+</button>
<button onclick="display('-')">-</button>
<button onclick="display('*')">*</button>
<button onclick="display('/')">/</button>
<button onclick="display('%')">%</button>
<button onclick="display('.')">.</button>

<!-- Functions -->
<button onclick="Clear()">AC</button>    <!-- All Clear -->
<button onclick="Delete()">Del</button>  <!-- Delete last character -->
<button onclick="calc()" id="equal">=</button> <!-- Calculate result -->
```

---

## Stopwatch Component

### Overview
A precision stopwatch with start, stop, and reset functionality, displaying time in HH:MM:SS format.

### Files
- `Stopclock.html` - Stopwatch structure and controls
- Embedded JavaScript in HTML file
- `Stopclock.css` - Styling and visual design

### Public Functions

#### `stopwatch()`
**Description**: Core timing function that increments time and updates display.

**Parameters**: None

**Returns**: void

**Behavior**:
- Increments seconds counter
- Handles minute rollover (60 seconds → 1 minute)
- Handles hour rollover (60 minutes → 1 hour)
- Updates display with zero-padded format

**Example**:
```javascript
// Called automatically every 1000ms when timer is running
stopwatch(); // Updates display: "00:00:01", "00:00:02", etc.
```

#### `watchStart()`
**Description**: Starts or resumes the stopwatch timer.

**Parameters**: None

**Returns**: void

**Behavior**:
- Clears any existing timer to prevent duplicates
- Creates new interval calling `stopwatch()` every 1000ms

**Example**:
```javascript
watchStart(); // Timer begins counting
```

#### `watchStop()`
**Description**: Pauses the stopwatch timer.

**Parameters**: None

**Returns**: void

**Behavior**:
- Clears the current timer interval
- Preserves current time values for resume

**Example**:
```javascript
watchStop(); // Timer pauses, can be resumed
```

#### `watchReset()`
**Description**: Resets stopwatch to 00:00:00 and stops timing.

**Parameters**: None

**Returns**: void

**Behavior**:
- Clears timer interval
- Resets all time counters to 0
- Updates display to "00:00:00"

**Example**:
```javascript
watchReset(); // Timer stops and resets to 00:00:00
```

### Global Variables

#### Time Tracking
```javascript
let [seconds, minutes, hours] = [0, 0, 0]; // Time counters
let timer = null;                           // Interval reference
let displayTime = document.getElementById("displayTime"); // Display element
```

### UI Components

#### Display
- **Time Display**: Large format showing "HH:MM:SS"
- **Zero-Padding**: Always shows two digits for each time unit

#### Control Buttons
- **Start Button**: `start.png` image - calls `watchStart()`
- **Stop Button**: `stop.png` image - calls `watchStop()`
- **Reset Button**: `reset.png` image - calls `watchReset()`

---

## CSS Styling Components

### Form Validation Styles

#### Container Styling
```css
#form {
    width: 400px;
    margin: 9vh auto;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 30px;
}
```

#### Input States
- **Default**: Standard input styling
- **Error State**: `.error` class - red border and error message
- **Success State**: `.success` class - green styling

#### Color Scheme
- **Primary**: #792099 (purple)
- **Background**: Linear gradient (rgb(107, 187, 218) to rgb(233, 112, 205))

### Calculator Styles

#### Grid Layout
```css
.calculator {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    background-color: rgb(142, 147, 188);
    border-radius: 10px;
}
```

#### Screen Styling
```css
#input_screen {
    grid-column: span 4;  /* Full width */
    /* Additional margins and styling */
}
```

### Stopwatch Styles

#### Container Design
```css
.stopwatch {
    width: 90%;
    max-width: 600px;
    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(background.png);
    background-size: cover;
    text-align: center;
    padding: 40px 0;
    color: #fff;
    margin: 200px auto 0;
    box-shadow: 0 10px 10px rgba(0,0,0,0.2);
}
```

#### Time Display
```css
.stopwatch h1 {
    margin-top: 60px;
    font-size: 64px;
    font-weight: 300;
}
```

---

## Usage Examples

### Complete Form Validation Example

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="login_form.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.5/dist/sweetalert2.all.min.js"></script>
</head>
<body>
    <div class="container">
        <form id="form">
            <h1>Register</h1>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
                <span class="error"></span>
            </div>
            <!-- Additional form fields -->
            <button type="submit">Register</button>
        </form>
    </div>
    <script src="login_form.js"></script>
</body>
</html>
```

### Calculator Integration Example

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="Calculator.css">
</head>
<body>
    <div class="container">
        <div class="calculator">
            <input type="text" placeholder="0" id="input_screen">
            <button onclick="display('7')">7</button>
            <button onclick="display('+')">+</button>
            <button onclick="calc()">=</button>
            <button onclick="Clear()">AC</button>
        </div>
    </div>
    <script src="Calculator.js"></script>
</body>
</html>
```

### Stopwatch Implementation Example

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="Stopclock.css">
</head>
<body>
    <div class="stopwatch">
        <h1 id="displayTime">00:00:00</h1>
        <div class="buttons">
            <img src="stop.png" onclick="watchStop()">
            <img src="start.png" onclick="watchStart()">
            <img src="reset.png" onclick="watchReset()">
        </div>
    </div>
    <script>
        // Include stopwatch functions here
    </script>
</body>
</html>
```

---

## Installation and Setup

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection (for SweetAlert2 CDN)

### Quick Start

1. **Clone or Download**: Get all project files
2. **File Structure**: Ensure the following structure:
   ```
   project/
   ├── index.html              # Main navigation page
   ├── login_form.html         # Form validation component
   ├── login_form.js           # Form validation logic
   ├── login_form.css          # Form styling
   ├── Calculator.html         # Calculator component
   ├── Calculator.js           # Calculator logic
   ├── Calculator.css          # Calculator styling
   ├── Stopclock.html          # Stopwatch component
   ├── Stopclock.css           # Stopwatch styling
   ├── background.png          # Stopwatch background
   ├── start.png               # Start button icon
   ├── stop.png                # Stop button icon
   └── reset.png               # Reset button icon
   ```

3. **Open in Browser**: Open `index.html` in any modern web browser

### No Build Process Required
- Pure HTML, CSS, and JavaScript
- No compilation or bundling needed
- Works directly in browser

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **JavaScript Features**: ES6+ syntax used
- **CSS Features**: Grid, Flexbox, Gradients

---

## Error Handling

### Form Validation
- **Empty Fields**: Shows specific error messages
- **Invalid Email**: Regex validation with error feedback
- **Password Mismatch**: Compares password fields
- **Short Password**: Minimum 8 character requirement

### Calculator
- **Division by Zero**: Returns "Infinity"
- **Invalid Expressions**: Shows "Invalid Input"
- **Malformed Input**: Try-catch prevents crashes

### Stopwatch
- **Timer Conflicts**: Clears existing timer before starting new one
- **Display Updates**: Handles overflow (60 seconds → 1 minute)

---

## API Reference Summary

### Form Validation API
```javascript
// Core validation
ValidateInputs() → boolean

// UI feedback
SetError(element, message) → void
SetSuccess(element) → void

// Email validation
ValidateEmail(email) → Array|null
```

### Calculator API
```javascript
// Display management
display(num) → void
Clear() → void
Delete() → void

// Calculation
calc() → void
```

### Stopwatch API
```javascript
// Timer control
watchStart() → void
watchStop() → void
watchReset() → void

// Internal timing
stopwatch() → void
```

---

## Contributing

To extend or modify these components:

1. **Maintain API Compatibility**: Keep existing function signatures
2. **Follow Naming Conventions**: Use camelCase for functions
3. **Add Error Handling**: Use try-catch for new operations
4. **Update Documentation**: Modify this file for any API changes
5. **Test All Components**: Verify functionality across browsers

---

## License

This project is open source. Feel free to use, modify, and distribute according to your needs.