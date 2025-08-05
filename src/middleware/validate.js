//JWT token implementation

const jwt = require('jsonwebtoken');

async function validate(req, res, next) {
    const token = req.headers.authorization?.split(' ')[2];
    if (!token) return res.sendStatus(401);
    console.log(token)

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(403).send('Invalid token');
    }
}

module.exports = validate 