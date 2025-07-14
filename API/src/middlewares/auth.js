import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '')    
    if (!token) {
        return res.status (401).json({msg: "Token não fornecido"})
    }
    try {
        const decoded = jwt.verify(token, process.env. JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({msg: 'Token inválido'})
    }
}

export default auth