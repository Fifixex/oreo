export const validateToken = (req, res, next) => {
  if(!req.body) return res.status(400).json({ 
    error: 'Invalid data!' 
  });
  next();
}