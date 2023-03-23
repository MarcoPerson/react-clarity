# react-microsoft-clarity
Small component to implement Microsoft Clarity into your React Application

# Installation
```bash
npm install react-microsoft-clarity --save
```

# Use / Example
```javascript
import { clarity } from 'react-microsoft-clarity';

// Start seeing data on the Clarity dashboard with your id
clarity.init(id);

// Identify the user
clarity.identify('USER_ID', { userProperty: 'value' });

// Cookie consent
clarity.consent();

// Setup a custom tag
clarity.setTag('key', 'value');

// Upgrade session
clarity.upgrade('upgradeReason');

// Check if Clarity has been initialized before calling its methods
if (clarity.hasStarted()) {
  clarity.identify('USER_ID', { userProperty: 'value' });
}
```
- id: Stands for 'Clarity ID' - Your site's ID. This is the ID which tells Clarity which site settings it should load and where it should save the data collected.

You can learn more from [Clarity Docs](https://learn.microsoft.com/en-us/clarity/)
