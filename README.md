# FAST-FOOD Project

## Overview
The FAST-FOOD project is a web application designed for a fast-food restaurant, showcasing the menu items and allowing users to place orders online. The application features a visually appealing design with a yellow color scheme, smooth scrolling effects, and responsive layouts for mobile devices.

## Project Structure
```
FAST-FOOD
├── assets
│   └── [images go here]
├── src
│   ├── script.js        # JavaScript for image popup, slider navigation, and form submission
│   └── mail.js          # JavaScript for sending emails using EmailJS
├── style.css            # CSS styles for the project
├── index1.html          # Main HTML file for the landing page
└── README.md            # Project documentation
```

## Features
- **Image Popup**: Users can click on menu items to view larger images in a popup modal.
- **Slider Navigation**: A slider on the homepage to showcase different menu items.
- **Order Form**: Users can fill out an order form to place their orders.
- **Email Submission**: Orders are sent via email without the need for a backend server.
- **Responsive Design**: The application is fully responsive and works well on mobile devices.

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   git clone [repository-url]
   cd FAST-FOOD
   ```

2. **Open the Project**: Open `index1.html` in your web browser to view the application.

3. **Email Configuration**: 
   - To enable email functionality, configure the `src/mail.js` file with your EmailJS or similar service credentials.

4. **Assets**: Place all image assets in the `assets` directory.

## Usage
- Navigate through the menu items and click on them to view details.
- Use the order form to submit your order. Ensure to fill in all required fields.
- Click the submit button to send your order via email.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.