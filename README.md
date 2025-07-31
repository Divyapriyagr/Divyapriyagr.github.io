# Frontend Project Collection

A comprehensive collection of three interactive web components built with vanilla HTML, CSS, and JavaScript.

## 🚀 Quick Start

Open `index.html` in your browser to access all components.

## 📋 Components

### 1. **Form Validation System**
- User registration form with real-time validation
- Email format verification
- Password strength requirements
- SweetAlert2 integration for notifications
- **Access**: [Form Validation](login_form.html)

### 2. **Calculator**
- Full-featured calculator with grid layout
- Basic arithmetic operations (+, -, *, /, %)
- Error handling for invalid expressions
- Clear and delete functionality
- **Access**: [Calculator](Calculator.html)

### 3. **Stopwatch/Timer**
- Precision timing with HH:MM:SS display
- Start, stop, and reset controls
- Clean visual design with background overlay
- **Access**: [Stopwatch](Stopclock.html)

## 📖 Documentation

**📚 [Complete API Documentation](API_DOCUMENTATION.md)** - Comprehensive guide covering:
- All public functions and their parameters
- Usage examples and code snippets
- CSS styling components
- Installation and setup instructions
- Error handling and browser compatibility

## 🛠️ Quick API Reference

### Form Validation
```javascript
ValidateInputs() → boolean          // Main validation function
SetError(element, message) → void   // Show error state
SetSuccess(element) → void          // Show success state
ValidateEmail(email) → Array|null   // Email validation
```

### Calculator
```javascript
display(num) → void    // Add to display
Clear() → void         // Clear screen
Delete() → void        // Remove last character
calc() → void          // Calculate result
```

### Stopwatch
```javascript
watchStart() → void    // Start timer
watchStop() → void     // Pause timer
watchReset() → void    // Reset to 00:00:00
```

## 🚀 Features

- **Zero Dependencies**: Pure vanilla JavaScript (except SweetAlert2 for notifications)
- **Responsive Design**: Works on desktop and mobile
- **Modern CSS**: Grid, Flexbox, and gradients
- **Error Handling**: Robust validation and error management
- **Browser Compatible**: Works in all modern browsers

## 📁 Project Structure

```
project/
├── index.html              # Main navigation
├── API_DOCUMENTATION.md    # Complete documentation
├── login_form.html         # Form component
├── login_form.js          # Form logic
├── login_form.css         # Form styling
├── Calculator.html        # Calculator component
├── Calculator.js          # Calculator logic
├── Calculator.css         # Calculator styling
├── Stopclock.html         # Stopwatch component
├── Stopclock.css          # Stopwatch styling
└── *.png                  # UI icons and backgrounds
```

## 🎯 Usage

1. **Clone/Download** the project files
2. **Open** `index.html` in any modern browser
3. **Navigate** to individual components via the main page
4. **Refer** to [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for detailed implementation guides

---

**Live Demo**: Available at [Divyapriyagr.github.io](https://divyapriyagr.github.io)