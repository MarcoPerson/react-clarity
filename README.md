# react-microsoft-clarity
Small component to implement Microsoft Clarity into your React Application

# Installation
```bash
npm install react-microsoft-clarity --save
```

# Use / Example
```javascript
import { clarity } from 'react-microsoft-clarity';

clarity.initialize(id);

// Identify the user
clarity.identify('USER_ID', { userProperty: 'value' });

// Upgrade Session
clarity.upgrade('Upgrade_Reason');

// Check if Hotjar has been initialized before calling its methods
if (clarity.initialized()) {
  clarity.identify('USER_ID', { userProperty: 'value' });
}
```
- id: Stands for 'Clarity ID' - Your site's ID. This is the ID which tells Clarity which site settings it should load and where it should save the data collected.

You can learn more from [Clarity Docs](https://learn.microsoft.com/en-us/clarity/)
