// Sample data for demonstration
var users = [
    { name: 'John Doe', address: '123 Main St', company: 'ABC Corp', phone: '555-1234' },
    { name: 'Jane Smith', address: '456 Park Ave', company: 'XYZ Inc', phone: '555-5678' }
  ];
  
  var subscriptions = [
    { name: 'John Doe', organization: 'ABC Corp', contactNumber: '555-1234', address: '123 Main St', productsInterested: 'Account Management' },
    { name: 'Jane Smith', organization: 'XYZ Inc', contactNumber: '555-5678', address: '456 Park Ave', productsInterested: 'Website Development' }
  ];
  
  // Function to render user data in the admin page
  function renderUsers() {
    var userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    users.forEach(function (user) {
      var row = document.createElement('tr');
      var nameCell = document.createElement('td');
      var addressCell = document.createElement('td');
      var companyCell = document.createElement('td');
      var phoneCell = document.createElement('td');
      var actionCell = document.createElement('td');
      var deleteButton = document.createElement('button');
  
      nameCell.textContent = user.name;
      addressCell.textContent = user.address;
      companyCell.textContent = user.company;
      phoneCell.textContent = user.phone;
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        // Implement the logic to delete the user from the database
        alert('User deleted successfully!');
      });
  
      actionCell.appendChild(deleteButton);
  
      row.appendChild(nameCell);
      row.appendChild(addressCell);
      row.appendChild(companyCell);
      row.appendChild(phoneCell);
      row.appendChild(actionCell);
  
      userList.appendChild(row);
    });
  }
  
  // Function to render subscription data in the admin page
  function renderSubscriptions() {
    var subscriptionList = document.getElementById('subscriptionList');
    subscriptionList.innerHTML = '';
  
    subscriptions.forEach(function (subscription) {
      var row = document.createElement('tr');
      var nameCell = document.createElement('td');
      var organizationCell = document.createElement('td');
      var contactNumberCell = document.createElement('td');
      var addressCell = document.createElement('td');
      var productsInterestedCell = document.createElement('td');
      var actionCell = document.createElement('td');
      var deleteButton = document.createElement('button');
  
      nameCell.textContent = subscription.name;
      organizationCell.textContent = subscription.organization;
      contactNumberCell.textContent = subscription.contactNumber;
      addressCell.textContent = subscription.address;
      productsInterestedCell.textContent = subscription.productsInterested;
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        // Implement the logic to delete the subscription from the database
        alert('Subscription deleted successfully!');
      });
  
      actionCell.appendChild(deleteButton);
  
      row.appendChild(nameCell);
      row.appendChild(organizationCell);
      row.appendChild(contactNumberCell);
      row.appendChild(addressCell);
      row.appendChild(productsInterestedCell);
      row.appendChild(actionCell);
  
      subscriptionList.appendChild(row);
    });
  }
  
  // Render initial user and subscription data
  renderUsers();
  renderSubscriptions();
  