const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    // const { email, password } = req.body;

    const token = jwt.sign(
        { id: 'Jack' },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )

    res.json({ token })
})

module.exports = router;