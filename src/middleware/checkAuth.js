import JWT from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.userData = decoded;
        
        next();
    } catch(error) {
        res.status(401).json({
            message: 'Authorization failed'
        });
    }
};