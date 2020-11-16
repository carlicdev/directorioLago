const express = require('express');
const app = express();

app.set('PORT', process.env.PORT || 5000);

app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});