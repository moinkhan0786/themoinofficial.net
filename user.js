// document.getElementById('userProfileForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var address = document.getElementById('address').value;
//     var company = document.getElementById('company').value;
//     var phone = document.getElementById('phone').value;

//     // Save user profile data (you can implement the logic to save it to a database)

//     alert('User profile saved successfully!');
// });

// document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var subscriptionName = document.getElementById('subscriptionName').value;
//     var organizationName = document.getElementById('organizationName').value;
//     var contactNumber = document.getElementById('contactNumber').value;
//     var address = document.getElementById('address').value;
//     var productsInterested = document.getElementById('productsInterested').value;

//     // Save subscription data (you can implement the logic to save it to a database)

//     alert('Subscription successful!');

//     window.addEventListener('DOMContentLoaded', (event) => {
//         // Check if the user is logged in and retrieve the user's name
//         const isLoggedIn = true; // Replace with your logic to check if the user is logged in
//         const userName = isLoggedIn ? 'John Doe' : 'Guest';

//         // Update the header with the user's name
//         const userNameElement = document.getElementById('user-name');
//         userNameElement.textContent = userName;

//         // Check if the user has an active subscription and retrieve the expiry date
//         const hasSubscription = true; // Replace with your logic to check if the user has an active subscription
//         const expiryDate = hasSubscription ? new Date() : null; // Replace with the actual expiry date

//         // Update the subscription expiry date in the header
//         const expiryDateElement = document.getElementById('subscription-expiry-date');
//         if (hasSubscription) {
//             const options = { year: 'numeric', month: 'long', day: 'numeric' };
//             expiryDateElement.textContent = expiryDate.toLocaleDateString('en-US', options);
//         } else {
//             expiryDateElement.textContent = 'No subscription';
//         }
//     });
// });
